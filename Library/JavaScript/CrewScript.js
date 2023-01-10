function randomcrew() {
  console.log("Crew Generator Starting");

  function getRandomItem(itemList) {
    var randomNumber = Math.floor(Math.random() * itemList.length);
    return itemList[randomNumber];
  }

  var shipCrew = [
    "adoring and loyal ",
    "friendly and pleasant ",
    "respectful and business-like ",
    "mercenary and eager ",
    "terrified and tight-lipped ",
    "disappointed and indifferent ",
    "restless and rebellious ",
    "angry and mutinous ",
  ];
  var CrewDemeanorOut = getRandomItem(shipCrew);

  var crewGoal = [
    "discover a legendary hidden treasure",
    "dominate the regions maritime trade",
    "get revenge against a naval hero",
    "get revenge against a rival pirate crew",
    "rebel against the dominant merchant traders",
    "for wealth and riches",
    "commit violent acts to slake their bloodlust",
    "drink all the rum",
  ];
  var CrewGoalOut = getRandomItem(crewGoal);

  var shipNotoriety = [
    "never leaving any survivors. ",
    "feeding captives to sharks. ",
    "tattooing or branding captives. ",
    "scalping captives. ",
    "flaying captives. ",
    "burning seaside villages. ",
    "plundering the ships of a wealthy tyrant. ",
    "using a lot of explosives. ",
    "convening with ghosts. ",
    "romantic escapades. ",
    "singing bawdy songs. ",
    "drinking too much rum. ",
  ];
  var ShipNotorietyOut = getRandomItem(shipNotoriety);

  var Para2 =
    "On board you notice the crew are " +
    CrewDemeanorOut +
    "and are on a mission to " +
    CrewGoalOut +
    ". The crew are notorious for " +
    ShipNotorietyOut;

  document.getElementById("Paragraph2").innerHTML = Para2;

  console.log("Crew Generator Completed");
}

function GenerateCrew() {
  console.log("Specific Crew Member Generator Starting");
  function getRandomItem(itemList) {
    var randomNumber = Math.floor(Math.random() * itemList.length);
    return itemList[randomNumber];
  }

  var CrewDescription = [
    "a veteran of the sea who may have been beautiful at one point",
    "a young sailor excited to take to the sea",
    "a wide eyed adventurer of the sea just getting a first true taste of sailing",
    "an older, well-brined master of sailing",
    "an ordinary looking sailor",
    "a stoic looking veteran",
    "a rugged and battered looking bilge rat",
    "a suspiciously regal and seasick looking sailor",
  ];
  var CrewDescriptionOut = getRandomItem(CrewDescription);

  var CrewName = ["NAMEVARIABLE"];
  var CrewNameOut = getRandomItem(CrewName);

  var CrewPronoun = ["He", "She"];
  var CrewPronounOut = getRandomItem(CrewPronoun);

  var CrewFaceDesc = [
    "have a bright pink scar running across the left hand",
    "are missing the right eye and instead has a glass one",
    "have long matted hair",
    "have a thick layer of dirt covering the skin",
    "have a large number of sun spots",
    "are covered in freckles",
    "have a cleft chin",
    "have deep sunken eyes",
    "have leathery thick skin from the hot sun",
    "are missing several teeth",
    "are missing an ear",
    "have acne riddled skin",
    "have hawkish eyes the seem to catch every movement",
    "have rather pale skin for someone who works in the sun",
    "have course calloused hands from working with rope daily",
    "smells distinctly of the sea",
    "have a square jaw",
    "have a large bulbous nose",
    "have a crooked nose",
    "have a crooked smile",
    "have the eyes of a rat",
    "are hunched over all of the time",
    "suffers from a limp",
    "have a noticeable stutter",
    "have a large wart on the chin",
    "have incredibly long and nimble fingers",
    "have very expressive eyebrows",
    "have beautifully clean skin",
    "have short but unkempt hair",
    "are broad shouldered",
    "have a slender jaw",
    "have muscled arms from the hard work of the sea",
    "have a spoon lodged into the nub at the end of their arm where their hand should be",
    "have large cauliflower ears",
    "have rather pungent body odor",
  ];
  var CrewFaceDescOut = getRandomItem(CrewFaceDesc);

  var CrewQuirkDesc = [
    "are wearing a grungy looking sailors cap",
    "are wearing a cheap looking eyepatch",
    "have on clothes that are rugged and tattered from the storms",
    "are wearing clothes that are stiff from all the sea salt caked upon them",
    "always carries a fancy looking compass that only points southwest",
    "have a crudely carved peg leg",
    "have a large hook for a hand",
    "have a very well crafted mahogany peg leg",
    "uses a crude walking stick",
    "uses a finely carved oak walking stick",
    "uses a walking cane with the head of a shark carved at the top",
    "are always wearing a backpack",
    "wears a thick seal leather coat to keep dry",
    "have a collapsible spyglass tied to their belt",
    "have a lucky accordion on hand at all times",
    "are wearing a tattered bandana",
    "are wearing a rather filthy looking cocked hat with a ragged feather poking out",
    "are wearing some thick leathery boots absolutely riddled with holes and rips",
    "have a large colorful parrot on one shoulder",
    "are wearing a large skull pendant",
    "are wearing a small jeweled pendant",
    "have some sort fo necklace tucked under their shirt",
  ];
  var CrewQuirkOut = getRandomItem(CrewQuirkDesc);

  var Para3 =
    "Out of the crew steps " +
    CrewDescriptionOut +
    " named " +
    CrewNameOut +
    ". They " +
    CrewFaceDescOut +
    " and " +
    CrewQuirkOut +
    ". When asked about why they took to the sea, their reason is " +
    "RATIONALE";

  document.getElementById("Paragraph3").innerHTML = Para3;
  console.log("Specific Crew Member Generator Completed");
}
