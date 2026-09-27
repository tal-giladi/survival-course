// Pure model for the Cloud ID simulation: the ten WMO cloud genera, sky sequences over time,
// and scoring of the learner's identification + short-range forecast.

export type Genus = 'Ci' | 'Cc' | 'Cs' | 'Ac' | 'As' | 'Ns' | 'Sc' | 'St' | 'Cu' | 'Cb'
export type Level = 'high' | 'middle' | 'low' | 'vertical'

export interface GenusInfo {
  id: Genus
  name: string
  level: Level
  looks: string
  predicts: string
}

export const GENERA: GenusInfo[] = [
  { id: 'Ci', name: 'Cirrus', level: 'high', looks: 'Thin white wisps or hooks of ice crystals, very high.', predicts: 'Alone and not spreading: fair. Spreading and thickening from one direction: a front may arrive in 12–24 h.' },
  { id: 'Cc', name: 'Cirrocumulus', level: 'high', looks: 'Tiny grains or ripples in rows ("mackerel sky"), no shading.', predicts: 'Often transient; upper-level moisture and instability. By itself a weak signal — watch the trend.' },
  { id: 'Cs', name: 'Cirrostratus', level: 'high', looks: 'Thin milky veil; the sun or moon shows a halo.', predicts: 'After cirrus and thickening: warm-front rain likely in roughly 6–24 h.' },
  { id: 'Ac', name: 'Altocumulus', level: 'middle', looks: 'Grey-white rounded patches in sheets or rows, with shading; each cloudlet about thumb-width at arm’s length.', predicts: 'Usually unsettled but dry. Turreted (castellanus) on a warm humid morning: thunderstorms likely later.' },
  { id: 'As', name: 'Altostratus', level: 'middle', looks: 'Grey featureless sheet; the sun looks as if through frosted glass, no halo, no shadows.', predicts: 'Thickening and lowering: steady rain or snow usually within a few hours.' },
  { id: 'Ns', name: 'Nimbostratus', level: 'low', looks: 'Dark, thick, formless layer with continuous rain or snow; base ragged and low.', predicts: 'Prolonged steady precipitation for hours; rising streams and poor visibility.' },
  { id: 'Sc', name: 'Stratocumulus', level: 'low', looks: 'Low grey-white lumps or rolls with gaps; each larger than a fist at arm’s length.', predicts: 'Mostly dry, perhaps light showers; common behind a cold front as things improve.' },
  { id: 'St', name: 'Stratus', level: 'low', looks: 'Uniform grey layer, very low, hiding hilltops; fog that has lifted.', predicts: 'Drizzle and low visibility; often lifts or burns off later in the morning.' },
  { id: 'Cu', name: 'Cumulus', level: 'vertical', looks: 'Detached heaps with flat bases and cauliflower tops.', predicts: 'Small and flat (humilis): fair weather. Growing tall (congestus) before noon: showers or storms possible.' },
  { id: 'Cb', name: 'Cumulonimbus', level: 'vertical', looks: 'Huge tower, often with a flat anvil top; dark base, rain shafts.', predicts: 'Thunderstorm now or within the hour: lightning, gusts, hail, heavy rain, flash floods.' },
]

export const genusById = (id: Genus) => GENERA.find((g) => g.id === id)!

export type Forecast = 'fair' | 'front-rain' | 'thunder-soon' | 'thunder-later' | 'prolonged-rain' | 'drizzle-fog' | 'clearing'

export const FORECASTS: { id: Forecast; text: string }[] = [
  { id: 'fair', text: 'Fair and settled for the next several hours' },
  { id: 'front-rain', text: 'Rain or snow likely within ~6–24 h (approaching front)' },
  { id: 'thunder-later', text: 'Thunderstorms likely to develop later today' },
  { id: 'thunder-soon', text: 'Thunderstorm within the hour — lightning, gusts, heavy rain' },
  { id: 'prolonged-rain', text: 'Steady rain continuing for hours; streams rising' },
  { id: 'drizzle-fog', text: 'Drizzle and low visibility, probably lifting later' },
  { id: 'clearing', text: 'Showers ending; clearing, cooler and gusty' },
]

export type Variant = 'humilis' | 'congestus' | 'castellanus' | 'halo' | 'thin' | 'thick'

export interface Frame {
  time: string
  g: Genus
  variant?: Variant
  /** Extra cloud drawn lower down, e.g. patches of stratus under altostratus. */
  cover: number // 0–1 fraction of sky
}

export interface SkyScene {
  id: string
  place: string
  clues: string
  frames: Frame[]
  forecast: Forecast
  /** Forecasts that earn half credit (reasonable but less precise). */
  partial: Forecast[]
  debrief: string
}

