/**
 * FILE: data.jsx
 * Tech tree structure with updated flavor text.
 */
export const initialData = {
  nodes: [
    {
      id: "armed-patrols",
      type: "custom",
      data: {
        label: "Field Reports Network",
        cost: 500,
        building: "City Watch",
        income: "—",
        rewards:
          "Per adventure, before entering a dangerous location, ask one Watch question: What is the most common threat here? What mistake do others usually make? What sign should we watch for?",
        flavor:
          "The Watch formalizes reporting: patrol notes are copied, summarized, and circulated through runners, merchants, and wardens. Patterns begin to emerge—recurring dangers, failed approaches, and early warning signs. Even far from Andrios, the Council benefits from knowing how others usually get it wrong.",
      },
      position: { x: 50, y: 0 },
    },
    {
      id: "watch-barracks",
      type: "custom",
      data: {
        label: "Rapid Response Doctrine",
        cost: 1000,
        building: "City Watch",
        income: "—",
        rewards: "Once per adventure, ignore surprise in one combat",
        flavor:
          "The Watch formalizes response doctrine: standing alerts, escalation signals, and drilled reactions to the most common failure modes. Briefings are no longer about where trouble happens, but how it begins. Even far from Andrios, the Council moves as if warned seconds before the ambush is sprung.",
      },
      position: { x: 350, y: 0 },
    },
    {
      id: "elite-guard-program",
      type: "custom",
      data: {
        label: "Elite Guard Program",
        cost: 1500,
        building: "City Watch",
        income: "—",
        rewards: "Once per arc, declare allied scouts were active in the area",
        flavor:
          "Selection trials begin, testing quiet endurance, streetcraft, and field discipline. The program builds a small cadre of scouts and specialists who train with couriers and foresters, learning routes beyond the city and the habits of hostile terrain. Their reports read like the Council’s own planning notes.",
      },
      position: { x: 650, y: 0 },
    },
    {
      id: "civic-wardens",
      type: "custom",
      data: {
        label: "Civic Wardens",
        cost: 2500,
        building: "City Watch",
        income: "—",
        rewards:
          "Once per arc: mid-scene reinforcements, secure extraction, or battlefield preparation",
        flavor:
          "The Wardens get dedicated kit, standing warrants, and pre-arranged mobilization routes, some mundane and some Nexus-supported. Their readiness isn’t about holding streets; it’s about showing up where the Council’s story turns and making the next ten minutes go your way. When called, they arrive with a plan, not a panic.",
      },
      position: { x: 950, y: 0 },
    },

    {
      id: "expanded-warehouses",
      type: "custom",
      data: {
        label: "Expanded Warehouses",
        cost: 500,
        building: "The River Store",
        income: "+10%",
        rewards:
          "When provisioning or at Council supply caches, freely acquire mundane expedition gear",
        flavor:
          "The River Store annexes nearby storage and builds clean, dry racks for rope, timber, canvas, and tools. Inventory becomes visible: tagged crates, standard packs, and a clerk who can outfit a party without asking questions. Expeditions stop ‘shopping’ and start ‘issuing supplies’.",
      },
      position: { x: 50, y: 250 },
    },
    {
      id: "trade-contracts",
      type: "custom",
      data: {
        label: "Trade Contracts",
        cost: 1000,
        building: "The River Store",
        income: "+5%",
        rewards:
          "Uncommon adventuring gear always available when provisioning; once per arc, have one item delivered to your current location",
        flavor:
          "Signed contracts appear with caravan masters, triton ferries, smiths, and herbalists, specifying delivery windows, quality marks, and penalties for delays. A backroom becomes a procurement desk, stamped with seals rather than price tags. Uncommon gear isn’t ‘found’; it’s ‘scheduled’.",
      },
      position: { x: 350, y: 250 },
    },
    {
      id: "merchant-guild",
      type: "custom",
      data: {
        label: "Merchant Guild",
        cost: 1500,
        building: "The River Store",
        income: "+15%",
        rewards:
          "Once per adventure, declare a resupply cache arranged by Andrios. Any reasonable consumables you have expended during this adventure are restored.",
        flavor:
          "The Store becomes a hub: guild badges, standardized weights, and a courier board with routes pinned like veins across the region. Merchants coordinate rather than compete, and shortages get solved by shifting stock, not raising prices. Andrios starts feeling… supplied, even when you’re nowhere near it.",
      },
      position: { x: 650, y: 250 },
    },
    {
      id: "trade-fleet",
      type: "custom",
      data: {
        label: "Trade Fleet",
        cost: 2500,
        building: "The River Store",
        income: "+10%",
        rewards:
          "Once per adventure, declare a logistical solution arranged by Andrios. This may replace, acquire, or reposition any reasonable non-artifact equipment, supplies, mounts, or vehicles needed for the current adventure.",
        flavor:
          "The River Store no longer reacts to demand—it anticipates it. Dedicated vessels, contracted caravans, and pre-negotiated staging points turn trade routes into a living network. By the time the Council acts, the solution is already in motion: gear staged ahead, transport waiting, and contingencies quietly paid for. Logistics stop being a question and start being an assumption.",
      },
      position: { x: 950, y: 250 },
    },

    {
      id: "bounty-board",
      type: "custom",
      data: {
        label: "Bounty Board",
        cost: 250,
        building: "The Huntress",
        income: "+2%",
        rewards:
          "Once per arc, generate a local bounty originating near Andrios or along its trade routes. Completing the bounty guarantees a gold payout. Completing the bounty also grants one additional use of any unlocked House of Healing upgrade.",
        flavor:
          "When the Council answers a bounty, the city pays attention. The fight is watched, recorded, and learned from—every wound treated, every fragment salvaged, every hard lesson carried home. Gold is claimed, yes, but so is understanding, and the House of Healing works longer and deeper in the aftermath, drawing on what the Council brought back. Each hunt leaves Andrios a little wiser, and the Council a little better prepared for the next.",
      },
      position: { x: 50, y: 500 },
    },
    {
      id: "hunter-circles",
      type: "custom",
      data: {
        label: "Hunter Circles",
        cost: 250,
        building: "The Huntress",
        income: "+3%",
        rewards:
          "Once per adventure, after defeating a creature, choose one: gain advantage on the next crafting, alchemical, or identification check related to that creature type, or reduce the time required for such work to negligible.",
        flavor:
          "Within the circles, hunts are dissected as carefully as the quarry itself. Veterans trade methods, not trophies: where to strike, what to preserve, and which details matter later. What the Council brings back is not raw material, but understanding, refined through shared experience and passed on with quiet precision.",
      },
      position: { x: 350, y: 500 },
    },
    {
      id: "master-hunts",
      type: "custom",
      data: {
        label: "Master Hunts",
        cost: 750,
        building: "The Huntress",
        income: "+5%",
        rewards: "Once per hunt, gain a powerful situational consumable",
        flavor:
          "Master hunters are hired, and the lodge posts ‘seasonal quarry’ like a menu of legends. Preparations become ritual: special oils, warded snares, and field kits tuned to one creature’s habits. The payoff isn’t just coin; it’s a singular edge: a brew, a charm, a tool made for that one kind of problem.",
      },
      position: { x: 650, y: 500 },
    },
    {
      id: "trophy-hall",
      type: "custom",
      data: {
        label: "Trophy Hall",
        cost: 1250,
        building: "The Huntress",
        income: "+5%",
        rewards: "Begin one hunt with full intel on the target",
        flavor:
          "An annex becomes a hall with mounted relic-horns, stitched hides, annotated skulls, and plaques describing what worked and what didn’t. Scholars, wardens, and would-be heroes visit just to study the exhibits. The Huntress stops guessing at monsters; it remembers them. That memory becomes actionable intel.",
      },
      position: { x: 950, y: 500 },
    },

    {
      id: "apothecary-expansion",
      type: "custom",
      data: {
        label: "Apothecary Expansion",
        cost: 500,
        building: "House of Healing",
        income: "+5%",
        rewards: "Gain 2 greater healing potions per adventure",
        flavor:
          "The House adds benches, clean glassware, and proper stills, so no more brewing beside triage cots. Reagents get labeled and rotated, and a small storeroom is kept ‘for the Council’ as standard practice. Healing becomes consistent: same bottle, same effect, every time.",
      },
      position: { x: 50, y: 750 },
    },
    {
      id: "specialized-elixirs",
      type: "custom",
      data: {
        label: "Specialized Elixirs",
        cost: 1000,
        building: "House of Healing",
        income: "+5%",
        rewards:
          "Per adventure, gain resistance, antitoxin, or restoration elixirs (issued when provisioning or delivered in the field)",
        flavor:
          "A reference cabinet appears with symptom tables, toxin sketches, and little notes from hunters and wardens pinned in the margins. The House begins brewing for specific threats rather than generic injury. Shelves fill with bottles that look identical until you read the tiny script on the tag, and realize it’s exactly what you needed.",
      },
      position: { x: 350, y: 750 },
    },
    {
      id: "advanced-remedies",
      type: "custom",
      data: {
        label: "Advanced Remedies",
        cost: 1500,
        building: "House of Healing",
        income: "+5%",
        rewards: "Commission one custom potion per arc",
        flavor:
          "A commission desk opens with requests written like contracts, with ingredients, risks, and desired outcomes. The House starts using expedition reports and scholarly input to design solutions ahead of time. When you ask for a remedy now, you aren’t buying a potion. You’re ordering an answer.",
      },
      position: { x: 650, y: 750 },
    },
    {
      id: "alchemical-mastery",
      type: "custom",
      data: {
        label: "Alchemical Mastery",
        cost: 2500,
        building: "House of Healing",
        income: "—",
        rewards:
          "Once per arc, the House of Healing prepares a masterwork draught. For the next adventure, the party cannot suffer long-term or lingering effects from injuries, poisons, curses, or environmental hazards.",
        flavor:
          "At this level, the House no longer waits for wounds to arrive. Protocols are written in advance, mixtures prepared for threats not yet named. When the Council sets out, their bodies are already defended by careful foresight—chemistry, magic, and experience aligned to ensure that some kinds of harm simply never take hold.",
      },
      position: { x: 950, y: 750 },
    },

    {
      id: "reinforced-forges",
      type: "custom",
      data: {
        label: "Reinforced Forges",
        cost: 500,
        building: "The Bronze Hoof",
        income: "+5%",
        rewards: "Upgrade mundane gear to masterwork",
        flavor:
          "The forge expands: better bellows, stronger tongs, harder anvils, and a quench trough that doesn’t crack when the work gets serious. The smith stops ‘making do’ and starts producing gear meant to survive real expeditions. Even mundane steel comes out cleaner, straighter, and dependable.",
      },
      position: { x: 50, y: 1000 },
    },
    {
      id: "masterwork-arms",
      type: "custom",
      data: {
        label: "Masterwork Arms",
        cost: 1000,
        building: "The Bronze Hoof",
        income: "+5%",
        rewards:
          "Before an adventure, declare one piece of gear has been pre-fitted for the mission, granting advantage on one related attack, save, or check during that adventure.",
        flavor:
          "Before the Council departs, the smiths of the Bronze Hoof listen carefully. Where they are going, what they expect to face, what failed them last time. Plates are adjusted, edges reforged, grips rewrapped. Nothing flashy, nothing permanent, just the quiet confidence that when the moment comes, one piece of gear will feel as if it was made for this.",
      },
      position: { x: 350, y: 1000 },
    },
    {
      id: "enchanted-fittings",
      type: "custom",
      data: {
        label: "Enchanted Fittings",
        cost: 1500,
        building: "The Bronze Hoof",
        income: "—",
        rewards:
          "Once per adventure, designate one equipped weapon or armor. For the duration of that adventure, it gains a minor magical property appropriate to the mission (chosen with the GM).",
        flavor:
          "By now, the Bronze Hoof no longer forges finished things. Slots are left open, channels cut shallow, and sigils set to be replaced. Before the Council departs, one piece of gear is quietly prepared, its fittings aligned to the road ahead. For this journey, steel and magic move in step, shaped not to endure forever, but to matter when it counts.",
      },
      position: { x: 650, y: 1000 },
    },
    {
      id: "relic-reinforcement",
      type: "custom",
      data: {
        label: "Relic Reinforcement",
        cost: 2500,
        building: "The Bronze Hoof",
        income: "—",
        rewards:
          "Once per arc, bind a magic item to the Council’s legacy. Choose one permanent enhancement: the item gains a named trait, awakens a dormant aspect, or acquires a unique passive effect tied to how the Council has used it.",
        flavor:
          "Some tools endure long enough to be shaped by the hands that wield them. In the forges of the Bronze Hoof, such items are not remade, but acknowledged. Marks are set, flaws reinforced, and meaning sealed into the metal itself. From that moment on, the item carries more than magic. It carries memory, purpose, and a future bound to the Council’s deeds.",
      },
      position: { x: 950, y: 1000 },
    },

    {
      id: "deepwood-patrols",
      type: "custom",
      data: {
        label: "Pathfinders’ Lore",
        cost: 500,
        building: "Warden's Den",
        income: "—",
        rewards:
          "Once per adventure, the party ignores natural terrain penalties while traveling or fighting in a wilderness environment.",
        flavor:
          "Before the Council departs, the wardens do not offer escort or protection. They offer stories, maps drawn from memory, and warnings learned the hard way. Rivers that flood without warning, slopes that give way under weight, forests that punish the careless. When the Council steps into the wilds, they do so already knowing where to place their feet.",
      },
      position: { x: 50, y: 1250 },
    },
    {
      id: "border-wards",
      type: "custom",
      data: {
        label: "Language of the Wild",
        cost: 1000,
        building: "Warden's Den",
        income: "—",
        rewards:
          "Once per adventure, the party automatically succeeds on a tracking or navigation check in a natural environment.",
        flavor:
          "The wardens teach more than routes. They teach what bent grass means, how stone remembers weight, and which silences are wrong. By the time the Council sets out, the land itself has begun to speak in patterns they recognize. When the moment comes, they do not guess or search. They simply know where to go.",
      },
      position: { x: 350, y: 1250 },
    },
    {
      id: "sacred-groves",
      type: "custom",
      data: {
        label: "Sacred Groves",
        cost: 1500,
        building: "Warden's Den",
        income: "+5%",
        rewards:
          "Once per adventure, gain rare natural reagents usable as spell components",
        flavor:
          "Protected clearings are established, places where harvesting happens at the right hour, with the right words spoken. The Den adds drying frames, resin presses, and sealed jars stamped with Warden marks. Reagents arrive ‘alive’ with power, fit for spells that demand something rarer than coin.",
      },
      position: { x: 650, y: 1250 },
    },
    {
      id: "primal-guardians",
      type: "custom",
      data: {
        label: "Primal Guardians",
        cost: 2500,
        building: "Warden's Den",
        income: "—",
        rewards:
          "Once per arc, summon a primal entity to reshape a battlefield",
        flavor:
          "With Nexus projection available, the Wardens can carry their calls beyond the local woods, and pacts become portable. The Den keeps etched talismans and binding cords ready for the Council’s use. When invoked, the answer feels ancient and practical: the land itself stepping in as an ally.",
      },
      position: { x: 950, y: 1250 },
    },

    {
      id: "tax-reform",
      type: "custom",
      data: {
        label: "Tax Reform",
        cost: 500,
        building: "Council of Commerce",
        income: "+25%",
        rewards:
          "Andrios’ weekly income increases significantly as taxation, tariffs, and collection systems are standardized and enforced.",
        flavor:
          "Ledgers are unified, exemptions reviewed, and informal arrangements brought into the open. The changes are not popular, but they are effective. Coin that once slipped through cracks now finds its way back into the city’s vaults, giving Andrios a steadier pulse and a future that can finally be planned around.",
      },
      position: { x: 50, y: 1500 },
    },
    {
      id: "investment-charters",
      type: "custom",
      data: {
        label: "Investment Charters",
        cost: 1000,
        building: "Council of Commerce",
        income: "+5%",
        rewards:
          "Once per arc, during an adventure, declare that the Council had already planned and paid for a reasonable piece of equipment, information, or logistical support that now proves useful.",
        flavor:
          "Charters are issued with your seal, credit backed by the city and the Council’s reputation. Tradesfolk start accepting ‘Council paper’ as readily as coin, because they know it gets honored. This is how preparations happen even when you didn’t have time to make them first.",
      },
      position: { x: 350, y: 1500 },
    },
    {
      id: "trade-monopolies",
      type: "custom",
      data: {
        label: "Trade Monopolies",
        cost: 1500,
        building: "Council of Commerce",
        income: "+10%",
        rewards:
          "Once per arc, leverage Andrios’ trade monopolies to obtain access to something normally denied to outsiders, such as restricted passage, controlled services, or exclusive expertise.",
        flavor:
          "Exclusive rights are negotiated: priority routes, reserved stock, and ‘first refusal’ agreements that other buyers can’t touch. The Commerce Council keeps a registry of controlled goods and who owes the Council favors. When you need something difficult, the city doesn’t search. It claims.",
      },
      position: { x: 650, y: 1500 },
    },
    {
      id: "economic-leverage",
      type: "custom",
      data: {
        label: "Economic Leverage",
        cost: 2500,
        building: "Council of Commerce",
        income: "+5%",
        rewards:
          "Once per arc, declare that Andrios’ economic influence decisively shapes a situation. A faction, settlement, or organization must either comply with the Council’s objective or suffer meaningful consequences determined by the GM.",
        flavor:
          "At a certain scale, wealth stops being counted and starts being felt. Trade routes tighten, credit dries up, and promises quietly expire. Andrios does not need to threaten. The cost of standing against it simply becomes too high to ignore.",
      },
      position: { x: 950, y: 1500 },
    },

    {
      id: "festival-program",
      type: "custom",
      data: {
        label: "Cultivated Renown",
        cost: 250,
        building: "Council of Culture",
        income: "+5%",
        rewards:
          "Once per adventure, the party gains advantage on social checks as their reputation and cultural standing shape how others receive them.",
        flavor:
          "Songs travel faster than caravans. Stories are repeated, embellished, argued over. By the time the Council arrives, they are rarely strangers. Some have heard of their deeds, others of their failures, but few meet them without expectation. Words land differently when the listener believes they are speaking to someone who matters.",
      },
      position: { x: 50, y: 1750 },
    },
    {
      id: "relic-exhibition",
      type: "custom",
      data: {
        label: "Archive of True Names",
        cost: 1000,
        building: "Council of Culture",
        income: "+5%",
        rewards:
          "Once per arc, fully and safely uncover the true nature of an ancient or mythically significant item. This reveals its powers, hidden effects, historical origin, known consequences of its use, and any dangers that would normally only be discovered through experimentation or story progression.",
        flavor:
          "Some artifacts are dangerous not because of what they do, but because of what they mean. Within the Exhibition, objects are studied alongside the stories that surround them. The Council does not merely learn how such things function, but how they have shaped the world before, and what price others paid for wielding them unwisely.",
      },
      position: { x: 350, y: 1750 },
    },
    {
      id: "cultural-prestige",
      type: "custom",
      data: {
        label: "Cultural Prestige",
        cost: 1250,
        building: "Council of Culture",
        income: "+5%",
        rewards:
          "Once per arc, establish the Council as a recognized authority on a specific matter (such as corruption, ancient artifacts, divine affairs, warfare, or diplomacy) within a region or among a faction. While this holds, the Council may act, investigate, or intervene in that domain without needing permission or justification.",
        flavor:
          "Through patronage, performance, and careful repetition, the Council’s name becomes tied to certain truths. When questions arise in those domains, people look to the Council not for permission, but for answers. Authority settles quietly, until one day it is simply assumed.",
      },
      position: { x: 650, y: 1750 },
    },
    {
      id: "myth-archive",
      type: "custom",
      data: {
        label: "Doctrinal Shift",
        cost: 2000,
        building: "Council of Culture",
        income: "—",
        rewards:
          "Once per arc, redefine a widely held belief, doctrine, or cultural truth across regions influenced by Andrios. This may elevate, diminish, or invert how a god, ideal, institution, or cosmic force is viewed by the general population. From that point on, this belief becomes the dominant assumption shaping worship, resistance, laws, and everyday behavior, unless overturned by divine-scale intervention or world-altering events.",
        flavor:
          "Faith does not collapse all at once. It erodes, redirects, and reshapes itself through repetition, omission, and carefully chosen examples. Songs change. Festivals shift their focus. Teachings are amended. When the Council of Culture enacts a doctrinal shift, belief itself moves, and even the gods feel the ground give way beneath them.",
      },
      position: { x: 950, y: 1750 },
    },

    {
      id: "research-grants",
      type: "custom",
      data: {
        label: "Research Grants",
        cost: 500,
        building: "Council of Education",
        income: "—",
        rewards: "Ask one research question per week",
        flavor:
          "The Education Council funds dedicated inquiry: scribes, assistants, and time carved out for real investigation. Questions stop languishing in taverns and start landing on desks with deadlines. You feel the difference in the answers: fewer guesses, more citations, more actionable insight.",
      },
      position: { x: 50, y: 2000 },
    },
    {
      id: "scholarly-orders",
      type: "custom",
      data: {
        label: "Advanced Curriculum",
        cost: 1000,
        building: "Council of Education",
        income: "—",
        rewards:
          "Through formal instruction and sustained study, a member of the Council may invest in advanced education. Each time this benefit is purchased, choose one Intelligence-based skill. The Council gains permanent proficiency in that skill, or expertise if already proficient. Only one skill may benefit from this at any time; investing again replaces the previously chosen skill.",
        flavor:
          "Knowledge at this level is not casual. It requires tutors, texts, examinations, and time. Each investment by the Council reshapes its focus, directing scholars and instructors toward a single discipline until mastery is achieved. Such dedication cannot be spread thin—when priorities change, so too does the curriculum.",
      },
      position: { x: 350, y: 2000 },
    },
    {
      id: "arcane-curriculum",
      type: "custom",
      data: {
        label: "Arcane Curriculum",
        cost: 1500,
        building: "Council of Education",
        income: "—",
        rewards:
          "All spellcasters in the Council gain the Ritual Casting feature. In addition, each spellcaster may learn one ritual spell of a level they are able to cast (up to their highest spell slot level). This ritual may be chosen from any spell list, subject to GM approval, and may be replaced whenever the spellcaster gains access to higher-level spell slots.",
        flavor:
          "Magic in Andrios is no longer passed down by instinct or guarded tradition. Through the Arcane Curriculum, spellwork is formalized, practiced, and taught with discipline. Rituals are studied as structured procedures rather than personal secrets, allowing even complex magic to be performed through preparation and patience rather than haste.",
      },
      position: { x: 650, y: 2000 },
    },

    {
      id: "formal-embassy",
      type: "custom",
      data: {
        label: "Formal Embassy",
        cost: 500,
        building: "Setessan Embassy",
        income: "+5%",
        rewards:
          "Advantage on diplomacy with allied factions, wherever you encounter them",
        flavor:
          "The small house is refitted into an official embassy with Setessan banners, a sealed archive, and a receiving room that follows protocol to the letter. Courtesies become predictable, and that predictability builds trust. Deals feel less like favors and more like policy.",
      },
      position: { x: 50, y: 2250 },
    },
    {
      id: "diplomatic-staff",
      type: "custom",
      data: {
        label: "Diplomatic Staff",
        cost: 750,
        building: "Setessan Embassy",
        income: "+5%",
        rewards:
          "Once per arc, call upon the Embassy’s envoys to intervene on the Council’s behalf. Declare one political, legal, or bureaucratic obstacle reduced, delayed, or reframed in the Council’s favor.",
        flavor:
          "An envoy team arrives: scribes, translators, quiet messengers, and a senior aide who ‘knows everyone.’ They keep schedules, record debts, and track who is drifting toward conflict. Information begins arriving like mail, not like rumor.",
      },
      position: { x: 350, y: 2250 },
    },
    {
      id: "treaty-chambers",
      type: "custom",
      data: {
        label: "Treaty Chambers",
        cost: 1250,
        building: "Setessan Embassy",
        income: "+5%",
        rewards: "Once per arc, force a parley instead of combat",
        flavor:
          "A purpose-built chamber is added with neutral seating, oath-binding language, and ritual courtesies designed to lower weapons. The space is engineered for conversation to happen even when everyone arrived ready to fight. It’s not magic; it’s structure that makes violence… inconvenient.",
      },
      position: { x: 650, y: 2250 },
    },
    {
      id: "regional-accords",
      type: "custom",
      data: {
        label: "Binding Accords",
        cost: 2000,
        building: "Setessan Embassy",
        income: "+10%",
        rewards:
          "Once per arc, impose a binding diplomatic framework on an ongoing conflict involving one or more factions. Define the terms under which the conflict may proceed (such as enforced neutrality, limited engagement, controlled escalation, or formal arbitration). Factions are compelled to act within this framework unless they openly and publicly break the accord.",
        flavor:
          "At this stage, the Embassy no longer negotiates outcomes—it defines boundaries. Accords drafted in Andrios carry recognition, expectation, and consequence. When the Council invokes such an agreement, conflict does not end, but it changes shape, constrained by terms the world understands it cannot ignore without cost.",
      },
      position: { x: 950, y: 2250 },
    },

    {
      id: "permanent-camp",
      type: "custom",
      data: {
        label: "Mapped Approaches",
        cost: 500,
        building: "Lagonna Lodge Camp",
        income: "+10%",
        rewards:
          "When the Council enters a ruin north of Andrios, they begin with reliable maps of the upper levels and advance knowledge of one dungeon feature, environmental hazard, or resident faction.",
        flavor:
          "By funding surveyors and demanding reports, the Council ensures that no expedition begins blind. Chalk marks, partial maps, and hard-earned notes turn unknown entrances into informed approaches.",
      },
      position: { x: 50, y: 2500 },
    },
    {
      id: "survey-teams",
      type: "custom",
      data: {
        label: "Secured Staging Sites",
        cost: 750,
        building: "Lagonna Lodge Camp",
        income: "+5%",
        rewards:
          "Once per dungeon, the Council may declare a safe fallback point near the entrance: a resupply cache, extraction route, or defensible rest location prepared in advance.",
        flavor:
          "The Council’s influence turns temporary camps into planned footholds. Supplies are cached, escape routes cleared, and signals agreed upon long before steel is drawn.",
      },
      position: { x: 350, y: 2500 },
    },
    {
      id: "deep-expeditions",
      type: "custom",
      data: {
        label: "Controlled Deep Forays",
        cost: 1250,
        building: "Lagonna Lodge Camp",
        income: "+10%",
        rewards:
          "Once per arc, the Council may designate a ruin for aggressive pre-delving. When they later explore it, one major obstacle in the dungeon has already been weakened, altered, or partially exhausted.",
        flavor:
          "With coin and authority, the Council pushes the Lodge beyond caution. These forays do not conquer the depths—but they leave scars, spent traps, and disrupted defenses for those who follow.",
      },
      position: { x: 650, y: 2500 },
    },
    {
      id: "relic-logistics",
      type: "custom",
      data: {
        label: "Breached Sealed Depths",
        cost: 2000,
        building: "Lagonna Lodge Camp",
        income: "+15%",
        rewards:
          "Once per arc, the Lagonna Lodge identifies a sealed or forbidden ruin north of Andrios and uncovers the means to breach its deepest threshold. This unlocks a unique high-risk dungeon accessible only to the Council, designed to reward Relic- or Legendary-tier items. The Lodge cannot proceed beyond the opening—the depths await the Council alone.",
        flavor:
          "Some ruins were never meant to be entered lightly. Through loss, study, and persistence, the Lodge finally learns where these places lie—and how they may be opened. They do not descend. They mark the breach, withdraw, and wait. What lies beyond is not salvage. It is a trial meant for those who rule.",
      },
      position: { x: 950, y: 2500 },
    },

    {
      id: "river-docks",
      type: "custom",
      data: {
        label: "River Docks",
        cost: 2000,
        building: "Port",
        income: "+40%",
        rewards: "Enables sea travel and naval logistics",
        flavor:
          "Timber pilings go in, cranes appear, and the riverfront transforms into a working spine for the city. Traders schedule arrivals, cargo gets tallied, and money starts circulating faster. The Port doesn’t just add ships. It multiplies everything connected to trade.",
      },
      position: { x: 50, y: 2750 },
    },
    {
      id: "port-authority",
      type: "custom",
      data: {
        label: "Port Authority",
        cost: 750,
        building: "Port",
        income: "+5%",
        rewards:
          "Once per arc, exert Port Authority control over trade routes. Either ensure the immediate delivery of a specific item, cargo, or message to the Council regardless of distance, or intercept and detain a known shipment before it reaches its intended recipient.",
        flavor:
          "A formal authority is installed: clerks, inspectors, manifests, and a small office where stamps decide a cargo’s fate. Delays become deliberate, and speed becomes purchasable. When you need something moved (or stopped), the Port can do it with a signature.",
      },
      position: { x: 350, y: 2750 },
    },
    {
      id: "shipyards",
      type: "custom",
      data: {
        label: "Shipyards",
        cost: 1250,
        building: "Port",
        income: "+5%",
        rewards:
          "Once per arc, declare naval superiority in a coastal or riverine region. The Council may arrive, retreat, pursue, or reposition via sea as if conditions were favorable, and hostile forces cannot meaningfully contest this movement.",
        flavor:
          "The shipyards of Andrios no longer build vessels in isolation. Hulls are laid with purpose, crews trained for doctrine, and routes planned before keels touch water. When the Council needs the sea to open (or to close) it does.",
      },
      position: { x: 650, y: 2750 },
    },
    {
      id: "trade-fleets",
      type: "custom",
      data: {
        label: "Aerial Fleets",
        cost: 2000,
        building: "Port",
        income: "+10%",
        rewards:
          "All Andrios-controlled trade and military vessels are permanently retrofitted with arcane propulsion. Ships can travel by air, ignoring terrain, borders, naval blockades, and conventional interception unless opposed by comparable arcane or divine power.",
        flavor:
          "With arcane power distributed at scale, hulls no longer cling to the water. Trade ships rise into the sky, bearing cargo, soldiers, and authority alike. Routes once measured in weeks are redrawn overnight, and no harbor wall or hostile fleet can bar passage unless it can challenge Andrios in the air.",
      },
      position: { x: 950, y: 2750 },
    },

    {
      id: "aetherium-foundations",
      type: "custom",
      data: {
        label: "Aetherium Foundations",
        cost: 750,
        building: "Aetherium Nexus",
        income: "—",
        rewards: "Enables all magic-powered upgrades",
        flavor:
          "A dedicated structure rises with stonework cut to arcane tolerances, with channels designed to hold power without cracking. It’s inert at first, like a forge before the fire. But it makes one thing possible: magic as infrastructure, not improvisation.",
      },
      position: { x: 50, y: 3000 },
    },
    {
      id: "conduit-arrays",
      type: "custom",
      data: {
        label: "Conduit Arrays",
        cost: 1250,
        building: "Aetherium Nexus",
        income: "—",
        rewards:
          "A permanent arcane barrier envelops Andrios. The city is protected from large-scale magical assault, teleportation intrusion, planar breaches, and uncontrolled divine or extraplanar effects unless enacted by a power of comparable arcane or divine magnitude.",
        flavor:
          "The Nexus no longer merely stores power—it distributes it defensively. Conduit Arrays lace the city with overlapping wards and stabilizers, turning Andrios into a single, shielded arcane structure. Spells falter, intrusions strain, and hostile forces discover that reaching the city now requires far more than intent.",
      },
      position: { x: 350, y: 3000 },
    },
    {
      id: "power-regulation",
      type: "custom",
      data: {
        label: "Power Regulation",
        cost: 1750,
        building: "Aetherium Nexus",
        income: "—",
        rewards:
          "Once per arc, the Council may overchannel arcane output. When a spell or magic item effect they control would deal damage or force a saving throw, treat the damage as if it rolled the maximum possible result, or treat one affected creature as having failed its saving throw.",
        flavor:
          "Control systems follow: dampeners, valves, measured outputs, and safety protocols written like engineering specs. The difference is felt immediately: power stops spiking and starts obeying. When you push a spell or item beyond its normal limits, it’s a calculated surge, not a gamble.",
      },
      position: { x: 650, y: 3000 },
    },
    {
      id: "arcane-distribution",
      type: "custom",
      data: {
        label: "Arcane Distribution",
        cost: 2000,
        building: "Aetherium Nexus",
        income: "—",
        rewards:
          "Nexus-based abilities usable anywhere. Once per adventure, the Council may project Nexus power into the field. Choose one spell, magic item effect, or ability; its range is doubled and it ignores environmental or planar interference.",
        flavor:
          "Anchors and relay sigils are established beyond the building, quiet marks in stone, metal, and carved wood that let power travel. The city gains invisible lines of reach. Nexus-backed support becomes something you can access on the road, in a ruin, or in the middle of a crisis.",
      },
      position: { x: 950, y: 3000 },
    },
    {
      id: "teleportation-gate",
      type: "custom",
      data: {
        label: "Worldgate Nexus",
        cost: 2500,
        building: "Aetherium Nexus",
        income: "—",
        rewards:
          "A permanent Worldgate is established in Andrios. The Council may create stable, instant portals to any known or previously visited location. Travel through the Worldgate is immediate, safe, and repeatable, allowing unrestricted movement of the Council, allies, forces, and materials.",
        flavor:
          "The Nexus reaches beyond distance and geography. Leylines fold, space yields, and Andrios becomes a fixed point in the world’s fabric. From this moment on, distance is no longer a barrier—it is a choice.",
      },
      position: { x: 1250, y: 3000 },
    },
    {
      id: "ascendant-andrios",
      type: "custom",
      data: {
        label: "Ascendant Andrios",
        cost: 4000,
        building: "Aetherium Nexus",
        income: "+25%",
        rewards:
          "Andrios becomes a permanently airborne city, sustained by the Nexus. The Council may reposition the city anywhere in the world between arcs. Wherever Andrios settles, it exerts overwhelming logistical, political, and arcane presence.",
        flavor:
          "The ground releases its hold on Andrios. Streets lift, towers realign, and the city rises as a single, deliberate act of will. No longer bound to borders or geography, Andrios becomes a moving axis of power—arriving not as an army, but as inevitability.",
      },
      position: { x: 1550, y: 3000 },
    },
  ],
  edges: [
    {
      id: "e1",
      source: "armed-patrols",
      target: "watch-barracks",
      animated: true,
    },
    {
      id: "e2",
      source: "watch-barracks",
      target: "elite-guard-program",
      animated: true,
    },
    {
      id: "e3",
      source: "elite-guard-program",
      target: "civic-wardens",
      animated: true,
    },
    {
      id: "e4",
      source: "arcane-distribution",
      target: "civic-wardens",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e5",
      source: "expanded-warehouses",
      target: "trade-contracts",
      animated: true,
    },
    {
      id: "e6",
      source: "trade-contracts",
      target: "merchant-guild",
      animated: true,
    },
    {
      id: "e7",
      source: "merchant-guild",
      target: "trade-fleet",
      animated: true,
    },
    {
      id: "e8",
      source: "investment-charters",
      target: "trade-contracts",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e9",
      source: "shipyards",
      target: "trade-fleet",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e10",
      source: "arcane-distribution",
      target: "trade-fleet",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e11",
      source: "bounty-board",
      target: "hunter-circles",
      animated: true,
    },
    {
      id: "e12",
      source: "hunter-circles",
      target: "master-hunts",
      animated: true,
    },
    {
      id: "e13",
      source: "master-hunts",
      target: "trophy-hall",
      animated: true,
    },
    {
      id: "e14",
      source: "festival-program",
      target: "master-hunts",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e15",
      source: "apothecary-expansion",
      target: "specialized-elixirs",
      animated: true,
    },
    {
      id: "e16",
      source: "specialized-elixirs",
      target: "advanced-remedies",
      animated: true,
    },
    {
      id: "e17",
      source: "advanced-remedies",
      target: "alchemical-mastery",
      animated: true,
    },
    {
      id: "e18",
      source: "research-grants",
      target: "advanced-remedies",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e19",
      source: "power-regulation",
      target: "alchemical-mastery",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e20",
      source: "reinforced-forges",
      target: "masterwork-arms",
      animated: true,
    },
    {
      id: "e21",
      source: "masterwork-arms",
      target: "enchanted-fittings",
      animated: true,
    },
    {
      id: "e22",
      source: "enchanted-fittings",
      target: "relic-reinforcement",
      animated: true,
    },
    {
      id: "e24",
      source: "arcane-distribution",
      target: "relic-reinforcement",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e25",
      source: "deepwood-patrols",
      target: "border-wards",
      animated: true,
    },
    {
      id: "e26",
      source: "border-wards",
      target: "sacred-groves",
      animated: true,
    },
    {
      id: "e27",
      source: "sacred-groves",
      target: "primal-guardians",
      animated: true,
    },
    {
      id: "e28",
      source: "research-grants",
      target: "border-wards",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e29",
      source: "specialized-elixirs",
      target: "sacred-groves",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e30",
      source: "arcane-distribution",
      target: "primal-guardians",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e31",
      source: "tax-reform",
      target: "investment-charters",
      animated: true,
    },
    {
      id: "e32",
      source: "investment-charters",
      target: "trade-monopolies",
      animated: true,
    },
    {
      id: "e33",
      source: "trade-monopolies",
      target: "economic-leverage",
      animated: true,
    },
    {
      id: "e34",
      source: "trade-contracts",
      target: "trade-monopolies",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e35",
      source: "port-authority",
      target: "economic-leverage",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e36",
      source: "festival-program",
      target: "relic-exhibition",
      animated: true,
    },
    {
      id: "e37",
      source: "relic-exhibition",
      target: "cultural-prestige",
      animated: true,
    },
    {
      id: "e38",
      source: "cultural-prestige",
      target: "myth-archive",
      animated: true,
    },
    {
      id: "e39",
      source: "diplomatic-staff",
      target: "cultural-prestige",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e40",
      source: "conduit-arrays",
      target: "myth-archive",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e41",
      source: "research-grants",
      target: "scholarly-orders",
      animated: true,
    },
    {
      id: "e42",
      source: "scholarly-orders",
      target: "arcane-curriculum",
      animated: true,
    },
    {
      id: "e43",
      source: "formal-embassy",
      target: "diplomatic-staff",
      animated: true,
    },
    {
      id: "e44",
      source: "diplomatic-staff",
      target: "treaty-chambers",
      animated: true,
    },
    {
      id: "e45",
      source: "treaty-chambers",
      target: "regional-accords",
      animated: true,
    },
    {
      id: "e46",
      source: "festival-program",
      target: "diplomatic-staff",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e47",
      source: "investment-charters",
      target: "treaty-chambers",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e48",
      source: "river-docks",
      target: "regional-accords",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e49",
      source: "conduit-arrays",
      target: "regional-accords",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e50",
      source: "permanent-camp",
      target: "survey-teams",
      animated: true,
    },
    {
      id: "e51",
      source: "survey-teams",
      target: "deep-expeditions",
      animated: true,
    },
    {
      id: "e52",
      source: "deep-expeditions",
      target: "relic-logistics",
      animated: true,
    },
    {
      id: "e53",
      source: "research-grants",
      target: "survey-teams",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e54",
      source: "deepwood-patrols",
      target: "deep-expeditions",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e55",
      source: "relic-exhibition",
      target: "relic-logistics",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e56",
      source: "conduit-arrays",
      target: "relic-logistics",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e57",
      source: "river-docks",
      target: "port-authority",
      animated: true,
    },
    {
      id: "e58",
      source: "port-authority",
      target: "shipyards",
      animated: true,
    },
    { id: "e59", source: "shipyards", target: "trade-fleets", animated: true },
    {
      id: "e60",
      source: "tax-reform",
      target: "port-authority",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e61",
      source: "reinforced-forges",
      target: "shipyards",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e62",
      source: "merchant-guild",
      target: "trade-fleets",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e63",
      source: "arcane-distribution",
      target: "trade-fleets",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e64",
      source: "arcane-curriculum",
      target: "aetherium-foundations",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e65",
      source: "aetherium-foundations",
      target: "conduit-arrays",
      animated: true,
    },
    {
      id: "e66",
      source: "conduit-arrays",
      target: "power-regulation",
      animated: true,
    },
    {
      id: "e67",
      source: "power-regulation",
      target: "arcane-distribution",
      animated: true,
    },
    {
      id: "e68",
      source: "arcane-distribution",
      target: "teleportation-gate",
      animated: true,
    },
    {
      id: "e69",
      source: "advanced-remedies",
      target: "power-regulation",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e71",
      source: "aetherium-foundations",
      target: "enchanted-fittings",
      data: { isCrossChain: true },
      style: { strokeDasharray: "5,5" },
    },
    {
      id: "e72",
      source: "teleportation-gate",
      target: "ascendant-andrios",
      animated: true,
    },
  ],
};
