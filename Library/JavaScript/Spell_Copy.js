function checklevel(lvl) {
  var checklevel = "";
  var lookup = {
    "": "Error",
    0: "Cantrip",
    1: "1st level",
    2: "2nd level",
    3: "3rd level",
    4: "4th level",
    5: "5th level",
    6: "6th level",
    7: "7th level",
    8: "8th level",
    9: "9th level",
    10: "10th level",
  };
  checklevel = lookup[lvl];
  return checklevel;
}
function checktype(type) {
  var checktype = "";
  var lookup = {
    "": "../Library/SpellAssets/placeholder.jpg",
    Abjuration: "../Library/SpellAssets/abjuration.png",
    Conjuration: "../Library/SpellAssets/conjuration.png",
    Divination: "../Library/SpellAssets/divination.png",
    Enchantment: "../Library/SpellAssets/enchantment.png",
    Evocation: "../Library/SpellAssets/evocation.png",
    Illusion: "../Library/SpellAssets/illusion.png",
    Necromancy: "../Library/SpellAssets/necromancy.png",
    Transmutation: "../Library/SpellAssets/transmutation.png",
  };
  checktype = lookup[type];
  return checktype;
}
function showInput() {
  document.getElementById("SpellImage").setAttribute("src", "");
  document.getElementById("concentration-out").setAttribute("src", "");
  document.getElementById("SaveIcon-out").setAttribute("src", "");
  document.getElementById("Name-out").innerHTML =
    document.getElementById("Name-in").value;
  document.getElementById("SLvlType-out").innerHTML =
    checklevel(document.getElementById("level-in").value) +
    " " +
    "-" +
    " " +
    document.getElementById("Type-in").value;
  document
    .getElementById("SpellImage")
    .setAttribute("src", checktype(document.getElementById("Type-in").value));
  document.getElementById("time-out").innerHTML =
    document.getElementById("time-in").value;
  document.getElementById("range-out").innerHTML =
    document.getElementById("range-in").value;
  document.getElementById("components-out").innerHTML =
    document.getElementById("components-in").value;
  var Concentration = document.getElementById("concentration-in").value;
  var Duration = document.getElementById("duration-in").value;
  if (Concentration == "Yes") {
    console.log("Sorcerer: This spell requires some serious concentration...");
    document
      .getElementById("concentration-out")
      .setAttribute("src", "/Library/SpellIcons/concentration.png");
    document
      .getElementById("concentration-out")
      .setAttribute("class", "conicon");
    document.getElementById("duration-out").innerHTML =
      "Concentration, " + Duration;
  } else {
    document
      .getElementById("concentration-out")
      .setAttribute("src", "/Library/SpellIcons/concentration.png");
    document
      .getElementById("concentration-out")
      .setAttribute("class", "hidden");
    document.getElementById("duration-out").innerHTML = Duration;
  }
  if (document.getElementById("savingThrow-in").value == "") {
    document.getElementById("Save_heading").innerHTML = "Attack/Save: ";
    document.getElementById("savingThrow-out").innerHTML = "--";
  } else if (document.getElementById("savingThrow-in").value == "Ranged") {
    document.getElementById("Save_heading").innerHTML = "Attack Type: ";
    document.getElementById("savingThrow-out").innerHTML =
      document.getElementById("savingThrow-in").value;
    document
      .getElementById("SaveIcon-out")
      .setAttribute("src", "/Library/SpellIcons/ranged.png");
    document.getElementById("SaveIcon-out").setAttribute("class", "icon");
  } else if (document.getElementById("savingThrow-in").value == "Melee") {
    document.getElementById("Save_heading").innerHTML = "Attack Type: ";
    document.getElementById("savingThrow-out").innerHTML =
      document.getElementById("savingThrow-in").value;
    document
      .getElementById("SaveIcon-out")
      .setAttribute("src", "/Library/SpellIcons/melee.png");
    document.getElementById("SaveIcon-out").setAttribute("class", "icon");
  } else {
    document.getElementById("Save_heading").innerHTML = "Saving Throw: ";
    document.getElementById("savingThrow-out").innerHTML =
      document.getElementById("savingThrow-in").value;
    document
      .getElementById("SaveIcon-out")
      .setAttribute("src", "/Library/SpellIcons/melee.png");
    document.getElementById("SaveIcon-out").setAttribute("class", "hidden");
  }
  document.getElementById("S0H-out").innerHTML =
    document.getElementById("S0H-in").value;
  document.getElementById("S0D-out").innerHTML =
    document.getElementById("S0D-in").value;
  document.getElementById("S1H-out").innerHTML =
    document.getElementById("S1H-in").value;
  document.getElementById("S1D-out").innerHTML =
    document.getElementById("S1D-in").value;
  document.getElementById("S2H-out").innerHTML =
    document.getElementById("S2H-in").value;
  document.getElementById("S2D-out").innerHTML =
    document.getElementById("S2D-in").value;
  document.getElementById("S3H-out").innerHTML =
    document.getElementById("S3H-in").value;
  document.getElementById("S3D-out").innerHTML =
    document.getElementById("S3D-in").value;
  document.getElementById("S4H-out").innerHTML =
    document.getElementById("S4H-in").value;
  document.getElementById("S4D-out").innerHTML =
    document.getElementById("S4D-in").value;
  document.getElementById("S5H-out").innerHTML =
    document.getElementById("S5H-in").value;
  document.getElementById("S5D-out").innerHTML =
    document.getElementById("S5D-in").value;
  document.getElementById("S6H-out").innerHTML =
    document.getElementById("S6H-in").value;
  document.getElementById("S6D-out").innerHTML =
    document.getElementById("S6D-in").value;
  document.getElementById("S7H-out").innerHTML =
    document.getElementById("S7H-in").value;
  document.getElementById("S7D-out").innerHTML =
    document.getElementById("S7D-in").value;
  document.getElementById("S8H-out").innerHTML =
    document.getElementById("S8H-in").value;
  document.getElementById("S8D-out").innerHTML =
    document.getElementById("S8D-in").value;
  let output = document.getElementById("entriesHigherLevel-in").value;
  if (output != "") {
    console.log("Sorcerer: Oh, this is a strong spell...");
    document.getElementById("HigherLevelH-out").innerHTML = "At Higher Levels:";
  } else {
    console.log("Sorcerer: This spell is for the weak...");
    document.getElementById("HigherLevelH-out").innerHTML = "";
  }
  document.getElementById("entriesHigherLevel-out").innerHTML =
    document.getElementById("entriesHigherLevel-in").value;
  document.getElementById("class0-out").innerHTML =
    document.getElementById("class0-in").value;
  document.getElementById("class1-out").innerHTML =
    document.getElementById("class1-in").value;
  document.getElementById("class2-out").innerHTML =
    document.getElementById("class2-in").value;
  document.getElementById("class3-out").innerHTML =
    document.getElementById("class3-in").value;
  document.getElementById("class4-out").innerHTML =
    document.getElementById("class4-in").value;
  document.getElementById("class5-out").innerHTML =
    document.getElementById("class5-in").value;
  document.getElementById("class6-out").innerHTML =
    document.getElementById("class6-in").value;

  var source = document.getElementById("Source-in").value.toUpperCase();
  document.getElementById("Source-out").innerHTML =
    document.getElementById("Source-in").value;
  if (source != "HOMEBREW") {
    document.getElementById("Page-out").innerHTML =
      "p" + document.getElementById("Page-in").value;
  } else {
    document.getElementById("Page-out").innerHTML = "";
  }
  document.getElementById("Source-out").removeAttribute("class");
  document.getElementById("Source-out").classList.add("source");

  if (source == "HOMEBREW") {
    document.getElementById("Source-out").classList.add("HMBW");
    document.getElementById("Source-out").innerHTML = "Homebrew";
  } else {
    document
      .getElementById("Source-out")
      .classList.add(document.getElementById("Source-in").value);
  }
}
//EXPORT SOURCE CODE
document.getElementById("form-submit").addEventListener("click", (event) => {
  var form = new FormData(document.getElementById("spellform")); //loads the document into a form object based on it being the parent of the button (button is the div here because i'm lazy)
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
