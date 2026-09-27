// Home Kit model: needs for a chosen household, items with cost/volume/functions, and a score for
// weighted coverage minus safety penalties, reduced when the kit breaks the budget or storage space.
// Planning figures are deliberately round and conservative; they follow the usual agency figures
// (about 4 L of water per person per day, more in heat; ~2,000 kcal per adult per day).

export type Climate = 'temperate' | 'hot' | 'cold'

export interface Household {
  adults: number
  children: number
  infants: number
  elderly: number
  pets: number
  medications: boolean
  climate: Climate
  days: number
}

export type Need =
  | 'water' | 'waterTreat' | 'food' | 'canOpener' | 'infant' | 'pet' | 'meds' | 'elderAids'
  | 'light' | 'radio' | 'power' | 'firstAid' | 'sanitation' | 'hygiene' | 'warmth' | 'cooling'
  | 'docs' | 'tools' | 'coAlarm' | 'fireExt' | 'protect' | 'signal' | 'goBag'

export const NEED_LABEL: Record<Need, string> = {
  water: 'Drinking & hygiene water (L)', waterTreat: 'Way to disinfect water', food: 'Food (kcal)', canOpener: 'Manual can opener',
  infant: 'Infant supplies (infant-days)', pet: 'Pet food & water (pet-days)', meds: 'Medication reserve & list', elderAids: 'Spare glasses, hearing & mobility aids',
  light: 'Flameless lights', radio: 'Battery / wind-up radio', power: 'Stored power (Wh)', firstAid: 'First-aid kit', sanitation: 'Bucket-toilet kits',
  hygiene: 'Hygiene packs', warmth: 'Sleeping bags / blankets', cooling: 'Cooling (battery fans, spray)', docs: 'Documents, cash, contact list',
  tools: 'Shut-off wrench, tape, sheeting', coAlarm: 'Battery CO alarm', fireExt: 'Fire extinguisher', protect: 'Shoes, gloves, masks by beds',
  signal: 'Whistle', goBag: 'Go-bag',
}

export interface NeedRow { need: Need; amount: number; importance: 1 | 2 | 3 | 4 }

/** Planning water per person per day (litres): ~4 L (≈ 1 US gallon), 1.5× in hot climates. */
export const waterPerPersonDay = (c: Climate) => (c === 'hot' ? 6 : 4)
/** Planning energy per person per day (kcal). */
export const KCAL = { adult: 2000, child: 1600, elderly: 1800 }

export const persons = (h: Household) => h.adults + h.children + h.infants + h.elderly

export function needs(h: Household): NeedRow[] {
  const p = persons(h)
  const rows: NeedRow[] = []
  const add = (need: Need, amount: number, importance: NeedRow['importance']) => { if (amount > 0) rows.push({ need, amount, importance }) }
  add('water', h.days * (p * waterPerPersonDay(h.climate) + h.pets * 1), 4)
  add('waterTreat', 1, 2)
  const kcal = h.days * (h.adults * KCAL.adult + h.children * KCAL.child + h.elderly * KCAL.elderly) * (h.climate === 'cold' ? 1.15 : 1)
  add('food', Math.round(kcal), 4)
  add('canOpener', 1, 2)
  add('infant', h.days * h.infants, 4)
  add('pet', h.days * h.pets, 3)
  add('meds', h.medications ? 1 : 0, 4)
  add('elderAids', h.elderly > 0 ? 1 : 0, 3)
  add('light', Math.max(2, Math.ceil(p / 2)), 3)
  add('radio', 1, 3)
  add('power', (h.adults + h.elderly) * 10 * h.days, 2)
  add('firstAid', 1, 3)
  add('sanitation', Math.ceil(p / 6), 3)
  add('hygiene', Math.ceil(p / 4), 2)
  add('warmth', h.climate === 'cold' ? p : h.climate === 'temperate' ? Math.ceil(p / 2) : 0, h.climate === 'cold' ? 4 : 1)
  add('cooling', h.climate === 'hot' ? Math.ceil(p / 2) : 0, h.elderly > 0 || h.infants > 0 ? 4 : 3)
  add('docs', 1, 2)
  add('tools', 1, 1)
  add('coAlarm', 1, 3)
  add('fireExt', 1, 2)
  add('protect', h.adults + h.children + h.elderly, 1)
  add('signal', 1, 1)
  add('goBag', 1, 2)
  return rows
}

export interface KitItem {
  id: string
  name: string
  cost: number
  /** Storage volume in litres. */
  vol: number
  provides: Partial<Record<Need, number>>
  /** Provision that scales with the number of days (e.g. solar charging). */
  perDay?: Partial<Record<Need, number>>
  flag?: 'flame' | 'generator'
  note?: string
}

