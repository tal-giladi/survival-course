// Improvise Challenge model. Each challenge names the FUNCTIONS (roles) a solution must perform;
// each ordinary object has rough material properties on a 0–3 scale (capacity in litres).
// A role's fit is the weakest ratio of what the item has to what the role needs (weakest link),
// unless the challenge overrides it with a judgement (e.g. a trekking pole is rigid but far too long
// for a forearm splint). Scoring rewards meeting every function, penalises hazards and the use of
// gear the situation still needs (opportunity cost), and punishes failures that were never tested.

export type Prop = 'waterproof' | 'foodSafe' | 'rigid' | 'tensile' | 'binding' | 'padding' | 'abrasion' | 'capacity'

export const PROP_LABEL: Record<Prop, string> = {
  waterproof: 'waterproof', foodSafe: 'food-safe', rigid: 'rigid', tensile: 'strong in tension', binding: 'binds/wraps',
  padding: 'padding', abrasion: 'abrasion-resistant', capacity: 'capacity (L)',
}

export interface Item {
  id: string
  name: string
  props: Partial<Record<Prop, number>>
  /** How many roles this item can fill (cord and tape can be cut; a jacket cannot be in two places). */
  uses: number
  /** Needed for warmth or shelter: using it for something else costs you in cold, wet conditions. */
  critical?: boolean
  note: string
}

export const ITEMS: Item[] = [
  { id: 'bin-bag', name: 'Heavy-duty bin bag (new, unscented)', props: { waterproof: 3, foodSafe: 1, tensile: 1, capacity: 60 }, uses: 1, note: 'Huge but floppy; needs something to hold its shape.' },
  { id: 'pet-bottle', name: '1.5 L drinks bottle', props: { waterproof: 3, foodSafe: 3, rigid: 1, capacity: 1.5 }, uses: 1, note: 'Food-grade and tough, but small.' },
  { id: 'fuel-bottle', name: 'Empty stove-fuel bottle (1 L)', props: { waterproof: 3, foodSafe: 0, rigid: 2, capacity: 1 }, uses: 1, note: 'Has held fuel; residue cannot be cleaned out in the field.' },
  { id: 'dry-bag', name: '10 L roll-top dry bag', props: { waterproof: 3, foodSafe: 1, tensile: 2, capacity: 10 }, uses: 1, note: 'Sealed and strong; not sold as food-grade.' },
  { id: 'rucksack', name: '35 L rucksack', props: { tensile: 3, padding: 1, capacity: 35 }, uses: 1, note: 'Carries weight well; not waterproof.' },
  { id: 'poles', name: 'Trekking poles (pair)', props: { rigid: 3 }, uses: 1, note: 'Stiff, about 1.2 m; telescoping joints can slip.' },
  { id: 'deadfall', name: 'Sound dead branches (gathered)', props: { rigid: 2 }, uses: 2, note: 'Variable: must pass a bend test before loading.' },
  { id: 'cord', name: 'Paracord, 10 m', props: { tensile: 3, binding: 3, abrasion: 2 }, uses: 2, note: 'Strong; can be cut for two jobs.' },
  { id: 'tape', name: 'Duct tape (wrapped on a pole)', props: { binding: 3, waterproof: 2, tensile: 1, abrasion: 1 }, uses: 2, note: 'Grips clean, dry surfaces; scuffs through on rock.' },
  { id: 'pad', name: 'Closed-cell foam sleeping pad', props: { padding: 3, rigid: 2 }, uses: 1, critical: true, note: 'Folds into a stiff splint; also your ground insulation.' },
  { id: 'jacket', name: 'Rain jacket', props: { waterproof: 3, tensile: 2, padding: 1 }, uses: 1, critical: true, note: 'Waterproof and strong; also your wind and rain protection.' },
  { id: 'tarp', name: '2 × 3 m tarp', props: { waterproof: 3, tensile: 3 }, uses: 1, note: 'Large, strong, waterproof.' },
  { id: 'bandana', name: 'Bandana / triangular cloth', props: { binding: 2, tensile: 1, padding: 1 }, uses: 1, note: 'Soft and adjustable.' },
  { id: 'sewing', name: 'Needle, strong thread, safety pins', props: { binding: 2, abrasion: 1 }, uses: 2, note: 'Slow but permanent on fabric.' },
  { id: 'ties', name: 'Cable ties (10)', props: { binding: 2, tensile: 2, abrasion: 2 }, uses: 2, note: 'Fast and strong; cannot be loosened, only cut.' },
  { id: 'wire', name: 'Soft wire, 2 m', props: { binding: 2, tensile: 3, abrasion: 3 }, uses: 2, note: 'Very tough; thin and hard-edged.' },
  { id: 'magazine', name: 'Magazine / cardboard', props: { rigid: 2 }, uses: 1, note: 'Stiff when rolled or folded; softens when wet.' },
  { id: 'socks', name: 'Spare wool socks', props: { padding: 2, abrasion: 1 }, uses: 1, critical: true, note: 'Padding — and your dry socks for tonight.' },
  { id: 'belt', name: 'Belt', props: { tensile: 3, binding: 2 }, uses: 1, note: 'Strong strap with a buckle.' },
]

