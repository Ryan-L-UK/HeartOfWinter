function randomship() {
  /* Ship Type */
  const shiptypeInt = Math.floor(Math.random() * 4) + 1;

  function shiptype(type) {
    var shiptyperesult = "";
    var shiptyperesult = {
      1: "Merchant Ship ",
      2: "Fishing Vessel ",
      3: "Warship ",
      4: "Pirate Ship ",
    };
    shiptyperesult = shiptyperesult[type];
    console.log(shiptyperesult);
    ShipTypeOut = shiptyperesult;
  }

  shiptype(shiptypeInt);
  document.getElementById("SType_output").innerHTML = ShipTypeOut;

  /* Ship Size */
  const shipsizeInt = Math.floor(Math.random() * 8) + 1;

  function shipsize(size) {
    var shipsizeresult = "";
    var shipsizeresult = {
      1: "Little more than a raft, ",
      2: "A galley, ",
      3: "A longship, ",
      4: "A catamaran, ",
      5: "A hulk, ",
      6: "A schooner, ",
      7: "A dreadnought, ",
      8: "A row boat, ",
    };
    shipsizeresult = shipsizeresult[size];
    console.log(shipsizeresult);
    ShipSizeOut = shipsizeresult;
  }

  shipsize(shipsizeInt);
  document.getElementById("SSize_output").innerHTML = ShipSizeOut;

  /* Ship Cargo */
  const shipcargoInt = Math.floor(Math.random() * 8) + 1;

  function shipcargo(cargo) {
    var shipcargoresult = "";
    var shipcargoresult = {
      1: "Laden with treasure",
      2: "Full of stolen goods",
      3: "Well-stocked with provisions",
      4: "In tip-top shape",
      5: "“On loan” to some other pirates",
      6: "In need of repair",
      7: "Barely staying afloat",
      8: "Resting beneath the waves",
    };
    shipcargoresult = shipcargoresult[cargo];
    console.log(shipcargoresult);
    ShipCargoOut = shipcargoresult;
  }

  shipcargo(shipcargoInt);
  document.getElementById("SCargo_output").innerHTML = ShipCargoOut;

  /* Ship captain */
  const shipcaptainInt = Math.floor(Math.random() * 12) + 1;

  function shipcaptain(captain) {
    var shipcaptainresult = "";
    var shipcaptainresult = {
      1: "A dangerous megalomaniac ",
      2: "A charismatic demagogue ",
      3: "A mysterious foreigner ",
      4: "A talented thief ",
      5: "A member of a prominent family ",
      6: "A ruthless killer ",
      7: "A femme fatale ",
      8: "A charming rogue ",
      9: "A dashing swashbuckler ",
      10: "A brutish thug ",
      11: "An old sailor ",
      12: "A celebrated naval hero ",
    };
    shipcaptainresult = shipcaptainresult[captain];
    console.log(shipcaptainresult);
    ShipCaptainOut = shipcaptainresult;
  }

  shipcaptain(shipcaptainInt);
  document.getElementById("SCap_output").innerHTML = ShipCaptainOut;

  /* Ship captaindesc */
  const shipcaptaindescInt = Math.floor(Math.random() * 12) + 1;

  function shipcaptaindesc(captaindesc) {
    var shipcaptaindescresult = "";
    var shipcaptaindescresult = {
      1: "A nose ring ",
      2: "Shiny leather boots ",
      3: "Gold teeth ",
      4: "An oversized dagger in the belt ",
      5: "A heavy gold chain around the neck ",
      6: "A wide-brimmed hat ",
      7: "An eyepatch ",
      8: "A long black beard ",
      9: "A maniacal laugh ",
      10: "Nothing ",
      11: "An open shirt and a very hairy chest ",
      12: "Extravagant mustaches ",
    };
    shipcaptaindescresult = shipcaptaindescresult[captaindesc];
    console.log(shipcaptaindescresult);
    ShipCapDesOut = shipcaptaindescresult;
  }

  shipcaptaindesc(shipcaptaindescInt);
  document.getElementById("SCapDesc_output").innerHTML = ShipCapDesOut;

  /* Ship crew */
  const shipcrewInt = Math.floor(Math.random() * 8) + 1;

  function shipcrew(crew) {
    var shipcrewresult = "";
    var shipcrewresult = {
      1: "Adoring and loyal ",
      2: "Friendly and pleased ",
      3: "Respectful and business-like ",
      4: "Mercenary and eager ",
      5: "Terrified and tight-lipped ",
      6: "Disappointed and indifferent ",
      7: "Restless and rebellious ",
      8: "Angry and mutinous ",
    };
    shipcrewresult = shipcrewresult[crew];
    console.log(shipcrewresult);
    ShipCrewOut = shipcrewresult;
  }

  shipcrew(shipcrewInt);
  document.getElementById("SCrew_output").innerHTML = ShipCrewOut;

  /* Ship goals */
  const shipgoalsInt = Math.floor(Math.random() * 11) + 1;

  function shipgoals(goals) {
    var shipgoalsresult = "";
    var shipgoalsresult = {
      1: "Discover a legendary hidden treasure",
      2: "Dominate the region’s maritime trade",
      3: "Get revenge against a naval hero",
      4: "Get revenge against a rival pirate crew",
      5: "Rebel against the dominant merchant traders",
      6: "Earn a wealthy and peaceful retirement",
      7: "Commit violent acts to slake their bloodlust",
      8: "Drink all the rum",
    };
    shipgoalsresult = shipgoalsresult[goals];
    console.log(shipgoalsresult);
    ShipGoalsOut = shipgoalsresult;
  }

  shipgoals(shipgoalsInt);
  document.getElementById("SGoals_output").innerHTML = ShipGoalsOut;

  /* Ship notoriety */
  const shipnotorietyInt = Math.floor(Math.random() * 11) + 1;

  function shipnotoriety(notoriety) {
    var shipnotorietyresult = "";
    var shipnotorietyresult = {
      1: "Never leaving any survivors.",
      2: "Feeding captives to sharks.",
      3: "Tattooing or branding captives.",
      4: "Scalping captives.",
      5: "Flaying captives.",
      6: "Burning seaside villages.",
      7: "Plundering the ships of a wealthy tyrant.",
      8: "Using a lot of explosives.",
      9: "Convening with ghosts.",
      10: "Romantic escapades.",
      11: "Singing bawdy songs.",
      12: "Drinking too much rum.",
    };
    shipnotorietyresult = shipnotorietyresult[notoriety];
    console.log(shipnotorietyresult);
    ShipNotorietyOut = shipnotorietyresult;
  }

  shipnotoriety(shipnotorietyInt);
  document.getElementById("SNotoriety_output").innerHTML = ShipNotorietyOut;
}
