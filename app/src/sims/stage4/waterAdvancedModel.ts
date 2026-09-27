// Advanced water planner — pure model (no React) so it can be unit-tested.
//
// What it models, deliberately simply but in the right direction:
//  - Microbial load per hazard class in "log units" above a reference level. A residual of r log units
//    gives an illustrative daily infection probability p = 1 − exp(−0.01 · 10^r) (exponential dose–response):
//    r = 0 → ~1 %/day, r = 1 → ~10 %/day, r = 2 → ~63 %/day, r = −2 → ~0.01 %/day.
//  - Log reductions ADD along a treatment chain (multi-barrier), capped at 6 per step.
//  - Chemical disinfection uses the CT concept: CT = (dose − demand) × time, in mg·min/L. The CT needed per
//    log roughly doubles for every 10 °C drop (a common rule of thumb for chlorine chemistry). Turbidity adds
//    chlorine demand and shields microbes inside particles (a cap on achievable log reduction).
//    Per-log CT values at 20 °C are rounded from US EPA surface-water CT tables (free chlorine: viruses ~3 and
//    Giardia ~50 mg·min/L for 4-log and 3-log at 20 °C, pH ≈ 7) and from published Cryptosporidium data
//    (chlorine: thousands of mg·min/L per log).
//  - UV: delivered dose (mJ/cm²) falls as turbidity rises; log reduction = dose / dose-per-log.
//  - Boiling: any rolling boil inactivates all microbial classes (water boils at ≥ 83 °C even at 4,900 m),
//    but costs heat energy and fuel: E = 4.186 kJ/(kg·K) × ΔT (+ 334 kJ/kg to melt snow).
//  - Chemicals and cyanotoxins are an index (0 = none, 1 = unsafe to drink for days, 3 = gross). Only
//    activated carbon and bank filtration reduce them a little; boiling slightly concentrates them.
//  - Multi-day plan: need = baseline + sweat rate × active hours (+ sweat from water chores). Water you
//    cannot process (source yield, fuel, tablets, battery, bottles) becomes a deficit that accumulates as
//    % of body mass (1 L ≈ 1 kg; 70 kg person).

export type Microbe = 'bacteria' | 'viruses' | 'giardia' | 'crypto'
export const MICROBES: { k: Microbe; label: string }[] = [
  { k: 'bacteria', label: 'Bacteria' },
  { k: 'viruses', label: 'Viruses' },
  { k: 'giardia', label: 'Giardia (protozoa)' },
  { k: 'crypto', label: 'Cryptosporidium' },
]

export type Loads = Record<Microbe, number>

export interface Source {
  id: string
  name: string
  note: string
  load: Loads
  ntu: number // turbidity in nephelometric turbidity units
  tempC: number
  chem: number // chemical index 0–3
  cyano: number // cyanotoxin index 0–3
  yieldLpd: number // litres per day available
  tripMinPer10L: number // round-trip collecting time per 10 L
  collect: CollectId[]
  melt?: boolean // snow/ice that must be melted
  rain?: boolean
}

export type CollectId = 'careful' | 'scoop' | 'seep' | 'tarp' | 'tap' | 'melt'
export const COLLECT: Record<CollectId, { name: string; ntuMult: number; red: Partial<Loads>; setupMin: number; minPer10L: number; yieldMult: number; cyanoMult: number; note: string }> = {
  careful: { name: 'Collect from the main flow, below the surface, without stirring sediment', ntuMult: 1, red: {}, setupMin: 0, minPer10L: 0, yieldMult: 1, cyanoMult: 1, note: 'Avoids the edge, scum and bottom sediment.' },
  scoop: { name: 'Scoop from the edge', ntuMult: 1.8, red: {}, setupMin: 0, minPer10L: 0, yieldMult: 1, cyanoMult: 1.3, note: 'Edges collect sediment, scum and animal waste.' },
  seep: { name: 'Dig a seep hole 1–2 m from the bank and let it fill', ntuMult: 0.15, red: { bacteria: 1, viruses: 0.5, giardia: 1.5, crypto: 1.5 }, setupMin: 45, minPer10L: 10, yieldMult: 0.5, cyanoMult: 0.5, note: 'Bank filtration clears the water and removes some microbes — it is not treatment.' },
  tarp: { name: 'Tarp catchment, first flush discarded', ntuMult: 1, red: {}, setupMin: 15, minPer10L: 2, yieldMult: 1, cyanoMult: 1, note: 'Yield = catchment area × rainfall.' },
  tap: { name: 'Draw from the tap / tank valve into a clean container', ntuMult: 1, red: {}, setupMin: 0, minPer10L: 2, yieldMult: 1, cyanoMult: 1, note: '' },
  melt: { name: 'Gather clean snow / ice to melt', ntuMult: 1, red: {}, setupMin: 0, minPer10L: 15, yieldMult: 1, cyanoMult: 1, note: 'Ice gives far more water per pot-load than fluffy snow.' },
}