export const itemById = (id: string) => ITEMS.find((i) => i.id === id)

export interface Role {
  id: string
  label: string
  need: Partial<Record<Prop, number>>
}

export interface Override {
  fit: number
  note: string
  hazard?: string
}

export interface Challenge {
  id: string
  title: string
  brief: string
  /** Cold and wet: critical items (insulation, rain protection, dry socks) are needed for their own job. */
  cold: boolean
  roles: Role[]
  /** Keyed `${roleId}:${itemId}`. */
  overrides?: Record<string, Override>
  debrief: string
}

export const CHALLENGES: Challenge[] = [
  {
    id: 'water-carry',
    title: 'Carry 8 L of water',
    brief: 'Camp is 1 km from the only spring. You want 8 L back in one trip. Mild, dry weather.',
    cold: false,
    roles: [
      { id: 'vessel', label: 'Waterproof vessel (≥ 8 L)', need: { waterproof: 3, foodSafe: 1, capacity: 8 } },
      { id: 'carrier', label: 'Support and carry the load', need: { tensile: 2, capacity: 10 } },
      { id: 'closure', label: 'Close the neck', need: { binding: 2 } },
    ],
    overrides: {
      'vessel:fuel-bottle': { fit: 0, note: 'Fuel residue taints water and cannot be removed in the field.', hazard: 'Drinking water carried in a fuel bottle' },
      'vessel:bin-bag': { fit: 1, note: 'New, unscented bag inside the pack: the pack holds the shape, the bag holds the water. Treat the water.' },
      'vessel:tarp': { fit: 0.2, note: 'A tarp catches rain but cannot be carried full of water.' },
      'carrier:bin-bag': { fit: 0.3, note: 'A bag cannot carry 8 kg by itself — it stretches and tears.' },
      'carrier:dry-bag': { fit: 0.8, note: 'It can hold a lined bag, but 8 kg in one hand is awkward over 1 km.' },
    },
    debrief: 'Function first: a waterproof liner (bag) plus a load carrier (pack) beats a single “container”. Separate the jobs, then match each one to the object that does it best. Never use containers that held fuel or chemicals for water.',
  },
  {
    id: 'splint',
    title: 'Splint a forearm',
    brief: 'A partner has a painful, deformed forearm after a fall (first aid already started). You will walk 5 km out. Dry, mild weather.',
    cold: false,
    roles: [
      { id: 'support', label: 'Rigid support (forearm length)', need: { rigid: 2 } },
      { id: 'padding', label: 'Padding to fill gaps', need: { padding: 2 } },
      { id: 'secure', label: 'Secure the splint (adjustable)', need: { binding: 2 } },
      { id: 'sling', label: 'Sling to support the arm', need: { binding: 2, tensile: 1 } },
    ],
    overrides: {
      'support:poles': { fit: 0.4, note: 'Stiff but far too long: it snags and levers on the arm.' },
      'support:deadfall': { fit: 0.8, note: 'Works if sound, trimmed and well padded.' },
      'secure:wire': { fit: 0.1, note: 'Wire cuts in and cannot give as the arm swells.', hazard: 'Wire around a swelling limb' },
      'secure:ties': { fit: 0.2, note: 'Cable ties cannot be loosened as the arm swells — only cut.', hazard: 'Cable ties around a swelling limb' },
      'secure:tape': { fit: 1, note: 'Good: wrap over padding, not skin, and recheck circulation below.' },
      'sling:jacket': { fit: 1, note: 'Pin or tie the jacket hem up over the arm — a classic improvised sling.' },
      'padding:pad': { fit: 0.9, note: 'A folded pad pads well — but it is better used as the rigid support itself.' },
      'support:pad': { fit: 1, note: 'A folded foam pad makes an excellent, light splint.' },
    },
    debrief: 'Splint principles come from Stage 9: joint above and below, padding, check circulation, sensation and movement before and after. Anything that cannot loosen (wire, cable ties) is dangerous around a limb that will swell.',
  },
  {
    id: 'boot-repair',
    title: 'Boot sole peeling off',
    brief: 'The sole of one boot has come away at the toe. 14 km of rocky trail remain. Dry weather.',
    cold: false,
    roles: [
      { id: 'bind', label: 'Bind the sole to the upper', need: { tensile: 2, abrasion: 2 } },
      { id: 'seal', label: 'Cover and smooth the repair', need: { binding: 2, waterproof: 2 } },
      { id: 'foot', label: 'Protect the foot from rubbing', need: { padding: 2 } },
    ],
    overrides: {
      'bind:tape': { fit: 0.4, note: 'Tape alone scuffs through on rock within a few kilometres.' },
      'bind:cord': { fit: 0.9, note: 'Wraps round the toe and under the arch: works, but check it every hour.' },
      'bind:ties': { fit: 1, note: 'Through the lace eyelets and round the sole: tight and tough.' },
      'foot:pad': { fit: 0.3, note: 'Far too thick to fit inside a boot.' },
    },
    debrief: 'Split the repair by function: something tough to hold the load (cord, ties, wire), something smooth to cover it, and padding for the foot. Put the tough, abrasion-resistant material where the rock is.',
  },
  {
    id: 'litter',
    title: 'Move a casualty 300 m',
    brief: 'After first aid, a hiker who cannot walk must be moved 300 m off a rockfall-prone slope to flat ground. Six people; dry, calm weather.',
    cold: false,
    roles: [
      { id: 'rails', label: 'Two long rails (≥ 2 m)', need: { rigid: 2 } },
      { id: 'bed', label: 'Load-bearing bed between rails', need: { tensile: 3 } },
      { id: 'pad', label: 'Padding / insulation under the casualty', need: { padding: 2 } },
      { id: 'strap', label: 'Strap the casualty in', need: { binding: 2, tensile: 2 } },
    ],
    overrides: {
      'rails:poles': { fit: 0.3, note: 'Too short and too flexible for a litter.' },
      'rails:deadfall': { fit: 1, note: 'Two long, straight, sound poles — load-tested between two logs first.' },
      'rails:magazine': { fit: 0, note: 'Not a rail.' },
      'bed:jacket': { fit: 0.6, note: 'Several jackets zipped over the rails, sleeves inside, can work; one is not enough.' },
      'strap:wire': { fit: 0.2, note: 'Wire cuts into a person.', hazard: 'Wire as a casualty strap' },
      'strap:ties': { fit: 0.3, note: 'Cannot be released quickly if the casualty vomits.', hazard: 'Casualty strapped with non-releasable ties' },
    },
    debrief: 'Stage 9 explains the carry: six carriers plus relief, test the litter with a sandbag first, and move only as far as safety needs. Two long rails and a strong bed (tarp folded in thirds round the rails) are the core.',
  },
  {
    id: 'tent-repair',
    title: 'Torn tent fly in sleet',
    brief: 'A branch has torn a 15 cm rip in the tent fly. Sleet, 1 °C, one more night before you walk out.',
    cold: true,
    roles: [
      { id: 'cover', label: 'Keep water off the tear', need: { waterproof: 3 } },
      { id: 'fix', label: 'Close the tear', need: { binding: 2 } },
      { id: 'relief', label: 'Take wind strain off the panel', need: { tensile: 2 } },
    ],
    overrides: {
      'cover:tarp': { fit: 1, note: 'Best: pitch the tarp over the torn side as a second roof.' },
      'cover:bin-bag': { fit: 0.8, note: 'A split bag taped over the outside sheds sleet.' },
      'fix:tape': { fit: 1, note: 'Dry the fabric, round the corners, tape both sides.' },
      'fix:sewing': { fit: 0.8, note: 'Stitching holds, but let the holes be taped or covered.' },
      'fix:ties': { fit: 0.4, note: 'Cable ties through fabric tear it further.' },
      'fix:wire': { fit: 0.3, note: 'Wire through thin fabric saws it apart in wind.' },
      'relief:cord': { fit: 1, note: 'Guy out the panel so wind no longer works the tear.' },
    },
    debrief: 'In cold, wet conditions, gear that keeps you warm and dry is not spare. Using your rain jacket or sleeping pad to fix the tent solves one problem by creating a worse one. Stop the tear spreading, cover it, and take the strain off.',
  },
  {
    id: 'handwash',
    title: 'Hand-washing station',
    brief: 'A four-person camp for three days with no tap. Set up hand-washing on the path back from the toilet area.',
    cold: false,
    roles: [
      { id: 'tap', label: 'Controlled pour (a “tap”)', need: { waterproof: 3, capacity: 1.5 } },
      { id: 'hang', label: 'Hang it at hand height', need: { tensile: 1 } },
      { id: 'reserve', label: 'Water reserve for refills', need: { waterproof: 3, foodSafe: 1, capacity: 8 } },
    ],
    overrides: {
      'tap:pet-bottle': { fit: 1, note: 'A small hole in the cap (or near the base) gives a thin stream: a tippy tap.' },
      'tap:fuel-bottle': { fit: 0, note: 'Fuel residue on hands and near food.', hazard: 'Fuel bottle used for washing water' },
      'tap:dry-bag': { fit: 0.4, note: 'Hard to pour a small, controlled stream.' },
      'tap:bin-bag': { fit: 0.2, note: 'No way to control the flow.' },
      'reserve:bin-bag': { fit: 0.8, note: 'Works inside a support (pack or hole), and keep it closed.' },
      'reserve:rucksack': { fit: 0, note: 'Not waterproof.' },
    },
    debrief: 'A tippy tap uses little water and needs no hands on the container. Put it where people pass after the toilet and before the kitchen, with soap, and hand-washing becomes a habit rather than a decision.',
  },
]

