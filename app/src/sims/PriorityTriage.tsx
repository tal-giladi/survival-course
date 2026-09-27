import { useState } from 'react'
import type { SimProps } from './types'

// Priority Triage: rounds of short situations; pick the next highest-value action.
// Each action carries a value score (0-3) and a reason, revealed after choosing.

interface Round {
  env: string
  situation: string
  actions: { text: string; value: 0 | 1 | 2 | 3; why: string }[]
}

const ROUNDS: Round[] = [
  {
    env: '🌲 Forest, autumn',
    situation: '16:40, sunset 17:30. Light rain starting, 6 °C. You are lost but uninjured, dry for now. Someone knows your route.',
    actions: [
      { text: 'Put on your waterproof shell and fleece now', value: 3, why: 'Seconds of effort, hours of protection — the cheapest big win.' },
      { text: 'Walk fast toward where you think the car is', value: 0, why: 'Irreversible, sweaty, and ends in darkness.' },
      { text: 'Look for berries to eat', value: 0, why: 'Food is not a limiting factor tonight.' },
      { text: 'Start gathering ground insulation', value: 2, why: 'Valuable, but staying dry comes first and takes one minute.' },
    ],
  },
  {
    env: '🏜️ Desert, summer',
    situation: '12:30, 41 °C. Your car broke down on a remote track. 4 L of water. No phone signal. Someone expects you tonight.',
    actions: [
      { text: 'Get into shade beside the car, off the hot ground, and rest', value: 3, why: 'Heat gain and sweat loss are the threats; shade and rest cut both.' },
      { text: 'Walk to the main road 25 km away', value: 0, why: 'Walking in 41 °C heat can cost 1+ L/h; you would run out of water.' },
      { text: 'Drink only a sip an hour to save water', value: 0, why: 'Ration sweat, not water.' },
      { text: 'Lay out the spare tyre for a smoke signal later', value: 2, why: 'Useful preparation — after you are out of the sun.' },
    ],
  },
  {
    env: '🏔️ Mountain',
    situation: '13:10. You are on an exposed ridge. Thunder is audible to the west; the sky is darkening. The descent path is 5 minutes away.',
    actions: [
      { text: 'Start down the known descent path now', value: 3, why: 'Leaving the high, exposed ground before the storm arrives removes the immediate lightning danger.' },
      { text: 'Shelter under the lone tree on the summit', value: 0, why: 'Tall isolated objects attract lightning.' },
      { text: 'Take photos of the approaching storm', value: 0, why: 'Wastes the time that matters most.' },
      { text: 'Put on your rain jacket first', value: 1, why: 'Sensible, but do it while moving off the ridge.' },
    ],
  },
  {
    env: '❄️ Subarctic',
    situation: '15:00, −18 °C, calm, dark at 15:45. Your ski binding broke 8 km from the hut. You are sweaty from skiing hard.',
    actions: [
      { text: 'Add your insulated jacket immediately', value: 3, why: 'Your heat production just dropped; damp base layers will chill you fast.' },
      { text: 'Walk to the hut in ski boots through deep snow', value: 0, why: 'Exhausting and sweaty; 8 km in the dark.' },
      { text: 'Eat snow because you are thirsty', value: 0, why: 'Costs body heat; melt it instead.' },
      { text: 'Message the hut via satellite messenger', value: 2, why: 'High value — right after the insulation goes on.' },
    ],
  },
  {
    env: '🌊 Coast',
    situation: 'You are walking a beach below cliffs. The tide is rising faster than expected; the path back is 400 m away and water is reaching the rocks ahead.',
    actions: [
      { text: 'Head back to the exit path immediately', value: 3, why: 'Immediate danger — act before the route closes.' },
      { text: 'Climb the cliff to escape', value: 0, why: 'Unsupported climbing on loose sea cliffs is extremely dangerous.' },
      { text: 'Wait on the rocks for the tide to turn', value: 0, why: 'Waves and cold water can reach you there.' },
      { text: 'Call the emergency number while walking back', value: 2, why: 'Good if you are unsure you can make it — but keep moving.' },
    ],
  },
  {
    env: '🏙️ Urban, winter outage',
    situation: 'Day 2 of a power cut, −5 °C outside. The apartment is at 11 °C. Your neighbour suggests running a camping stove indoors for heat.',
    actions: [
      { text: 'Refuse — gather the household in one small room with layers, blankets and hats', value: 3, why: 'Indoor combustion risks carbon monoxide poisoning; insulation and a smaller space are safe.' },
      { text: 'Run the stove with the windows closed to keep heat in', value: 0, why: 'A classic, lethal CO scenario.' },
      { text: 'Open all windows to air the flat', value: 0, why: 'Loses what heat you have.' },
      { text: 'Check the battery radio for shelter information', value: 2, why: 'Useful next step.' },
    ],
  },
  {
    env: '🌴 Tropical forest',
    situation: 'Separated from your group. Constant drizzle, 24 °C. Your feet have been wet for 2 days. You have a filter and plenty of stream water.',
    actions: [
      { text: 'Dry and air your feet, change to dry socks for sleeping', value: 3, why: 'Immersion foot and infection can end your mobility; this is cheap to prevent.' },
      { text: 'Drink untreated stream water to save filter life', value: 0, why: 'Waterborne illness in the tropics is a major threat.' },
      { text: 'Sleep directly on the ground under a leaf roof', value: 1, why: 'Better off the ground — insects, runoff and damp.' },
      { text: 'Follow the stream downhill in daylight', value: 2, why: 'Often reasonable in tropics — streams lead to rivers and settlements — but assess first.' },
    ],
  },
  {
    env: '🥾 Trail injury',
    situation: 'Your partner has a deep cut on the calf that is bleeding steadily. You are 6 km from the trailhead, 14:00, fine weather.',
    actions: [
      { text: 'Apply firm direct pressure to the wound', value: 3, why: 'Controlling bleeding is the most time-critical action.' },
      { text: 'Run for help immediately', value: 0, why: 'Leaves active bleeding uncontrolled.' },
      { text: 'Clean the wound with stream water first', value: 1, why: 'Irrigation matters later — after bleeding is controlled.' },
      { text: 'Call emergency services', value: 2, why: 'Important — do it right after, or while, applying pressure.' },
    ],
  },
]

