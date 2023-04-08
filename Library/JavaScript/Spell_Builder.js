// ---------------------------------------------------------------------------------------------------------
//SPELL LEVEL
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
// ---------------------------------------------------------------------------------------------------------
//SPELL TYPE
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
// ---------------------------------------------------------------------------------------------------------
//SPELL LIST
fetch("http://localhost:8080/sources/Spells/")
  .then((response) => response.json())
  .then((data) => {
    const tblParent = document.getElementById("sTable");
    const myTable = document.createElement("table");
    myTable.setAttribute("id", "myTable");
    const tblHead = document.createElement("thead");
    tblHead.setAttribute("class", "fixedHead");
    const tblRow = document.createElement("tr");
    const tblSName = document.createElement("th");
    tblSName.innerHTML = "Spell Name";
    tblSName.setAttribute("width", "225px");
    const tblLevel = document.createElement("th");
    tblLevel.innerHTML = "Level";
    tblLevel.setAttribute("width", "60px");
    const tblSchool = document.createElement("th");
    tblSchool.innerHTML = "School";
    tblSchool.setAttribute("width", "90px");
    const tblSource = document.createElement("th");
    tblSource.innerHTML = "Source";
    const tblEdit = document.createElement("th");
    tblEdit.innerHTML = "Edit";
    myTable.appendChild(tblHead);
    tblHead.appendChild(tblRow);
    tblRow.appendChild(tblSName);
    tblRow.appendChild(tblLevel);
    tblRow.appendChild(tblSchool);
    tblRow.appendChild(tblSource);
    tblRow.appendChild(tblEdit);
    const tbodyRef = document.createElement("tbody");
    myTable.appendChild(tbodyRef);

    for (const prop in data) {
      let spellName = data[prop].name;
      var newRow = tbodyRef.insertRow();
      //-----------------
      var newName = newRow.insertCell();
      var newNameText = document.createTextNode(spellName);
      newName.appendChild(newNameText);
      //-----------------
      var newLevel = newRow.insertCell();
      var newLevelText = document.createTextNode(checklevel(data[prop].level));
      newLevel.appendChild(newLevelText);
      //-----------------
      var newSchool = newRow.insertCell();
      var newSchoolText = document.createTextNode(
        checkschool(data[prop].school)
      );
      newSchool.appendChild(newSchoolText);
      newSchool.removeAttribute("class");
      newSchool.setAttribute("class", checkschool(data[prop].school));
      //-----------------
      var newSource = newRow.insertCell();
      var newSourceText = document.createTextNode(data[prop].source);
      newSource.appendChild(newSourceText);
      newSource.removeAttribute("class");
      newSource.setAttribute("class", data[prop].source);
      //------------------
      var newEdit = newRow.insertCell();
      const jsonAnchor = document.createElement("a");
      var newEditText = document.createTextNode("Edit");
      newEdit.appendChild(jsonAnchor);
      var jsonlink =
        "http://localhost:8080/Pages/SpellPage.html?FileName=" + spellName;
      jsonAnchor.setAttribute("href", jsonlink);
      jsonAnchor.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        fetchData(spellName.replace("/", "-"));
      });
      jsonAnchor.appendChild(newEditText);
    }
    tblParent.appendChild(myTable);
  });