export type Assignment = Record<string, string | undefined>

export interface RoleResult {
  role: Role
  item?: Item
  fit: number
  note: string
  /** Weakest property (for automatic notes). */
  limiting?: Prop
  overused: boolean
}

export interface Evaluation {
  rows: RoleResult[]
  hazards: string[]
  criticalUsed: string[]
  base: number
  untestedPenalty: number
  hazardPenalty: number
  criticalPenalty: number
  score: number
  complete: boolean
}

export const HAZARD_PENALTY = 25
export const CRITICAL_PENALTY = 15
export const UNTESTED_FACTOR = 30

/** Weakest-link fit of an item for a role, 0–1, with the limiting property. */
export function roleFit(ch: Challenge, role: Role, item: Item): { fit: number; note: string; hazard?: string; limiting?: Prop } {
  const o = ch.overrides?.[`${role.id}:${item.id}`]
  if (o) return { fit: o.fit, note: o.note, hazard: o.hazard }
  let fit = 1
  let limiting: Prop | undefined
  for (const [p, req] of Object.entries(role.need) as [Prop, number][]) {
    const r = Math.min(1, (item.props[p] ?? 0) / req)
    if (r < fit) { fit = r; limiting = p }
  }
  const note = fit >= 1 ? item.note : `Too weak on: ${PROP_LABEL[limiting!]}${limiting === 'capacity' ? ` (${item.props.capacity ?? 0} L of ${role.need.capacity} L)` : ''}.`
  return { fit, note, limiting }
}

