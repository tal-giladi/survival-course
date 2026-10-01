---
id: "08.8"
module: 8
minutes: 45
practice_minutes: 55
prerequisites: ["08.1"]
objectives:
  - "Calculate how inspired oxygen pressure falls with altitude and explain what the body does about it (acclimatisation)."
  - "Recognise AMS, HACE and HAPE, and the red flags that demand descent."
  - "Plan an ascent using current guidance: above 3,000 m, ≤ 500 m/day increase in sleeping altitude and a rest day every 3–4 days."
  - "Explain why altitude also increases dehydration, cold and UV risk, and degrades judgment and night vision."
level: advanced
volatility: concept
sources:
  - title: "WMS Clinical Practice Guidelines for the Prevention, Diagnosis, and Treatment of Acute Altitude Illness: 2024 Update"
    url: https://journals.sagepub.com/doi/10.1016/j.wem.2023.05.013
  - title: "High-Altitude Travel and Altitude Illness (CDC Yellow Book)"
    url: https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html
  - title: "Mountaineering: The Freedom of the Hills (10th ed.)"
    url: https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition
last_verified: "2026-09-27"
---

# 08.8 · Altitude

Altitude illness is predictable, preventable and — except for its severe forms — easily treated by going down. Yet people die of HACE and HAPE every year because they ascended too fast, ignored symptoms, or delayed descent to stay with a schedule. It also silently degrades judgment, sleep, night vision and cold tolerance, amplifying every other hazard in this stage.

## Explanation

> [!NOTE]
> **Educational content — not medical advice**
>
> Medications for prevention and treatment of altitude illness (e.g., acetazolamide, dexamethasone, nifedipine) are prescription drugs with side effects and contraindications. Discuss plans with a travel-medicine clinician before high-altitude trips, and learn recognition and evacuation hands-on (WFA/WFR, mountain-medicine courses).

### Less pressure, less oxygen

The air at altitude is still **20.9 % oxygen** — but the air pressure is lower, so each breath carries fewer oxygen molecules. At about **5,500 m** the inspired oxygen pressure is roughly **half** its sea-level value.

The body responds in stages. Within minutes: faster, deeper breathing and a higher heart rate. Over **days**: the kidneys excrete bicarbonate to correct the alkalosis caused by overbreathing (allowing breathing to rise further), and plasma volume falls (concentrating red cells). Over **weeks**: more red blood cells. Acute acclimatisation takes **3–5 days** at each new level; that is why ascent rate matters so much.

![Inspired oxygen partial pressure falls with altitude: roughly half of the sea-level value at 5,500 metres](../../assets/diagrams/s8-altitude-oxygen.svg)

*Inspired oxygen partial pressure versus altitude (standard atmosphere).*

| Condition | Key signs | What to do |
| --- | --- | --- |
| **AMS** (acute mountain sickness) | Headache plus one or more of: nausea/poor appetite, fatigue, dizziness; typically 6–12 h after arriving at a new altitude; like a hangover | Do not go higher until symptoms resolve; rest, fluids, simple pain relief; descend if worsening |
| **HACE** (high-altitude cerebral oedema) | Ataxia (cannot walk heel-to-toe in a straight line), confusion, drowsiness — usually in someone with AMS | **Descend immediately** (300–1,000 m or until better); oxygen and medication by trained personnel; evacuate |
| **HAPE** (high-altitude pulmonary oedema) | Breathless **at rest**, marked drop in exercise tolerance, cough (later pink frothy sputum), blue lips | **Descend**, minimise exertion, keep warm; oxygen if available; evacuate |

> [!CAUTION]
> **The golden rules**
>
> 1) Illness at altitude is altitude illness until proven otherwise. 2) Never ascend with symptoms of AMS. 3) If symptoms get worse, or there is **any** sign of HACE or HAPE, **go down**. 4) Never leave someone with altitude illness alone.

### Ascent rate

Current guidance (WMS 2024; CDC): avoid going from low altitude to a **sleeping altitude above about 2,750–3,000 m** in one day. Above **3,000 m**, increase **sleeping** altitude by no more than **500 m per day**, with a **rest day every 3–4 days** (or an extra night for each 1,000 m gained). You may climb higher during the day and return lower to sleep (“climb high, sleep low”). Speed of ascent, previous altitude illness and sleeping altitude are the main risk factors; fitness does **not** protect you.