export type ClarifyId = 'none' | 'cloth' | 'settle' | 'settle-cloth' | 'alum' | 'sand'
export const CLARIFY: Record<ClarifyId, { name: string; ntuMult: number; red: Partial<Loads>; minPer10L: number; waitMin: number; chemMult: number; cyanoMult: number; needs?: KitId }> = {
  none: { name: 'None', ntuMult: 1, red: {}, minPer10L: 0, waitMin: 0, chemMult: 1, cyanoMult: 1 },
  cloth: { name: 'Pour through folded cloth', ntuMult: 0.7, red: { giardia: 0.1 }, minPer10L: 3, waitMin: 0, chemMult: 1, cyanoMult: 0.9 },
  settle: { name: 'Settle 1 h, pour off the top', ntuMult: 0.4, red: { bacteria: 0.2, giardia: 0.3, crypto: 0.3 }, minPer10L: 3, waitMin: 60, chemMult: 1, cyanoMult: 0.9 },
  'settle-cloth': { name: 'Settle 1 h, then cloth', ntuMult: 0.28, red: { bacteria: 0.2, giardia: 0.4, crypto: 0.3 }, minPer10L: 5, waitMin: 60, chemMult: 1, cyanoMult: 0.85 },
  alum: { name: 'Alum coagulation–flocculation, settle, cloth', ntuMult: 0.08, red: { bacteria: 1, viruses: 1, giardia: 1.5, crypto: 1.5 }, minPer10L: 10, waitMin: 30, chemMult: 0.9, cyanoMult: 0.7, needs: 'alum' },
  sand: { name: 'Improvised sand/charcoal bottle filter', ntuMult: 0.35, red: { bacteria: 0.5, viruses: 0.2, giardia: 0.5, crypto: 0.5 }, minPer10L: 25, waitMin: 0, chemMult: 0.95, cyanoMult: 0.9 },
}

export type FilterId = 'none' | 'micro' | 'ceramic' | 'ultra'
export const FILTERS: Record<FilterId, { name: string; red: Loads; lpm: number; clogNtu: number; needs?: KitId }> = {
  none: { name: 'None', red: { bacteria: 0, viruses: 0, giardia: 0, crypto: 0 }, lpm: 0, clogNtu: Infinity },
  micro: { name: 'Hollow-fibre microfilter (0.1 µm)', red: { bacteria: 6, viruses: 0.5, giardia: 6, crypto: 6 }, lpm: 1, clogNtu: 30, needs: 'micro' },
  ceramic: { name: 'Ceramic microfilter (0.2 µm)', red: { bacteria: 5, viruses: 0.5, giardia: 6, crypto: 6 }, lpm: 0.5, clogNtu: 80, needs: 'ceramic' },
  ultra: { name: 'Ultrafilter "purifier" (0.02 µm)', red: { bacteria: 6, viruses: 4, giardia: 6, crypto: 6 }, lpm: 0.6, clogNtu: 20, needs: 'ultra' },
}

export type DisinfectId = 'none' | 'boil' | 'chlorine' | 'clo2' | 'uv' | 'sodis'
export const DISINFECT: Record<DisinfectId, { name: string; needs?: KitId }> = {
  none: { name: 'None' },
  boil: { name: 'Boil', needs: 'stove' },
  chlorine: { name: 'Chlorine (bleach / NaDCC)', needs: 'chlorine' },
  clo2: { name: 'Chlorine dioxide tablets', needs: 'clo2' },
  uv: { name: 'UV pen', needs: 'uv' },
  sodis: { name: 'SODIS (clear PET bottles in sun)', needs: 'bottles' },
}

