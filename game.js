/*

// Template for options 
    //NAME Option
    namedChoice: {
        text: "TEXT",
        image: "IMAGE",
        options: [
            {text: "TEXT", action: function() {
                gameState.gems.GEM = true;
                gameState.currentScene = "CONCEQUENCE";
                updateGame();
            }},
            {text: "CHOICE", nextScene: "CONCEQUENCE"},
        ]
    },

    namedConcequence: {
        text: "TEXT",
        image: "IMAGE",
        options: [
            {text: "CHOICE", nextScene: "NEXT"},
            {text: "CHOICE", nextScene: "NEXT"}
        ]
    },

    namedConcequence: {
        text: "TEXT",
        image: "IMAGE",
        options: [
            {text: "CHOICE", nextScene: "NEXT"},
            {text: "CHOICE", nextScene: "NEXT"}
        ]
    },

    
*/

// Define game states and initial setup
let gameState = {
    currentScene: 'start',
    gems: {
        courage: false,
        wisdom: false,
        knowledge: false,
        harmony: false,
        leadership: false,
        spirituality: false,
        resilience: false,
        adaptability: false
    }
};

// Player inventory and stats
let playerState = {
    inventory: [],
    stats: {
        strength: 10,
        magic: 5,
        diplomacy: 8
    }
};