![Sleeping-altitude profiles: a staged ascent with rest days versus a rapid ascent](../../assets/diagrams/s8-ascent-profile.svg)

*A staged ascent keeps sleeping-altitude gains small; flying or driving to a high bed skips acclimatisation.*

[Simulation: Physiology Lab](../../simulations/heat-balance-advanced/index.html)

Set the altitude slider to 4,500 m and compare water loss with sea level for the same walk.

## Scientific and technical background

### Inspired oxygen pressure

Air entering the lungs is warmed and saturated with water vapour (6.3 kPa at 37 °C), so the inspired oxygen pressure is

$$
P_{iO_2} = 0.2095 \times (P_B - 6.3\ \text{kPa})
$$

where $P_B$ is barometric pressure. In the standard atmosphere, $P_B$ falls from 101.3 kPa at sea level to about 70 kPa at 3,000 m and 50.5 kPa at 5,500 m:

| Altitude | $P_B$ (kPa) | $P_{iO_2}$ (kPa) | % of sea level |
|---|---|---|---|
| 0 m | 101.3 | 19.9 | 100 % |
| 3,000 m | 70.1 | 13.4 | 67 % |
| 5,500 m | 50.5 | 9.3 | 47 % |
| 8,849 m (Everest) | ≈ 31–34 | ≈ 5.3–5.8 | ≈ 27–29 % |

Arterial oxygen saturation, near 97–99 % at sea level, typically falls toward about 90 % at 3,000 m and well below that higher up — varying a lot between people and with acclimatisation.

### Why you pee and breathe more

Hypoxia drives breathing up; that blows off CO₂ and makes the blood alkaline, which in turn *limits* breathing. Over days the kidneys excrete bicarbonate to compensate, letting breathing rise further — acclimatisation. (Acetazolamide, used for prevention on prescription, speeds this by making the kidneys excrete bicarbonate.)

### Water loss at altitude

Breathing more of colder, drier air raises respiratory water loss — often **0.5–1 L/day extra** at high altitude — on top of sweat. Mild dehydration mimics and worsens AMS symptoms, but over-drinking does not prevent AMS.

## Examples

**Andes and Tibetan plateau.** Travellers flying into cities at 3,400–3,700 m (e.g., Cusco, La Paz, Lhasa) commonly get AMS on the first night. A rest day on arrival — or an itinerary starting lower — is standard advice.

**Himalayan trekking.** Well-run treks build rest days into itineraries above 3,000 m; most HAPE and HACE cases follow fast ascents or ignored symptoms.

**Alpine and North American mountains.** Climbers driving from sea level to sleep at trailheads near 3,000 m before summit days risk AMS within a weekend.

**Arctic and subarctic mountains.** Cold, wind and altitude combine: frostbite and hypothermia risk rise while judgment falls.

**Desert mountains.** Hot valleys to cold high summits in a day: water, cold and hypoxia all at once.

## Common mistakes

- Believing fitness protects against altitude illness — it does not.
- Continuing up with a headache and nausea “to keep to the schedule”.
- Treating HACE or HAPE with rest at the same altitude instead of descending.
- Sending a sick person down alone.
- Drinking large volumes “to prevent AMS” — hydration matters, but overdrinking adds hyponatremia risk without preventing AMS.
- Mistaking AMS for a hangover or a cold and ignoring it.

## Practical exercises

### Plan a safe ascent profile

Level 2 (Simulation) · 🏠 Home · about 40 min

**Materials:** A trek itinerary (real or from a guidebook) reaching 5,000+ m; Graph paper or spreadsheet

**Steps**

1. Plot sleeping altitude by day for the itinerary.
2. Mark every night above 3,000 m where sleeping altitude rises more than 500 m, and every 3–4 days without a rest day.
3. Redesign the itinerary to meet the guidance. Add a descent plan and a named person responsible for daily symptom checks.

**You have it when**