// ---------------------------------------------------------------------------------------------------------
//SPELL INPUT
function showInput() {
  document.getElementById("spellImage").setAttribute("src", "");
  document.getElementById("concentration-out").setAttribute("src", "");
  document.getElementById("saveIcon-out").setAttribute("src", "");
  document.getElementById("name-out").innerHTML =
    document.getElementById("name").value;
  document.getElementById("SLvlType-out").innerHTML =
    checklevel(document.getElementById("level").value) +
    " - " +
    document.getElementById("school").value;
  document
    .getElementById("spellImage")
    .setAttribute("src", checktype(document.getElementById("school").value));
  document.getElementById("time-out").innerHTML =
    document.getElementById("time").value;
  document.getElementById("range-out").innerHTML =
    document.getElementById("range").value;
  document.getElementById("components-out").innerHTML =
    document.getElementById("components").value;
  var Concentration = document.getElementById("concentration").value;
  var Duration = document.getElementById("duration").value;
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
  if (document.getElementById("savingThrow").value == "") {
    document.getElementById("save-heading").innerHTML = "Attack/Save: ";
    document.getElementById("savingThrow-out").innerHTML = "--";
  } else if (document.getElementById("savingThrow").value == "Ranged") {
    document.getElementById("save-heading").innerHTML = "Attack Type: ";
    document.getElementById("savingThrow-out").innerHTML =
      document.getElementById("savingThrow").value;
    document
      .getElementById("saveIcon-out")
      .setAttribute("src", "/Library/SpellIcons/ranged.png");
    document.getElementById("saveIcon-out").setAttribute("class", "icon");
  } else if (document.getElementById("savingThrow").value == "Melee") {
    document.getElementById("save-heading").innerHTML = "Attack Type: ";
    document.getElementById("savingThrow-out").innerHTML =
      document.getElementById("savingThrow").value;
    document
      .getElementById("saveIcon-out")
      .setAttribute("src", "/Library/SpellIcons/melee.png");
    document.getElementById("saveIcon-out").setAttribute("class", "icon");
  } else {
    document.getElementById("save-heading").innerHTML = "Saving Throw: ";
    document.getElementById("savingThrow-out").innerHTML =
      document.getElementById("savingThrow").value;
    document
      .getElementById("saveIcon-out")
      .setAttribute("src", "/Library/SpellIcons/melee.png");
    document.getElementById("saveIcon-out").setAttribute("class", "hidden");
  }
  document.getElementById("S0H-out").innerHTML =
    document.getElementById("S0H").value;
  document.getElementById("S0D-out").innerHTML =
    document.getElementById("S0D").value;
  document.getElementById("S1H-out").innerHTML =
    document.getElementById("S1H").value;
  document.getElementById("S1D-out").innerHTML =
    document.getElementById("S1D").value;
  document.getElementById("S2H-out").innerHTML =
    document.getElementById("S2H").value;
  document.getElementById("S2D-out").innerHTML =
    document.getElementById("S2D").value;
  document.getElementById("S3H-out").innerHTML =
    document.getElementById("S3H").value;
  document.getElementById("S3D-out").innerHTML =
    document.getElementById("S3D").value;
  document.getElementById("S4H-out").innerHTML =
    document.getElementById("S4H").value;
  document.getElementById("S4D-out").innerHTML =
    document.getElementById("S4D").value;
  document.getElementById("S5H-out").innerHTML =
    document.getElementById("S5H").value;
  document.getElementById("S5D-out").innerHTML =
    document.getElementById("S5D").value;
  document.getElementById("S6H-out").innerHTML =
    document.getElementById("S6H").value;
  document.getElementById("S6D-out").innerHTML =
    document.getElementById("S6D").value;
  document.getElementById("S7H-out").innerHTML =
    document.getElementById("S7H").value;
  document.getElementById("S7D-out").innerHTML =
    document.getElementById("S7D").value;
  document.getElementById("S8H-out").innerHTML =
    document.getElementById("S8H").value;
  document.getElementById("S8D-out").innerHTML =
    document.getElementById("S8D").value;
  let output = document.getElementById("entriesHigherLevel").value;
  if (output != "") {
    console.log("Sorcerer: Oh, this is a strong spell...");
    document.getElementById("higherLevelH-out").innerHTML = "At Higher Levels:";
  } else {
    console.log("Sorcerer: This spell is for the weak...");
    document.getElementById("higherLevelH-out").innerHTML = "";
  }
  document.getElementById("entriesHigherLevel-out").innerHTML =
    document.getElementById("entriesHigherLevel").value;
  document.getElementById("class0-out").innerHTML =
    document.getElementById("class0").value;
  document.getElementById("class1-out").innerHTML =
    document.getElementById("class1").value;
  document.getElementById("class2-out").innerHTML =
    document.getElementById("class2").value;
  document.getElementById("class3-out").innerHTML =
    document.getElementById("class3").value;
  document.getElementById("class4-out").innerHTML =
    document.getElementById("class4").value;
  document.getElementById("class5-out").innerHTML =
    document.getElementById("class5").value;
  document.getElementById("class6-out").innerHTML =
    document.getElementById("class6").value;
  var source = document.getElementById("source").value.toUpperCase();
  document.getElementById("source-out").innerHTML =
    document.getElementById("source").value;
  if (source != "HOMEBREW") {
    document.getElementById("page-out").innerHTML =
      "p" + document.getElementById("page").value;
  } else {
    document.getElementById("page-out").innerHTML = "";
  }
  document.getElementById("source-out").removeAttribute("class");
  document.getElementById("source-out").classList.add("source");
  if (source == "HOMEBREW") {
    document.getElementById("source-out").classList.add("HMBW");
    document.getElementById("source-out").innerHTML = "Homebrew";
  } else {
    document
      .getElementById("source-out")
      .classList.add(document.getElementById("source").value);
  }
}
// ---------------------------------------------------------------------------------------------------------
//EXPORT SOURCE CODE
function exportSource() {
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
  var filename = document.getElementById("name").value;
  hiddenElement.href = "data:attachment/text," + encodeURI(outputJson);
  hiddenElement.target = "_blank";
  hiddenElement.download = filename + ".json";
  hiddenElement.click();
}
