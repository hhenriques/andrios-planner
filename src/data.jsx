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
        label: "Armed Patrols",
        cost: 500,
        building: "City Watch",
        income: "—",
        rewards: "Once per arc, gain advantage on an initiative or chase roll",
        flavor:
          "The Watch adopts a real rota with paired patrols, signal calls, and posted routes marked on a central board. Lantern standards and whistle codes appear on every corner. When trouble starts, the response feels immediate, rehearsed, and oddly calm.",
      },
      position: { x: 0, y: 0 },
    },
    {
      id: "watch-barracks",
      type: "custom",
      data: {
        label: "Watch Barracks",
        cost: 1000,
        building: "City Watch",
        income: "—",
        rewards: "Once per arc, ignore surprise in one combat",
        flavor:
          "A proper barracks rises: bunks, an armory, and a briefing room with maps and chalk marks that change daily. Muster drills become routine, and runners know exactly where to find officers at any hour. When chaos hits, the Watch is already assembled in the right place.",
      },
      position: { x: 300, y: 0 },
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
      position: { x: 600, y: 0 },
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
      position: { x: 900, y: 0 },
    },

    {
      id: "expanded-warehouses",
      type: "custom",
      data: {
        label: "Expanded Warehouses",
        cost: 500,
        building: "The River Store",
        income: "+10%",
        rewards: "Freely acquire mundane expedition gear",
        flavor:
          "The River Store annexes nearby storage and builds clean, dry racks for rope, timber, canvas, and tools. Inventory becomes visible: tagged crates, standard packs, and a clerk who can outfit a party without asking questions. Expeditions stop ‘shopping’ and start ‘issuing supplies’.",
      },
      position: { x: 0, y: 200 },
    },
    {
      id: "trade-contracts",
      type: "custom",
      data: {
        label: "Trade Contracts",
        cost: 1000,
        building: "The River Store",
        income: "+5%",
        rewards: "Uncommon adventuring gear always available",
        flavor:
          "Signed contracts appear with caravan masters, triton ferries, smiths, and herbalists, specifying delivery windows, quality marks, and penalties for delays. A backroom becomes a procurement desk, stamped with seals rather than price tags. Uncommon gear isn’t ‘found’; it’s ‘scheduled’.",
      },
      position: { x: 300, y: 200 },
    },
    {
      id: "merchant-guild",
      type: "custom",
      data: {
        label: "Merchant Guild",
        cost: 1500,
        building: "The River Store",
        income: "+15%",
        rewards: "Once per arc, refresh consumables mid-adventure",
        flavor:
          "The Store becomes a hub: guild badges, standardized weights, and a courier board with routes pinned like veins across the region. Merchants coordinate rather than compete, and shortages get solved by shifting stock, not raising prices. Andrios starts feeling… supplied, even when you’re nowhere near it.",
      },
      position: { x: 600, y: 200 },
    },
    {
      id: "trade-fleet",
      type: "custom",
      data: {
        label: "Trade Fleet",
        cost: 2500,
        building: "The River Store",
        income: "+10%",
        rewards: "Once per arc, rapid delivery or retrieval of an item",
        flavor:
          "Dedicated vessels and fast wagons are commissioned, some built with shipyard know-how and others guided by Nexus-linked wayfinding. Cargo manifests get thinner because the network is reliable: less paperwork, more motion. A request becomes a route; a route becomes a delivery. Distance stops being a hard limit.",
      },
      position: { x: 900, y: 200 },
    },

    {
      id: "bounty-board",
      type: "custom",
      data: {
        label: "Bounty Board",
        cost: 250,
        building: "The Huntress",
        income: "+2%",
        rewards: "Gain one bounty hook with guaranteed payoff",
        flavor:
          "A formal board goes up near the hearth: wax-sealed notices, reward tokens, and names written twice: once in ink, once in rumor. Hunters start arriving with questions and leaving with purpose. The Huntress becomes a place where adventures get posted, not merely told.",
      },
      position: { x: 0, y: 400 },
    },
    {
      id: "hunter-circles",
      type: "custom",
      data: {
        label: "Hunter Circles",
        cost: 750,
        building: "The Huntress",
        income: "+3%",
        rewards: "Monster components replace missing crafting materials",
        flavor:
          "Tables become planning dens where specialists gather into circles, swapping field technique, bait craft, and the ‘right way’ to take a trophy without ruining it. A small smokehouse and drying rack appear out back. What returns from a hunt is no longer a mess of parts. It’s usable material, catalogued and preserved.",
      },
      position: { x: 300, y: 400 },
    },
    {
      id: "master-hunts",
      type: "custom",
      data: {
        label: "Master Hunts",
        cost: 1250,
        building: "The Huntress",
        income: "+5%",
        rewards: "Once per arc, gain a powerful situational consumable",
        flavor:
          "Master hunters are hired, and the lodge posts ‘seasonal quarry’ like a menu of legends. Preparations become ritual: special oils, warded snares, and field kits tuned to one creature’s habits. The payoff isn’t just coin; it’s a singular edge: a brew, a charm, a tool made for that one kind of problem.",
      },
      position: { x: 600, y: 400 },
    },
    {
      id: "trophy-hall",
      type: "custom",
      data: {
        label: "Trophy Hall",
        cost: 2000,
        building: "The Huntress",
        income: "+5%",
        rewards: "Begin one hunt with full intel on the target",
        flavor:
          "An annex becomes a hall with mounted relic-horns, stitched hides, annotated skulls, and plaques describing what worked and what didn’t. Scholars, wardens, and would-be heroes visit just to study the exhibits. The Huntress stops guessing at monsters; it remembers them. That memory becomes actionable intel.",
      },
      position: { x: 900, y: 400 },
    },

    {
      id: "apothecary-expansion",
      type: "custom",
      data: {
        label: "Apothecary Expansion",
        cost: 500,
        building: "House of Healing",
        income: "+5%",
        rewards: "Gain 2 healing potions per arc",
        flavor:
          "The House adds benches, clean glassware, and proper stills, so no more brewing beside triage cots. Reagents get labeled and rotated, and a small storeroom is kept ‘for the Council’ as standard practice. Healing becomes consistent: same bottle, same effect, every time.",
      },
      position: { x: 0, y: 600 },
    },
    {
      id: "specialized-elixirs",
      type: "custom",
      data: {
        label: "Specialized Elixirs",
        cost: 1000,
        building: "House of Healing",
        income: "+5%",
        rewards: "Resistance, antitoxin, and restoration elixirs available",
        flavor:
          "A reference cabinet appears with symptom tables, toxin sketches, and little notes from hunters and wardens pinned in the margins. The House begins brewing for specific threats rather than generic injury. Shelves fill with bottles that look identical until you read the tiny script on the tag, and realize it’s exactly what you needed.",
      },
      position: { x: 300, y: 600 },
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
      position: { x: 600, y: 600 },
    },
    {
      id: "alchemical-mastery",
      type: "custom",
      data: {
        label: "Alchemical Mastery",
        cost: 2500,
        building: "House of Healing",
        income: "—",
        rewards: "Once per arc, negate a debilitating condition on the party",
        flavor:
          "With regulated Nexus flow, the House gains stable heat, steady pressure, and controlled infusions, conditions that make ‘impossible’ brews repeatable. The masterwork lab doesn’t feel like a clinic anymore; it feels like precision craft. The results aren’t just healing. They’re reversals of harm that should have lasted.",
      },
      position: { x: 900, y: 600 },
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
      position: { x: 0, y: 800 },
    },
    {
      id: "masterwork-arms",
      type: "custom",
      data: {
        label: "Masterwork Arms",
        cost: 1000,
        building: "The Bronze Hoof",
        income: "+5%",
        rewards: "Reduce crafting downtime",
        flavor:
          "Patterns, jigs, and standardized fittings appear, tools that turn artistry into repeatable output. The Bronze Hoof can now work in batches without losing quality. When the Council needs something, the question stops being ‘can it be made?’ and becomes ‘how soon?’",
      },
      position: { x: 300, y: 800 },
    },
    {
      id: "enchanted-fittings",
      type: "custom",
      data: {
        label: "Enchanted Fittings",
        cost: 1500,
        building: "The Bronze Hoof",
        income: "—",
        rewards: "Safely apply or swap enchantments",
        flavor:
          "Arcane curriculum meets metalwork: rune channels are cut with surgical precision and sockets are designed to hold power without warping. The forge adds an inscription table and a warded clamp that keeps items steady during magical work. Enchantments become modular, something you can install, adjust, and trust.",
      },
      position: { x: 600, y: 800 },
    },
    {
      id: "relic-reinforcement",
      type: "custom",
      data: {
        label: "Relic Reinforcement",
        cost: 2500,
        building: "The Bronze Hoof",
        income: "—",
        rewards: "Once per arc, permanently enhance a magic item",
        flavor:
          "With Nexus distribution feeding the workspace, the smith can push beyond repair into true integration, binding rare components into relic-frames. The anvil hums faintly under the strike, as if the city itself shares the load. Items don’t just get ‘better’; they become more themselves, permanently.",
      },
      position: { x: 900, y: 800 },
    },

    {
      id: "deepwood-patrols",
      type: "custom",
      data: {
        label: "Deepwood Patrols",
        cost: 500,
        building: "Warden's Den",
        income: "—",
        rewards: "Once per arc, ignore natural terrain penalties",
        flavor:
          "Wardens cut new trails and renew old markers: stone stacks, carved bark signs, and hidden caches only the initiated notice. The Den starts issuing ‘routes’ the way a merchant issues invoices. In the wild, you feel the difference immediately: the land stops fighting you.",
      },
      position: { x: 0, y: 1000 },
    },
    {
      id: "border-wards",
      type: "custom",
      data: {
        label: "Border Wards",
        cost: 1000,
        building: "Warden's Den",
        income: "—",
        rewards: "Auto-succeed one tracking or navigation check",
        flavor:
          "Rites are laid at the edges, subtle, old magic that doesn’t ‘protect’ so much as ‘clarify’. Trails become readable: scents carry truer, signs last longer, and the Wardens’ maps start matching reality. When you need direction, the world feels willing to answer.",
      },
      position: { x: 300, y: 1000 },
    },
    {
      id: "sacred-groves",
      type: "custom",
      data: {
        label: "Sacred Groves",
        cost: 1500,
        building: "Warden's Den",
        income: "+5%",
        rewards: "Gain rare natural reagents usable as spell components",
        flavor:
          "Protected clearings are established, places where harvesting happens at the right hour, with the right words spoken. The Den adds drying frames, resin presses, and sealed jars stamped with Warden marks. Reagents arrive ‘alive’ with power, fit for spells that demand something rarer than coin.",
      },
      position: { x: 600, y: 1000 },
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
      position: { x: 900, y: 1000 },
    },

    {
      id: "tax-reform",
      type: "custom",
      data: {
        label: "Tax Reform",
        cost: 500,
        building: "Council of Commerce",
        income: "+10%",
        rewards: "Convert gold to expedition resources at a discount",
        flavor:
          "The Council of Commerce standardizes fees and closes loopholes, meaning fewer middlemen, less ‘lost’ money. Ledgers get rewritten, collectors get trained, and suddenly revenue is predictable. That predictability turns into leverage: supplies and services can be negotiated in bulk, not begged for piecemeal.",
      },
      position: { x: 0, y: 1200 },
    },
    {
      id: "investment-charters",
      type: "custom",
      data: {
        label: "Investment Charters",
        cost: 1000,
        building: "Council of Commerce",
        income: "+5%",
        rewards: "Once per arc, fund a preparation retroactively",
        flavor:
          "Charters are issued with your seal, credit backed by the city and the Council’s reputation. Tradesfolk start accepting ‘Council paper’ as readily as coin, because they know it gets honored. This is how preparations happen even when you didn’t have time to make them first.",
      },
      position: { x: 300, y: 1200 },
    },
    {
      id: "trade-monopolies",
      type: "custom",
      data: {
        label: "Trade Monopolies",
        cost: 1500,
        building: "Council of Commerce",
        income: "+10%",
        rewards: "Force access to restricted goods or services",
        flavor:
          "Exclusive rights are negotiated: priority routes, reserved stock, and ‘first refusal’ agreements that other buyers can’t touch. The Commerce Council keeps a registry of controlled goods and who owes the Council favors. When you need something difficult, the city doesn’t search. It claims.",
      },
      position: { x: 600, y: 1200 },
    },
    {
      id: "economic-leverage",
      type: "custom",
      data: {
        label: "Economic Leverage",
        cost: 2500,
        building: "Council of Commerce",
        income: "+5%",
        rewards: "Once per arc, compel cooperation from a neutral faction",
        flavor:
          "With Port Authority ties and established monopolies, Andrios can apply pressure without drawing a blade. Contracts can be offered, denied, delayed, or made irresistible. Neutral factions start treating the Council as a stakeholder because the city can move resources the way others move armies.",
      },
      position: { x: 900, y: 1200 },
    },

    {
      id: "festival-program",
      type: "custom",
      data: {
        label: "Festival Program",
        cost: 250,
        building: "Council of Culture",
        income: "+5%",
        rewards: "Gain advantage on social checks for one adventure",
        flavor:
          "The Culture Council schedules regular performances: music, recitations, and competitions that draw crowds and coin. Public attention becomes a resource: people recognize your names and repeat your deeds. In conversation, you feel it. Doors open faster when the story arrives before you do.",
      },
      position: { x: 0, y: 1400 },
    },
    {
      id: "relic-exhibition",
      type: "custom",
      data: {
        label: "Relic Exhibition",
        cost: 750,
        building: "Council of Culture",
        income: "+5%",
        rewards: "Identify relics safely and instantly",
        flavor:
          "A gallery is built with proper plinths, warded glass, and curator protocols. Relics are handled like temperamental guests, observed, recorded, and never rushed. The city learns to read old craftsmanship without waking the dangerous parts of it.",
      },
      position: { x: 300, y: 1400 },
    },
    {
      id: "cultural-prestige",
      type: "custom",
      data: {
        label: "Cultural Prestige",
        cost: 1250,
        building: "Council of Culture",
        income: "+5%",
        rewards: "Once per arc, rewrite a faction's perception of the Council",
        flavor:
          "Visiting performers arrive, Setessan courtesies blend into local ceremony, and the relic collection gains reputation beyond Andrios. The city stops feeling like a frontier outpost and starts feeling like a destination. People don’t just meet you. They meet the idea of you the city has curated.",
      },
      position: { x: 600, y: 1400 },
    },
    {
      id: "myth-archive",
      type: "custom",
      data: {
        label: "Myth Archive",
        cost: 2000,
        building: "Council of Culture",
        income: "—",
        rewards: "Once per arc, suppress or amplify a rumor globally",
        flavor:
          "A true archive is built with ink rooms, memory cabinets, and curator scripts that track the life of a story across regions. With Conduit Arrays feeding the work, the Archive can ‘store resonance’ and release narratives deliberately. Rumor becomes a tool you can aim, rather than weather you endure.",
      },
      position: { x: 900, y: 1400 },
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
      position: { x: 0, y: 1600 },
    },
    {
      id: "scholarly-orders",
      type: "custom",
      data: {
        label: "Scholarly Orders",
        cost: 1000,
        building: "Council of Education",
        income: "—",
        rewards: "Reduce downtime for study or crafting",
        flavor:
          "Formal orders form around disciplines: ruin cartography, Nyx theory, pre-divine craft, monster anatomy. Knowledge gets organized into checklists, procedures, and teachable methods. What once took weeks of fumbling becomes a practiced workflow.",
      },
      position: { x: 300, y: 1600 },
    },
    {
      id: "arcane-curriculum",
      type: "custom",
      data: {
        label: "Arcane Curriculum",
        cost: 1500,
        building: "Council of Education",
        income: "—",
        rewards: "Enables Nexus and enchantment systems",
        flavor:
          "A structured arcane program is established with safe casting rooms, standardized rune notation, and instructors who can teach without improvising. This isn’t ‘more magic’; it’s magic that can be built into systems. The city gains the competence required for the Nexus to exist at all.",
      },
      position: { x: 600, y: 1600 },
    },

    {
      id: "formal-embassy",
      type: "custom",
      data: {
        label: "Formal Embassy",
        cost: 500,
        building: "Setessan Embassy",
        income: "+5%",
        rewards: "Advantage on diplomacy with allied factions",
        flavor:
          "The small house is refitted into an official embassy with Setessan banners, a sealed archive, and a receiving room that follows protocol to the letter. Courtesies become predictable, and that predictability builds trust. Deals feel less like favors and more like policy.",
      },
      position: { x: 0, y: 1800 },
    },
    {
      id: "diplomatic-staff",
      type: "custom",
      data: {
        label: "Diplomatic Staff",
        cost: 750,
        building: "Setessan Embassy",
        income: "+5%",
        rewards: "Once per arc, gain decisive political intel",
        flavor:
          "An envoy team arrives: scribes, translators, quiet messengers, and a senior aide who ‘knows everyone.’ They keep schedules, record debts, and track who is drifting toward conflict. Information begins arriving like mail, not like rumor.",
      },
      position: { x: 300, y: 1800 },
    },
    {
      id: "treaty-chambers",
      type: "custom",
      data: {
        label: "Treaty Chambers",
        cost: 1250,
        building: "Setessan Embassy",
        income: "+5%",
        rewards: "Force a parley instead of combat",
        flavor:
          "A purpose-built chamber is added with neutral seating, oath-binding language, and ritual courtesies designed to lower weapons. The space is engineered for conversation to happen even when everyone arrived ready to fight. It’s not magic; it’s structure that makes violence… inconvenient.",
      },
      position: { x: 600, y: 1800 },
    },
    {
      id: "regional-accords",
      type: "custom",
      data: {
        label: "Regional Accords",
        cost: 2000,
        building: "Setessan Embassy",
        income: "+10%",
        rewards: "Once per arc, secure safe passage or a ceasefire",
        flavor:
          "Accords become institutional with sealed route permissions tied to River Docks, and formal terms duplicated and stored via Conduit Arrays. Agreements stop depending on a single envoy’s presence. The embassy becomes a diplomacy engine that keeps working even while you’re gone.",
      },
      position: { x: 900, y: 1800 },
    },

    {
      id: "permanent-camp",
      type: "custom",
      data: {
        label: "Permanent Camp",
        cost: 500,
        building: "Lagonna Lodge Camp",
        income: "+10%",
        rewards: "Retroactively declare correct expedition gear",
        flavor:
          "The Lodge upgrades from tents to operations: storage racks, a cookhouse, and a map table that never gets folded away. Standard kits are packed and labeled, ready to issue at a moment’s notice. Expeditions stop being brave improvisation and start being reliable routines.",
      },
      position: { x: 0, y: 2000 },
    },
    {
      id: "survey-teams",
      type: "custom",
      data: {
        label: "Survey Teams",
        cost: 750,
        building: "Lagonna Lodge Camp",
        income: "+5%",
        rewards: "Reveal one dungeon feature in advance",
        flavor:
          "Dedicated surveyors rotate through the mountains, measuring, sketching, listening for hollow stone and hidden airflows. The camp begins producing usable maps rather than hopeful guesses. When you approach a ruin, you arrive with a shape of it already in your head.",
      },
      position: { x: 300, y: 2000 },
    },
    {
      id: "deep-expeditions",
      type: "custom",
      data: {
        label: "Deep Expeditions",
        cost: 1250,
        building: "Lagonna Lodge Camp",
        income: "+10%",
        rewards: "Gain one rare crafting material per arc",
        flavor:
          "Long-range teams are funded with pack animals, specialist tools, and route support that depends on Warden guidance. The Lodge stops skimming surface ruins and starts pushing deeper into the old stone. More comes back, and what comes back matters: rare materials chosen with purpose.",
      },
      position: { x: 600, y: 2000 },
    },
    {
      id: "relic-logistics",
      type: "custom",
      data: {
        label: "Relic Logistics",
        cost: 2000,
        building: "Lagonna Lodge Camp",
        income: "+15%",
        rewards: "Obtain one pre-divine component per arc",
        flavor:
          "The camp builds a salvage pipeline for cataloguing, packing, and transporting relics without ‘accidents.’ Conduit Arrays make safe containment practical: lined crates, resonance tags, and handlers who know what not to touch. The Lodge becomes your upstream source of pre-divine components.",
      },
      position: { x: 900, y: 2000 },
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
      position: { x: 0, y: 2200 },
    },
    {
      id: "port-authority",
      type: "custom",
      data: {
        label: "Port Authority",
        cost: 750,
        building: "Port",
        income: "+5%",
        rewards: "Once per arc, expedite or intercept a shipment",
        flavor:
          "A formal authority is installed: clerks, inspectors, manifests, and a small office where stamps decide a cargo’s fate. Delays become deliberate, and speed becomes purchasable. When you need something moved (or stopped), the Port can do it with a signature.",
      },
      position: { x: 300, y: 2200 },
    },
    {
      id: "shipyards",
      type: "custom",
      data: {
        label: "Shipyards",
        cost: 1250,
        building: "Port",
        income: "+5%",
        rewards: "Upgrade a vessel or secure naval support",
        flavor:
          "The shoreline gains slips and scaffolding with hulls in progress, tar boiling, smiths fitting metalwork into timber frames. Bronze Hoof techniques scale into maritime craft. The city can now improve vessels instead of merely renting them, turning travel into capability.",
      },
      position: { x: 600, y: 2200 },
    },
    {
      id: "trade-fleets",
      type: "custom",
      data: {
        label: "Trade Fleets",
        cost: 2000,
        building: "Port",
        income: "+10%",
        rewards: "Once per arc, rapid transit or evacuation",
        flavor:
          "Regular routes are established, backed by merchant coordination and Nexus-assisted planning. Captains know your seal and treat your requests as priority freight. If the adventure turns ugly, Andrios can now reach you with ships, schedules, and a way out.",
      },
      position: { x: 900, y: 2200 },
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
      position: { x: 0, y: 2400 },
    },
    {
      id: "conduit-arrays",
      type: "custom",
      data: {
        label: "Conduit Arrays",
        cost: 1250,
        building: "Aetherium Nexus",
        income: "—",
        rewards: "Convert magic items into Nexus Charges",
        flavor:
          "Arrays of rune-metal, crystal housings, and etched plates are installed, designed to accept relics and drink power safely. For the first time, magic can be stored and routed like water through pipes. The Nexus becomes a battery the city can actually use.",
      },
      position: { x: 300, y: 2400 },
    },
    {
      id: "power-regulation",
      type: "custom",
      data: {
        label: "Power Regulation",
        cost: 1750,
        building: "Aetherium Nexus",
        income: "—",
        rewards: "Once per arc, overcharge a spell or item",
        flavor:
          "Control systems follow: dampeners, valves, measured outputs, and safety protocols written like engineering specs. The difference is felt immediately: power stops spiking and starts obeying. When you push a spell or item beyond its normal limits, it’s a calculated surge, not a gamble.",
      },
      position: { x: 600, y: 2400 },
    },
    {
      id: "arcane-distribution",
      type: "custom",
      data: {
        label: "Arcane Distribution",
        cost: 2000,
        building: "Aetherium Nexus",
        income: "—",
        rewards: "Nexus-based abilities usable anywhere",
        flavor:
          "Anchors and relay sigils are established beyond the building, quiet marks in stone, metal, and carved wood that let power travel. The city gains invisible lines of reach. Nexus-backed support becomes something you can access on the road, in a ruin, or in the middle of a crisis.",
      },
      position: { x: 900, y: 2400 },
    },
    {
      id: "teleportation-gate",
      type: "custom",
      data: {
        label: "Teleportation Gate",
        cost: 2500,
        building: "Aetherium Nexus",
        income: "—",
        rewards: "Once per arc, summon reinforcements or extract the party",
        flavor:
          "The final circle is carved and attuned as a stable gate with strict limits, maintained by rituals and careful power budgeting. It doesn’t replace travel; it overrides catastrophe. When invoked, distance collapses just long enough for Andrios to put help (or an exit) exactly where you need it.",
      },
      position: { x: 1200, y: 2400 },
    },
  ],
  edges: [
    { id: "e1", source: "armed-patrols", target: "watch-barracks", animated: true },
    { id: "e2", source: "watch-barracks", target: "elite-guard-program", animated: true },
    { id: "e3", source: "elite-guard-program", target: "civic-wardens", animated: true },
    { id: "e4", source: "arcane-distribution", target: "civic-wardens", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e5", source: "expanded-warehouses", target: "trade-contracts", animated: true },
    { id: "e6", source: "trade-contracts", target: "merchant-guild", animated: true },
    { id: "e7", source: "merchant-guild", target: "trade-fleet", animated: true },
    { id: "e8", source: "investment-charters", target: "trade-contracts", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e9", source: "shipyards", target: "trade-fleet", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e10", source: "arcane-distribution", target: "trade-fleet", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e11", source: "bounty-board", target: "hunter-circles", animated: true },
    { id: "e12", source: "hunter-circles", target: "master-hunts", animated: true },
    { id: "e13", source: "master-hunts", target: "trophy-hall", animated: true },
    { id: "e14", source: "festival-program", target: "master-hunts", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e15", source: "apothecary-expansion", target: "specialized-elixirs", animated: true },
    { id: "e16", source: "specialized-elixirs", target: "advanced-remedies", animated: true },
    { id: "e17", source: "advanced-remedies", target: "alchemical-mastery", animated: true },
    { id: "e18", source: "research-grants", target: "advanced-remedies", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e19", source: "power-regulation", target: "alchemical-mastery", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e20", source: "reinforced-forges", target: "masterwork-arms", animated: true },
    { id: "e21", source: "masterwork-arms", target: "enchanted-fittings", animated: true },
    { id: "e22", source: "enchanted-fittings", target: "relic-reinforcement", animated: true },
    { id: "e23", source: "arcane-curriculum", target: "enchanted-fittings", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e24", source: "arcane-distribution", target: "relic-reinforcement", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e25", source: "deepwood-patrols", target: "border-wards", animated: true },
    { id: "e26", source: "border-wards", target: "sacred-groves", animated: true },
    { id: "e27", source: "sacred-groves", target: "primal-guardians", animated: true },
    { id: "e28", source: "research-grants", target: "border-wards", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e29", source: "specialized-elixirs", target: "sacred-groves", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e30", source: "arcane-distribution", target: "primal-guardians", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e31", source: "tax-reform", target: "investment-charters", animated: true },
    { id: "e32", source: "investment-charters", target: "trade-monopolies", animated: true },
    { id: "e33", source: "trade-monopolies", target: "economic-leverage", animated: true },
    { id: "e34", source: "trade-contracts", target: "trade-monopolies", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e35", source: "port-authority", target: "economic-leverage", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e36", source: "festival-program", target: "relic-exhibition", animated: true },
    { id: "e37", source: "relic-exhibition", target: "cultural-prestige", animated: true },
    { id: "e38", source: "cultural-prestige", target: "myth-archive", animated: true },
    { id: "e39", source: "diplomatic-staff", target: "cultural-prestige", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e40", source: "conduit-arrays", target: "myth-archive", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e41", source: "research-grants", target: "scholarly-orders", animated: true },
    { id: "e42", source: "scholarly-orders", target: "arcane-curriculum", animated: true },
    { id: "e43", source: "formal-embassy", target: "diplomatic-staff", animated: true },
    { id: "e44", source: "diplomatic-staff", target: "treaty-chambers", animated: true },
    { id: "e45", source: "treaty-chambers", target: "regional-accords", animated: true },
    { id: "e46", source: "festival-program", target: "diplomatic-staff", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e47", source: "investment-charters", target: "treaty-chambers", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e48", source: "river-docks", target: "regional-accords", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e49", source: "conduit-arrays", target: "regional-accords", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e50", source: "permanent-camp", target: "survey-teams", animated: true },
    { id: "e51", source: "survey-teams", target: "deep-expeditions", animated: true },
    { id: "e52", source: "deep-expeditions", target: "relic-logistics", animated: true },
    { id: "e53", source: "research-grants", target: "survey-teams", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e54", source: "deepwood-patrols", target: "deep-expeditions", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e55", source: "relic-exhibition", target: "relic-logistics", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e56", source: "conduit-arrays", target: "relic-logistics", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e57", source: "river-docks", target: "port-authority", animated: true },
    { id: "e58", source: "port-authority", target: "shipyards", animated: true },
    { id: "e59", source: "shipyards", target: "trade-fleets", animated: true },
    { id: "e60", source: "tax-reform", target: "port-authority", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e61", source: "reinforced-forges", target: "shipyards", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e62", source: "merchant-guild", target: "trade-fleets", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e63", source: "arcane-distribution", target: "trade-fleets", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e64", source: "arcane-curriculum", target: "aetherium-foundations", animated: true },
    { id: "e65", source: "aetherium-foundations", target: "conduit-arrays", animated: true },
    { id: "e66", source: "conduit-arrays", target: "power-regulation", animated: true },
    { id: "e67", source: "power-regulation", target: "arcane-distribution", animated: true },
    { id: "e68", source: "arcane-distribution", target: "teleportation-gate", animated: true },
    { id: "e69", source: "advanced-remedies", target: "power-regulation", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } },
    { id: "e70", source: "enchanted-fittings", target: "arcane-distribution", data: { isCrossChain: true }, style: { strokeDasharray: "5,5" } }
  ],
};
