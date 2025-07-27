function get_civ_details(civilization) {
    const civDetails = {
        "Armenians": "Infantry and Naval civilization\n\n• Mule Carts cost -25%\n• Mule Cart technologies are +40% more effective\n• Spearman- and Militia-line upgrades (except Man-at-Arms) available one age earlier\n• First Fortified Church receives a free Relic\n• Galley-line and Dromons fire an additional projectile\n\nUnique Unit:\nComposite Bowman (Foot Archer), Warrior Priest (Infantry)\n\nUnique Techs:\n• Cilician Fleet (Demolition Ships +20% blast radius; Galley-line and Dromons +1 range)\n• Fereters (Infantry (except Spearman-line) +30 HP; Warrior Priests heal +100% faster)\n\nTeam Bonus:\nInfantry +2 line of sight",
        "Aztecs": "Infantry and Monk civilization\n\n• Start with +50 gold\n• Villagers carry +3\n• Military Units train +15% faster\n• Monks gain +5 HP for each researched Monastery technology\n\nUnique Unit:\nJaguar Warrior (Infantry)\n\nUnique Techs:\n• Atlatl (Skirmishers +1 attack, +1 range)\n• Garland Wars (Infantry +4 attack)\n\nTeam Bonus:\nRelics generate +33% gold",
        "Bengalis": "Elephant and Naval civilization\n\n• Town Centers spawn 2 Villagers when the next Age is reached\n• Cavalry +2 attack vs. Skirmishers\n• Elephant Units receive -25% bonus damage and are more resistant to conversion\n• Monks +3 melee/+3 pierce armor\n• Ships regenerate 15 HP per minute\n\nUnique Unit:\nRatha (Mounted Archer)\n\nUnique Techs:\n• Paiks (Rathas and Elephant Units attack +20% faster)\n• Mahayana (Villagers and Monks take -10% population space)\n\nTeam Bonus:\nTrade Units generate +10% food in addition to gold",
        "Berbers": "Cavalry and Naval civilization\n\n• Villagers move +5% faster in Dark Age, +10% faster starting in Feudal Age\n• Stable Units cost -15/20% in Castle/Imperial Age\n• Ships move +10% faster\n\nUnique Units:\nCamel Archer (Mounted Archer), Genitour (Mounted Skirmisher)\n\nUnique Techs:\n• Kasbah (Team Castles work +25% faster)\n• Maghrebi Camels (Camel Units regenerate 15 HP per minute)\n\nTeam Bonus:\nGenitour available at the Archery Range starting in Castle Age",
        "Bohemians": "Gunpowder and Monk civilization\n\n• Mining Camp technologies free\n• Blacksmiths and Universities cost -100 wood\n• Spearman-line deals +25% bonus damage\n• Fervor and Sanctity affect Villagers\n• Chemistry and Hand Cannoneer available in Castle Age\n\nUnique Units:\nHussite Wagon (Siege Gunpowder Unit), Houfnice (Siege Gunpowder Unit)\n\nUnique Techs:\n• Wagenburg Tactics (Gunpowder Units move +15% faster)\n• Hussite Reforms (Monks and Monastery technologies gold cost is replaced by food cost)\n\nTeam Bonus:\nMarkets work +80% faster",
        "Britons": "The Britons are a Foot Archer civilization\n\nCiv Bonuses:\n- Shepherds work +25% faster\n- Town Centers cost -50% wood starting in Castle Age\n- Foot Archers +1/+2 range in Castle/Imperial Age\n\nUnique Unit:\nLongbowman (Foot Archer)\n\nUnique Techs:\n- Yeomen (Foot Archers and Skirmisher-line +1 range; Watch Tower-line +2 attack)\n- Warwolf (Trebuchets deal blast damage and are more accurate)\n\nTeam Bonus:\nArchery Ranges work +10% faster",
        "Bulgarians": "Infantry and Cavalry civilization\n\n• Militia-line upgrades free\n• Blacksmith and Siege Workshop technologies cost -50% food\n• Town Centers cost -50% stone\n• Can build Krepost in Castle Age\n\nUnique Unit:\nKonnik (Cavalry)\n\nUnique Techs:\n• Stirrups (Cavalry attacks +33% faster)\n• Bagains (Militia-line +5 melee armor)\n\nTeam Bonus:\nBlacksmiths work +80% faster",
        "Burgundians": "Cavalry civilization\n\n• Economic upgrades available one age earlier and cost -33% food\n• Stable technologies cost -50%\n• Cavalier upgrade available in Castle Age\n• Gunpowder Units +25% attack\n\nUnique Units:\nCoustillier (Cavalry), Flemish Militia (Infantry)\n\nUnique Techs:\n• Burgundian Vineyards (Farmers slowly generate gold in addition to food)\n• Flemish Revolution (All existing Villagers are transformed to Flemish Militia)\n\nTeam Bonus:\nRelics generate food in addition to gold",
        "Burmese": "Infantry and Cavalry civilization\n\n• Lumber Camp technologies free\n• Infantry +1/+2/+3 attack in Feudal/Castle/Imperial Age\n• Battle Elephants +1 melee/+1 pierce armor\n• Monastery technologies cost -50%\n\nUnique Unit:\nArambai (Ranged Mounted Unit)\n\nUnique Techs:\n• Manipur Cavalry (Cavalry +4 attack vs. Ranged Soldiers)\n• Howdah (Battle Elephants +1 melee/+1 pierce armor)\n\nTeam Bonus:\nRelics visible on the map at the start of the game",
        "Byzantines": "Defensive civilization\n\n• Buildings +10/20/30/40% HP in Dark/Feudal/Castle/Imperial Age\n• Camel Riders, Skirmishers and Spearman-line cost -25%\n• Town Watch, Town Patrol free\n• Advancing to Imperial Age costs -33%\n• Fire Ships and Dromons attack +25% faster\n\nUnique Unit:\nCataphract (Cavalry)\n\nUnique Techs:\n• Greek Fire (Fire Ships +1 range; Dromons and Bombard Towers increased blast radius)\n• Logistica (Cataphracts deal trample damage, +6 attack vs. Infantry)\n\nTeam Bonus:\nMonks heal +100% faster",
        "Celts": "Infantry and Siege civilization\n\n• Lumberjacks work +15% faster\n• Livestock animals within Celt unit line of sight cannot be stolen\n• Infantry moves +5/10/15/20% faster in Dark/Feudal/\nCastle/Imperial Age\n• Siege Weapons attack +25% faster\n\nUnique Unit:\nWoad Raider (Infantry)\n\nUnique Techs:\n• Stronghold (Castles and Watch Tower-line attack +33% faster; Castles heal allied Infantry in a 7 tile radius)\n• Furor Celtica (Siege Workshop Units +40% HP)\n\nTeam Bonus:\nSiege Workshops work +20% faster",
        "Chinese": "Archer and Gunpowder civilization\n\n• Start with +3 Villagers, but -50 wood and -200 food\n• Technologies cost -5/10/15% in Feudal/Castle/Imperial Age\n• Town Centers +7 line of sight and provide +15 population space\n• Fire Lancers and Fire Ships move +5/10% faster in Castle/Imperial Age\n\nUnique Unit:\nChu Ko Nu (Foot Archer), Dragon Ship (Warship)\n\nUnique Techs:\n• Great Wall (Walls, Watch Tower-line and Bombard Towers +30% HP)\n• Rocketry (Scorpions, Rocket Carts and Lou Chuans +25% attack; Lou Chuans fire rockets)\n\nTeam Bonus:\nFarms +10% food",
        "Cumans": "Cavalry civilization\n\n• One additional Town Center can be built in Feudal Age\n• Mounted Units move +5/10/15% faster in Feudal/\nCastle/Imperial Age\n• Archery Ranges and Stables cost -75 wood\n• Siege Workshop and Battering Ram available in Feudal Age; Capped Ram available in Castle Age\n\nUnique Unit:\nKipchak (Mounted Archer)\n\nUnique Techs:\n• Steppe Husbandry (Light Horsemen and Cavalry Archers train +100% faster)\n• Cuman Mercenaries (All team members can train 5 free Elite Kipchaks per Castle)\n\nTeam Bonus:\nPalisade Walls +33% HP",
        "Dravidians": "Infantry and Naval civilization\n\n• Fishermen and Fishing Ships carry +15\n• Receive +200 wood when advancing to the next Age\n• Skirmishers and Elephant Archers attack +25% faster\n• Barracks technologies cost -50%\n• Siege Weapons cost -33% wood\n\nUnique Units:\nUrumi Swordsman (Infantry), Thirisadai (Warship)\n\nUnique Techs:\n• Medical Corps (Elephant Units regenerate 30 HP per minute)\n• Wootz Steel (Infantry and Cavalry attacks ignore armor)\n\nTeam Bonus:\nDocks provide +5 population space",
        "Ethiopians": "Archer civilization\n\n• Receive +100 gold and +100 food when advancing to the next Age\n• Foot Archers attack +18% faster\n• Pikeman upgrade free\n\nUnique Unit:\nShotel Warrior (Infantry)\n\nUnique Techs:\n• Royal Heirs (Shotel Warriors and Camel Riders receive -3 damage from Mounted Units)\n• Torsion Engines (Siege Workshop Units' blast radius increased)\n\nTeam Bonus:\nOutposts +3 line of sight and cost no stone",
        "Franks": "Cavalry civilization\n\n• Foragers work +15% faster\n• Mill technologies free\n• Mounted Units +20% HP starting in Feudal Age\n• Castles cost -15/25% in Castle/Imperial Age\n\nUnique Unit:\nThrowing Axeman (Infantry)\n\nUnique Techs:\n• Bearded Axe (Throwing Axemen +1 range)\n• Chivalry (Stables work +40% faster)\n\nTeam Bonus:\nKnight-line +2 line of sight",
        "Georgians": "Defensive and Cavalry civilization\n\n• Start with a Mule Cart\n• Units and buildings receive -15% damage when located on higher elevation\n• Mounted Units regenerate 2/8/14 HP per minute in Feudal/Castle/Imperial Age\n• Fortified Churches provide Villagers in an 8 tile radius with +10% work rate\n\nUnique Unit:\nMonaspa (Cavalry)\n\nUnique Techs:\n• Svan Towers (Fortifications +2 attack; Watch Tower-line deals pass through damage)\n• Aznauri Cavalry (Mounted Units take -15% population space)\n\nTeam Bonus:\nBuilding repairs cost -25%",
        "Goths": "Infantry civilization\n\n• Loom is researched instantly\n• Villagers +5 attack vs. wild boar; Hunters carry +15; hunted animals last +20% longer\n• Infantry costs -15/20/25/30% in Dark/Feudal/Castle/\nImperial Age\n• Infantry +1/+2/+3 attack vs. buildings in Feudal/\nCastle/Imperial Age\n• +10 population space in Imperial Age\n\nUnique Unit:\nHuskarl (Infantry)\n\nUnique Techs:\n• Anarchy (Huskarls can be trained at Barracks)\n• Perfusion (Barracks work +100% faster)\n\nTeam Bonus:\nBarracks work +20% faster",
        "Gurjaras": "Cavalry and Camel civilization\n\n• Start with two forage bushes under Town Center\n• Can garrison Herdables in Mills for food trickle\n• Mounted Units deal +50% bonus damage\n• Camel and Elephant units cost -25% food\n• Camel Riders attack 25% faster\n\nUnique Units:\nShrivamsha Rider (Cavalry), Chakram Thrower (Infantry)\n\nUnique Techs:\n• Kshatriyas (Military units cost -25% food)\n• Frontier Guards (Camel and Elephant units +4 armor)\n\nTeam Bonus:\nCamel units +2 bonus damage",
        "Hindustanis": "Camel and Gunpowder civilization\n\n• Villagers cost -10/15/20/25% in Dark/Feudal/Castle/Imperial Age\n• Camel Riders attack 25% faster\n• Gunpowder units +25% attack\n• Can build Caravanserai\n\nUnique Unit:\nGhulam (Infantry)\n\nUnique Techs:\n• Grand Trunk Trade (Trade units generate +10% gold)\n• Shatagni (Hand Cannoneers +2 range)\n\nTeam Bonus:\nCamel and Light Cavalry units +2 attack vs. buildings",
        "Huns": "Cavalry civilization\n\n• Houses not required\n• Cavalry Archers cost -10/20% in Castle/Imperial Age\n• Trebuchets pack/unpack instantly\n\nUnique Unit:\nTarkan (Cavalry)\n\nUnique Techs:\n• Marauders (Tarkans can be trained at Stables)\n• Atheism (Enemy Wonder victory countdown +100 years; Spies/Treason cost -50%)\n\nTeam Bonus:\nStables work 20% faster",
        "Inca": "Infantry and Archer civilization\n\n• Start with a free Llama\n• Houses support 10 population\n• Villagers affected by Blacksmith upgrades\n• Buildings cost -15% stone\n\nUnique Unit:\nKamayuk (Infantry), Slinger (Infantry)\n\nUnique Techs:\n• Andean Sling (Skirmishers and Slingers have no minimum range)\n• Fabric Shields (Infantry and Kamayuks +1 armor)\n\nTeam Bonus:\nFarm upgrades free",
        "Italians": "Naval and Gunpowder civilization\n\n• Advancing to next Age costs -15%\n• Dock technologies cost -33%\n• Fishing Ships cost -15%\n• Gunpowder units cost -20%\n\nUnique Unit:\nGenoese Crossbowman (Foot Archer)\n\nUnique Techs:\n• Pavise (Foot Archers and Skirmishers +1/+1 armor)\n• Silk Road (Trade units cost -50%)\n\nTeam Bonus:\nDock technologies researched 50% faster",
        "Japanese": "Infantry civilization\n\n• Mills, Lumber- and Mining Camps cost -50%\n• Infantry attacks +33% faster starting in Feudal Age\n• Cavalry Archers +2 attack vs. Ranged Soldiers (except Skirmishers)\n• Fishing Ships work +5/10/15/20% faster in Dark/Feudal/Castle/Imperial Age; +100% HP and +2 pierce armor\n\nUnique Unit:\nSamurai (Infantry)\n\nUnique Techs:\n• Yasama (Watch Tower-line fires additional arrows)\n• Kataparuto (Trebuchets attack and pack/unpack faster)\n\nTeam Bonus:\nGalley-line +4 line of sight",
        "Jurchens": "Cavalry and Gunpowder civilization\n\n• Meat of hunted and livestock animals doesn't decay\n• Mounted Units and Fire Lancers attack +20% faster starting in Feudal Age\n• Siege Engineers available in Castle Age\n• Siege and Fortification upgrades cost -75% wood and research +100% faster\n• Units receive -50% friendly fire damage\n\nUnique Units:\nIron Pagoda (Cavalry), Grenadier (Gunpowder Unit)\n\nUnique Techs:\n• Fortified Bastions (Fortifications regenerate 500 HP per minute)\n• Thunderclap Bombs (Rocket Carts, Grenadiers and Lou Chuans detonate when defeated; projectiles produce additional explosions)\n\nTeam Bonus:\nGunpowder Units +2 line of sight",
        "Khitans": "Infantry and Cavalry civilization\n\n• Pastures replace Farms\n• Melee attack upgrade effects are doubled\n• Skirmishers, Spearman-, and Scout Cavalry-line train and upgrade +25% faster\n• Heavy Cavalry Archer upgrade available in Castle Age and costs -50%\n\nUnique Units:\nLiao Dao (Infantry), Mounted Trebuchet (Siege Cavalry)\n\nUnique Techs:\n• Lamellar Armor (Infantry and Skirmishers reflect 25% melee damage back to the attacker)\n• Ordo Cavalry (Cavalry regenerates HP in combat)\n\nTeam Bonus:\nInfantry +2 attack vs. Ranged Soldiers",
        "Khmer": "Siege and Elephant civilization\n\n• No buildings required to advance to the next Age or to unlock other buildings\n• Farmers don't require Mills or Town Centers to drop off food\n• Villagers can garrison in Houses\n• Battle Elephants move +10% faster\n\nUnique Unit:\nBallista Elephant (Siege Cavalry)\n\nUnique Techs:\n• Tusk Swords (Battle Elephants +3 attack)\n• Double Crossbow (Ballista Elephants and Scorpions fire an additional projectile)\n\nTeam Bonus:\nScorpions +1 range",
        "Koreans": "Defensive and Naval civilization\n\n• Stone miners work +20% faster\n• Ranged Soldiers and Infantry cost -50% wood\n• Archer armor and tower upgrades free (Bombard Tower requires Chemistry)\n• Warships cost -20% wood\n\nUnique Units:\nWar Wagon (Mounted Archer), Turtle Ship (Warship)\n\nUnique Techs:\n• Eupseong (Watch Tower-line +2 range)\n• Shinkichon (Rocket Carts and Turtle Ships +1 range, fire additional projectiles)\n\nTeam Bonus:\nVillagers +3 line of sight",
        "Lithuanians": `Cavalry and Monk civilization

• Each Town Center provides +100 food
• Spearman-line and Skirmisher-line move +10% faster
• Each garrisoned Relic provides +1 attack to Knight-line and Leitis (maximum +4)

Unique Units:
Leitis (Cavalry), Winged Hussar (Cavalry)

Unique Techs:
• Hill Forts (Town Centers +3 range)
• Tower Shields (Spearman-line and Skirmishers +2 pierce armor)

Team Bonus:
Monasteries work +20% faster`,
"Magyars": `Cavalry civilization

• Villagers defeat wolves with one strike
• Scout Cavalry-line costs -15%
• Melee attack upgrades free

Unique Unit:
Magyar Huszar (Cavalry)

Unique Techs:
• Corvinian Army (Magyar Huszar gold cost is replaced by additional food cost)
• Recurve Bow (Mounted Archers +1 attack, +1 range)

Team Bonus:
Mounted Archers train +25% faster`,
"Malay" : `Naval civilization

• Advancing to the next Age is +66% faster
• Infantry armor upgrades free
• Battle Elephants cost -25/35% in Castle/Imperial Age
• Fish Traps cost -33% and provide +200% food

Unique Unit:
Karambit Warrior (Infantry)

Unique Techs:
• Thalassocracy (Docks are upgraded to Harbors)
• Forced Levy (Militia-line gold cost is replaced by additional food cost)

Team Bonus:
Docks +6 line of sight`,
"Malians":`Infantry civilization

• Buildings cost -15% wood
• Villagers drop off +10% more gold
• Barracks Units +1/+2/+3 pierce armor in Feudal/
Castle/Imperial Age

Unique Unit:
Gbeto (Infantry)

Unique Techs:
• Tigui (Town Centers fire arrows without garrison)
• Farimba (Cavalry +5 attack)

Team Bonus:
Universities work +80% faster`,
"Maya": `Archer civilization

• Start with +1 Villager, but -50 food
• Resources last +15% longer
• Foot Archers cost -10/20/30% in Feudal/Castle/Imperial Age

Unique Unit:
Plumed Archer (Foot Archer)

Unique Techs:
• Hul'che Javelineers (Skirmishers fire an additional projectile)
• El Dorado (Eagle Warriors +40 HP)

Team Bonus:
Walls cost -50%`,
        "Mongols": "Cavalry Archer civilization\n\n• Hunters work +40% faster\n• Cavalry Archers attack +25% faster\n• Light Horsemen +20/30% HP in Castle/Imperial Age\n\nUnique Unit:\nMangudai (Mounted Archer)\n\nUnique Techs:\n• Nomads (Lost Houses do not decrease population space)\n• Drill (Siege Workshop Units move +50% faster)\n\nTeam Bonus:\nScout Cavalry-line +2 line of sight",
        "Persians": "Cavalry civilization\n\n• Start with +50 wood and +50 food\n• Town Centers and Docks +100% HP and work +5/10/15/20% faster in Dark/Feudal/Castle/Imperial Age\n• Parthian Tactics available in Castle Age\n• Can build Caravanserai in Imperial Age\n\nUnique Units:\nWar Elephant (Cavalry), Savar (Cavalry)\n\nUnique Techs:\n• Kamandaran (Archer-line gold cost replaced by additional wood cost)\n• Citadels (Castles +4 attack, +3 vs. Rams, +3 vs. Infantry and receive -25% bonus damage)\n\nTeam Bonus:\nKnight-line +2 attack vs. Ranged Soldiers",
        "Poles": "Cavalry civilization\n\n• Folwark replaces Mill\n• Villagers regenerate 10/15/20 HP in Feudal/Castle/Imperial Age\n• Stone Miners generate gold in addition to stone\n• Bloodlines and Scout Cavalry-line upgrades cost -50% food\n\nUnique Units:\nObuch (Infantry), Winged Hussar (Cavalry)\n\nUnique Techs:\n• Szlachta Privileges (Knight-line costs -60% gold)\n• Lechitic Legacy (Scout Cavalry-line deals trample damage)\n\nTeam Bonus:\nScout Cavalry-line +1 attack vs. Ranged Soldiers",
        "Portuguese": "Naval and Gunpowder civilization\n\n• Foragers generate wood in addition to food\n• All units cost -20% gold\n• Can build Feitoria in Imperial Age\n• Ships +10% HP\n\nUnique Units:\nOrgan Gun (Siege Gunpowder Unit), Caravel (Warship)\n\nUnique Techs:\n• Carrack (Ships +1 melee/+1 pierce armor)\n• Arquebus (Gunpowder Units fire more accurately at moving targets)\n\nTeam Bonus:\nTechnologies research +25% faster",
        "Romans": "Infantry civilization\n\n• Villagers gather, build, and repair +5% faster\n• Infantry armor upgrade effects are doubled\n• Scorpions cost -60% gold\n• Galley-line and Dromons +1 melee/+1 pierce armor\n\nUnique Unit:\nCenturion (Cavalry), Legionary (Infantry)\n\nUnique Techs:\n• Ballistas (Scorpions attack +33% faster; Galley-line +2 attack)\n• Comitatenses (Militia-line, Knight-line, and Centurions train +50% faster and receive a charge attack)\n\nTeam Bonus:\nScorpions minimum range reduced",
"Saracens": `Camel and Naval civilization

• Market trading fee only 5%; Markets cost -100 wood
• Camel Units +25% HP
• Galley-line attacks +25% faster
• Transport Ships +100% HP, +20 carry capacity

Unique Unit:
Mameluke (Cavalry)

Unique Techs:
• Bimaristan (Monks passively heal multiple nearby units)
• Counterweights (Trebuchets and Mangonel-line +15% attack)

Team Bonus:
Foot Archers and Skirmisher-line +2 attack vs. buildings`,
"Shu": `Archer and Siege civilization

• Lumberjacks generate food in addition to wood
• Archery Unit technologies at the Archery Range and Blacksmith cost -25%
• Siege Weapons and Siege Warships move +10/15% faster in Castle/Imperial Age

Unique Units:
White Feather Guard (Infantry), War Chariot (Siege Weapon), Liu Bei (Hero)

Unique Techs:
• Coiled Serpent Array (Spearman-line and White Feather Guards gain additional HP when near each other)
• Bolt Magazine (Archer-line, War Chariots and Lou Chuans fire additional projectiles)

Team Bonus:
Foot Archers +2 line of sight`,
"Sicilians": `Infantry and Cavalry civilization

• Start with +100 stone
• Farm upgrades provide +125% additional food
• Soldiers receive -33% bonus damage
• Can build Donjon in Dark Age, replaces Watch Tower-line
• Fortifications built +50% faster; Town Centers built +100% faster

Unique Unit:
Serjeant (Infantry)

Unique Techs:
• First Crusade (Up to 5 Town Centers spawn 5 Serjeants each; units more resistant to conversion)
• Hauberk (Knight-line +1 melee/+2 pierce armor)

Team Bonus:
Transport Ships +5 line of sight and cost -50%`,
"Slavs": `Infantry and Siege civilization

• Farmers work +15% faster
• Arson, Gambesons free
• Siege Workshop Units cost -15%
• Monks move +20% faster

Unique Unit:
Boyar (Cavalry)

Unique Techs:
• Detinets (Replaces 40% of Castle and Watch Tower-line stone cost with additional wood cost)
• Druzhina (Infantry deals trample damage)

Team Bonus:
Military buildings provide +5 population space`,
"Spanish": `Gunpowder and Monk civilization

• Builders work +30% faster
• Receive +20 gold for each technology researched
• Blacksmith upgrades cost no gold
• Gunpowder Units attack +18% faster
• Cannon Galleons fire more accurately at moving targets

Unique Units:
Conquistador (Mounted Gunnner), Missionary (Mounted Monk)

Unique Techs:
• Inquisition (Monks and Missionaries convert faster; Missionaries +1 range)
• Supremacy (Villagers +40 HP, +6 attack, +2 melee/+2 pierce armor)

Team Bonus:
Trade Units generate +25% gold`,
"Tatars": `Cavalry Archer civilization

• Livestock animals last +50% longer
• Units deal +25% damage when fighting from higher elevation
• New Town Centers spawn 2 Sheep starting in Castle Age
• Thumb Ring, Parthian Tactics free

Unique Units:
Keshik (Cavalry), Flaming Camel (Siege Cavalry)

Unique Techs:
• Silk Armor (Light Horsemen and Cavalry Archers +1 melee/+1 pierce armor)
• Timurid Siegecraft (Trebuchets +2 range)

Team Bonus:
Mounted Archers +2 line of sight`,
  "Teutons": `Infantry civilization

• Farms cost -40%
• Town Centers +10 garrison capacity; Towers +5 garrison capacity
• Barracks and Stable Units +1/+2 melee armor in Castle/Imperial Age
• Monks +100% healing range
• Murder Holes, Herbal Medicine free

Unique Unit:
Teutonic Knight (Infantry)

Unique Techs:
• Ironclad (Siege Weapons +4 melee armor)
• Crenellations (Castles +3 range, garrisoned Infantry fires arrows)

Team Bonus:
Units more resistant to conversion`,
"Turks": `Gunpowder civilization

• Gold miners work +20% faster
• Scout Cavalry-line +1 pierce armor and upgrades free
• Chemistry free; Gunpowder Units +25% HP
• Bombard Tower and Elite Cannon Galleon upgrade costs -50%

Unique Unit:
Janissary (Foot Gunner)

Unique Techs:
• Sipahi (Mounted Archers +20 HP)
• Artillery (Bombard Towers, Bombard Cannons, Cannon Galleons +2 range)

Team Bonus:
Gunpowder Units train +25% faster`,
"Vietnamese": `Archer civilization

• Enemy Town Centers are revealed at the start of the game
• Economic upgrades cost no wood and research +100% faster
• Archery Range units and Fire Lancers +20% HP
• Conscription free

Unique Units:
Rattan Archer (Foot Archer), Imperial Skirmisher (Skirmisher)

Unique Techs:
• Chatras (Battle Elephants +100 HP)
• Paper Money (Lumberjacks slowly generate gold in addition to wood)

Team Bonus:
Imperial Skirmisher upgrade available in Imperial Age`,
"Vikings": `Infantry and Naval civilization

• Wheelbarrow, Hand Cart free
• Infantry +20% HP starting in Feudal Age
• Warships cost -15/15/20% in Feudal/Castle/Imperial Age

Unique Units:
Berserk (Infantry), Longboat (Warship)

Unique Techs:
• Chieftains (Infantry +5 attack vs. Cavalry, +4 vs. Camel Units; generate +5 gold when defeating Villagers, Trade Units and Monks)
• Bogsveigar (Archer-line and Longboats +1 attack)

Team Bonus:
Docks cost -15%`,
"Wei": `Cavalry civilization

• Receive one free Villager for each Mill, Lumber- and Mining Camp technology researched
• Hei Guang Cavalry and Xianbei Raider +15/30% HP in Castle/Imperial Age
• Traction Trebuchets and Lou Chuans cost -25%

Unique Units:
Tiger Cavalry (Cavalry), Xianbei Raider (Mounted Archer), Cao Cao (Hero)

Unique Techs:
• Tuntian (Soldiers passively produce food)
• Ming Guang Armor (Mounted Units +4 melee armor)

Team Bonus:
Cavalry +2 attack vs. Siege Weapons`,
"Wu": `Infantry and Naval civilization

• Military production buildings and Docks provide +65 food
• Infantry regenerates 10/20/30 HP per minute in Feudal/Castle/Imperial Age
• Jian Swordsmen and Hei Guang Cavalry +2 attack in Imperial Age
• Careening, Dry Dock available one age earlier, cost and research time -75%

Unique Units:
Fire Archer (Foot Archer), Jian Swordsman (Infantry), Sun Jian (Hero)

Unique Techs:
• Red Cliffs Tactics (Demolition Ships and Fire Archers deal fire damage to ships and buildings)
• Sitting Tiger (Traction Trebuchets and Lou Chuan trebuchet weapons fire additional projectiles)

Team Bonus:
Houses built +100% faster`
    };

    return civDetails[civilization] || "Civilization not found.";

}
