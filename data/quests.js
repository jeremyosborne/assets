module.exports = [
    {
        "name": "Main Quest",
        // Type can be either "sequential", where the order of the quests
        // is to be respected, and one quest feeds to another.
        // Or type can be "individual", where the order of the quests in the
        // array is arbitrary. 
        "type": "sequential",
        "collection": [
            {
                "name": "The Mysterious Note",
                "startTriggers": "Read the note outside your house in Yoma River Valley",
                "successTriggers": "Speak to Darus in Yoma River Valley",
                "successEffects": "300 XP"
            },
            {    
                "name": "Destiny Through a Viewing Glass",
                "startTriggers": "Complete Mysterious Note",
                "successTriggers": "Speak to Eleanise in Yoma River Valley and agree to show the glass to Minus",
                "successEffects": "100 XP"
            },
            {    
                "name": "Destiny Through a Viewing Glass, Part 2",
                "startTriggers": "Complete Destiny Through a Viewing Glass",
                "successTriggers": "Speak to Minus in Greenriven Lake",
                "successEffects": "500 XP"
            },
            {    
                "name": "Destiny Through a Viewing Glass, Part 3",
                "startTriggers": "Complete Destiny Through a Viewing Glass, Part 2",
                "successTriggers": "Speak to Saint Gilhelm in Port Kuudad",
                "successEffects": "1000 XP and Philosopher's Pendant"
            },
            {    
                "name": "The Secret Society",
                "startTriggers": "Complete Destiny Through a Viewing Glass, Part 3",
                "successTriggers": "Enter The Guild of Crius Vindica in Forsaken Coast",
                "successEffects": "2000 XP"
            },
            {    
                "name": "Quest for the Crux of Fire: A Meeting with Sparrow",
                "startTriggers": "Speak with Korren at The Guild of Crius Vindica",
                "successTriggers": "Retrieve Sparrow's key from Broken Blade and return to Korren",
                "successEffects": "1000 XP"
            },
            {    
                "name": "Quest for the Crux of Fire: On to Hammerlorne",
                "startTriggers": "Complete Quest for the Crux of Fire: A Meeting with Sparrow",
                "successTriggers": "Enter Hammerlorne Great Hall from Hammerlorne Mountain",
                "successEffects": "2000 XP"
            },
            {    
                "name": "Quest for the Crux of Fire: Procure the Crux",
                "startTriggers": "Complete Quest for the Crux of Fire: On to Hammerlorne",
                "successTriggers": "Get the Crux in Hammerlorne Mine, Level 3",
                "successEffects": "7000 XP"
            },
            {    
                "name": "Return the Crux to Korren",
                "startTriggers": "Complete Quest for the Crux of Fire: Procure the Crux",
                "successTriggers": "Return the Crux to Korren",
                "successEffects": "3000 XP"
            },
            {    
                "name": "Destroy the Crux, Part 1: Picaroon Island",
                "startTriggers": "Complete Return the Crux to Korren",
                "successTriggers": "Take the boat from Northern Harpoon Bay to Picaroon Island",
                "successEffects": "5000 XP"
            },
            {    
                "name": "Destroy the Crux, Part 2: Talushorn",
                "startTriggers": "Complete Destroy the Crux, Part 1: Picaroon Island",
                "successTriggers": "Enter Talushorn",
                "successEffects": "5000 XP"
            },
            {    
                "name": "Destroy the Crux, Part 3: Talushorn",
                "startTriggers": "Complete Destroy the Crux, Part 2: Talushorn",
                "successTriggers": "Find the Crux of Ages",
                "successEffects": "5000 XP"
            }        
        ]
    },
    {
        "name": "Lycanthrope Quest",
        "type": "sequential",
        "collection": [
            {
                "name": "The Lycanthrope",
                "startTriggers": "Speak to Xed in Western Kessian Basin",
                "successTriggers": "Kill Harpen in Central Farrock Range and return to Xed",
                "successEffects": "600 XP, 400 gold, end quest chain",
                "failTrigger": "Agree with Harpen that Xed is the actual werewolf.",
                "failEffects": "Move on to next quest."
            },
            {
                "name": "The Lycanthrope, Part 2",
                "startTriggers": "Speak to Harpen in Central Farrock Range and abandon The Lycanthrope after getting the quest from Xed",
                "successTriggers": "Kill Xed, get Wolf Hunter's Ring and give it to Harpen",
                "successEffects": "500 XP, 500 gold"
            }
        ]
    },
    {
        "name": "Side Quests",
        "type": "individual",
        "collection": [
            {
                "name": "Adamantium Ore Else",
                "startTriggers": "Speak to Ara in Central Farrock Range",
                "successTriggers": "Get the ore in Farrock Caves Level 1 and return to Ara",
                "successEffects": "750 XP, 200 gold"
            },
            {    
                "name": "Arachnophobia",
                "startTriggers": "Speak to Mohal on Picaroon Island",
                "successTriggers": "Destroy the spider nest in Brimstone Lava Fields and return to Mohal",
                "successEffects": "1500 XP, 1000 gold"
            },
            {
                "name": "Assistance from Lorewitch",
                "startTriggers": "Speak to Erubor in The Guild of Crius Vindica after completing",
                "successTriggers": "Speak to Charma in Lorewitch Level 3",
                "successEffects": "2500 XP, Plasma Wand"
            },
            {
                "name": "In the Belly of a Beetle",
                "startTriggers": "Speak to Hunter in Wolfenwood",
                "successTriggers": "Kill the beetle with the wood in its belly in ?, get the wood, and return it to Hunter",
                "successEffects": "1000 XP, Warmoth"
            },
            {
                "name": "Curse of the Prospector",
                "startTriggers": "Speak to Mayor Theotus in Westwillow",
                "successTriggers": "Kill the Prospector and return to Theotus",
                "successEffects": "2000 XP"
            },
            {
                "name": "A Den of Dragonels",
                "startTriggers": "Speak to Anwick in Yoma River Valley",
                "successTriggers": "Destroy the dragonel nest in South Kessian Basin and return to Anwick",
                "successEffects": "250 XP, 100 gold, Dragonel Nest Piece"
            },
            {
                "name": "Exterminator",
                "startTriggers": "Speak to Magi Surami in Port Kuudad",
                "successTriggers": "Kill 23 Goliath boreheads on the following maps",
                "successEffects": "2500 XP, 5000 gold, Hexedge"
            },
            {
                "name": "A Favor for Wendy",
                "startTriggers": "Speak to Wendy in Yoma River Valley",
                "successTriggers": "Retrieve the note from her brother Ruel's body in South Kessian Basin and return it to Wendy",
                "successEffects": "300 XP, 50 gold"
            },
            {
                "name": "To Hunt an Assassin",
                "startTriggers": "Pick up Soulpiecer from Darus's body in Yoma River Valley",
                "successTriggers": "Kill Zeblin in Thieves' Arcadia",
                "successEffects": "2000 XP",
                "failTrigger": "Let Zeblin live.",
                "failEffects": "Zeblin available to learn Rogue Skills (Hide in Shadows, Move Silently and Pick Locks)."
            },
            {
                "name": "A Missing Disciple",
                "startTriggers": "Speak to Father Tyrus in Yoma River Valley",
                "successTriggers": "Kill Julian in the well behind the church and return to Father Tyrus",
                "successEffects": "500 XP, 150 gold"
            },
            {
                "name": "News about Yoma Narrows",
                "startTriggers": "Speak to Phensil in Yoma Narrows",
                "successTriggers": "Speak to Edwin in Port Kuudad",
                "successEffects": "500 XP"
            },
            {
                "name": "Quest of the Snow Pup",
                "startTriggers": "Speak to Lord Brumbleton in Durnore Region",
                "successTriggers": "Retrieve a snow pup from Western Hellice Lake without killing Shebara and return it to Brumbleton",
                "successEffects": "2000 XP, 750 gold"
            },
            {
                "name": "Repossession",
                "startTriggers": "Speak to Keebo in Yoma River Valley",
                "successTriggers": "Retrieve the sword from the wall in the constable's house, Yoma River Valley",
                "successEffects": "150 XP, 100 gold"
            },
            {
                "name": "To Save a Child's Life",
                "startTriggers": "Speak to the dying man in Wolfenwood",
                "successTriggers": "Take Sparkling Divinity to the child's mother in Port Kuudad",
                "successEffects": "300 XP, 300 XP or alchemy recipes"
            },
            {
                "name": "Secrets of the Deep",
                "startTriggers": "Speak to Minus in Greenriven Lake",
                "successTriggers": "Speak to Brudo in the dam about Westwillow",
                "successEffects": "300 XP"
            },
            {
                "name": "Shortest. Quest. Ever.",
                "startTriggers": "Speak to Big Sal in Port Kuudad",
                "successTriggers": "Speak to Becka in Port Kuudad",
                "successEffects": "Harden Armor recipe when you get the quest, 25 XP and 3 gold"
            },
            {
                "name": "Spiders in the Warehouse",
                "startTriggers": "Speak to Edwin in Port Kuudad",
                "successTriggers": "Kill the spiders in the warehouse in Port Kuudad and return to Edwin",
                "successEffects": "1000 XP, 400 gold"
            },
            {
                "name": "Turn in Ruel's Book",
                "startTriggers": "Take Ruel's Book, obtained in South Kessian Basin, to Saint Gilhelm in Port Kuudad",
                "successTriggers": "Put the book on the desk in Basement Archives",
                "successEffects": "1000 XP when you get the quest, 250 XP when completed"
            },
            {
                "name": "A Weed in the Bath House",
                "startTriggers": "Speak to Travet in Central Farrock Range",
                "successTriggers": "Kill the Sentinel Stalk in Central Farrock Range and return to Travet",
                "successEffects": "350 XP, 75 gold"
            }        
        ]
    }
]