export type StorageId = 'narrow' | 'bucket' | 'shared'
export const STORAGE: Record<StorageId, { name: string; floor: Loads }> = {
  narrow: { name: 'Narrow-neck capped container; pour, never dip', floor: { bacteria: -9, viruses: -9, giardia: -9, crypto: -9 } },
  bucket: { name: 'Open bucket; dip a cup', floor: { bacteria: 0.3, viruses: 0, giardia: -1, crypto: -1 } },
  shared: { name: 'Same bottle for raw and treated water', floor: { bacteria: 0.5, viruses: 0.5, giardia: 0, crypto: 0 } },
}

export type KitId = 'micro' | 'ceramic' | 'ultra' | 'stove' | 'chlorine' | 'clo2' | 'uv' | 'bottles' | 'alum' | 'carbon'

export interface WaterScenario {
  id: string
  title: string
  brief: string
  people: number
  days: number
  airC: number
  altitudeM: number
  baselineL: number // per person per day
  sweat: { cool: number; heat: number } // L/h while active, by schedule
  activeH: number
  sunny: boolean
  fuel: { kind: 'gas' | 'wood'; grams: number } | null // grams of gas; wood is unlimited but costs gathering time
  tablets: number // chlorine dioxide tablets (1 per litre)
  uvLitres: number
  bottles: number // 1.5 L PET bottles for SODIS
  kit: KitId[]
  sources: Source[]
}

export interface Plan {
  source: string
  collect: CollectId
  clarify: ClarifyId
  filter: FilterId
  carbon: boolean
  disinfect: DisinfectId
  dose: number // mg/L for chlorine / chlorine dioxide
  contactMin: number
  boilMin: number
  uvCycles: number
  sodisDays: 1 | 2
  storage: StorageId
  schedule: 'cool' | 'heat'
  targetLpp: number // litres per person per day you intend to process
}

// ---------- physics / chemistry helpers ----------

/** Approximate boiling point of water (°C) at altitude: falls ~1 °C per 300 m (≈83 °C at 4,900 m). */
export const boilingPointC = (altitudeM: number) => 100 - altitudeM / 300

/** CT multiplier for temperature: roughly ×2 for every 10 °C colder than 20 °C. */
export const tempFactor = (tempC: number) => Math.pow(2, (20 - tempC) / 10)

/** Per-log CT (mg·min/L) at 20 °C, pH ≈ 7. Rounded, illustrative values. */
export const CT_PER_LOG: Record<'chlorine' | 'clo2', Loads> = {
  chlorine: { bacteria: 0.1, viruses: 0.75, giardia: 17, crypto: 3500 },
  clo2: { bacteria: 0.1, viruses: 3, giardia: 5, crypto: 250 },
}

/** UV dose (mJ/cm²) needed per log of inactivation. Protozoa are UV-sensitive; many viruses need more. */
export const UV_PER_LOG: Loads = { bacteria: 3, viruses: 10, giardia: 5.5, crypto: 5.5 }
export const UV_NOMINAL = 40 // mJ/cm² per cycle in clear water

/** Particles shield microbes: cap on the log reduction any single disinfection step can reach. */
export const shieldCap = (ntu: number) => (ntu <= 1 ? 6 : Math.max(1, 6 - 2 * Math.log10(ntu)))

/** Chlorine demand (mg/L) consumed by organic matter and particles before any residual remains. */
export const chlorineDemand = (ntu: number) => 0.3 + 0.05 * ntu

export function chemicalLogs(kind: 'chlorine' | 'clo2', dose: number, minutes: number, tempC: number, ntu: number): Loads {
  const ceff = Math.max(0, dose - (kind === 'chlorine' ? chlorineDemand(ntu) : chlorineDemand(ntu) * 0.5))
  const ct = ceff * minutes
  const tf = tempFactor(tempC)
  const cap = shieldCap(ntu)
  const out = {} as Loads
  for (const { k } of MICROBES) out[k] = Math.min(cap, ct / (CT_PER_LOG[kind][k] * tf))
  return out
}

