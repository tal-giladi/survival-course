---
id: "14.2"
module: 14
minutes: 55
practice_minutes: 125
prerequisites: ["14.1"]
objectives:
  - "Explain how a 406 MHz beacon alert travels through Cospas-Sarsat to a rescue coordination centre, and what the GNSS position and the 121.5 MHz homing signal add."
  - "Compare PLBs, EPIRBs, ELTs, satellite messengers and phone satellite SOS, and choose what to carry for a trip."
  - "Register, test and deploy a beacon correctly — activate it only in genuine distress, and report any accidental activation at once."
  - "Use radios legally (licence-free, licensed, marine VHF, amateur) and estimate their range from line of sight."
  - "Give a clear distress message: who, where, what happened, how many, what help."
level: intermediate
volatility: concept
sources:
  - title: "International Cospas-Sarsat Programme"
    url: https://www.cospas-sarsat.int/en/
  - title: "NOAA SARSAT — beacon registration"
    url: https://www.sarsat.noaa.gov/
  - title: "Mountain Rescue Association"
    url: https://mra.org/
  - title: "GPS.gov — official US government information about GPS"
    url: https://www.gps.gov/
last_verified: "2026-09-27"
---

# 14.2 · Radio, satellite and beacons

Most wilderness rescues begin with a message: a call, a text, a beacon alert. Where there is no coverage, a registered beacon or satellite messenger turns “missing somewhere” into “this person, at this point, since this time” — shrinking the search area from hundreds of square kilometres to a few metres. Misused, the same tools waste rescuers’ time and put them at risk.

## Explanation

Visual and audible signals (Lesson 1) guide searchers over the last few kilometres. Electronic signals do the first and most important job: **telling someone you need help, and where you are** — from places no one can see or hear you.

Your first choice is still a **phone** where there is coverage (Stage 1): call the emergency number, send an SMS if calls fail, give your coordinates. Where available, phones also send their location to the emergency service automatically during an emergency call (for example, *Advanced Mobile Location*). Beyond coverage, you need satellites or radio.

### Distress beacons and Cospas-Sarsat

**Cospas-Sarsat** is an international, government-run satellite system for distress alerts. Three kinds of beacon use it, all transmitting on **406 MHz**:

| Beacon | Carried by | Activation |
|---|---|---|
| **PLB** (personal locator beacon) | People: hikers, climbers, pilots, paddlers | Manual |
| **EPIRB** (emergency position-indicating radio beacon) | Ships and boats | Manual, or automatic when it floats free |
| **ELT** (emergency locator transmitter) | Aircraft | Automatic on impact, or manual |

When activated, the beacon sends a short **digital burst** every minute or so containing its **unique identification number** (15 hexadecimal characters, which also encodes the country it is registered in) and, on most modern beacons, a **GNSS position**. Satellites in low, medium and geostationary orbits relay it to ground stations (**LUTs**), which pass it to a national **mission control centre** and on to the **rescue coordination centre (RCC)** responsible for that area. The RCC looks up the beacon’s **registration**, calls your emergency contacts to learn who you are and what you were doing, and tasks rescuers. A low-power **121.5 MHz** signal lets aircraft and ground teams **home in** on the beacon for the final approach.

Satellite processing of old 121.5 MHz-only beacons ended in 2009 — such beacons are no longer detected from space.

![How a 406 megahertz distress beacon alert travels: the beacon transmits a digital message with its unique ID and GNSS position to Cospas-Sarsat satellites in low, medium and geostationary orbits; ground stations called LUTs receive the relay; a mission control centre checks it and passes it to the rescue coordination centre responsible for that area, which uses the registration details to call your contacts and launches searchers, who home in on the beacon’s 121.5 megahertz signal.](../../assets/diagrams/s14-cospas-sarsat.svg)

*From beacon to rescuers: satellites, ground station, mission control, rescue coordination centre — and homing on 121.5 MHz.*

### Satellite messengers and satellite SOS

