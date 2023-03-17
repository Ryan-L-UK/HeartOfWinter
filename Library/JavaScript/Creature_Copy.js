// ---------------------------------------------------------------------------------------------------------
function checkstatrole(modifier) {
  var output = Math.floor((modifier - 10) / 2);
  var symbol = "";
  if (output >= 0) {
    symbol = "+";
  }
  return modifier + " (" + symbol + output + ")";
}
// ---------------------------------------------------------------------------------------------------------
function checkskillset(skill) {
  var checkskill = "";
  var lookup = {
    "": "Error",
    Saves: "Saving Throws:",
    Skills: "Skills:",
    Resist: "Damage Resistances:",
    Immune: "Damage Immunities:",
    Vulnerable: "Damage Vulnerabilities:",
    conditionImmune: "Condition Immunities:",
    Senses: "Senses:",
    languages: "Languages:",
  };
  checkskill = lookup[skill];
  return checkskill;
}
// ---------------------------------------------------------------------------------------------------------
function showInput() {
  //---------------
  //Output Clearer
  document
    .getElementsByName("clearme")
    .forEach((Element) => (Element.innerHTML = ""));
  document.getElementById("innatebreak").classList.remove("margin");
  document.getElementById("spellbreak").classList.remove("margin");
  //---------------
  //Function Start
  var form = new FormData(document.getElementById("creatureform"));
  const stats = ["STR-in", "DEX-in", "CON-in", "INT-in", "WIS-in", "CHA-in"];
  const skills = [
    "Saves",
    "Skills",
    "Resist",
    "Immune",
    "Vulnerable",
    "conditionImmune",
    "Senses",
    "languages",
  ];
  const ignore = [
    "spellheaderentry-in",
    "spellfooterentry-in",
    "cantrip-in",
    "lvl1slots-in",
    "lvl2slots-in",
    "lvl3slots-in",
    "lvl4slots-in",
    "lvl5slots-in",
    "lvl1spells-in",
    "lvl2spells-in",
    "lvl3spells-in",
    "lvl4spells-in",
    "lvl5spells-in",
    "spellheaderentry-in",
    "spellfooterentry-in",
    "atwill-in",
    "daily1e-in",
    "daily2e-in",
    "daily3e-in",
  ];
  skills.forEach(function (skill) {
    if (document.getElementById(skill + "-in").value != "") {
      document.getElementById(skill + "H-out").innerHTML = checkskillset(skill);
    }
  });
  for (var [key, value] of form) {
    if (ignore.indexOf(key) >= 0) {
      //do nothing
    } else if (stats.indexOf(key) >= 0) {
      document.getElementById(key.replace("-in", "-out")).innerHTML =
        checkstatrole(document.getElementById(key).value);
    } else if (key == "CasterInnate-in") {
      if (document.getElementById(key).value == "Spellcaster/Innate") {
        SpellCasterHeaders();
        InnateSpellsHeaders();
      } else if (document.getElementById(key).value == "Spellcaster") {
        SpellCasterHeaders();
      } else if (document.getElementById(key).value == "Innate") {
        InnateSpellsHeaders();
      } else {
        //
      }
    } else {
      document.getElementById(key.replace("-in", "-out")).innerHTML = [value];
    }
  }
}
function SpellCasterHeaders() {
  document.getElementById("spellheaderentry-out").innerHTML =
    document.getElementById("spellheaderentry-in").value;
  document.getElementById("spellbreak").classList.add("margin");
  document.getElementById("CasterH-out").innerHTML = "Spellcasting.";
  document.getElementById("spellheaderentry-out").innerHTML =
    document.getElementById("spellheaderentry-in").value;
  if (document.getElementById("cantrip-in").value != "") {
    document.getElementById("CantripH-out").innerHTML = "Cantrips (at will): ";
    document.getElementById("cantrip-out").innerHTML =
      document.getElementById("cantrip-in").value;
  }
  if (document.getElementById("lvl1slots-in").value > 0) {
    document.getElementById("lvl1spellsH").innerHTML =
      "1st Level (" +
      document.getElementById("lvl1slots-in").value +
      " slots): ";
    document.getElementById("lvl1spells-out").innerHTML =
      document.getElementById("lvl1spells-in").value;
  }
  if (document.getElementById("lvl2slots-in").value > 0) {
    document.getElementById("lvl2spellsH").innerHTML =
      "2nd Level (" +
      document.getElementById("lvl2slots-in").value +
      " slots): ";
    document.getElementById("lvl2spells-out").innerHTML =
      document.getElementById("lvl2spells-in").value;
  }
  if (document.getElementById("lvl3slots-in").value > 0) {
    document.getElementById("lvl3spellsH").innerHTML =
      "3rd Level (" +
      document.getElementById("lvl3slots-in").value +
      " slots): ";
    document.getElementById("lvl3spells-out").innerHTML =
      document.getElementById("lvl3spells-in").value;
  }
  if (document.getElementById("lvl4slots-in").value > 0) {
    document.getElementById("lvl4spellsH").innerHTML =
      "4th Level (" +
      document.getElementById("lvl4slots-in").value +
      " slots): ";
    document.getElementById("lvl4spells-out").innerHTML =
      document.getElementById("lvl4spells-in").value;
  }
  if (document.getElementById("lvl5slots-in").value > 0) {
    document.getElementById("lvl5spellsH").innerHTML =
      "5th Level (" +
      document.getElementById("lvl5slots-in").value +
      " slots): ";
    document.getElementById("lvl5spells-out").innerHTML =
      document.getElementById("lvl5spells-in").value;
  }
  if (document.getElementById("spellfooterentry-in").value != null) {
    document.getElementById("spellfooterentry-out").innerHTML =
      document.getElementById("spellfooterentry-in").value;
  }
}
function InnateSpellsHeaders() {
  document.getElementById("innateheaderentry-out").innerHTML =
    document.getElementById("innateheaderentry-in").value;
  document.getElementById("innatebreak").classList.add("margin");
  document.getElementById("InnateH-out").innerHTML = "Innate.";
  if (document.getElementById("atwill-in").value != "") {
    document.getElementById("atwillH-out").innerHTML = "At will: ";
    document.getElementById("atwill-out").innerHTML =
      document.getElementById("atwill-in").value;
  }
  if (document.getElementById("daily1e-in").value != "") {
    document.getElementById("daily1eH").innerHTML = "1/Day Each: ";
    document.getElementById("daily1e-out").innerHTML =
      document.getElementById("daily1e-in").value;
  }
  if (document.getElementById("daily2e-in").value != "") {
    document.getElementById("daily2eH").innerHTML = "2/Day Each: ";
    document.getElementById("daily2e-out").innerHTML =
      document.getElementById("daily2e-in").value;
  }
  if (document.getElementById("daily3e-in").value != "") {
    document.getElementById("daily3eH").innerHTML = "3/Day Each: ";
    document.getElementById("daily3e-out").innerHTML =
      document.getElementById("daily3e-in").value;
  }
  if (document.getElementById("innatefooterentry-in").value != null) {
    document.getElementById("innatefooterentry-out").innerHTML =
      document.getElementById("innatefooterentry-in").value;
  }
}
//EXPORT SOURCE CODE
document.getElementById("form-submit").addEventListener("click", (event) => {
  var form = new FormData(document.getElementById("creatureform")); //loads the document into a form object based on it being the parent of the button (button is the div here because i'm lazy)
  let outputObject = {};
  for (var [key, value] of form) {
    //loop the form data
    if (value == 0) {
      //Do nothing
    } else if (value != "") {
      //if the key exists
      outputObject[key] = value; //store it in the object
    }
  }
  let outputJson = JSON.stringify(outputObject); //turn the object into json
  var hiddenElement = document.createElement("a");
  var filename = document.getElementById("Name-in").value;
  hiddenElement.href = "data:attachment/text," + encodeURI(outputJson);
  hiddenElement.target = "_blank";
  hiddenElement.download = filename + ".json";
  hiddenElement.click();
});
//IMPORT SOURCECODE
async function readText(event) {
  document.getElementById("creatureform").reset();
  const file = event.target.files.item(0);
  const text = await file.text();
  const obj = JSON.parse(text);
  for (const prop in obj) {
    console.log(`${obj[prop]}`);
    document.getElementById(`${prop}`).value = `${obj[prop]}`;
    if (`${obj[prop]}` == "on") {
      console.warn(
        "Dungeon Master: Its worth noting that " +
          `${prop}` +
          " should be ticked."
      );
      window.alert(
        "Dungeon Master: Its worth noting that " +
          `${prop}` +
          " should be ticked."
      );
    }
  }
}