export function uvLogs(cycles: number, ntu: number): Loads {
  const dose = UV_NOMINAL * cycles / (1 + ntu / 3)
  const cap = shieldCap(ntu)
  const out = {} as Loads
  for (const { k } of MICROBES) out[k] = Math.min(cap, dose / UV_PER_LOG[k])
  return out
}

export function sodisLogs(sunny: boolean, days: 1 | 2, ntu: number): Loads {
  const base: Loads = { bacteria: 3, viruses: 2.5, giardia: 2, crypto: 1 }
  const sun = sunny ? 1 : days === 2 ? 1 : 0.35
  const clarity = ntu > 30 ? 0.3 : ntu > 10 ? 0.7 : 1
  const out = {} as Loads
  for (const { k } of MICROBES) out[k] = base[k] * sun * clarity
  return out
}

/** Heat (kJ) to bring 1 L to the boil and hold it, from water (or snow at air temperature) at tempC. */
export function boilKJPerL(startC: number, altitudeM: number, minutes: number, melt = false) {
  const tb = boilingPointC(altitudeM)
  const meltKJ = melt ? 2.09 * Math.max(0, -startC) + 334 : 0
  const from = melt ? 0 : startC
  return meltKJ + 4.186 * (tb - from) + minutes * 60 * 0.8 // ~0.8 kW keeps a covered pot boiling
}

/** Heat (kJ) to melt 1 L of snow/ice and warm it to 5 °C (no boiling). */
export const meltKJPerL = (airC: number) => 2.09 * Math.max(0, -airC) + 334 + 4.186 * 5

/** Fuel per litre: gas stove ~50 % efficient at 46 MJ/kg → grams; open wood fire ~10 % at 16 MJ/kg → kg. */
export const gasGrams = (kj: number) => kj / (46000 * 0.5) * 1000
export const woodKg = (kj: number) => kj / (16000 * 0.1)

export const dailyInfectionP = (residual: number) => 1 - Math.exp(-0.01 * Math.pow(10, residual))

// ---------- the model ----------

