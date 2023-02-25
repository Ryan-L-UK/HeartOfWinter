function showInput() {
  document.getElementById("SpellImage").setAttribute("src", "");
  document.getElementById("Conscen_output").setAttribute("src", "");
  document.getElementById("SaveIcon_output").setAttribute("src", "");

  document.getElementById("SName_output").innerHTML =
    document.getElementById("SName_input").value;

  function checklevel(lvl) {
    var checkresult = "";
    var lookup = {
      "": "Error",
      0: "cantrip",
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
    checkresult = lookup[lvl];

    LvlOut = checkresult;
  }

  checklevel(document.getElementById("SL_input").value);

  var SVarLvlType =
    LvlOut + " " + "-" + " " + document.getElementById("SType_input").value;
  document.getElementById("SLvlType_output").innerHTML = SVarLvlType;

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
    typeImageOut = checktype;
  }

  checktype(document.getElementById("SType_input").value);
  document.getElementById("SpellImage").setAttribute("src", typeImageOut);

  document.getElementById("CT_output").innerHTML =
    document.getElementById("CT_input").value;

  document.getElementById("Range_output").innerHTML =
    document.getElementById("Range_input").value;

  document.getElementById("Comp_output").innerHTML =
    document.getElementById("Comp_input").value;

  var Concentration = document.getElementById("Conscen_input").value;
  var Duration = document.getElementById("Dur_input").value;

  if (Concentration == "Yes") {
    console.log("Sorcerer: This spell requires some serious concentration...");
    document
      .getElementById("Conscen_output")
      .setAttribute("src", "/Library/SpellIcons/concentration.png");
    document.getElementById("Conscen_output").setAttribute("class", "conicon");
    document.getElementById("Dur_output").innerHTML =
      "Concentration, " + Duration;
  } else {
    document
      .getElementById("Conscen_output")
      .setAttribute("src", "/Library/SpellIcons/concentration.png");
    document.getElementById("Conscen_output").setAttribute("class", "hidden");
    document.getElementById("Dur_output").innerHTML = Duration;
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
    typeImageOut = checktype;
  }

  checktype(document.getElementById("SType_input").value);
  document.getElementById("SpellImage").setAttribute("src", typeImageOut);

  var saveImageOut = document.getElementById("Save_input").value;

  if (saveImageOut == "") {
    document.getElementById("Save_heading").innerHTML = "Attack/Save: ";
    document.getElementById("Save_output").innerHTML = "--";
  } else if (saveImageOut == "Ranged") {
    document.getElementById("Save_heading").innerHTML = "Attack Type: ";
    document.getElementById("Save_output").innerHTML =
      document.getElementById("Save_input").value;
    document
      .getElementById("SaveIcon_output")
      .setAttribute("src", "/Library/SpellIcons/ranged.png");
    document.getElementById("SaveIcon_output").setAttribute("class", "icon");
  } else if (saveImageOut == "Melee") {
    document.getElementById("Save_heading").innerHTML = "Attack Type: ";
    document.getElementById("Save_output").innerHTML =
      document.getElementById("Save_input").value;
    document
      .getElementById("SaveIcon_output")
      .setAttribute("src", "/Library/SpellIcons/melee.png");
    document.getElementById("SaveIcon_output").setAttribute("class", "icon");
  } else {
    document.getElementById("Save_heading").innerHTML = "Saving Throw: ";
    document.getElementById("Save_output").innerHTML =
      document.getElementById("Save_input").value;
    document
      .getElementById("SaveIcon_output")
      .setAttribute("src", "/Library/SpellIcons/melee.png");
    document.getElementById("SaveIcon_output").setAttribute("class", "hidden");
  }

  document.getElementById("P1D_output").innerHTML =
    document.getElementById("P1D_input").value;

  document.getElementById("P2D_output").innerHTML =
    document.getElementById("P2D_input").value;

  document.getElementById("P3D_output").innerHTML =
    document.getElementById("P3D_input").value;

  document.getElementById("P4D_output").innerHTML =
    document.getElementById("P4D_input").value;

  document.getElementById("P5D_output").innerHTML =
    document.getElementById("P5D_input").value;

  let output = document.getElementById("HL1D_input").value;
  if (output != "") {
    console.log("Sorcerer: Oh, this is a strong spell...");
    document.getElementById("HL1H_output").innerHTML = "At Higher Levels:";
  } else {
    console.log("Sorcerer: This spell is for the weak...");
    document.getElementById("HL1H_output").innerHTML = "";
  }

  document.getElementById("HL1D_output").innerHTML =
    document.getElementById("HL1D_input").value;

  document.getElementById("Class1_output").innerHTML =
    document.getElementById("Class1_input").value;
  document.getElementById("Class2_output").innerHTML =
    document.getElementById("Class2_input").value;
  document.getElementById("Class3_output").innerHTML =
    document.getElementById("Class3_input").value;
  document.getElementById("Class4_output").innerHTML =
    document.getElementById("Class4_input").value;
  document.getElementById("Class5_output").innerHTML =
    document.getElementById("Class5_input").value;
  document.getElementById("Class6_output").innerHTML =
    document.getElementById("Class6_input").value;
  document.getElementById("Class7_output").innerHTML =
    document.getElementById("Class7_input").value;
  document.getElementById("Source_output").innerHTML =
    document.getElementById("Source_input").value;
}

//EXPORT SOURCE CODE
document.getElementById("form-submit").addEventListener("click", (event) => {
  var form = new FormData(document.getElementById("spellform")); //loads the document into a form object based on it being the parent of the button (button is the div here because i'm lazy)
  let outputObject = {};
  for (var [key, value] of form) {
    //loop the form data
    if (value != null) {
      //if the key exists
      outputObject[key] = value; //store it in the object
    }
  }
  let outputJson = JSON.stringify(outputObject); //turn the object into json
  var hiddenElement = document.createElement("a");
  var filename = document.getElementById("SName_input").value;

  hiddenElement.href = "data:attachment/text," + encodeURI(outputJson);
  hiddenElement.target = "_blank";
  hiddenElement.download = filename + ".spell";
  hiddenElement.click();
});

//IMPORT SOURCECODE
async function readText(event) {
  const file = event.target.files.item(0);
  const text = await file.text();
  const obj = JSON.parse(text);

  for (const prop in obj) {
    console.log(`${prop} = ${obj[prop]}`);
    document.getElementById(`${prop}`).value = `${obj[prop]}`;
  }
}
