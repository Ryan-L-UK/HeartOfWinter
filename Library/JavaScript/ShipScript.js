function randomship() {
  console.log("Ship Generator Starting");
  function getRandomItem(itemList) {
    var randomNumber = Math.floor(Math.random() * itemList.length);
    return itemList[randomNumber];
  }

  var shipTypes = ["merchant ship", "warship", "pirate ship"];
  var ShipTypeOut = getRandomItem(shipTypes);

  var shipCleanliness = [
    "absolutely spotless; it must have been cleaned recently, as no barnacles adorn the bottom of the ship",
    "spotless, save for a couple barnacles",
    "in quite good condition, with only a couple barnacles clinging on to the bottom",
    "in reasonable condition, with some barnacles hanging on, creating drag at speed",
    "in need of a good clean, with barnacles clinging to the bottom of the ship",
    "in desperate need of a thorough de-barnacleing, as well as a general clean",
    "filthy and laden with barnacles covering the bottom of the boat",
  ];
  var ShipCleanOut = getRandomItem(shipCleanliness);

  var shipSize = [
    "huge",
    "impressively sized",
    "somewhat impressive",
    "average sized",
    "somewhat unimpressive",
    "cluttered",
    "cluttered and cramped",
  ];
  var ShipSizeOut = getRandomItem(shipSize);

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const CrewNumberOut = randomIntFromInterval(80, 950);
  const ShipLength = randomIntFromInterval(70, 360);

  var shipCargo = [
    "laden with treasure",
    "full of stolen goods",
    "well-stocked with provisions",
    "in tip-top shape",
    "in need of repair",
    "barely staying afloat",
    "resting beneath the waves",
  ];
  var ShipCargoOut = getRandomItem(shipCargo);

  var shipCaptain = [
    "a dangerous megalomaniac",
    "a charismatic demagogue",
    "a mysterious foreigner",
    "a talented thief",
    "a member of a prominent family",
    "a ruthless killer",
    "a charming rogue",
    "a dashing swashbuckler",
    "a brutish thug",
    "an old sailor",
    "a celebrated naval hero",
  ];
  var CaptainDemeanorOut = getRandomItem(shipCaptain);

  var shipCaptainDesc = [
    "a nose ring",
    "shiny leather boots",
    "gold teeth",
    "an oversized dagger in the belt",
    "a heavy gold chain around their neck",
    "a wide-brimmed hat",
    "an eyepatch",
    "a long black beard",
    "a maniacal laugh",
    "an open shirt and a broad chest",
    "an extravagant mustache",
  ];
  var CapDescOut1 = getRandomItem(shipCaptainDesc);
  console.log("Variable1:", CapDescOut1);
  do {
    var CapDescOut2 = getRandomItem(shipCaptainDesc);
    console.log("Variable2:", CapDescOut2);
  } while (CapDescOut1 == CapDescOut2);

  var shipName = [
    "Lantheon",
    "Starchaser",
    "Dryads Fury",
    "Black Trident",
    "Corellons Arrow",
    "Morkoth",
    "Koalinthas",
    "Sehanines Fool",
    "Stormcrow",
    "Vaazrus",
    "Shield of Khahar",
    "Stingray",
    "Sanaj-Rakal",
    "Zhal-Vazir",
    "Griffonwing",
    "Blademark",
    "Golden Libram",
    "Hareths Barrel",
    "Kashas Wake",
    "Shining Flute",
    "White Feather",
    "Riventide",
    "Moonriser",
    "Gem of Malfier",
    "Dragons Glory",
    "Menacer",
    "Scarlet Dagger",
    "Kral-Tajir",
    "Ravager",
    "Kerles Drum",
    "Heart of Avandra",
    "Goldraker",
    "Sea Haunt",
    "Storm Maven",
    "Grimbols Cutlass",
    "Scimitar",
    "Black Gauntlet",
    "Iron Maiden",
    "Wavecrusher",
    "Hammer of Kavath",
    "Waterblade",
    "Arkhors Secret",
    "Dire Gar",
    "Prallmars Shadow",
    "Piranha",
    "Devils Fork",
    "Tuersyls Fist",
    "Daraj-Vzan",
    "Silver Chalice",
    "Demonrudder",
    "Turathi Flame",
    "Storms Eye",
    "Tanishars Fate",
    "Shard of Night",
    "Triton",
    "Jaraks Grasp",
    "Nightmare",
    "Harpys Lure",
    "Devious",
    "Arazandros Bluff",
    "Nbods Haul",
    "Astaryntha",
    "Expeditious",
    "Curse of Thuban",
    "Sirens Kiss",
    "Lonely Witch",
    "Rats Nest",
    "Evader",
    "Mistreaver",

    "Vicious",
    "Dream of Melora",
    "Shensari",
    "Damilor",
    "Krimilvins Charm",
    "Bloodmonger",
    "Lucky Scrag",
    "Windstriker",
    "Grim Gale",
    "Djinnis Wish",
    "Flying Eel",
    "Jewel of Irthos",
    "Broken Keel",
    "Javelin",
    "Myrskas Revenge",
    "Fearsome",
    "Archons Hammer",
    "Vendetta",
    "Thunderchaser",
    "Heartless",
    "Shrike",
    "Moraks Boat",
    "Mar-Turang",
    "Will-o’-wisp",
    "Asha-Naga",
    "Dominant",
    "Shoal Courser",
    "Crescent Moon",
    "Crystal Tear",
    "Kara-Vaji",
    "Shalastar",
    "Rocs Talon",
    "Wavecarver",
    "Graethan",
    "Rotten Apple",
    "Bharzims Victory",
    "Avarice",
    "Farak-Changal",
    "Falling Star",
    "Crimson Knife",
    "Yiseks Ride",
    "Shara-Vaja",
    "Varalans Dweomer",
    "Rangoth",
    "Vostarika",
    "Mirasandra",
    "Second Chance",
    "Redfeather",
    "Maal-Destir",
    "Scorpion",
    "Ghorzaars Bane",
    "Moonwatcher",
    "Dragons Crown",
    "Dragonhawk",
    "Dancing Sword",
    "Kaveths Whisper",
    "Tirah",
    "Phantom Shark",
    "Satyr",
    "Breytens Thrill",
    "Golden Coin",
    "Pearl of Fire",
    "Bhez-Rizma",
    "Fireball",
    "Color Spray",
    "Sea Bear",
    "Prosperous",
    "Summer Rain",
    "Sundowner",
    "Skulldarks Ire",
    "Skandalor",
    "Zarkanan",
    "Sana-Losi",
    "Wolfshark",
    "Song of Elyndri",
    "Coral Rose",
    "Rune of Halendros",
    "Maelstrom",
    "Shadow Mask",
    "Deep Heathen",
    "Aurora",
    "Rusted Cutlass",
    "Thogs Maul",
    "Wooden Stake",
    "Hellstrike",
    "Scepter Queen",
    "Prince of Lies",
    "Fang of Tezmyr",
    "White Hart",
    "Floating Cask",
    "Sea Howler",
    "Frostwind",
    "Moonshadow",
    "Meloras Favor",
    "Dark Queens Voice",
    "Chethels Ghost",
    "Mad Hag",
    "Tamarions Grudge",
    "Ravens Gamble",
    "Reckoner",
    "Wraithwind",
    "Kalisa Tano",
    "Beholder",
    "Slippery Trickster",
    "Retribution",
    "Whirling Glyph",
    "Lady Rose",
    "Karthangs Plunder",
    "Good Fortune",
    "Axe of Thard",
    "Black Bow",
    "Quickstrike",
    "Thelandira",
    "Hammergust",
    "Barracuda",
    "Sahandrians Quarrel",
    "Feral Knave",
    "Wildwyrm",
    "Shevayas Honor",
    "Blackhelms Legacy",
    "Wyverns Sting",
    "Dragonroar",
    "Kegstaff",
    "Oaken Ranger",
    "Timber Serpent",
    "Desperate Sorceress",
    "Screaming Gull",
    "Greedy Drake",
    "Light of Pjaltr",
    "Fates Blessing",
    "Stardancer",
    "Leering Skull",
    "Ebon Moon",
    "Werewolf",
    "Redemption",
    "Zaetchans Privilege",
    "Sea Skulk",
    "Savage Swan",
    "Banes Breath",
    "Ghoroks Grail",
    "Emerald Eye",
    "Remorseless",
    "Skiprock",
    "Zaetra",
    "Silverfin",
    "Risen Ghost",
    "Listless",
    "Vortex",
    "Advantage",
    "Autumn Song",
    "Trystans Delight",
    "Soaring Manta",
    "Calomaars Edge",
    "Iron Trumpet",
    "Locathah",
    "Demonskull",
    "Arrowhead",
    "Frastains Bottle",
    "The Saint Ive",
    "Halygast",
    "La Bon An",
    "La Katerine",
    "The Blythe",
    "Rose",
    "The Flying Squirrel",
    "Golden Lion",
    "Panther",
    "Silent Night",
  ];
  var ShipNameOut = getRandomItem(shipName);
  document.getElementById("ShipNameOut1").innerHTML = ShipNameOut;

  var capName = [
    "Lydan",
    "Syrin",
    "Ptorik",
    "Joz",
    "Varog",
    "Gethrod",
    "Hezra",
    "Feron",
    "Ophni",
    "Colborn",
    "Fintis",
    "Gatlin",
    "Jinto",
    "Hagalbar",
    "Krinn",
    "Lenox",
    "Revvyn",
    "Hodus",
    "Dimian",
    "Paskel",
    "Kontas",
    "Weston",
    "Azamarr",
    "Jather",
    "Tekren",
    "Jareth",
    "Adon",
    "Zaden",
    "Eune",
    "Graff",
    "Tez",
    "Jessop",
    "Gunnar",
    "Pike",
    "Domnhar",
    "Baske",
    "Jerrick",
    "Mavrek",
    "Riordan",
    "Wulfe",
    "Straus",
    "Tyvrik",
    "Henndar",
    "Favroe",
    "Whit",
    "Jaris",
    "Renham",
    "Kagran",
    "Lassrin",
    "Vadim",
    "Arlo",
    "Quintis",
    "Vale",
    "Caelan",
    "Yorjan",
    "Khron",
    "Ishmael",
    "Jakrin",
    "Fangar",
    "Roux",
    "Baxar",
    "Hawke",
    "Gatlen",
    "Barak",
    "Nazim",
    "Kadric",
    "Paquin",
    "Kent",
    "Moki",
    "Rankar",
    "Lothe",
    "Ryven",
    "Clawsen",
    "Pakker",
    "Embre",
    "Cassian",
    "Verssek",
    "Dagfinn",
    "Ebraheim",
    "Nesso",
    "Eldermar",
    "Rivik",
    "Rourke",
    "Barton",
    "Hemm",
    "Sarkin",
    "Blaiz",
    "Talon",
    "Agro",
    "Zagaroth",
    "Turrek",
    "Esdel",
    "Lustros",
    "Zenner",
    "Baashar",
    "Dagrod",
    "Gentar",
    "Feston",
    "Syrana",
    "Resha",
    "Varin",
    "Wren",
    "Yuni",
    "Talis",
    "Kessa",
    "Magaltie",
    "Aeris",
    "Desmina",
    "Krynna",
    "Asralyn",
    "Herra",
    "Pret",
    "Kory",
    "Afia",
    "Tessel",
    "Rhiannon",
    "Zara",
    "Jesi",
    "Belen",
    "Rei",
    "Ciscra",
    "Temy",
    "Renalee",
    "Estyn",
    "Maarika",
    "Lynorr",
    "Tiv",
    "Annihya",
    "Semet",
    "Tamrin",
    "Antia",
    "Reslyn",
    "Basak",
    "Vixra",
    "Pekka",
    "Xavia",
    "Beatha",
    "Yarri",
    "Liris",
    "Sonali",
    "Razra",
    "Soko",
    "Maeve",
    "Everen",
    "Yelina",
    "Morwena",
    "Hagar",
    "Palra",
    "Elysa",
    "Sage",
    "Ketra",
    "Lynx",
    "Agama",
    "Thesra",
    "Tezani",
    "Ralia",
    "Esmee",
    "Heron",
    "Naima",
    "Rydna",
    "Sparrow",
    "Baakshi",
    "Ibera",
    "Phlox",
    "Dessa",
    "Braithe",
    "Taewen",
    "Larke",
    "Silene",
    "Phressa",
    "Esther",
    "Anika",
    "Rasy",
    "Harper",
    "Indie",
    "Vita",
    "Drusila",
    "Minha",
    "Surane",
    "Lassona",
    "Merula",
    "Kye",
    "Jonna",
    "Lyla",
    "Zet",
    "Orett",
    "Naphtalia",
    "Turi",
    "Rhays",
    "Shike",
    "Hartie",
    "Beela",
    "Leska",
    "Vemery",
    "Lunex",
    "Fidess",
    "Tisette",
    "Partha",
  ];
  var CapNameOut = getRandomItem(capName);

  var Para1 =
    "his is the " +
    ShipTypeOut +
    " the " +
    ShipNameOut +
    ". It has a crew of " +
    CrewNumberOut +
    " and is commanded by " +
    CaptainDemeanorOut +
    ", " +
    CapNameOut +
    ". " +
    CapNameOut +
    " has " +
    CapDescOut1 +
    " and " +
    CapDescOut2 +
    ". The ship is " +
    ShipLength +
    " feet and is " +
    ShipSizeOut +
    ". The " +
    ShipNameOut +
    " is " +
    ShipCleanOut +
    ". The ship is currently " +
    ShipCargoOut +
    ".";

  document.getElementById("Paragraph1").innerHTML = Para1;

  console.log("Ship Generator Completed");
}