**Satellite messengers** use commercial satellite networks. They offer **two-way text**, tracking that friends can follow, and an **SOS** that goes to a commercial emergency response centre, which contacts the appropriate authorities for your location. **Two-way messaging is a big advantage**: you can say what happened, how badly someone is hurt and what help you need, and the centre can tell you help is coming. They need a **subscription**, and coverage depends on the network.

Some newer **phones** can send emergency messages **via satellite** in some countries. They need a clear view of the sky and you must point the phone as it instructs — try the demo mode at home. **Satellite phones** give voice calls; they are heavier and costlier.

### Which to carry?

- **PLB:** built for one job, government-backed system, no subscription, typically designed to transmit for at least 24 hours. One-way: rescuers know *where* and *who*, not *what*.
- **Messenger:** two-way detail, tracking and non-emergency “running late” messages that can **prevent** a search; needs subscription and charging.
- Many remote travellers carry **both**, or a messenger plus a phone with satellite SOS. Either is far better than nothing where there is no coverage.

### Registration, testing and deployment

**Register** your beacon with the national authority for the country coded into it (in the US, NOAA SARSAT; in the UK, the UK Beacon Registry). Registration is free in many countries and often legally required. It lets the RCC confirm quickly that a real person is in trouble, call your contacts, and **resolve accidental alerts without launching a search**. Update it when you change phone numbers, emergency contacts or vehicles/boats; some authorities require renewal (NOAA asks every two years). Many registries let you add **trip details**.

**Test** only with the manufacturer’s **self-test** — it checks the battery and circuits without sending a real alert. **Never “test” by activating it.** Note the battery replacement date and replace it through the manufacturer.

**Deploy** it properly: fully extend the antenna and hold it **vertical**, with a **clear view of the sky**, away from rock walls and dense canopy; don’t lie on it or shield it with your body; keep it out of water unless it is designed to float. **Leave it on** until rescuers reach you or an RCC tells you to switch off.

![Deploying a personal locator beacon: fully extend the antenna and hold it vertical, give it a clear view of the sky away from rock walls and dense canopy, do not shield it with your body, and leave it on until rescuers reach you or tell you otherwise.](../../assets/diagrams/s14-beacon-deploy.svg)

*Beacon deployment: antenna vertical, open sky, leave it on.*

> [!IMPORTANT]
> **Activate only in genuine distress — and report accidents immediately**
>
> A distress beacon or satellite SOS is for **grave and imminent danger to life** when you cannot get out of it by yourself: a serious injury or illness, someone missing in dangerous conditions, being unable to survive where you are. It is **not** for being tired, late or uncomfortable — use a messenger’s non-emergency message, a call or a text instead.
>
> Every alert launches real people, often aircraft, sometimes at risk to themselves, and diverts them from other emergencies. **Knowingly sending a false distress alert is illegal in many countries** and can bring fines or prosecution. **If you activate one by accident, switch it off and immediately contact the rescue coordination centre or national authority** (the number is in your registration papers) to cancel it — honest, promptly reported accidents are part of the system; unreported ones cause searches.

### Radio basics — and the licence question

Radios work without networks or subscriptions, and let you **talk** with your group or with rescuers. But the radio spectrum is regulated: **who may transmit, on which frequencies and at what power is set by law**, and interference can block emergency and aviation traffic.

| Radio | Licence? | Typical use |
|---|---|---|
| Licence-free walkie-talkies (FRS in North America, PMR446 in Europe, UHF CB in Australia) | No (fixed low power, approved radios) | Within a group; a few hundred metres to a few km |
| GMRS (US) | Licence (no exam) | Higher power, repeaters |
| Marine VHF | Operator certificate and station licence in many countries | Boats; **channel 16** is the international distress and calling channel, monitored by coast guards in many areas |
| Amateur (“ham”) radio | Licence by **exam** | Long range, repeaters, emergency nets |
| Aviation band (incl. 121.5 MHz) | Licensed aircraft and ground stations only | Not for hikers |