export function evaluate(sc: WaterScenario, p: Plan) {
  const src = sc.sources.find((s) => s.id === p.source) ?? sc.sources[0]
  const collect = src.collect.includes(p.collect) ? p.collect : src.collect[0]
  const col = COLLECT[collect]
  const cl = CLARIFY[p.clarify]
  const fi = FILTERS[p.filter]
  const warnings: string[] = []

  // Turbidity through the chain.
  const ntuRaw = src.ntu * col.ntuMult
  const ntuClar = ntuRaw * cl.ntuMult
  const ntuAfterFilter = p.filter !== 'none' ? Math.min(ntuClar, 0.5) : ntuClar
  const clogged = p.filter !== 'none' && ntuClar > fi.clogNtu

  // Log reductions, step by step.
  const steps: { name: string; red: Loads }[] = []
  const pick = (r: Partial<Loads>): Loads => ({ bacteria: r.bacteria ?? 0, viruses: r.viruses ?? 0, giardia: r.giardia ?? 0, crypto: r.crypto ?? 0 })
  if (Object.keys(col.red).length) steps.push({ name: 'Collection', red: pick(col.red) })
  if (p.clarify !== 'none') steps.push({ name: 'Clarification', red: pick(cl.red) })
  if (p.filter !== 'none') steps.push({ name: 'Filter', red: fi.red })
  const waterTemp = src.melt ? 5 : src.tempC
  let boilKJ = 0
  let meltOnlyKJ = src.melt ? meltKJPerL(sc.airC) : 0
  let residualChlorine = false
  switch (p.disinfect) {
    case 'boil': {
      const logs = p.boilMin >= 1 ? 6 : 5
      steps.push({ name: 'Boil', red: { bacteria: logs, viruses: logs, giardia: logs, crypto: logs } })
      boilKJ = boilKJPerL(src.melt ? sc.airC : waterTemp, sc.altitudeM, p.boilMin, src.melt)
      meltOnlyKJ = 0
      const rule = sc.altitudeM > 2000 ? 3 : 1
      if (p.boilMin < rule) warnings.push(`CDC guidance is a rolling boil for ${rule} min at ${sc.altitudeM} m. Kill is still very high, but follow the guideline margin.`)
      if (p.boilMin > 3) warnings.push('Boiling longer than a few minutes adds fuel cost, not safety.')
      break
    }
    case 'chlorine':
    case 'clo2': {
      steps.push({ name: p.disinfect === 'chlorine' ? 'Chlorine' : 'Chlorine dioxide', red: chemicalLogs(p.disinfect, p.dose, p.contactMin, waterTemp, ntuAfterFilter) })
      if (p.disinfect === 'chlorine') residualChlorine = p.dose - chlorineDemand(ntuAfterFilter) > 0.2
      if (p.disinfect === 'chlorine' && p.dose >= 8) warnings.push('8 mg/L tastes strongly of chlorine; people drink less. Clarify instead of overdosing.')
      if (ntuAfterFilter > 5) warnings.push(`Water is still cloudy (~${Math.round(ntuAfterFilter)} NTU): it consumes chlorine and shields microbes. Clarify first.`)
      break
    }
    case 'uv':
      steps.push({ name: 'UV', red: uvLogs(p.uvCycles, ntuAfterFilter) })
      if (ntuAfterFilter > 1) warnings.push('UV needs clear water; particles cast shadows that protect microbes.')
      if (sc.airC < 0) warnings.push('Cold batteries deliver far fewer UV cycles — keep the pen warm.')
      break
    case 'sodis':
      steps.push({ name: 'SODIS', red: sodisLogs(sc.sunny, p.sodisDays, ntuAfterFilter) })
      if (ntuAfterFilter > 30) warnings.push('SODIS needs water below ~30 NTU — clarify first.')
      if (!sc.sunny && p.sodisDays === 1) warnings.push('Under cloud, SODIS needs 2 consecutive days of exposure.')
      break
  }

  // Residual microbial load, then storage recontamination floor.
  const floor = STORAGE[p.storage].floor
  const residual = {} as Loads
  for (const { k } of MICROBES) {
    let r = src.load[k]
    for (const s of steps) r -= Math.min(6, s.red[k])
    let f = Math.min(floor[k], src.load[k])
    if (residualChlorine && (k === 'bacteria' || k === 'viruses')) f = Math.min(f, -2)
    residual[k] = Math.max(r, f)
  }
  if (p.storage !== 'narrow' && !residualChlorine) warnings.push('Storage habits put microbes back into treated water.')

  // Chemicals and cyanotoxins.
  const carbon = p.carbon && sc.kit.includes('carbon')
  const concentrate = p.disinfect === 'boil' ? 1.05 : 1
  const chem = src.chem * cl.chemMult * (carbon ? 0.5 : 1) * concentrate
  const cyanoFilter = p.filter !== 'none' ? 0.7 : 1
  const cyano = src.cyano * col.cyanoMult * cl.cyanoMult * cyanoFilter * (carbon ? 0.5 : 1) * concentrate
  if (src.cyano > 0 && p.disinfect === 'boil') warnings.push('Boiling does not destroy cyanotoxins and can burst cells, releasing more toxin.')
  if (src.chem >= 1 && !carbon) warnings.push('No disinfection method removes chemical contamination. Find another source.')

  // Risks.
  const pDay = {} as Loads
  for (const { k } of MICROBES) pDay[k] = dailyInfectionP(residual[k])
  const pDayAll = 1 - MICROBES.reduce((a, { k }) => a * (1 - pDay[k]), 1)
  const pTrip = 1 - Math.pow(1 - pDayAll, sc.days)

  // ---------- multi-day water budget ----------
  const people = sc.people
  const targetTotal = p.targetLpp * people
  const yieldCap = src.yieldLpd * COLLECT[collect].yieldMult
  // Resource capacity (litres per day, averaged over the trip).
  let resourceCap = Infinity
  let resourceNote = ''
  let fuelPerL = 0
  const kjPerL = boilKJ + meltOnlyKJ
  if (kjPerL > 0) {
    if (!sc.fuel) {
      resourceCap = 0
      resourceNote = 'No stove or fuel for heating water.'
    } else if (sc.fuel.kind === 'gas') {
      fuelPerL = gasGrams(kjPerL)
      resourceCap = sc.fuel.grams / fuelPerL / sc.days
      resourceNote = `Gas: ~${fuelPerL.toFixed(0)} g per litre`
    } else {
      fuelPerL = woodKg(kjPerL)
      resourceNote = `Wood: ~${fuelPerL.toFixed(2)} kg per litre on an open fire`
    }
  }
  if (p.disinfect === 'clo2') {
    resourceCap = Math.min(resourceCap, sc.tablets / sc.days)
    resourceNote += `${resourceNote ? '; ' : ''}${sc.tablets} tablets (1 per litre)`
  }
  if (p.disinfect === 'uv') {
    const coldPenalty = sc.airC < 0 ? 0.5 : 1
    resourceCap = Math.min(resourceCap, (sc.uvLitres * coldPenalty) / p.uvCycles / sc.days)
    resourceNote += `${resourceNote ? '; ' : ''}battery ≈ ${Math.round(sc.uvLitres * coldPenalty)} L`
  }
  if (p.disinfect === 'sodis') {
    resourceCap = Math.min(resourceCap, (sc.bottles * 1.5) / (sc.sunny ? 1 : p.sodisDays))
    resourceNote += `${resourceNote ? '; ' : ''}${sc.bottles} bottles × 1.5 L`
  }
  const filterCap = clogged ? 8 : Infinity
  const processed = Math.max(0, Math.min(targetTotal, yieldCap, resourceCap, filterCap))
  const limitedBy = processed >= targetTotal - 1e-9 ? null : processed === yieldCap ? 'source yield' : processed === filterCap ? 'clogged filter' : 'treatment supplies'

  // Labour (minutes per day) for the processed volume.
  const tens = processed / 10
  let labourMin = col.setupMin / sc.days + tens * (src.tripMinPer10L + col.minPer10L + cl.minPer10L)
  if (p.filter !== 'none') labourMin += (processed / fi.lpm) * (1 + ntuClar / 15)
  if (kjPerL > 0) labourMin += processed * (kjPerL / 1.0 / 60) * 0.5 // attend the pot about half the heating time (1 kW stove)
  if (sc.fuel?.kind === 'wood' && kjPerL > 0) labourMin += processed * fuelPerL * 15 // gather ~15 min per kg of dry wood
  if (p.disinfect === 'uv') labourMin += processed * 1.5 * p.uvCycles
  if (p.disinfect === 'chlorine' || p.disinfect === 'clo2') labourMin += processed * 0.5
  if (p.disinfect === 'sodis') labourMin += processed * 0.5
  if (clogged) labourMin += 30
  const waitMin = cl.waitMin + (p.disinfect === 'chlorine' || p.disinfect === 'clo2' ? p.contactMin : 0) + (p.disinfect === 'sodis' ? 360 * p.sodisDays : 0)

  // Need per person, including sweat from water chores (shared across people).
  const sweatRate = sc.sweat[p.schedule]
  const choreSweat = (labourMin / 60 / Math.max(1, people)) * sweatRate
  const needPP = sc.baselineL + sweatRate * sc.activeH + choreSweat
  const availPP = processed / people
  const deficitPP = Math.max(0, needPP - availPP)
  const days: { day: number; need: number; drank: number; deficitPct: number }[] = []
  let cum = 0
  for (let d = 1; d <= sc.days; d++) {
    cum += deficitPP
    days.push({ day: d, need: needPP, drank: availPP, deficitPct: (cum / 70) * 100 })
  }
  const maxDehydPct = days.length ? days[days.length - 1].deficitPct : 0
  const fuelUsed = sc.fuel?.kind === 'gas' ? processed * fuelPerL * sc.days : 0

  // ---------- score ----------
  let safety = 55 * (1 - pTrip)
  const chemBad = Math.max(chem, cyano)
  if (chemBad >= 1) safety *= 0.3
  else if (chemBad >= 0.3) safety *= 0.7
  const sufficiency = 30 * (1 - Math.min(1, maxDehydPct / 5))
  let efficiency = 15 - Math.max(0, labourMin - 180) / 20
  if (p.disinfect === 'boil' && p.boilMin < (sc.altitudeM > 2000 ? 3 : 1)) efficiency -= 3
  if (p.disinfect === 'boil' && p.boilMin > 3) efficiency -= 3
  if (clogged) efficiency -= 5
  efficiency = Math.max(0, efficiency)
  const score = Math.max(0, Math.min(100, Math.round(safety + sufficiency + efficiency)))

  return {
    src, collect, ntuRaw, ntuClar, ntuAfterFilter, clogged, steps, residual, pDay, pDayAll, pTrip, chem, cyano,
    residualChlorine, processed, yieldCap, resourceCap, resourceNote, limitedBy, labourMin, waitMin, needPP, availPP,
    days, maxDehydPct, fuelPerL, fuelUsed, score, parts: { safety, sufficiency, efficiency }, warnings,
  }
}