function shuffle<T>(a: T[]): T[] {
  const x = [...a]
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[x[i], x[j]] = [x[j], x[i]]
  }
  return x
}

export function PriorityTriage({ onScore }: SimProps) {
  const deal = () => shuffle(ROUNDS).slice(0, 6).map((r) => ({ ...r, actions: shuffle(r.actions) }))
  const [rounds, setRounds] = useState(deal)
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [points, setPoints] = useState(0)
  const [done, setDone] = useState(false)
  const r = rounds[i]

  const pick = (k: number) => {
    if (picked !== null) return
    setPicked(k)
    setPoints((p) => p + r.actions[k].value)
  }
  const next = () => {
    if (i + 1 < rounds.length) {
      setI(i + 1)
      setPicked(null)
    } else {
      const score = Math.round((points / (rounds.length * 3)) * 100)
      onScore(score)
      setDone(true)
    }
  }
  const restart = () => {
    setRounds(deal())
    setI(0)
    setPicked(null)
    setPoints(0)
    setDone(false)
  }

  if (done) {
    const score = Math.round((points / (rounds.length * 3)) * 100)
    return (
      <div className="sim-result">
        <div className="score">{score}%</div>
        <p>{score >= 85 ? 'Excellent prioritization.' : score >= 60 ? 'Solid — review the rounds where you picked a good-but-not-best action.' : 'Revisit lessons 2 and 6: cheap actions that remove big risks come first.'}</p>
        <button className="btn primary" onClick={restart}>New rounds</button>
      </div>
    )
  }

  return (
    <div>
      <div className="muted small">Round {i + 1} of {rounds.length} · score so far {points}/{i * 3 + (picked !== null ? 3 : 0)}</div>
      <h4>{r.env}</h4>
      <p>{r.situation}</p>
      <p><strong>What is your next highest-value action?</strong></p>
      <div className="options">
        {r.actions.map((a, k) => (
          <button key={k} className={'option' + (picked === k ? ' chosen' : '') + (picked !== null ? (a.value === 3 ? ' right' : picked === k ? ' wrong' : '') : '')} disabled={picked !== null} onClick={() => pick(k)}>
            {a.text}
            {picked !== null && <div className="why">Value {a.value}/3 — {a.why}</div>}
          </button>
        ))}
      </div>
      {picked !== null && <button className="btn primary" onClick={next}>{i + 1 < rounds.length ? 'Next situation' : 'See score'}</button>}
    </div>
  )
}