export const ITEMS: KitItem[] = [
  { id: 'water20', name: '20 L water container, filled', cost: 12, vol: 22, provides: { water: 20 }, note: 'Refill every 6 months' },
  { id: 'bottled', name: '6 × 1.5 L bottled water', cost: 5, vol: 10, provides: { water: 9 }, note: 'Keep until the best-before date' },
  { id: 'bleach', name: 'Unscented bleach + dropper', cost: 3, vol: 1, provides: { waterTreat: 1 } },
  { id: 'filter', name: 'Gravity water filter', cost: 40, vol: 4, provides: { waterTreat: 1 } },
  { id: 'foodbox', name: 'Shelf-stable food box, 6,000 kcal', cost: 15, vol: 6, provides: { food: 6000 }, note: 'Food you already eat — rotate' },
  { id: 'opener', name: 'Manual can opener', cost: 3, vol: 0.3, provides: { canOpener: 1 } },
  { id: 'stove', name: 'Camping stove + fuel (outdoors only)', cost: 35, vol: 6, provides: { waterTreat: 1 }, note: 'Never use indoors: CO' },
  { id: 'infant', name: 'Infant supplies, 3 days (ready-to-feed formula, nappies, wipes)', cost: 20, vol: 6, provides: { infant: 3 } },
  { id: 'petfood', name: 'Pet food + bowl, 7 pet-days', cost: 10, vol: 5, provides: { pet: 7 } },
  { id: 'meds', name: '7-day medication reserve + written list', cost: 15, vol: 0.5, provides: { meds: 1 }, note: 'Ask your pharmacist how' },
  { id: 'aids', name: 'Spare glasses, hearing-aid batteries, mobility spares', cost: 20, vol: 1, provides: { elderAids: 1 } },
  { id: 'torch', name: 'LED torch + spare batteries', cost: 8, vol: 0.5, provides: { light: 1 } },
  { id: 'headlamp', name: 'Headlamp + spare batteries', cost: 12, vol: 0.3, provides: { light: 1 } },
  { id: 'lantern', name: 'LED lantern (battery)', cost: 15, vol: 1.5, provides: { light: 1.5 } },
  { id: 'candles', name: 'Candles + matches', cost: 3, vol: 0.5, provides: { light: 1 }, flag: 'flame', note: 'Fire risk; deadly near a gas leak' },
  { id: 'radio', name: 'Wind-up / battery radio', cost: 25, vol: 1, provides: { radio: 1, light: 0.3 } },
  { id: 'powerbank', name: 'Power bank 20,000 mAh (≈ 74 Wh, ≈ 55 Wh usable)', cost: 25, vol: 0.3, provides: { power: 55 } },
  { id: 'solar', name: 'Folding solar panel 20 W', cost: 45, vol: 2, provides: {}, perDay: { power: 30 }, note: '≈ 30 Wh per day with weather and losses' },
  { id: 'generator', name: 'Portable petrol generator + fuel', cost: 350, vol: 60, provides: { power: 2000 }, flag: 'generator', note: 'Outdoors only, ≥ 6 m from openings' },
  { id: 'firstaid', name: 'First-aid kit + manual', cost: 20, vol: 3, provides: { firstAid: 1 } },
  { id: 'bucket', name: 'Bucket toilet kit (bucket, lid, heavy bags, absorbent)', cost: 15, vol: 20, provides: { sanitation: 1 } },
  { id: 'hygiene', name: 'Hygiene pack for 4 (soap, sanitiser, wipes, sanitary items)', cost: 12, vol: 3, provides: { hygiene: 1 } },
  { id: 'blanket', name: 'Sleeping bag / warm blanket (1 person)', cost: 25, vol: 10, provides: { warmth: 1 } },
  { id: 'fan', name: 'Battery fan + spray bottle (2 people)', cost: 15, vol: 2, provides: { cooling: 1 } },
  { id: 'docs', name: 'Document copies, cash, paper contact list', cost: 5, vol: 0.3, provides: { docs: 1 } },
  { id: 'tools', name: 'Shut-off wrench, duct tape, plastic sheeting', cost: 15, vol: 3, provides: { tools: 1 } },
  { id: 'coalarm', name: 'Battery CO alarm', cost: 20, vol: 0.3, provides: { coAlarm: 1 } },
  { id: 'extinguisher', name: 'Fire extinguisher', cost: 30, vol: 4, provides: { fireExt: 1 } },
  { id: 'shoes', name: 'Shoes, gloves & dust mask by a bed (1 person)', cost: 10, vol: 2, provides: { protect: 1 } },
  { id: 'whistle', name: 'Whistle', cost: 1, vol: 0.05, provides: { signal: 1 } },
  { id: 'gobag', name: 'Go-bag backpack (grab-and-go subset)', cost: 20, vol: 15, provides: { goBag: 1 } },
]

export interface Constraints { budget: number; space: number; dwelling: 'flat' | 'house' }

export const BUDGETS = { tight: 250, moderate: 500, generous: 1000 } as const
export const SPACES = { flat: 250, house: 500 } as const

export type Counts = Record<string, number>