Radio regulations generally allow a station **in distress** to use any means at its disposal to attract attention and get help — a narrow exception for genuine emergencies, **not** permission to carry and use radios you are not licensed for. If a radio is part of your plan, **get the licence and the training**: amateur licensing courses teach procedures and range, and marine courses teach DSC distress alerts and Mayday procedure.

**Range is mostly line of sight** at VHF and UHF. Height beats power: climb to a ridge or open ground, hold the antenna vertical, and agree **scheduled listening times** to save batteries.

![VHF and UHF radio travels roughly line of sight. From a valley floor the ridge blocks the signal; from the ridge top the radio horizon is much larger. Radio horizon in kilometres is about 4.1 times the square root of antenna height in metres, for each end of the link.](../../assets/diagrams/s14-radio-horizon.svg)

*VHF/UHF radio is line of sight: get high.*

### The distress message

The same content works for a phone call, a text, a messenger SOS follow-up or a radio call. Rehearse it:

1. **Who**: your name (and radio call sign or vessel name).
2. **Where**: coordinates in a stated format (Stage 2), plus a description — “north side of the lake, below the red cliff”.
3. **What happened**: the problem and its severity — “fall, leg fracture, conscious, can’t walk”.
4. **How many** people, and their condition.
5. **What help** you need, and what you have (shelter, water, light, battery).

On radio, **MAYDAY** (said three times) is reserved for grave and imminent danger to life; **PAN-PAN** signals urgency without immediate danger to life. Then listen — and follow instructions.

> [!TIP]
> **Save power, stay reachable**
>
> After sending an alert, agree a **check-in schedule** (e.g., on the hour) and power down between. Keep batteries warm inside your clothing. If a messenger or phone is your only link, don’t spend it on photos or long chats — short, factual updates.

## Scientific and technical background

### How far can a radio reach?

VHF and UHF radio waves travel roughly in straight lines. Because the Earth curves, a line from an antenna at height $h$ grazes the surface at the **radio horizon**. With the usual allowance for the atmosphere bending radio waves slightly,

$$
d \approx 4.1\left(\sqrt{h_1} + \sqrt{h_2}\right)
$$

with $d$ in kilometres and antenna heights $h_1, h_2$ in metres. In words: range grows with the **square root** of height, for both ends.

Worked example: two people holding radios 1.5 m above flat ground: $4.1 \times (1.22 + 1.22) \approx 10$ km at the very best — hills and forest usually cut it to a few km. Climb a 300 m hill: $4.1 \times (\sqrt{301.5} + 1.22) \approx 4.1 \times 18.6 \approx 76$ km of possible line of sight to the plain below. Quadrupling transmitter power, by contrast, only doubles range in free space (power falls with the square of distance) and does nothing to get past a ridge.

### Why a GNSS position matters

Older Cospas-Sarsat processing located beacons from the **Doppler shift** of their signal as a low-orbit satellite passed overhead, which could take time and give positions accurate to a few kilometres. A beacon that includes its own **GNSS position** in the message gives rescuers a position typically within about a hundred metres as soon as the message is received, and satellites in medium orbit (carried on navigation satellites) relay alerts almost continuously. The **121.5 MHz homing signal** then leads rescuers the last few hundred metres, even in cloud or at night.

## Examples

**Coastal sea kayaking:** a PLB in your buoyancy aid (not in a hatch), plus a waterproof **marine VHF** — with the operator’s certificate — to talk to the coast guard and nearby boats on channel 16. A phone in a waterproof pouch as a back-up.

**Arctic or subarctic expedition:** a satellite messenger for daily check-ins and weather, plus a PLB; lithium batteries, carried warm. Agree with your home contact what a missed check-in means (Stage 1 trip plan) — often “wait for the next scheduled one” before alerting, to avoid false alarms from a flat battery.

**Desert vehicle trip:** a messenger or PLB with the vehicle *and* one on your body in case you have to leave it (Stage 17). The vehicle is also a big visual signal.

**European mountains:** call **112**; a PLB or messenger for areas without coverage. Mountain rescue teams often ask you to keep the phone switched on and free for their calls.