/** Evaluate an assignment of items to roles. `tested` = the learner load-tested this exact configuration. */
export function evaluate(ch: Challenge, a: Assignment, tested: boolean): Evaluation {
  const used: Record<string, number> = {}
  const hazards: string[] = []
  const criticalUsed = new Set<string>()
  const rows: RoleResult[] = ch.roles.map((role) => {
    const item = a[role.id] ? itemById(a[role.id]!) : undefined
    if (!item) return { role, fit: 0, note: 'Nothing assigned.', overused: false }
    used[item.id] = (used[item.id] ?? 0) + 1
    if (used[item.id] > item.uses) return { role, item, fit: 0, note: `${item.name} is already used up for another job.`, overused: true }
    const f = roleFit(ch, role, item)
    if (f.hazard) hazards.push(f.hazard)
    if (ch.cold && item.critical) criticalUsed.add(item.name)
    return { role, item, fit: f.fit, note: f.note, limiting: f.limiting, overused: false }
  })
  const base = (rows.reduce((s, r) => s + r.fit, 0) / rows.length) * 100
  const untestedPenalty = tested ? 0 : rows.reduce((s, r) => s + (1 - r.fit) * UNTESTED_FACTOR, 0)
  const hazardPenalty = hazards.length * HAZARD_PENALTY
  const criticalPenalty = criticalUsed.size * CRITICAL_PENALTY
  const score = Math.max(0, Math.min(100, Math.round(base - untestedPenalty - hazardPenalty - criticalPenalty)))
  return { rows, hazards, criticalUsed: [...criticalUsed], base: Math.round(base), untestedPenalty: Math.round(untestedPenalty), hazardPenalty, criticalPenalty, score, complete: rows.every((r) => r.item) }
}

/** Best achievable assignment by exhaustive search (small problems): used for tests and hints. */
export function bestAssignment(ch: Challenge): { a: Assignment; score: number } {
  let best: { a: Assignment; score: number } = { a: {}, score: -1 }
  const recurse = (i: number, a: Assignment) => {
    if (i === ch.roles.length) {
      const s = evaluate(ch, a, true).score
      if (s > best.score) best = { a: { ...a }, score: s }
      return
    }
    for (const it of ITEMS) recurse(i + 1, { ...a, [ch.roles[i].id]: it.id })
  }
  recurse(0, {})
  return best
}