- Your revised plan keeps sleeping-altitude gains ≤ 500 m/day above 3,000 m with rest days.
- You have a written descent trigger (worsening AMS, any HACE/HAPE sign).

Builds the skill: Risk assessment of a planned trip.

### Symptom-check drill

Level 1 (Knowledge) · 🏠 Home · about 15 min

**Steps**

1. Write a daily altitude check card: headache (0–3), GI symptoms, fatigue, dizziness, heel-to-toe walk test, breathlessness at rest.
2. Practise the heel-to-toe (tandem) walk test on a friend and on yourself.
3. Decide in advance what score or sign triggers “no higher” and what triggers “descend now”.

**You have it when**

- You have a card with clear action thresholds.

## Scenario question

Day 4 of a trek. Last night you slept at 4,200 m after a 700 m gain. This morning one member has a pounding headache, nausea and poor appetite, but walks normally and is thinking clearly. The plan is to sleep at 4,900 m tonight. There is a lodge at 3,900 m, two hours back down.

**What is the best plan?**

1. Continue to 4,900 m with painkillers; she will acclimatise on the way.
2. Stay at 4,200 m today and treat her; descend to 3,900 m if she gets worse.
3. Send her down alone to the lodge while the rest of the group continues.
4. Continue as planned; AMS is just a hangover-like nuisance that passes.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Mild AMS: do not go higher; rest and treat symptoms; descend if worse or at any sign of HACE (ataxia, confusion) or HAPE (breathless at rest). The itinerary’s 700 m gain was itself the problem — adjust the rest of the plan.

- **1.** Ascending with AMS risks progression to HACE/HAPE.
- **2.** Best: no higher; rest, fluids, simple pain relief, re-checks through the day — and descend at any sign of worsening or HACE/HAPE.
- **3.** Never leave someone with altitude illness alone.
- **4.** Ignores the key rule: do not ascend with symptoms.

</details>

## Summary

- $P_{iO_2} = 0.2095(P_B - 6.3)$; about half of sea level at ~5,500 m.
- AMS: headache + nausea/fatigue/dizziness; HACE: ataxia/confusion; HAPE: breathless at rest.
- Never ascend with symptoms; descend if worse or any HACE/HAPE sign; never alone.
- Above 3,000 m: ≤ 500 m/day sleeping gain, rest day every 3–4 days.
- Altitude adds water loss, cold, UV and worse judgment and night vision.

## Further reading

- Luks AM, Beidleman BA, Freer L, et al.. [WMS Clinical Practice Guidelines for the Prevention, Diagnosis, and Treatment of Acute Altitude Illness: 2024 Update](https://journals.sagepub.com/doi/10.1016/j.wem.2023.05.013). 2024. Wilderness & Environmental Medicine 35(1S):2S–19S. Ascent rates, AMS/HACE/HAPE prevention and treatment.
- US Centers for Disease Control and Prevention. [High-Altitude Travel and Altitude Illness (CDC Yellow Book)](https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html). Above 3,000 m: ≤ 500 m/night sleeping-altitude gain; extra night per 1,000 m.
- The Mountaineers. [Mountaineering: The Freedom of the Hills (10th ed.)](https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition). The standard mountaineering text since 1960, revised by committee.

## References

- Luks AM, Beidleman BA, Freer L, et al.. [WMS Clinical Practice Guidelines for the Prevention, Diagnosis, and Treatment of Acute Altitude Illness: 2024 Update](https://journals.sagepub.com/doi/10.1016/j.wem.2023.05.013). 2024. Wilderness & Environmental Medicine 35(1S):2S–19S. Ascent rates, AMS/HACE/HAPE prevention and treatment.
- US Centers for Disease Control and Prevention. [High-Altitude Travel and Altitude Illness (CDC Yellow Book)](https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html). Above 3,000 m: ≤ 500 m/night sleeping-altitude gain; extra night per 1,000 m.
- US Army. *TB MED 505: Altitude Acclimatization and Illness Management*. Military doctrine on staged ascent, acclimatisation and altitude illness.
- Paul Auerbach et al.. *Auerbach’s Wilderness Medicine*. Physician-level reference — the authority to check against.