**Tropical river trip:** dense canopy blocks satellite signals — get to a gravel bar or clearing with open sky before activating.

**Rural lone worker or farmer:** a PLB or messenger in your pocket when working alone in remote fields or forests; family know your check-in times.

**Urban disaster:** when mobile networks are overloaded, **SMS** gets through more often than calls; licence-free radios keep a household or street in touch; amateur operators often support official emergency communications (Stage 16).

## Common mistakes

- Buying a PLB and never registering it, or leaving old contact details in the registration.
- “Testing” a beacon by activating it, or not reporting an accidental activation straight away.
- Activating an SOS for a non-emergency (tired, late, lost but safe and with a phone signal to call).
- Switching the beacon off after a few hours to “save battery” before rescuers arrive.
- Deploying the beacon lying flat, under a boulder, in a gully or under dense canopy.
- Myth: any radio can call the rescue services. Licence-free radios reach only a few km and nobody is obliged to listen; aviation and marine channels need licensed equipment and operators.
- Myth: more power always beats terrain. At VHF/UHF, height and line of sight matter far more.
- Giving coordinates without saying their format, or a vague location (“near the lake”).

## Practical exercises

### Beacon and messenger readiness check

> [!WARNING]
> **Home.** Safe to do at home or at a desk.
>
> Do not activate the distress function. Use only the manufacturer’s self-test, following the manual (self-tests use battery life).

Level 1 (Knowledge) · 🏠 Home · about 45 min

**Materials:** Your PLB or satellite messenger (or the manual of one you are considering); Computer or phone

**Steps**

1. Find the beacon’s 15-character ID on its label. Check that it is registered with the correct national authority; update contacts and add your next trip details if the registry allows.
2. Write the rescue coordination centre / registry phone number on a card kept with the beacon, for reporting an accidental activation.
3. Note the battery expiry date in your calendar with a reminder 3 months before.
4. Run the self-test exactly as the manual describes.
5. Practise deployment posture without activating: antenna fully extended and vertical, arm raised, clear sky above.
6. For a messenger: check the subscription, send a non-emergency test message to your contact and confirm they receive it.

**You have it when**

- Registration current, with correct contacts.
- You can describe the steps for an accidental activation from memory.

Builds the skill: Beacon and messenger readiness.

### Write and rehearse your distress message

Level 1 (Knowledge) · 🏠 Home · about 20 min

**Steps**

1. Pick a real place you hike. Invent an emergency (e.g., companion with a leg injury at a named spot).
2. Write the five parts: who, where (coordinates with format + description), what happened, how many, what help and what you have.
3. Say it aloud as a phone call in under 45 seconds, then compress it into a 160-character text.
4. Ask someone to repeat back your location from your message. Could they find it on a map?

**You have it when**

- A clear 45-second message and a 160-character text that a stranger can locate on a map.

Builds the skill: Report your location from a phone.

### Line-of-sight radio test (licence-free radios)

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> Use only radios and channels that are licence-free where you are, and keep transmissions short. Stay on paths; agree a meeting time in case you lose contact.

Level 2 (Simulation) · 🌲 Outdoor · about 60 min

**Materials:** Two licence-free radios legal in your country (e.g., FRS or PMR446); A partner; Map

**Steps**

1. Start together, then walk apart along a path, checking in every few minutes.
2. Note on the map where contact becomes broken, then where it fails.
3. At the failure point, climb to higher or more open ground nearby and try again.
4. Compare the range in forest, around a hill, and in the open.

**You have it when**

- You can show on the map how terrain, not distance alone, limited the link — and how height restored it.

## Scenario question

You and a friend are crossing a remote mountain pass. At 15:00 she falls on a boulder field: she has an obviously deformed thigh, severe pain, and cannot bear weight. It is 3 °C and cloud is dropping. There is no phone coverage. You carry a registered PLB and a satellite messenger. Walking out alone for help would take about 6 hours.

**What is your best course of action?**