export function provided(h: Household, counts: Counts): Partial<Record<Need, number>> {
  const have: Partial<Record<Need, number>> = {}
  for (const it of ITEMS) {
    const n = counts[it.id] ?? 0
    if (!n) continue
    for (const [k, v] of Object.entries(it.provides) as [Need, number][]) have[k] = (have[k] ?? 0) + v * n
    for (const [k, v] of Object.entries(it.perDay ?? {}) as [Need, number][]) have[k] = (have[k] ?? 0) + v * n * h.days
  }
  return have
}

export interface KitResult {
  cost: number
  vol: number
  rows: (NeedRow & { have: number; cov: number })[]
  coverage: number
  safetyPenalty: number
  overFactor: number
  score: number
  gaps: string[]
  tips: string[]
}

export function evaluateKit(h: Household, counts: Counts, c: Constraints): KitResult {
  const cost = ITEMS.reduce((a, it) => a + it.cost * (counts[it.id] ?? 0), 0)
  const vol = Math.round(ITEMS.reduce((a, it) => a + it.vol * (counts[it.id] ?? 0), 0) * 10) / 10
  const have = provided(h, counts)
  let num = 0
  let den = 0
  const rows = needs(h).map((r) => {
    const hv = have[r.need] ?? 0
    const cov = Math.min(1, hv / r.amount)
    num += cov * r.importance
    den += r.importance
    return { ...r, have: hv, cov }
  })
  const coverage = den ? num / den : 0
  const tips: string[] = []
  let safetyPenalty = 0
  const n = (id: string) => counts[id] ?? 0
  if (n('candles')) {
    safetyPenalty += 8
    tips.push('Candles are a leading cause of fires after disasters and are deadly near a gas leak. Use battery lights instead.')
  }
  if (n('generator') && !n('coalarm')) {
    safetyPenalty += 15
    tips.push('A generator without a CO alarm: generator exhaust kills quietly. Add a battery CO alarm, and run it only outdoors, at least 6 m (20 ft) from doors, windows and vents.')
  }
  if (n('generator') && c.dwelling === 'flat') {
    safetyPenalty += 10
    tips.push('A flat has no place 6 m from every opening — balconies and stairwells are not safe spots for a generator. Power banks and solar are the flat-dweller’s tools.')
  }
  if (n('stove')) tips.push('A camping stove is for outdoors (garden, open balcony away from windows) — never indoors.')
  const over = Math.max(0, cost - c.budget) / c.budget + Math.max(0, vol - c.space) / c.space
  const overFactor = 1 - Math.min(1, over * 1.5)
  if (cost > c.budget) tips.push(`Over budget by ${cost - c.budget}. Water in refilled containers and ordinary food you rotate are cheap; generators are not.`)
  if (vol > c.space) tips.push(`Over storage space by ${Math.round(vol - c.space)} L. Store water in several smaller containers in different places.`)
  const gaps = rows.filter((r) => r.cov < 1).sort((a, b) => b.importance - a.importance || a.cov - b.cov).map((r) => `${NEED_LABEL[r.need]}: ${fmt(r.have)} of ${fmt(r.amount)}`)
  const score = Math.max(0, Math.round(Math.max(0, coverage * 100 - safetyPenalty) * overFactor))
  return { cost, vol, rows, coverage, safetyPenalty, overFactor, score, gaps, tips }
}

const fmt = (x: number) => (x >= 1000 ? `${Math.round(x / 100) / 10}k` : `${Math.round(x * 10) / 10}`)

/** Smallest count of an item needed to cover one need on its own (helper for tests and hints). */
export function countFor(h: Household, itemId: string, need: Need): number {
  const it = ITEMS.find((i) => i.id === itemId)!
  const per = (it.provides[need] ?? 0) + (it.perDay?.[need] ?? 0) * h.days
  const row = needs(h).find((r) => r.need === need)
  if (!row || per <= 0) return 0
  return Math.ceil(row.amount / per - 1e-9)
}

export const PRESETS: { id: string; name: string; h: Household; c: Constraints }[] = [
  { id: 'single', name: 'Single adult, small flat, temperate', h: { adults: 1, children: 0, infants: 0, elderly: 0, pets: 0, medications: false, climate: 'temperate', days: 3 }, c: { budget: BUDGETS.tight, space: SPACES.flat, dwelling: 'flat' } },
  { id: 'family', name: 'Family of four + dog, house, cold winters', h: { adults: 2, children: 2, infants: 0, elderly: 0, pets: 1, medications: false, climate: 'cold', days: 3 }, c: { budget: BUDGETS.moderate, space: SPACES.house, dwelling: 'house' } },
  { id: 'baby', name: 'Couple with a baby, flat, temperate', h: { adults: 2, children: 0, infants: 1, elderly: 0, pets: 0, medications: false, climate: 'temperate', days: 3 }, c: { budget: BUDGETS.moderate, space: SPACES.flat, dwelling: 'flat' } },
  { id: 'elders', name: 'Older couple on daily medication, hot climate', h: { adults: 0, children: 0, infants: 0, elderly: 2, pets: 1, medications: true, climate: 'hot', days: 7 }, c: { budget: BUDGETS.moderate, space: SPACES.house, dwelling: 'house' } },
]
