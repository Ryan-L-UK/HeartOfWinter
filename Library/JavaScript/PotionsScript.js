function randompotion() {
  console.log("Potion Generator Starting");
  function getRandomItem(itemList) {
    var randomNumber = Math.floor(Math.random() * itemList.length);
    return itemList[randomNumber];
  }
  var Rarity = [
    "Common",
    "Uncommon",
    "Rare",
    "Very Rare",
    "Legendary",
    "Artifact",
  ];
  var RarityOut = getRandomItem(Rarity);

  var Type = [
    "Potion",
    "Elixir",
    "Draught",
    "Vial",
    "Tonic",
    "Brew",
    "Concoction",
  ];
  var TypeOut = getRandomItem(Type);

  document.getElementById("PotionTypeOut").innerHTML = TypeOut;

  var MainEffectTitle = [
    "Healing",
    "Vigor",
    "Vitality",
    "Might",
    "Courage",
    "Giant Strength",
    "Flame Resistance",
    "Cold Resistance",
    "Necro Resistance",
    "Radiant Resistance",
    "Stoneskin",
    "Acid Resistance",
    "Lightning Resistance",
    "Succubus Charm",
    "Shielding",
    "Flame Breath",
    "Growth",
    "Shrinking",
    "Comprehension",
    "Fertility",
    "Intimidation",
    "Luck",
    "Mana",
    "Arcane",
    "Animal Form",
    "Dreams",
    "Nightmares",
    "Stamina",
    "Fleet Foot",
    "Knowledge",
    "The Bard",
    "Disguise",
    "Feast",
    "Youth",
    "Age",
    "Furnace",
    "Eagle Sight",
    "Health",
    "Invulnerability",
    "Riddle Me Gone",
    "Horrifying Appearance",
    "Beautiful Appearance",
    "Swordsmanship",
    "Bowmanship",
    "Nymph Breath",
    "Midas",
    "Berserker",
    "Utter Hatred",
    "Oracle",
    "Demonic Leech",
    "Fey Nature",
    "Tracelessness",
    "Gracefulness",
    "Goblin Climb",
    "Dead Ringer",
    "One Leafed Clover",
    "Possession",
    "Owls Wake",
    "Hawks Flight",
    "Peace",
    "Rejuvenation",
    "Sphinxes Truth",
    "Serpent Tongue",
    "Navigation",
    "Hook Horror",
    "Schaffensfreude",
    "Invisibility",
    "Wild Magic",
    "Fame",
    "Goats Trek",
    "Gargoyle Toughness",
    "Atomic Clock",
    "Transmutation",
    "Iron Skin",
    "Sex Change",
    "Race Change",
    "Musical Breath",
    "Utter Understanding",
    "Split Form",
    "Flavour",
    "Glimmer",
    "Love",
    "Poison",
    "Rebirth",
    "Elemental Form",
    "True Form",
    "Gods Touch",
    "Antidepressant",
    "Ghostly Form",
    "Artisans Skill",
    "Godly Form",
    "Bless Weapon",
    "Euphoria",
    "Bodyguard",
    "Babelfish",
    "Preservation",
    "Fear",
    "Night Vision",
    "Tracking",
    "Cure-all",
  ];
  var MainEffectTitleOut = getRandomItem(MainEffectTitle);

  function checkeffect(effect) {
    var checkresult = "";
    var lookup = {
      Healing: "It instantly regenerates some health when drank",
      Vigor: "Gives temporary health when drank",
      Vitality: "It slowly regenerates health over a period of some hours",
      Might: "It gives a bonus to attack rolls after drinking",
      Courage: "Gives immunity to fear and some temporary inspiration",
      "Giant Strength": "It gives the user much more strength",
      "Flame Resistance": "It gives resistance to fire damage",
      "Cold Resistance": "It gives resistance to cold damage",
      "Necro Resistance": "Gives resistance to necrotic damage",
      "Radiant Resistance": "Gives resistance to radiant damage",
      Stoneskin: "Gives resistance to martial damage",
      "Acid Resistance": "Gives resistance to acid",
      "Lightning Resistance": "Gives resistance to lightning damage",
      "Succubus Charm": "Makes the drinker irresistible to nearby people",
      Shielding: "Gives the user a magical shield of energy",
      "Flame Breath": "Gives the user fire breath for a short time",
      Growth: "Makes the user double in size",
      Shrinking: "Makes the user half in size",
      Comprehension: "Lets the user understand all languages",
      Fertility:
        "Makes the user very fertile, almost certain to make a baby under its effects!",
      Intimidation:
        "Gives the user a huge booming voice that terrifies those around",
      Luck: "It gives the user a temporary boost to luck",
      Mana: "Gives the user more magical power to cast with",
      Arcane: "Gives the user more powerful spells",
      "Animal Form": "Makes the user turn into a random animal",
      Dreams:
        "Makes the user get lost in a hallucinary dream world of their perfect dream",
      Nightmares:
        "Makes the user get lost in a hallucinary dream world of their worst nightmares",
      Stamina: "Gives the user more stamina and constitution",
      "Fleet Foot": "Makes the user have more speed",
      Knowledge: "Increases the users intelligence temporarily",
      "The Bard": "Increases the users temporarily",
      Disguise:
        "Changes the users form to a disguised form of any race and appeance",
      Feast: "Removes all hunger and thirst from the target",
      Youth: "Makes the user grow some years younger",
      Age: "Makes the user grow some years older",
      Furnace: "Makes the user radiate with a damaging aura",
      "Eagle Sight": "Gives the user strong vision and a bonus to perception",
      Health: "Cures all diseases and illnesses",
      Invulnerability:
        "Freezes the user in stasis that makes them immune to damage but they cannot move or act",
      "Riddle Me one": "Gives the user the cure to a single riddle",
      "Horrifying Appearance": "Makes the user look more ugly for a time",
      "Beautiful Appearance":
        "Makes the user appear more attractive for a time",
      Swordsmanship: "Makes the user more effective and versatile with a blade",
      Bowmanship: "Makes the user more effective with a bow or ranged weapon",
      "Nymph Breath": "Gives water breathing",
      Midas: "Makes the user turn things to gold",
      Berserker: "Makes the user rage with great strength",
      "Utter Hatred":
        "Makes the user have bonuses against a particular type of enemy",
      Oracle: "Lets the user divinate the future",
      "Demonic Leech": "Heals a portion of all damage the user deals",
      "Fey Nature":
        "Lets the user become one with animals and nature around them",
      Tracelessness: "Makes the user very hard to follow",
      Gracefulness: "Makes the user have a better acrobatics skill",
      "Goblin Climb": "Gives the user a bonus to climbing",
      "Dead Ringer": "Makes the user appear completely dead to all magic",
      "One Leafed Clover": "Gives the user worst luck",
      Possession:
        "Lets the user gain control of a nearby creature, their body comatosed while they do",
      "Owls Wake": "Makes the user need no sleep for a time",
      "Hawks Flight": "Lets the user fly",
      Peace: "Makes the user very calm and unable to harm others",
      Rejuvenation:
        "Heals a single scar or bad injury on the user such as a missing arm",
      "Sphinxes Truth": "Makes the user tell the truth",
      "Serpent Tongue": "Makes the user only able to lie",
      Navigation: "Makes the user unable to get lost and find where they need",
      "Hook Horror": "The users hands become sharp weaponised blades",
      Schaffensfreude:
        "Makes the enemies take damage as they deal it to the user",
      Invisibility: "Makes the user invisible",
      "Wild Magic":
        "Taps into wild magic making an absolutely random things happen",
      Fame: "Makes the user more famous",
      "Goats Trek":
        "Makes the user immune to the toils of long travels and bad weather",
      "Gargoyle Toughness": "Increases the users constitution",
      "Atomic Clock": "Lets the user know the exact time and date",
      Transmutation:
        "Lets the user have the ability to change somethings properties",
      "Iron Skin": "Turns the users skin to metal giving them many resistances",
      "Sex Change": "Changes the users gender",
      "Race Change": "Changes the users race",
      "Musical Breath":
        "Makes the user say everything in song, and fey music follows them in the air",
      "Utter Understanding":
        "Makes the user know very intimately about one exact thing",
      "Split Form":
        "The user turns into two or three tiny versions of themselves and controls them all",
      Flavour: "Makes anything and everything taste amazing!",
      Glimmer:
        "Makes the user and its gear instantly clean and as good looking as possible",
      Love: "Makes the user and someone else fall in love",
      Poison: "Poisons the user, weakening them",
      Rebirth: "Resurrects the user if they die soon after drinking",
      "Elemental Form":
        "Turns the user to an elemental form relevant to their personality",
      "True Form":
        "Turns the user into a familiar like creature similar to their personality",
      "Gods Touch":
        "Gives the user a holy connection to their god or fiendish deity",
      Antidepressant: "Does what it says on the tin",
      "Ghostly Form":
        "Makes the user intangible and able to phase through objects",
      "Artisans Skill": "Gives the user skill in a particular art temporarily",
      "Godly Form": "Improves all stats",
      "Bless Weapon": "Makes the users weapons do more damage",
      Euphoria: "Makes the user feel amazing and trip out",
      Bodyguard:
        "Creates a spectral bodyguard for a short time who obeys orders",
      Babelfish: "Lets the user speak any language but not understand it",
      Preservation: "Stops whatever its poured on from rotting or degrading",
      Fear: "Makes the user terrified",
      "Night Vision": "Gives the ability to see in the dark",
      Tracking: "Lets the user track an enemy",
      "Cure-all": "Cures any status effects",
    };
    checkresult = lookup[effect];
    console.log("Effect Result: ", checkresult);
    MainEffectBodyOut = checkresult;
  }

  checkeffect(MainEffectTitleOut);

  var SideEffect = [
    "rapid hair growth all over the body",
    "bleeding from the eyes",
    "diarrhoea",
    "vomiting",
    "blurred vision",
    "blindness",
    "deafness",
    "mutism",
    "the irresistible urge to dance",
    "the hearing of demons inside your head",
    "everything to taste like dirt",
    "excessive drooling",
    "a loss of intelligence",
    "a loss of strength",
    "a loss of speed",
    "a loss of charisma",
    "a sudden moustache",
    "fidgeting",
    "itchiness",
    "baldness",
    "a weakness to magical damage",
    "a weakness to physical damage",
    "feelings of guilt",
    "feelings of anxiety",
    "feelings of shame",
    "sneezing",
    "uncontrollable crying",
    "a sudden need to shout everything heroicly",
    "an uncontrolable urge to hug",
    "kleptomania",
    "burping",
    "loss of smell",
    "paranoia",
    "imps that want to kill you to magically appear",
    "a swarm of angry bees to magically appear",
    "fear of something",
    "temporary madness",
    "sudden relaxation",
    "vivid hallucinations",
    "painful lust",
    "light headedness",
    "increased confidence",
    "recklessness",
    "rage",
    "sadness",
    "dizziness",
    "pain",
    "an allergic reaction to your favourite food",
    "a strong believe youre someone else",
    "grumpiness",
    "muscle spasms",
    "a bloated feeling",
    "a cold",
    "a fever",
    "the urge to fight",
    "the need to make friends",
    "nausea",
    "violent mood swings",
    "addiction",
    "alcoholism",
    "drunkeness",
    "coughing",
    "uncontrollable babbling",
    "slight aches",
    "a bad taste for some time",
    "giddiness",
    "laughter",
    "Nothing bad at all!",
  ];
  var SideEffectOut = getRandomItem(SideEffect);

  var DurationClock = ["Minute(s)", "Hour(s)", "Day(s)"];
  var DurationClockOut1 = getRandomItem(DurationClock);
  var DurationClockOut2 = getRandomItem(DurationClock);

  var DurationMins = ["10", "20", "30", "40", "50"];
  var DurationHours = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  var DurationDays = ["1", "2", "3", "4"];

  if (DurationClockOut1 == "Minute(s)") {
    var DurationTimeOut1 = getRandomItem(DurationMins);
  } else if (DurationClockOut1 == "Hour(s)") {
    var DurationTimeOut1 = getRandomItem(DurationHours);
  } else {
    var DurationTimeOut1 = getRandomItem(DurationDays);
  }

  if (DurationClockOut2 == "Minute(s)") {
    var DurationTimeOut2 = getRandomItem(DurationMins);
  } else if (DurationClockOut2 == "Hour(s)") {
    var DurationTimeOut2 = getRandomItem(DurationHours);
  } else {
    var DurationTimeOut2 = getRandomItem(DurationDays);
  }

  if (SideEffectOut == "Nothing bad at all!") {
    var SideEffectsSentence =
      "This " + TypeOut + " has no negative side effects.";
  } else {
    var SideEffectsSentence =
      "This " +
      TypeOut +
      " also causes " +
      SideEffectOut +
      " for " +
      DurationTimeOut2 +
      " " +
      DurationClockOut2 +
      ".";
  }

  var Appearance1 = [
    "clear",
    "blue",
    "green",
    "red",
    "pale green",
    "pink",
    "light blue",
    "white",
    "black",
    "yellow",
    "gold",
    "bronze",
    "metallic",
    "purple",
    "brown",
    "dark red",
  ];
  var AppearanceOut1 = getRandomItem(Appearance1);

  var Appearance2 = [
    "flecks of colour",
    "swirls of colour",
    "fizzing bubbles",
    "bubbles suspended in it",
    "some kind of bone floating in it",
    "leaves and flowers in it",
    "two separating liquid",
    "a bright glow",
    "a soft glow",
    "stripes of colour",
    "translucency",
    "a cloudy murkiness",
    "blood within it",
    "dirt floating in it",
    "chunks of metal in it",
    "steam coming from it",
    "constantly moving and shifting liquid",
    "a constant heat",
  ];
  var AppearanceOut2 = getRandomItem(Appearance2);

  var Texture = [
    "a thick and sludgy",
    "a thin and watery",
    "an airy and bubbly",
    "a slimey",
    "an almost solid",
    "an oily",
    "a chunky",
    "a bitty",
    "a milky",
    "an almost gaseous",
  ];
  var TextureOut = getRandomItem(Texture);

  var TasteSmell = [
    "nothing at all",
    "sulphur",
    "fresh air",
    "baking cookies",
    "flowers",
    "rotting meat",
    "egg",
    "rotten eggs",
    "fresh bread",
    "blood",
    "home",
    "vomit",
    "garlic",
    "fruit",
    "chocolate",
    "beer",
    "smoke",
    "wood",
    "death",
    "orc",
    "wet dog",
    "wet goblin",
    "perfume",
    "cheap perfume",
    "musk",
    "garbage",
    "sand",
    "the forest",
    "nuts",
    "acidic",
    "spicy",
    "minty",
    "of chemicals",
    "dirt",
    "of something bad flavoured to taste better",
    "alcohol",
    "sugar",
    "a damp cave",
    "strange",
    "indescribable but nice",
    "indescribable but horrid",
    "rain",
    "medical",
    "bacon",
    "coffee",
    "cut grass",
    "vanilla",
    "the sea",
    "roast meat",
    "festive",
    "lavender",
    "lilac and gooseberries",
    "a fresh baby",
    "a new car",
    "cirtrus",
    "leather",
    "metal",
    "a forge",
    "fresh cake",
    "paint",
    "wine",
    "polish",
    "cheese",
    "fish",
    "compost",
    "the sewers",
    "apples",
    "holy oils",
    "massage oil",
    "a brothel",
    "old fruit",
    "roses",
    "something that stirs memories",
    "gingerbread",
    "cinnamon",
    "candy",
    "fumes",
    "bark",
    "chicken",
    "beef",
    "human flesh",
    "gunpowder",
    "a storm",
    "success",
    "gold",
    "mayonnaise",
    "barbeque",
    "salt",
    "pepper",
    "aromatic spices",
    "fruit punch",
    "water",
    "fresh water",
    "stagnant water",
    "mud",
    "the end of the world",
    "the worst thing imaginable to you",
    "the best thing imaginable to you",
  ];

  var SmellOut = getRandomItem(TasteSmell);
  console.log("Variable1:", SmellOut);
  do {
    var TasteOut = getRandomItem(TasteSmell);
    console.log("Variable2:", TasteOut);
  } while (SmellOut == TasteOut);

  var Label = [
    "its name and title in bold letters.",
    "its description in ornate elvish.",
    "its description in elvish with a relevant mythic story.",
    "its description on dwarven.",
    "dwarven runes.",
    "its description in gnomish.",
    "gnomish diagrams for its use.",
    "the words use only in emergancies scrawled on iti.",
    "a mass produced label claiming the company has no fault for any side effects.",
    "a mass produced label saying its a new flavour.",
    "very tiny print describing how the potion was made in great detail, around 1000 words.",
    "its name in bold words in giant.",
    "is scrawled off.",
    "has faded beyond reading.",
    "doesnt seem to have one.",
    "its description and a random fact.",
    "its description and a small compliment to make your day better.",
    "its description and a joke.",
    "its description in infernal.",
    "its description in some ancient language.",
    "all in some kind of symbols.",
    "all in some kind of raised symbols for the blind to read.",
    "its description in elemental languages.",
    "its name and flavour.",
    "its name with a warning about side effects.",
    "its name and its recommended buying price.",
    "bloody prints all over it.",
    "name engraved into the container.",
    "its name glowing with minor magic.",
    "a cartoony mascot.",
    "a warning of an ancient curse.",
    "its name and description in invisible ink.",
    "its description in draconic.",
    "several different names and descriptions plastered over eachother.",
    "a name of a completely different potion to what it does.",
    "a title describing the exact opposite.",
    "a money back guarantee.",
    "a coupon for a free potion.",
    "a living face looking around.",
    "its name and recipe for other alchemists.",
    "a heartfelt love letter for someone.",
    "a heartfelt hate letter for someone.",
    "a persons name. the potion wont work unless asked by its name to do so.",
    "a strange prophecy.",
    "a small doodle.",
    "a note saying do not drink.",
    "a passive aggressive note about other people drinking potions that dont belong to them.",
    "brightly glowing letters.",
    "that plays a very quiet sing song till the bottle is empty.",
    "ornate and beautiful designs.",
    "very practical designs.",
    "holy symbols.",
    "unholy symbols.",
    "fey symbols and sylvan writing.",
    "a riddle, the lid not opening unless the riddle is solved.",
    "saying its designed for babies.",
    "saying that it shouldnt be drank by anyone under 18.",
    "a note saying its illegal contraband being confiscated.",
    "a note saying the alchemist thinks it is its greatest work.",
    "a note saying the alchemist is sorry for ever creating it.",
    "a note saying that it never should have been made and copius blood stains over the bottle.",
    "it says youre being watched. when the person checks it instead says just kidding.",
    "its description in druidic.",
    "its description in orcish.",
    "its description in goblin.",
    "its description in halfling.",
    "its description in celestial.",
    "its description in undercommon.",
    "its description in deep speech.",
    "its description in strange arcane symbols.",
    "a map of where the potion was made.",
    "a small puzzle for kids.",
    "a list of ingredients in their chemical forms.",
    "a list of possible side effects as long as the bottle is.",
    "a red x.",
    "a sad face.",
    "an angry face.",
    "a happy face.",
    "a healing symbol.",
    "a cheesy pun potion name.",
    "growing with vines.",
    "growing with flowers.",
    "growing with crystals.",
    "growing with rock.",
    "shamanistic symbols and shavings.",
    "no words just a single colour.",
    "water damage but a just legibale label.",
    "a label as if it was some kind of present.",
    "a label showing how many calories it is.",
    "a warning about potion abuse and to only take in moderation.",
    "a label with warnings and side effects all scribbled out.",
    "that only shows the side effects.",
    "a mysterious number.",
    "a code name.",
    "a few unrelated letters.",
    "the name of one of the party members.",
    "the name of the bad guy.",
    "crawling with bugs.",
    "covered in something unspeakable.",
    "covered in glitter. it gets everywhere.",
  ];
  var Label = getRandomItem(Label);

  function checkcolour(colour) {
    var checkcolour = "";
    var lookup = {
      clear: "../library/PotionAssets/Clear1.png",
      blue: "../library/PotionAssets/Blue1.png",
      green: "../library/PotionAssets/Green1.png",
      red: "../library/PotionAssets/Red1.png",
      "pale green": "../library/PotionAssets/PaleGreen1.png",
      pink: "../library/PotionAssets/Pink1.png",
      "light blue": "../library/PotionAssets/Cyan1.png",
      white: "../library/PotionAssets/White1.png",
      black: "../library/PotionAssets/Black1.png",
      yellow: "../library/PotionAssets/Yellow1.png",
      gold: "../library/PotionAssets/Gold1.png",
      bronze: "../library/PotionAssets/Bronze1.png",
      metallic: "../library/PotionAssets/Metallic1.png",
      purple: "../library/PotionAssets/Purple1.png",
      brown: "../library/PotionAssets/Brown1.png",
      "dark red": "../library/PotionAssets/DarkRed1.png",
    };
    checkcolour = lookup[colour];
    console.log("Effect Colour: ", checkcolour);
    ColourImageOut = checkcolour;
  }

  checkcolour(AppearanceOut1);
  document.getElementById("PotionImage").setAttribute("src", ColourImageOut);

  //Potion Title
  var PotionTitleOut = RarityOut + " " + TypeOut + " of " + MainEffectTitleOut;
  document.getElementById("PotionTitleOut").innerHTML = PotionTitleOut;
  //Potion Description
  var PotionDescOut =
    "This glass " +
    TypeOut +
    " bottle contains a " +
    AppearanceOut1 +
    " liquid with " +
    AppearanceOut2 +
    ". The container has a label showing " +
    Label +
    " The " +
    TypeOut +
    " smells like " +
    SmellOut +
    ", and tastes like " +
    TasteOut +
    " with " +
    TextureOut +
    " texture.";
  document.getElementById("PotionDescOut").innerHTML = PotionDescOut;
  //Potion Effect
  var PotionEffectOut =
    "When you drink this " +
    TypeOut +
    " it " +
    MainEffectBodyOut +
    " for " +
    DurationTimeOut1 +
    " " +
    DurationClockOut1 +
    ". " +
    SideEffectsSentence;
  document.getElementById("PotionEffectOut").innerHTML = PotionEffectOut;

  console.log("Potion Generator Completed");
}