export type Result = ReturnType<typeof evaluate>

// ---------- scenarios ----------

export const SCENARIOS: WaterScenario[] = [
  {
    id: 'canyon',
    title: 'Desert canyon, 3 days',
    brief: 'Two hikers are stuck in a desert canyon for 3 days (a flash flood took out the exit). 38 °C by day, strong sun. You have a hollow-fibre filter, a small bottle of bleach, a gas stove with 230 g of fuel, and one 10 L water bag.',
    people: 2, days: 3, airC: 38, altitudeM: 600, baselineL: 2.5, sweat: { cool: 0.6, heat: 1.2 }, activeH: 4, sunny: true,
    fuel: { kind: 'gas', grams: 230 }, tablets: 0, uvLitres: 0, bottles: 0,
    kit: ['micro', 'stove', 'chlorine'],
    sources: [
      { id: 'tinaja', name: 'Rock pothole (tinaja), stagnant, animal tracks around it', note: 'Shared with wildlife and livestock; warm and still.', load: { bacteria: 3, viruses: 1.5, giardia: 2.5, crypto: 3 }, ntu: 25, tempC: 26, chem: 0, cyano: 0.4, yieldLpd: 40, tripMinPer10L: 20, collect: ['careful', 'scoop'] },
      { id: 'seep', name: 'Seep dripping from the base of a cliff', note: 'Groundwater at a rock contact. Clean-ish but slow.', load: { bacteria: 1, viruses: 0.5, giardia: 0.5, crypto: 0.5 }, ntu: 1, tempC: 18, chem: 0, cyano: 0, yieldLpd: 9, tripMinPer10L: 60, collect: ['careful'] },
      { id: 'wash', name: 'Damp sand at the outside bend of the dry wash', note: 'Subsurface flow. Must be dug for.', load: { bacteria: 2.5, viruses: 1, giardia: 2, crypto: 2 }, ntu: 60, tempC: 22, chem: 0, cyano: 0, yieldLpd: 20, tripMinPer10L: 10, collect: ['seep'] },
    ],
  },
  {
    id: 'flood',
    title: 'After the flood, 5 days at home',
    brief: 'A family of four sheltering at home after river flooding. Utility has issued a boil-water notice. 22 °C. You have household bleach, a camping stove with 1,000 g of gas, a jug with an activated-carbon cartridge, cloths and plenty of containers. The water heater tank holds ~150 L.',
    people: 4, days: 5, airC: 22, altitudeM: 50, baselineL: 2.5, sweat: { cool: 0.3, heat: 0.5 }, activeH: 3, sunny: false,
    fuel: { kind: 'gas', grams: 1000 }, tablets: 0, uvLitres: 0, bottles: 0,
    kit: ['stove', 'chlorine', 'carbon'],
    sources: [
      { id: 'tap', name: 'Kitchen tap (boil-water notice)', note: 'Pressure dropped; mains may be contaminated by sewage.', load: { bacteria: 2.5, viruses: 2.5, giardia: 1.5, crypto: 1.5 }, ntu: 4, tempC: 16, chem: 0.1, cyano: 0, yieldLpd: 500, tripMinPer10L: 1, collect: ['tap'] },
      { id: 'heater', name: 'Water heater tank (drain valve)', note: 'Filled before the flood — usually safe; sediment at the bottom. Finite: ~150 L total.', load: { bacteria: 0.2, viruses: 0.1, giardia: 0, crypto: 0 }, ntu: 3, tempC: 20, chem: 0, cyano: 0, yieldLpd: 30, tripMinPer10L: 3, collect: ['tap'] },
      { id: 'floodwater', name: 'Floodwater in the street', note: 'Sewage, fuel, farm and industrial chemicals.', load: { bacteria: 5, viruses: 5, giardia: 4, crypto: 4 }, ntu: 150, tempC: 18, chem: 2.5, cyano: 0, yieldLpd: 1000, tripMinPer10L: 5, collect: ['careful', 'scoop'] },
      { id: 'pool', name: 'Neighbour’s swimming pool', note: 'Chlorinated, but Cryptosporidium tolerates pool chlorine; pool chemicals.', load: { bacteria: 0.5, viruses: 0.5, giardia: 1, crypto: 2 }, ntu: 2, tempC: 22, chem: 1, cyano: 0, yieldLpd: 1000, tripMinPer10L: 8, collect: ['careful'] },
    ],
  },
  {
    id: 'subarctic',
    title: 'Subarctic lake, late winter, 4 days',
    brief: 'Solo, weather-bound for 4 days at −15 °C. You have a gas stove with 450 g of fuel, a hollow-fibre filter, 20 chlorine dioxide tablets and a UV pen (≈40 L per battery set in the warm). A lake is 5 minutes away under 60 cm of ice.',
    people: 1, days: 4, airC: -15, altitudeM: 300, baselineL: 3, sweat: { cool: 0.3, heat: 0.5 }, activeH: 4, sunny: false,
    fuel: { kind: 'gas', grams: 450 }, tablets: 20, uvLitres: 40, bottles: 0,
    kit: ['micro', 'stove', 'clo2', 'uv'],
    sources: [
      { id: 'snow', name: 'Fresh snow (melt in the pot)', note: 'Low in microbes but costs ~334 kJ per litre just to melt.', load: { bacteria: 0, viruses: -0.5, giardia: -0.5, crypto: -0.5 }, ntu: 1, tempC: -15, chem: 0, cyano: 0, yieldLpd: 100, tripMinPer10L: 20, collect: ['melt'], melt: true },
      { id: 'icehole', name: 'Lake water through a hole in the ice', note: 'Liquid at ~1 °C; beaver and moose in the catchment.', load: { bacteria: 2, viruses: 1, giardia: 2.5, crypto: 2 }, ntu: 1, tempC: 1, chem: 0, cyano: 0, yieldLpd: 200, tripMinPer10L: 15, collect: ['careful'] },
    ],
  },
  {
    id: 'tropical',
    title: 'Tropical river below a village, 3 days',
    brief: 'Three people waiting 3 days for a boat. 31 °C, humid, afternoon thunderstorms most days. You have alum, bleach, a ceramic filter, a pot for a wood fire and six 1.5 L clear PET bottles. Mornings are sunny.',
    people: 3, days: 3, airC: 31, altitudeM: 100, baselineL: 2.5, sweat: { cool: 0.5, heat: 0.9 }, activeH: 4, sunny: true,
    fuel: { kind: 'wood', grams: 0 }, tablets: 0, uvLitres: 0, bottles: 6,
    kit: ['ceramic', 'stove', 'chlorine', 'alum', 'bottles'],
    sources: [
      { id: 'river', name: 'Brown river 1 km below a village', note: 'Human sewage (viruses!), silt, warm water.', load: { bacteria: 4, viruses: 4, giardia: 3, crypto: 3 }, ntu: 90, tempC: 28, chem: 0.2, cyano: 0, yieldLpd: 1000, tripMinPer10L: 10, collect: ['careful', 'scoop', 'seep'] },
      { id: 'rain', name: 'Rain from a 3 × 4 m tarp (afternoon storms)', note: 'About 15 mm on a typical storm day × 12 m² × 0.8 ≈ 140 L — but not every day; average ~25 L/day.', load: { bacteria: 0.5, viruses: 0.3, giardia: 0, crypto: 0 }, ntu: 1, tempC: 26, chem: 0, cyano: 0, yieldLpd: 25, tripMinPer10L: 2, collect: ['tarp'], rain: true },
    ],
  },
]

export const DEFAULT_PLAN: Plan = {
  source: '', collect: 'careful', clarify: 'none', filter: 'none', carbon: false, disinfect: 'none', dose: 4, contactMin: 30,
  boilMin: 1, uvCycles: 1, sodisDays: 1, storage: 'narrow', schedule: 'heat', targetLpp: 3,
}