1. Leave her with your spare clothes and walk out for help.
2. Activate the PLB with its antenna vertical in the most open spot nearby, send an SOS by messenger with her injury, your group size and what you have, then insulate her from the ground, get her into shelter and layers, and keep both devices on.
3. Wait until morning and see how she feels.
4. Activate the PLB for 10 minutes, then switch it off to save battery for later.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** This is the case beacons exist for: grave and imminent danger, no way to self-rescue, no phone. Alert first (both channels), then shelter and patient care. Keep the beacon on and in the open; use the messenger for updates. Hands-on first-aid training (WFA/WAFA) teaches how to protect a casualty from cold and how to manage a suspected fracture while you wait.

- **1.** Leaves a badly injured person alone in the cold for many hours, and you risk a fall in the dark; electronic alerts are far faster.
- **2.** Best: grave danger with no self-rescue option is exactly what beacons are for; the messenger adds detail rescuers need; then you manage the patient and the cold (Stages 8 and 9).
- **3.** A femur fracture and falling temperatures are an emergency now; delay risks hypothermia and shock.
- **4.** Switching off breaks the alert and homing signal rescuers need; beacons are designed to run for many hours.

</details>

## Summary

- PLB/EPIRB/ELT → 406 MHz → Cospas-Sarsat satellites → LUT → MCC → RCC; GNSS position in the message; 121.5 MHz for homing.
- Messengers add two-way text and tracking (subscription); phones may have satellite SOS in some countries.
- Register (free in many countries), keep details current, self-test only, note battery dates.
- Activate only in grave and imminent danger; keep it on, antenna vertical, open sky. Accidental activation → switch off and call the RCC at once.
- Radios are licensed by law; licence-free radios are short range; get licences (marine, amateur) if radio is part of your plan.
- Range is line of sight: $d \approx 4.1(\sqrt{h_1}+\sqrt{h_2})$ km — get high.
- Distress message: who, where, what, how many, what help.

## Further reading

- [International Cospas-Sarsat Programme](https://www.cospas-sarsat.int/en/). The satellite system behind 406 MHz personal locator beacons.
- NOAA. [NOAA SARSAT — beacon registration](https://www.sarsat.noaa.gov/).
- International Maritime Organization (IMO) and International Civil Aviation Organization (ICAO). *IAMSAR Manual — International Aeronautical and Maritime Search and Rescue Manual (Volumes I–III)*. The international SAR manual. Volume II (mission co-ordination) covers search planning: POA, POD, POS, sweep width and search patterns; Volume III covers distress signals and procedures for mobile facilities. Updated regularly; available from IMO and ICAO.

## References

- [International Cospas-Sarsat Programme](https://www.cospas-sarsat.int/en/). The satellite system behind 406 MHz personal locator beacons.
- NOAA. [NOAA SARSAT — beacon registration](https://www.sarsat.noaa.gov/).
- Maritime and Coastguard Agency (UK). *UK Beacon Registry (406 MHz EPIRB, PLB and ELT registration)*. Free registration of UK-coded beacons. Find it via gov.uk.
- US Federal Communications Commission. *47 CFR Part 95 — Personal Radio Services (FRS, GMRS, CB, PLBs)*. Licence-free FRS and CB, licensed GMRS, and rules for 406 MHz personal locator beacons in the US. Find it on ecfr.gov.
- US Federal Communications Commission. *47 CFR Part 97 — Amateur Radio Service*. US amateur radio rules: licences by examination; includes provisions on communications in emergencies involving the immediate safety of human life. Find it on ecfr.gov. Other countries have their own amateur licensing (e.g., Ofcom in the UK).
- International Maritime Organization (IMO) and International Civil Aviation Organization (ICAO). *IAMSAR Manual — International Aeronautical and Maritime Search and Rescue Manual (Volumes I–III)*. The international SAR manual. Volume II (mission co-ordination) covers search planning: POA, POD, POS, sweep width and search patterns; Volume III covers distress signals and procedures for mobile facilities. Updated regularly; available from IMO and ICAO.
- [Mountain Rescue Association](https://mra.org/).
- [GPS.gov — official US government information about GPS](https://www.gps.gov/).