// Scenes and choices
const scenes = {
    start: {
        text: "Welcome to the Quest for Virtue, where you embark on an adventure to discover and embody core        values that make you a hero!",
        image: "home-image.png",
        options: [
            { text: "Enter the Whispering Woods", nextScene: "whisperingWoods" },
            { text: "Ascend to the Mystic Mountain", nextScene: "mysticMountain" },
            { text: "Explore the Royal Castle", nextScene: "royalCastle" }
        ]
    },

    //Start of the Whispering Woods 
    whisperingWoods: {
        text: "You enter the Whispering Woods. Ancient trees whisper secrets around you...",
        image: "./img/whisperingwoods.png",
        options: [
            { text: "The Lost Faerie", action: function() {
                gameState.gems.wisdom = true;
                gameState.currentScene = "LostFaerieChoices";
                updateGame();
            }}
            
        ]
    },
    
    //Faerie Option
    LostFaerieChoices: {
        text: "You hear a soft sobbing sound ahead. Through a break in the foliage, you spot a tiny faerie with shimmering wings sitting on a rock, looking lost and forlorn.",
        image: "./img/lostFaerie.png",
        options: [
            { text: "Approach with Kindness", action: function() {
                gameState.gems.kindness = true;
                gameState.currentScene = "LostFaerieKindness";
                updateGame();
            }},
            { text: "Search for Clues", action: function() {
                gameState.gems.resourcefulness = true;
                gameState.currentScene = "LostFaerieClues";
                updateGame();
            }},
            { text: "Use Magic Knowledge", action: function() {
                gameState.gems.creativity = true;
                gameState.currentScene = "LostFaerieKnowledge";
                updateGame();
            }},
            { text: "Ignore and Continue", nextScene: "LostFaerieContinue" },
        ]
    },

    LostFaerieKindness: {
        text: "You approach the faerie with kindness, calming her fears and offering assistance. She explains that she got separated from her family during a storm and doesn't know how to get back. By showing kindness, you gain the faerie's trust, and she gives you a small glowing gem of Kindness as a token of gratitude. Your journey continues with the faerie happily guiding you through a shortcut, avoiding a potential trap set by mischievous sprites.",
        image: "./img/lostFaerie.png",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },

    LostFaerieClues: {
        text: "You carefully examine the surroundings, noticing a faint trail of sparkling dust leading towards a distant grove of luminous flowers. Following the trail, you discover the faerie's family gathered anxiously. They thank you for your resourcefulness and give you a shimmering gem of Resourcefulness. Your journey continues with the faerie's family guiding you through a hidden path, which leads to a tranquil meadow where you find a treasure chest with helpful supplies.",
        image: "./img/lostFaerie.png",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },

    LostFaerieKnowledge: {
        text: "Drawing upon your magical expertise, you conjure a gentle glow that illuminates the path for the faerie to follow. Impressed by your skill, the faerie rewards you with a sparkling gem of Creativity, acknowledging your inventive approach. Your journey continues smoothly as the faerie accompanies you, sharing tales of magical creatures and offering guidance through a labyrinthine section of the forest.",
        image: "./img/lostFaerie.png",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },

    LostFaerieContinue: {
        text: "Ignoring the faerie's plight, you decide to press on with your quest without intervening. As you continue, you encounter a series of confusing paths and encounter mischievous sprites who lead you astray. Eventually, you find your way out of the forest but realize you missed an opportunity to demonstrate Compassion and receive valuable guidance.",
        image: "./img/lostFaerie.png",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },

    //Whispering Grove Option
    WhisperingGrove: {
        text: "A path veers off to the right, leading to a tranquil grove where ethereal whispers beckon you closer.",
        image: "./img/whisperinggrove.png",
        options: [
            { text: "Investigate the Whispers", action: function() {
                gameState.gems.compassion = true;
                gameState.currentScene = "InvestigateTheWhispers";
                updateGame();
            }},
            { text: "Bypass the Grove", nextScene: "BypassTheGrove" },
        ]
    },

    InvestigateTheWhispers: {
        text: "Curious about the whispers, you approach the grove cautiously. You discover a group of lost spirits, trapped between realms and seeking guidance. Through compassionate conversations and thoughtful advice, you help the spirits find peace. In gratitude, they gift you a glowing gem of Compassion. Your journey continues with newfound wisdom and the spirits' guidance, avoiding a perilous swamp that would have slowed your progress",
        image: "./img/whisperinggrove.png",
        options: [
            { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
            { text: "Crystal Falls", nextScene: "CrystalFalls" },
        ]
    },

    BypassTheGrove: {
        text: "Deciding to stay focused on your quest, you bypass the grove without investigating the whispers. Your path remains straightforward but you miss the opportunity to demonstrate Empathy and receive the spirits' guidance, making your journey more challenging as you encounter tricky puzzles along the main route.",
        image: "./img/whisperinggrove.png",
        options: [
            { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
            { text: "Crystal Falls", nextScene: "CrystalFalls" },
        ]
    },
    
    //Shadowy Glen Option
    ShadowyGlen: {
        text: "To the left, a darker path winds through a shadowy glen, where eerie shadows flicker amidst ancient stone ruins.",
        image: "./img/shadowyglen.png",
        options: [
            { text: "Explore the Ruins", action: function() {
                gameState.gems.wisdom = true;
                gameState.currentScene = "ExploreTheRuins";
            updateGame();
            }},
            { text: "Avoid the Glen", nextScene: "AvoidTheGlen" },
        ]
    },

    ExploreTheRuins: {
        text: "Intrigued by the ancient ruins, you venture into the shadowy glen. Within the ruins, you encounter a series of puzzles that test your intellect and patience. By solving the puzzles with determination and creativity, you unearth a hidden gem of Wisdom left behind by an ancient sage. Your journey continues with enhanced knowledge and insight, navigating through a maze of illusions that would have otherwise led you astray.",
        image: "./img/shadowyglen.png",
        options: [
            { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
            { text: "Crystal Falls", nextScene: "CrystalFalls" },
        ]
    },

    AvoidTheGlen: {
        text: "Feeling uneasy about the shadows and ruins, you choose to avoid the glen and stick to the main path. While you avoid potential dangers lurking in the shadows, you miss the opportunity to gain Knowledge and must find an alternative route through a dense thicket, encountering fierce creatures along the way.",
        image: "./img/shadowyglen.png",
        options: [
            { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
            { text: "Crystal Falls", nextScene: "CrystalFalls" },
        ]
    },

    //Moonlit Clearing Option
    MoonlitClearing: {
        text: "A faint glow catches your eye to the right, leading to a serene moonlit clearing where fireflies dance in harmony.",
        image: "./img/moonlitclearing.png",
        options: [
            { text: "Join the Firefly Dance", action: function() {
                gameState.gems.unity = true;
                gameState.currentScene = "JoinTheFireflyDance";
                updateGame();
            }},
            { text: "Continue without Distraction", nextScene: "ContinueWithoutDistraction" },
        ]
    },

    JoinTheFireflyDance: {
        text: "Mesmerized by the fireflies' graceful movements, you join their dance under the moonlit sky. Your heart fills with a sense of peace and harmony. Inspired by the unity of the fireflies, you receive a glowing gem of Unity, symbolizing strength through togetherness. Your journey continues with a renewed sense of purpose and unity, navigating through a maze of enchanted vines that would have otherwise ensnared you.",
        image: "./img/moonlitclearing.png",
        options: [
            { text: "Starlit Grove", nextScene: "StarlitGrove" },
            { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
        ]
    },

    ContinueWithoutDistraction: {
        text: "Opting to press onward without pausing in the moonlit clearing, you maintain focus on your quest. While you avoid potential distractions, you miss the opportunity to experience Harmony with the natural world and encounter a magical barrier guarded by spirits that would have guided you through a perilous swamp.",
        image: "./img/moonlitclearing.png",
        options: [
            { text: "Starlit Grove", nextScene: "StarlitGrove" },
            { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
        ]
    },

    //Crystal Falls Option
    CrystalFalls: {
        text: "To the left, a soft murmur of cascading water beckons from a hidden waterfall known as Crystal Falls.",
        image: "./img/crystalfalls.png",
        options: [
            { text: "Explore Crystal Falls", action: function() {
                gameState.gems.unity = true;
                gameState.currentScene = "ExploreCrystalFalls";
            updateGame();
            }},
            { text: "Stay on Course", nextScene: "StayOnCourse" },
        ]
    },

    ExploreCrystalFalls: {
        text: "Drawn by the allure of Crystal Falls, you discover a hidden grotto behind the cascading waters. Within, you find ancient runes etched into the walls. By deciphering the runes with patience and determination, you unlock a shimmering gem of Perseverance left by an ancient sage. Your journey continues with newfound perseverance, avoiding a labyrinth of illusions that would have otherwise led you astray.",
        image: "./img/crystalfalls.png",
        options: [
            { text: "Starlit Grove", nextScene: "StarlitGrove" },
            { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
        ]
    },

    StayOnCourse: {
        text: "Opting to stay focused on your current path and avoid potential detours at Crystal Falls, you proceed with caution. While you maintain your course, you miss the opportunity to uncover ancient wisdom and must navigate through a dense thicket, encountering fierce creatures along the way.",
        image: "./img/crystalfalls.png",
        options: [
            { text: "Starlit Grove", nextScene: "StarlitGrove" },
            { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
        ]
    },

    //Starlit Grove
    StarlitGrove: {
        text: "To the right, a path winds towards a tranquil grove bathed in the soft glow of starlight, where mystical creatures gather under the celestial canopy.",
        image: "./img/starlitgrove.png",
        options: [
            { text: "Interact with Creatures", action: function() {
                gameState.gems.wisdom = true;
                gameState.currentScene = "InteractWithCreatures";
                updateGame();
            }},
            { text: "Avoid Interaction", nextScene: "AvoidInteraction" },
        ]
    },

    InteractWithCreatures: {
        text: "Intrigued by the mystical creatures' presence, you approach the starlit grove with curiosity. They welcome you warmly, sharing their ancient songs and tales of the forest. Inspired by their wisdom and harmony, you receive a radiant gem of Wisdom, symbolizing insight gained from shared knowledge. Your journey continues with a deeper understanding of the forest's mysteries, bypassing a treacherous bog that would have otherwise hindered your progress.",
        image: "./img/starlitgrove.png",
        options: [
            { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
            { text: "Go to home page", nextScene: "start" }
        ]
    },

    AvoidInteraction: {
        text: "Deciding to maintain focus on your quest, you bypass the starlit grove without engaging with the creatures. While you avoid potential distractions, you miss the opportunity to gain Understanding from the mystical creatures' teachings, encountering a dense thicket of thorns that slows your journey.",
        image: "./img/starlitgrove.png",
        options: [
            { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
            { text: "Go to home page", nextScene: "start" }
        ]
    },

    //Twilight Marsh Option
    TwilightMarsh: {
        text: "To the left, a misty path leads into a twilight marsh, where the air is thick with the calls of unseen creatures and the glow of distant swamp lights.",
        image: "./img/twilightmarsh.png",
        options: [
            { text: "Navigate the Marsh", action: function() {
                gameState.gems.courage = true;
                gameState.currentScene = "NavigateTheMarsh";
                updateGame();
            }},
            { text: "Find a Detour", nextScene: "FindADetour" },
        ]
    },

    NavigateTheMarsh: {
        text: "Braving the eerie twilight marsh, you navigate through its murky waters, using your keen senses to avoid hidden perils. By demonstrating courage and perseverance, you discover a hidden passage guarded by ancient spirits, who reward you with a gleaming gem of Courage. Your journey continues with newfound bravery, bypassing a labyrinth of illusions that would have otherwise led you astray.",
        image: "./img/twilightmarsh.png",
        options: [
            { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
            { text: "Go to home page", nextScene: "start" }
        ]
    },

    FindADetour: {
        text: "Opting to find a detour around the twilight marsh, you carefully navigate through dense underbrush and avoid the potential dangers lurking within. While you avoid immediate risks, you miss the opportunity to demonstrate Resilience in the face of challenges, encountering a series of puzzling illusions that test your resolve.",
        image: "./img/twilightmarsh.png",
        options: [
            { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
            { text: "Go to home page", nextScene: "start" }
        ]
    },

//--------------------------------------------------\\

    //Start of the Mystic Mountains
    mysticMountain: {
        text: "You ascend towards the Mystic Mountain. Crystalline streams flow amidst towering peaks...",
        options: [
            {text: "Ascend to the Celestial Summit", action: function() {
                gameState.gems.spirituality = true;
                gameState.currentScene = "celestialSummit";
                updateGame();
            }},
            {text: "Explore the Crystal Caverns", action: function() {
                gameState.currentScene = "crystalCaverns";
                updateGame();
            }}
        ]
    },

    //Celestial Summit Option
    celestialSummit: {
        text: "A path veers off to the right, a narrow trail winds upward towards the Celestial Summit, rumored to be a place where the stars themselves come down to touch the earth. The trail is steep and challenging, but promises breathtaking views and encounters with celestial beings.",
        image: "./img/celestialsummit.png",
        options: [
            {text: "Ascend to the Celestial Summit", action: function() {
                gameState.gems.spirituality = true;
                gameState.currentScene = "celestialSummit";
                updateGame();
            }},
            {text: "Take a Different Path", nextScene: "takeADifferentPath" },
        ]
    },

    celestialSummit: {
        text: "Embracing the challenge, you ascend the steep trail towards the Celestial Summit. Along the way, you encounter tests of endurance and moments where courage is required to overcome obstacles. Upon reaching the summit, you are greeted by celestial beings who impart wisdom and grant you a radiant gem of Spirituality, symbolizing your connection with the higher realms. Your journey continues with renewed insight and a clearer path forward, bypassing a treacherous avalanche that would have otherwise blocked your way.",
        image: "./img/celestialsummit.png",
        options: [
            {text: "Wisdom's Path", nextScene: "wisdomsPath" },
            {text: "Stormy Pass", nextScene: "stormyPass" }
        ]
    },
    
    takeADifferentPath: {
        text: "Opting for a safer route, you choose to explore a longer path that avoids the challenges of the Celestial Summit. While you navigate safely, you miss the opportunity to gain Enlightenment from the celestial beings and encounter a series of intricate puzzles that test your intellect along the way.",
        image: "./img/celestialsummit.png",
        options: [
            {text: "Wisdom's Path", nextScene: "wisdomsPath" },
            {text: "Stormy Pass", nextScene: "stormyPass" }
        ]
    },

    //Crystal Caverns Option
    crystalCaverns: {
        text: "To the left, a path leads into the heart of the mountains, where Crystal Caverns glitter with gemstones of every hue. The caverns are known for their beauty and mysterious powers.",
        image: "./img/crystalcaverns.png",
        options: [
            {text: "Explore the Crystal Caverns", action: function() {
                gameState.gems.harmony = true;
                gameState.currentScene = "crystalCaverns";
                updateGame();
            }},
            {text: "Bypass the Caverns", nextScene: "bypassTheCaverns" },
        ]
    },

    crystalCaverns: {
        text: "Intrigued by the beauty and mystique of the Crystal Caverns, you venture into their depths. Inside, you encounter shimmering gemstones that seem to pulse with energy and ancient runes carved into the walls. By deciphering the runes and respecting the caverns' natural balance, you earn a sparkling gem of Harmony, reflecting your ability to find balance and peace in chaotic surroundings. Your journey continues with enhanced harmony, navigating through a labyrinth of crystalline formations that would have otherwise disoriented you.",
        image: "./img/crystalcaverns.png",
        options: [
            {text: "Wisdom's Path", nextScene: "wisdomsPath" },
            {text: "Stormy Pass", nextScene: "stormyPass" }
        ]
    },

    namedConcequence: {
        text: "Opting to bypass the Crystal Caverns, you skirt around their entrances, avoiding potential dangers or distractions within. While you proceed without incident, you miss the opportunity to uncover Inner Strength from the caverns' challenges and encounter a steep, rocky path that requires careful navigation.",
        image: "./img/crystalcaverns.png",
        options: [
            {text: "Wisdom's Path", nextScene: "wisdomsPath" },
            {text: "Stormy Pass", nextScene: "stormyPass" }
        ]
    },

    //Wisdom's Path Option
    wisdomsPath: {
        text: "To the right, a path veers towards a serene plateau known as Wisdom's Path, where ancient sages once meditated and communed with nature.",
        image: "./img/wisdomspath.png",
        options: [
            { text: "Meditate at Wisdom's Path", action: function() {
                gameState.gems.wisdom = true;
                gameState.currentScene = "meditateAtWisdomsPath";
                updateGame();
            }},
            {text: "Continue Exploring", nextScene: "continueExploring"},
        ]
    },

    meditateAtWisdomsPath: {
        text: "Choosing to meditate at Wisdom's Path, you find a sense of peace and clarity as you connect with the ancient wisdom of the sages. Inspired by your introspection, you receive a radiant gem of Wisdom, symbolizing your deepened understanding and insight. Your journey continues with renewed purpose and foresight, avoiding a treacherous cliffside that would have otherwise posed a danger.",
        image: "./img/wisdomsPath",
        options: [
            {text: "Whispering Forest", nextScene: "whisperingForest"},
            {text: "Luminous Peak", nextScene: "luminousPeak"}
        ]
    },

    continueExploring: {
        text: "TEXTOpting to bypass Wisdom's Path and continue exploring the mountain, you remain focused on uncovering more of its secrets. While you proceed with determination, you miss the opportunity to gain Reflection from the serene environment and encounter a steep, rocky descent that tests your agility.",
        image: "./img/wisdomsPath",
        options: [
            {text: "Whispering Forest", nextScene: "whisperingForest"},
            {text: "Luminous Peak", nextScene: "luminousPeak"}
        ]
    },

    //Stormy Pass Option
    stormyPass: {
        text: "To the left, a rugged trail leads into Stormy Pass, where dark clouds gather ominously and lightning crackles in the distance.",
        image: "./img/stormyPass",
        options: [
            {text: "Brave the Storm", action: function() {
                gameState.gems.resilience = true;
                gameState.currentScene = "braveTheStorm";
                updateGame();
            }},
            {text: "Seek Shelter", nextScene: "seekShelter"},
        ]
    },

    braveTheStorm: {
        text: "Embracing the challenge, you venture into Stormy Pass, where dark clouds swirl and lightning flashes overhead. Through resilience and determination, you navigate through the tumultuous weather and reach the other side unscathed. Impressed by your bravery, the mountain spirits reward you with a shimmering gem of Resilience, symbolizing your ability to endure and overcome adversity. Your journey continues with enhanced resilience, bypassing a maze of sharp rocks that would have otherwise slowed your progress.",
        image: "./img/stormyPass",
        options: [
            {text: "Whispering Wood", nextScene: "whisperingForest"},
            {text: "Luminous Peak", nextScene: "lumionsPeak"}
        ]
    },

    seekShelter: {
        text: "Opting to seek shelter or find an alternative route around Stormy Pass, you wait out the storm or navigate a safer path. While you avoid immediate dangers, you miss the opportunity to demonstrate Courage in the face of elemental challenges and encounter a winding path that leads to a daunting cliff.",
        image: "./img/stormyPass",
        options: [
            {text: "Whispering Forest", nextScene: "whisperingForest"},
            {text: "Luminous Peak", nextScene: "lumionsPeak"}
        ]
    },

    //Whispering Forest Option
    whisperingForest: {
        text: "To the right, a winding path leads into the Whispering Forest, where ancient trees whisper secrets of the past and pathways shift with each passing breeze.",
        image: "./img/whisperingForest.png",
        options: [
            {text: "Listen to the Trees", action: function() {
                gameState.gems.patience = true;
                gameState.currentScene = "listenToTheTrees";
                updateGame();
            }},
            {text: "Navigate the Shifting Paths", action: function() {
                gameState.gems.adaptability = true;
                gameState.currentScene = "navigateTheShiftingPaths";
                updateGame();
            }},
        ]
    },

    listenToTheTrees: {
        text: "Approaching the ancient trees, you quiet your mind and listen attentively to their whispers. They share tales of ancient heroes and offer cryptic advice for your journey. By showing respect and patience, you earn a shimmering gem of Patience, symbolizing your ability to listen and learn from the wisdom of others. Your journey continues with enhanced patience, navigating through a maze of illusions that would have otherwise misled you.",
        image: "./img/whisperingWoods",
        options: [
            {text: "Go to the Royal Castle", nextScene: "royalCastle"},
            {text: "Return Home", nextScene: "start"}
        ]
    },

    navigateTheShiftingPaths: {
        text: "Choosing to navigate the shifting paths of the Whispering Woods, you rely on intuition and adaptability to find your way through the labyrinthine forest. Through perseverance and keen observation, you discover a hidden path guarded by ancient spirits, who reward you with a radiant gem of Adaptability. Your journey continues with newfound adaptability, bypassing a treacherous swamp that would have otherwise hinder your progress.",
        image: "./img/whisperingWoods",
        options: [
            {text: "Go to the Royal Castle", nextScene: "royalCastle"},
            {text: "Return Home", nextScene: "start"}
        ]
    },

    //Luminous Peak Option
    luminousPeak: {
        text: "To the left, a trail ascends towards the Luminous Peaks, where rare crystals grow amidst glowing flora, bathing the area in a surreal radiance.",
        image: "./img/luminousPeak",
        options: [
            {text: "Collect Luminous Crystals", action: function() {
                gameState.gems.harmony = true;
                gameState.currentScene = "collectLuminousCrystals";
                updateGame();
            }},
            {text: "Appreciate the Beauty", nextScene: "appreciateTheBeauty"},
        ]
    },

    collectLuminousCrystals: {
        text: "Intrigued by the rare crystals of the Luminous Peaks, you gather them carefully, feeling their mystical energy resonate within you. By respecting the delicate balance of nature, you receive a gleaming gem of Harmony, symbolizing your ability to find balance amidst beauty and power. Your journey continues with enhanced harmony, avoiding a perilous rockslide that would have otherwise blocked your path.",
        image: "./img/luminousPeak",
        options: [
            {text: "Go to the Royal Castle", nextScene: "royalCastle"},
            {text: "Return Home", nextScene: "start"}
        ]
    },

    appreciateTheBeauty: {
        text: "Taking a moment to admire the ethereal beauty of the Luminous Peaks, you pause to reflect on the wonder and majesty of the natural world. While you appreciate the beauty, you miss the opportunity to gain Insight from the crystals' energies and encounter a steep, rocky ascent that tests your endurance.",
        image: "./img/appreciateTheBeauty",
        options: [
            {text: "Go to the Royal Castle", nextScene: "royalCastle"},
            {text: "Return Home", nextScene: "start"}
        ]
    },

//--------------------------------------------------\\

    //Start of the Royal Castle
    royalCastle: {
        text: "You arrive at the majestic Royal Castle. Turrets rise towards the sky and banners flutter in the breeze...",
        options: [
            { text: "Visit the Royal Library", nextScene: "royalLibrary" },
            { text: "Attend the Royal Court", nextScene: "royalCourt" }
        ]
    },
    royalLibrary: {
        text: "You enter the Royal Library, filled with ancient tomes and scrolls...",
        options: [
            { text: "Research Ancient Lore", action: function() {
                gameState.gems.knowledge = true;
                gameState.currentScene = "ancientLore";
                addToInventory("Ancient Tome");
                updateGame();
            }},
            { text: "Seek Guidance from the Librarian", action: function() {
                gameState.currentScene = "librarianGuidance";
                updateGame();
            }}
        ]
    },
    royalCourt: {
        text: "You attend the Royal Court, where decisions shaping the kingdom's fate are made...",
        options: [
            { text: "Present Your Ideas to the Monarch", action: function() {
                gameState.gems.leadership = true;
                gameState.currentScene = "presentIdeas";
                updateStats('diplomaticChoice');
                updateGame();
            }},
            { text: "Observe Court Proceedings", action: function() {
                gameState.currentScene = "observeProceedings";
                updateGame();
            }}
        ]
    }
};

// Function to update the game interface with current scene and options
function updateGame() {
    const currentScene = scenes[gameState.currentScene];
    const gameTextElement = document.getElementById('game-text');
    const optionsContainer = document.getElementById('options-container');
    const inventoryList = document.getElementById('inventory-list');
    const strengthStat = document.getElementById('strength-stat');
    const magicStat = document.getElementById('magic-stat');
    const diplomacyStat = document.getElementById('diplomacy-stat');
    const sceneImageElement = document.getElementById('scene-image');


    // Update scene image
    if (currentScene.image) {
        sceneImageElement.src = currentScene.image;
        sceneImageElement.style.display = 'block';
    } else {
        sceneImageElement.style.display = 'none';
    }


    // Update game text
    gameTextElement.innerHTML = `<p>${currentScene.text}</p>`;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Display new options
    currentScene.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('option-button');
        button.addEventListener('click', function() {
            if (option.action) option.action();
            else gameState.currentScene = option.nextScene;
            updateGame();
        });
        optionsContainer.appendChild(button);
    });

    // Update inventory display
    inventoryList.innerHTML = '';
    playerState.inventory.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('item');
        listItem.textContent = item;
        inventoryList.appendChild(listItem);
    });

    // Update character stats display
    strengthStat.textContent = playerState.stats.strength;
    magicStat.textContent = playerState.stats.magic;
    diplomacyStat.textContent = playerState.stats.diplomacy;
}

// Example: Implementing a function to add items to inventory
function addToInventory(item) {
    playerState.inventory.push(item);
    console.log(`Added ${item} to inventory:`, playerState.inventory);
}

// Example: Implementing a function to update player stats based on choices
function updateStats(choice) {
    switch (choice) {
        case 'diplomaticChoice':
            playerState.stats.diplomacy += 2;
            break;
        // Add more cases as per your game's choices and outcomes
        default:
            break;
    }
}

// Initialize game
updateGame();

// Example: Background music control
const backgroundMusic = document.getElementById('background-music');
// Uncomment and replace 'background_music.mp3' with your actual music file path
backgroundMusic.src = 'background_music.mp3';
backgroundMusic.play();