export const SCENES: SkyScene[] = [
  {
    id: 'warm-front',
    place: 'Temperate hills, autumn',
    clues: 'Barometer falling about 1 hPa per hour since dawn. Wind backing from W to S and slowly increasing.',
    frames: [
      { time: '08:00', g: 'Ci', cover: 0.3 },
      { time: '11:00', g: 'Cs', variant: 'halo', cover: 0.8 },
      { time: '14:00', g: 'As', cover: 1 },
    ],
    forecast: 'front-rain',
    partial: ['prolonged-rain'],
    debrief: 'Cirrus → cirrostratus with a halo → altostratus, with falling pressure and a backing wind, is the classic warm-front sequence. Rain usually starts within hours of the altostratus thickening; nimbostratus follows.',
  },
  {
    id: 'afternoon-storm',
    place: 'Mountain range, midsummer',
    clues: 'Hot humid morning (dew point 17 °C), light winds. You are on an exposed ridge at 13:00.',
    frames: [
      { time: '09:00', g: 'Cu', variant: 'humilis', cover: 0.2 },
      { time: '11:30', g: 'Cu', variant: 'congestus', cover: 0.4 },
      { time: '13:00', g: 'Cb', cover: 0.5 },
    ],
    forecast: 'thunder-soon',
    partial: ['thunder-later'],
    debrief: 'Cumulus that grow taller through the late morning are the warning; by the time a tower spreads an anvil it is a cumulonimbus and lightning can strike at any moment — get off the ridge now.',
  },
  {
    id: 'fair-cumulus',
    place: 'Prairie / rural farmland, early summer',
    clues: 'Pressure steady and high. Dry air (dew point 6 °C). Light breeze.',
    frames: [
      { time: '10:00', g: 'Cu', variant: 'humilis', cover: 0.15 },
      { time: '13:00', g: 'Cu', variant: 'humilis', cover: 0.25 },
      { time: '16:00', g: 'Cu', variant: 'humilis', cover: 0.2 },
    ],
    forecast: 'fair',
    partial: [],
    debrief: 'Small cumulus that stay wider than they are tall and do not grow through the day are "fair-weather cumulus". They usually fade in the evening as the ground cools.',
  },
  {
    id: 'stratus-morning',
    place: 'Coastal hills, early morning',
    clues: 'Calm after a clear night. Temperature 9 °C, dew point 9 °C. Hilltops hidden.',
    frames: [
      { time: '06:00', g: 'St', cover: 1 },
      { time: '08:00', g: 'St', cover: 1 },
    ],
    forecast: 'drizzle-fog',
    partial: ['fair'],
    debrief: 'Temperature equal to dew point means saturated air: fog or stratus. Expect drizzle and poor visibility for navigation. Under high pressure it often lifts to stratocumulus or clears by late morning.',
  },
  {
    id: 'nimbostratus',
    place: 'Forest valley, spring',
    clues: 'It has been raining steadily for three hours. Pressure still falling. The stream beside the trail is brown and noisier than this morning.',
    frames: [
      { time: '07:00', g: 'As', cover: 1 },
      { time: '10:00', g: 'Ns', cover: 1 },
    ],
    forecast: 'prolonged-rain',
    partial: ['front-rain'],
    debrief: 'A dark, formless, low layer with steady rain is nimbostratus. With pressure still falling, the rain has hours to run. Streams will keep rising — plan crossings and campsites accordingly.',
  },
  {
    id: 'castellanus',
    place: 'Desert mountains, late summer (monsoon season)',
    clues: 'Warm, humid dawn. You plan a slot-canyon descent starting at 10:00.',
    frames: [
      { time: '07:00', g: 'Ac', variant: 'castellanus', cover: 0.4 },
      { time: '08:30', g: 'Ac', variant: 'castellanus', cover: 0.5 },
    ],
    forecast: 'thunder-later',
    partial: ['thunder-soon'],
    debrief: 'Turreted altocumulus (castellanus) at dawn show instability at mid-levels — a strong sign of afternoon thunderstorms. That is a no-go for a slot canyon: a storm anywhere in the catchment can send a flash flood through it.',
  },
  {
    id: 'post-cold-front',
    place: 'Coast, winter',
    clues: 'A line of heavy showers passed at 10:00. Since then the wind has veered from SW to NW, temperature dropped 5 °C, pressure is rising quickly.',
    frames: [
      { time: '09:30', g: 'Cb', cover: 0.7 },
      { time: '12:00', g: 'Sc', cover: 0.6 },
    ],
    forecast: 'clearing',
    partial: ['fair'],
    debrief: 'Behind a cold front: veering wind, falling temperature, rising pressure, and broken stratocumulus. Showers ease and the sky clears, but it is colder and gusty — wind chill matters now.',
  },
  {
    id: 'cirrus-alone',
    place: 'Subarctic lake country, summer',
    clues: 'Pressure steady (1024 hPa). A few wisps have been in the sky all day without increasing.',
    frames: [
      { time: '10:00', g: 'Ci', cover: 0.15 },
      { time: '15:00', g: 'Ci', cover: 0.15 },
    ],
    forecast: 'fair',
    partial: ['front-rain'],
    debrief: 'Cirrus alone is not a storm warning. What matters is the trend: here the cover is not increasing and pressure is steady and high, so fair weather continues.',
  },
]

/** Score one answer: 1 point for the genus of the last frame, 1 for the forecast (0.5 for a partial). */
export function scoreAnswer(scene: SkyScene, genus: Genus | null, forecast: Forecast | null): number {
  const last = scene.frames[scene.frames.length - 1]
  let s = 0
  if (genus === last.g) s += 1
  else if (genus && genusById(genus).level === genusById(last.g).level) s += 0.25
  if (forecast === scene.forecast) s += 1
  else if (forecast && scene.partial.includes(forecast)) s += 0.5
  return s
}

/** Percentage over all scenes answered (max 2 points each). */
export function totalPercent(points: number[]): number {
  if (points.length === 0) return 0
  return Math.round((points.reduce((a, b) => a + b, 0) / (points.length * 2)) * 100)
}
