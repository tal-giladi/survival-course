import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's15-l2',
  stage: 15,
  order: 2,
  title: 'Cognitive bias in the field',
  level: 'advanced',
  minutes: 60,
  prerequisites: ['s15-l1'],
  concepts: ['plan-continuation', 'sunk-cost', 'normalization-of-deviance', 'tunnel-vision', 'risk-perception', 'debiasing', 'human-factors'],
  objectives: [
    'Explain why useful mental shortcuts (heuristics) become **traps** in environments with rare, delayed feedback.',
    'Recognise **plan continuation, sunk cost, normalization of deviance and tunnel vision** in real field decisions.',
    'Describe how **risk perception** distorts which hazards feel dangerous.',
    'Apply **structural debiasing** — pre-set triggers, checklists, pre-mortems, outside view and dissent — instead of relying on willpower.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 1 (Lesson 4) introduced McCammon’s **FACETS** traps from avalanche accidents. This lesson widens the lens to the biases that show up across mountaineering, aviation, sailing, firefighting and everyday survival — and to what actually works against them.

### Shortcuts that usually work

Most of the time we decide fast, by pattern and feeling: what psychologist Daniel Kahneman popularised as “System 1” thinking, as opposed to slow, effortful “System 2” reasoning (these are metaphors, not brain regions). Fast, intuitive judgement is how experienced firefighters and nurses make good calls in seconds (Klein, 1998).

But intuition is only trustworthy when two conditions hold: the environment has **regular patterns**, and you get **fast, clear feedback** on whether you were right (Kahneman & Klein, 2009). Much of wilderness risk fails both tests. Avalanches, lightning strikes and falls are **rare**, and bad decisions usually go unpunished — you cross the loaded slope, nothing happens, and you “learn” that it was fine. That is the soil in which the traps below grow, and why **experience alone does not protect you**.`,
    },
    {
      type: 'md',
      md: `### Plan continuation (“get-there-itis”, summit fever)

Aviation researchers studying accidents found a recurring pattern they called **plan continuation errors**: crews continued with the original plan — usually landing at the planned airport — despite cues that it should change (Orasanu, Martin & Davison, 2001). Outdoors it has other names: summit fever, get-home-itis.

Why it happens: the plan was built when you were calm and had good information; changing it means admitting it was wrong, disappointing people, and building a new plan under stress (Lesson 1). Early cues are ambiguous (“maybe those clouds will pass”), and by the time the evidence is unambiguous, you have invested more and are closer to the goal.

**Countermeasure: decide the trigger in advance.** A turnaround time, a weather rule (“first thunder, we descend”), a wind limit for a crossing, a minimum water reserve. The rule is made by your calm self and executed by your stressed self.`,
    },
    { type: 'diagram', id: 's15-plan-continuation', caption: 'Commitment grows fast; contrary evidence grows later. A pre-set trigger forces the switch before commitment wins.' },
    {
      type: 'md',
      md: `### Sunk cost

The **sunk-cost trap** is letting what you have already spent — money, effort, travel, the days of planning — justify spending more (Arkes & Blumer, 1985). In a classic field experiment, people who were randomly given discounted theatre season tickets attended fewer plays in the first part of the season than people who had paid full price: what they had already paid changed what they did next.

Outdoors: “We drove six hours.” “We’ve carried this gear up 1,200 m.” “We paid for the permit.” All those costs are **gone whichever way you decide**. The only question that matters is: *from here, which option has the best future?* A useful test is to imagine arriving at this exact spot fresh, by helicopter, with no history. Would you start up that slope now?

### Normalization of deviance

Sociologist Diane Vaughan coined the term studying the 1986 **Challenger** disaster: erosion of the booster seals had been seen on earlier flights; each time nothing catastrophic happened, the anomaly became a little more acceptable, until it was “normal” (Vaughan, 1996). Safety researcher Jens Rasmussen described the same drift in whole systems: under pressure for speed and less effort, practice moves step by step towards the boundary of safe performance, and nobody notices because nothing bad has happened yet (Rasmussen, 1997).

Outdoors: skipping the transceiver check “because we always do it at the car”, starting later each trip, crossing the same river a little higher each time, leaving the stove in the tent porch. Each time you get away with it, the next deviation feels normal.

**Countermeasures:** fixed standards that do not move with mood; treat near-misses as **free lessons** and review them as seriously as accidents; ask newcomers what looks odd to them.`,
    },
    { type: 'diagram', id: 's15-deviance-drift', caption: 'Each near-miss that ends well moves the “normal” closer to the edge.' },
    {
      type: 'md',
      md: `### Tunnel vision and goal fixation

Rising arousal narrows the range of cues people use (Easterbrook, 1959): peripheral information drops out first. Add fatigue and a strong goal — reach the car, reach the summit — and people stop seeing the thing that will hurt them: the cliff band below the shortcut, the partner who has stopped talking, the fuel gauge. Lost people show a version of this: “**bending the map**” to fit what they want to see (Stage 2).

**Countermeasures:** stop at planned points and ask “what am I *not* looking at?”; divide attention between people (one watches weather, one watches the group); use checklists at key moments.

### Risk perception: what feels dangerous vs what is

Risk researcher Paul Slovic showed that people rate risks as bigger when they are **dreaded** (horrible, uncontrollable) or **unfamiliar**, and smaller when they are familiar, voluntary and feel under control (Slovic, 1987). Vivid stories also make events seem more likely than they are (the **availability** heuristic; Tversky & Kahneman, 1974).

In the outdoors this means many people fear sharks, bears, snakes and strangers intensely, while the hazards that kill far more people — **cold and wet, drowning, falls, lightning, getting lost, and driving to the trailhead** — feel ordinary. A good plan spends its worry where the risk is.

### Other traps worth naming

| Trap | In the field |
|---|---|
| **Confirmation bias** | Noticing only the landmarks that fit where you think you are |
| **Anchoring** | Sticking to the first estimate (“it’s 2 hours to the hut”) after the pace has changed |
| **Expert halo / authority** | Nobody questions the most experienced person (FACETS) |
| **Social proof / tracks** | “Others went this way, so it must be fine” |
| **Outcome bias** | Judging a decision by how it turned out rather than by what was known at the time |`,
    },
    {
      type: 'md',
      md: `### What actually works against bias

Knowing about biases does surprisingly little by itself: people readily see biases in others and not in themselves. What works best is **structure** — rules and routines that act even when you do not feel biased:

1. **Pre-commitments:** turnaround times, weather and wind limits, water reserves, written into the trip plan and told to the group and to your contact (Stage 1).
2. **Checklists and fixed checkpoints:** “At the col: time, weather, group, daylight — go or no-go?”
3. **The pre-mortem:** before the trip, imagine it is tomorrow and it has gone badly wrong. Everyone writes down *why*. This legitimises doubt and surfaces risks nobody wanted to raise (Klein, 2007).
4. **The outside view:** “What would I tell a friend in this spot?” or “If we arrived here fresh, would we start?”
5. **Genuine dissent:** ask the quietest person first; make it normal to say “I’m not comfortable” (Lesson 4).
6. **Name the trap out loud:** “Is this sunk cost talking?” It gives the group a face-saving way to change course.
7. **After-action reviews** of near-misses, not just of accidents (Lesson 4).`,
    },
    { type: 'sim', id: 'priority-dilemmas', caption: 'Lead a group through a ridge day that goes wrong. The countdown shrinks as stress and fatigue rise; the debrief shows which biases drove your choices.' },
  ],
  whyItMatters: 'Post-accident reviews in mountaineering, avalanche terrain, aviation and wildland firefighting keep finding the same story: skilled people with good equipment who saw the warning signs and carried on. Most outdoor disasters are not failures of knowledge but of judgment under pressure. Structural habits — triggers, checklists, pre-mortems, dissent — are the cheapest safety equipment you will ever carry.',
  science: [
    {
      type: 'md',
      md: `### Only future costs count: a worked example

A simple expected-loss model helps separate sunk costs from the real decision. For each option, multiply the probability of a bad outcome by its consequence:

$$
E[\\text{loss}] = p \\times C
$$

In words: *how likely × how bad.* The costs you have already paid do not appear anywhere in this formula, because they are the same whichever option you pick.

**Illustrative numbers** (made up to show the logic, not real data). You are at the col at 12:15. Storms are forecast from 12:00.

- *Continue* to the summit and back along the crest: 90 min more on exposed ground. Say you judge a 20 % chance of being caught on the crest by lightning, and score that consequence at 100 “harm units”: $E = 0.2 \\times 100 = 20$.
- *Descend now* by the valley: say a 2 % chance of being caught on lower, broken ground, consequence 40 units: $E = 0.02 \\times 40 = 0.8$.

Continuing carries about **25 times** the expected harm. Neither the 4-hour drive nor the 1,000 m already climbed changes either number — they are sunk. Real decisions are rarely this tidy, but the discipline of writing the future-only comparison is the point.

### Why good outcomes teach bad lessons

If a risky choice ends badly only 1 time in 20, then 19 times out of 20 it “works”. Someone who takes it ten times has a $1 - 0.95^{10} \\approx 0.40$ — about 40 % — chance of having met the bad outcome at least once, and a 60 % chance of having learned only that it is fine. This is the arithmetic behind normalization of deviance: **the feedback is mostly misleading**.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain.** A party sets a 13:00 turnaround for a high peak. At 13:00 the summit is “only 30 minutes away”. They continue, summit at 14:00, and descend in failing light and worsening weather. This pattern — late summits, dangerous descents — appears again and again in high-altitude accident reports. The turnaround was right; the problem was not keeping it.

**Coastal (sea kayak).** A group plans a 4 km open crossing with a wind limit of 15 knots. On the beach the wind is 18 knots, but “we’ve paddled three hours to get here and the forecast says it will ease”. They go. Mid-channel, wind against tide builds steep waves. The pre-set limit was the plan; the forecast hope and the sunk three hours overrode it.

**Desert.** A driver on a remote track sees the fuel gauge lower than expected and the track worse than described, but keeps going “because we’re more than halfway”. Halfway is a sunk-cost frame: the question is whether the fuel covers the distance *ahead* with a margin.

**Arctic / subarctic.** A snowmobile group crosses lake ice that sagged and creaked the previous week without breaking. This week they don’t even slow down — normalization of deviance on a surface whose strength changes daily.

**Tropical forest.** A trekker convinced the village is “just past the next ridge” keeps interpreting every stream as the one on the map — confirmation bias and bending the map — until well off route.

**Urban (disaster).** A coastal resident who sat out two earlier hurricane warnings without harm feels little urgency when the third evacuation order comes: “it was fine last time” is outcome bias. The next storm does not care.

**Forest (wildfire).** In the 1949 Mann Gulch fire, a smokejumper crew was overrun when the fire blew up. Their foreman lit an escape fire and lay down in the burned area; others did not follow and 13 men died. Organisational researcher Karl Weick used the case to show how quickly a group’s shared picture of the situation — and its structure — can collapse under stress (Weick, 1993; Lesson 4).`,
    },
  ],
  mistakes: [
    'Myth: “Experience protects you from these traps.” McCammon’s data and aviation research show that experienced people fall into them too — sometimes more, because they have more “it was fine” memories.',
    'Myth: “If you know about a bias you won’t fall for it.” Awareness helps little; structural rules help much more.',
    'Setting a turnaround time and then renegotiating it on the spot.',
    'Judging a decision by its outcome (“we got away with it, so it was right”).',
    'Letting travel time, money or effort already spent decide the next step.',
    'Worrying about the dramatic hazards (bears, sharks) while ignoring the common killers (cold, water, falls, lightning, getting lost).',
    'Asking the group “Everyone OK to continue?” after the leader has already said they want to — that is not a check.',
  ],
  exercises: [
    {
      id: 's15-l2-e1',
      title: 'Trigger card for your next trip',
      level: 2,
      safety: 'home',
      minutes: 30,
      steps: [
        'For a real planned trip, write down in advance: turnaround time, weather trigger (e.g., first thunder, wind over X), daylight trigger (latest time to start the last leg), and water reserve trigger.',
        'Add one checkpoint per leg where you will stop and ask: time, weather, group, daylight — go or no-go?',
        'Share the card with your companions and your trip-plan contact.',
      ],
      success: ['Every trigger is measurable (a time, a number, an observable event).', 'Everyone in the group knows the triggers before leaving.'],
      skill: 'risk-assessment',
    },
    {
      id: 's15-l2-e2',
      title: 'Bias hunt in an accident report',
      level: 3,
      safety: 'home',
      minutes: 45,
      steps: [
        'Find a published accident report or detailed account (e.g., from a national avalanche centre, an alpine club’s annual accident report, or a wildland-fire investigation).',
        'Mark each decision point. For each, note what the people knew at the time — not what we know now.',
        'Label any plan continuation, sunk cost, normalization of deviance, groupthink or tunnel vision, and write one structural countermeasure that might have helped.',
      ],
      success: ['You identified at least three decision points and one plausible countermeasure for each.', 'You avoided hindsight bias by separating what was known then from what is known now.'],
      skill: 'decision-loop',
    },
    {
      id: 's15-l2-e3',
      title: 'Priority Dilemmas: three runs',
      level: 2,
      safety: 'virtual-only',
      minutes: 30,
      steps: [
        'Play the Priority Dilemmas simulation once untimed and choose what you would really do.',
        'Play again timed. Compare the biases in the debrief with the untimed run.',
        'Play a third time, taking a STOP at every scene where your stress is high. Did the missed cues come back?',
      ],
      success: ['You scored at least 80 % on a timed run.', 'You can name the bias behind each poor choice you made.'],
    },
  ],
  simulations: ['priority-dilemmas'],
  quiz: [
    {
      id: 's15-l2-q1',
      kind: 'single',
      prompt: '“We’ve carried the packrafts up 900 m — we’re not walking back down with them unused.” The river below is in spate. Which trap is speaking?',
      choices: [
        { id: 'a', text: 'Sunk cost', why: 'Correct — past effort is being used to justify future risk.' },
        { id: 'b', text: 'Normalization of deviance', why: 'That needs a history of repeated, unpunished deviations.' },
        { id: 'c', text: 'Availability', why: 'Availability is about judging likelihood by how easily examples come to mind.' },
        { id: 'd', text: 'Tunnel vision', why: 'Possibly present too, but the statement is about effort already spent.' },
      ],
      answer: 'a',
      concepts: ['sunk-cost'],
      explanation: 'The 900 m is spent whichever way you decide. The only question is whether paddling a river in spate is a good idea from here.',
    },
    {
      id: 's15-l2-q2',
      kind: 'single',
      prompt: 'According to Kahneman and Klein, when is expert intuition trustworthy?',
      choices: [
        { id: 'a', text: 'Whenever the expert feels confident', why: 'Confidence is not a reliable sign of accuracy.' },
        { id: 'b', text: 'When the environment is regular and the expert has had fast, clear feedback on many past judgments', why: 'Correct — which is why rare, delayed-feedback outdoor hazards are dangerous for intuition.' },
        { id: 'c', text: 'After ten years in any field', why: 'Time alone does not create valid intuition without feedback.' },
        { id: 'd', text: 'Never', why: 'Intuition is excellent in the right conditions — e.g., experienced firefighters reading familiar fires.' },
      ],
      answer: 'b',
      concepts: ['human-factors', 'decisions'],
      explanation: 'Avalanches, lightning and serious falls are rare and usually do not punish bad decisions immediately, so “gut feel” about them is often trained on misleading feedback.',
    },
    {
      id: 's15-l2-q3',
      kind: 'multi',
      prompt: 'Which are **structural** countermeasures to plan continuation — ones that work even when you do not feel biased?',
      choices: [
        { id: 'a', text: 'A turnaround time written in the trip plan and told to everyone', why: 'Yes — a pre-commitment made by your calm self.' },
        { id: 'b', text: 'Promising yourself to “stay objective”', why: 'No — good intentions evaporate under stress.' },
        { id: 'c', text: 'A fixed checkpoint at the col: time, weather, group, daylight — go/no-go', why: 'Yes — a forced moment of reassessment.' },
        { id: 'd', text: 'A pre-mortem the evening before', why: 'Yes — surfaces failure paths and legitimises doubt in advance.' },
        { id: 'e', text: 'Reading about biases once', why: 'Awareness alone has limited effect.' },
      ],
      answer: ['a', 'c', 'd'],
      concepts: ['debiasing', 'plan-continuation', 'trip-plan'],
      explanation: 'Rules, checkpoints and pre-mortems act on the situation rather than relying on in-the-moment willpower.',
    },
    {
      id: 's15-l2-q4',
      kind: 'numeric',
      prompt: 'A risky shortcut “goes wrong” 1 time in 10 (probability 0.1 each time, independent). If you take it 5 times, what is the percentage chance that it goes wrong at least once? (Round to the nearest whole percent.)',
      unit: '%',
      answer: 41,
      tolerance: 1,
      concepts: ['normalization-of-deviance', 'risk'],
      explanation: '$1 - 0.9^5 = 1 - 0.59 = 0.41$, about 41 %. Put the other way, there is a 59 % chance you will have “learned” it is always fine — the arithmetic of normalization of deviance.',
    },
    {
      id: 's15-l2-q5',
      kind: 'truefalse',
      prompt: 'If a risky decision turned out fine, that shows it was a good decision.',
      answer: false,
      concepts: ['normalization-of-deviance', 'decisions'],
      explanation: 'That is outcome bias. A decision should be judged by what was known and what the options were at the time. Lucky escapes are near-misses to learn from.',
    },
    {
      id: 's15-l2-q6',
      kind: 'single',
      prompt: 'Planning a family trip to a coastal national park, which hazard deserves the most attention in your plan?',
      choices: [
        { id: 'a', text: 'Shark attack', why: 'Dreaded and vivid, but very rare compared with drowning.' },
        { id: 'b', text: 'Drowning — rip currents, rock fishing, tidal cut-off, cold water', why: 'Correct — a common killer that feels ordinary.' },
        { id: 'c', text: 'Venomous jellyfish in a temperate sea', why: 'Possible in some places but far less likely to kill than water itself.' },
        { id: 'd', text: 'Strangers at the campsite', why: 'Dreaded, but not the major outdoor risk.' },
      ],
      answer: 'b',
      concepts: ['risk-perception', 'risk'],
      explanation: 'Slovic’s “dread” and availability effects make vivid hazards feel bigger. Plans should target the common killers: water, cold, falls, lightning, getting lost and the drive.',
    },
  ],
  scenario: {
    id: 's15-l2-sc',
    setup: 'You and two friends are sea-kayaking a remote coast. Today’s plan is a 5 km open crossing to an island campsite; your agreed limit was “no crossing if wind is above 15 knots or it is after 15:00”. You have paddled three hours to reach the launch point. It is 14:40; your handheld anemometer reads 17–19 knots, and the forecast said the wind would ease “later this afternoon”. The last campsite behind you is 40 minutes back. Sunset is at 18:30.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Go now: you are three hours in, and the forecast says it will ease.', why: 'Sunk cost plus hopeful reading of the forecast, against your own pre-set limit.' },
      { id: 'b', text: 'Wait on the beach until the wind drops, then cross whenever it does.', why: 'Waiting is sensible, but “whenever” quietly breaks the 15:00 rule and risks a crossing at dusk.' },
      { id: 'c', text: 'Keep the rule: no crossing today. Camp on this beach or return to the last site; text your contact the change; reassess the crossing tomorrow morning.', why: 'Best: the pre-set triggers do their job, the daylight margin stays, and the contact knows the new plan.' },
      { id: 'd', text: 'Take a vote; if two out of three want to go, go.', why: 'A vote in which everyone knows the others are tired and keen is not a check on bias — and it overrides a rule you agreed when calm.' },
    ],
    best: 'c',
    debrief: 'This is exactly why limits are set in advance: at the launch, sunk cost (three hours), plan continuation (the island camp) and hopeful forecast reading all push the same way. Changing the plan also means updating the trip plan with your contact (Stage 1) and protecting the daylight budget. The crossing will still be there tomorrow — you might not be.',
    concepts: ['plan-continuation', 'sunk-cost', 'trip-plan', 'daylight'],
  },
  summary: [
    'Intuition is reliable only in regular environments with fast feedback; rare outdoor hazards give **misleading feedback**.',
    '**Plan continuation:** carrying on after conditions change — fix with **pre-set triggers**.',
    '**Sunk cost:** past effort justifying future risk — only future costs count.',
    '**Normalization of deviance:** near-misses become normal — treat them as free lessons.',
    '**Tunnel vision:** stress and goals narrow attention — checkpoints and shared watching.',
    '**Risk perception** favours dramatic hazards; plan for the common killers.',
    'Beat bias with **structure**: triggers, checklists, pre-mortems, outside view, genuine dissent, reviews.',
  ],
  furtherReading: ['kahneman-tfs', 'mccammon-traps', 'vaughan-challenger', 'klein-sources-of-power'],
  references: ['mccammon-traps', 'kahneman-tfs', 'tversky-kahneman-1974', 'kahneman-klein-2009', 'klein-sources-of-power', 'orasanu-2001', 'arkes-blumer-1985', 'vaughan-challenger', 'rasmussen-1997', 'easterbrook-1959', 'slovic-1987', 'klein-premortem-2007', 'weick-1993'],
}
