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
function checkschool(school) {
  var checkschool = "";
  var lookup = {
    A: "Abjuration",
    C: "Conjuration",
    D: "Divination",
    E: "Enchantment",
    V: "Evocation",
    I: "Illusion",
    N: "Necromancy",
    T: "Transmutation",
  };
  checkschool = lookup[school];
  return checkschool;
}
// ---------------------------------------------------------------------------------------------------------
//SPELL LIST
fetch("http://localhost:8080/folders/Sources/Spells/")
  .then((response) => response.json())
  .then((data) => {
    for (const prop in data) {
      const suffix = `${data[prop]}`.split(".");
      let extension = suffix[1];
      if (extension == "json") {
        console.log(`${data[prop]}`);
        var tbodyRef = document
          .getElementById("myTable")
          .getElementsByTagName("tbody")[0];
        var newRow = tbodyRef.insertRow();
        var newName = newRow.insertCell();
        var newLevel = newRow.insertCell();
        var newSchool = newRow.insertCell();
        // var newRarity = newRow.insertCell();
        var newSource = newRow.insertCell();

        var newView = newRow.insertCell();
        var newEdit = newRow.insertCell();
        var newNameText = document.createTextNode(suffix[0]);
        newName.appendChild(newNameText);
        readText(suffix[0], "level", newLevel);
        readSchool(suffix[0], "school", newSchool);

        //    readText(suffix[0], "type", newType);
        //     readText(suffix[0], "rarity", newRarity);

        readSource(suffix[0], newSource);
        const pngAnchor = document.createElement("a");
        var newViewText = document.createTextNode("View");
        newView.appendChild(pngAnchor);
        var pnglink =
          "http://localhost:8080/Sources/Spells/" + suffix[0] + ".png";
        pngAnchor.setAttribute("href", pnglink);
        pngAnchor.appendChild(newViewText);
        const jsonAnchor = document.createElement("a");
        var newEditText = document.createTextNode("Edit");
        newEdit.appendChild(jsonAnchor);
        var jsonlink =
          "http://localhost:8080/Pages/SpellPage.html?FileName=" + suffix[0];
        jsonAnchor.setAttribute("href", jsonlink);
        jsonAnchor.appendChild(newEditText);
      }
    }
  });
// ---------------------------------------------------------------------------------------------------------
//IMPORT DETAILS
function readText(spell, i, cell) {
  fetch("/Sources/Spells/" + spell + ".json")
    .then((response) => response.json())
    .then((obj) => {
      if (i == "level") {
        var typeText = document.createTextNode(checklevel(obj.level));
      } else {
        var typeText = document.createTextNode("Spell");
      }
      cell.appendChild(typeText);
    });
}
// ---------------------------------------------------------------------------------------------------------
//IMPORT SCHOOL
function readSchool(spell, i, cell) {
  fetch("/Sources/Spells/" + spell + ".json")
    .then((response) => response.json())
    .then((obj) => {
      if (obj.school != undefined) {
        var typeText = document.createTextNode(checkschool(obj.school));
        var setClass = checkschool(obj.school);
      } else {
        var typeText = document.createTextNode(obj.type);
        var setClass = obj.type;
      }

      cell.appendChild(typeText);
      cell.removeAttribute("class");
      cell.setAttribute("class", setClass);
    });
}

// ---------------------------------------------------------------------------------------------------------
//IMPORT SOURCECODE
function readSource(spell, cell) {
  fetch("/Sources/Spells/" + spell + ".json")
    .then((response) => response.json())
    .then((obj) => {
      var logicCheck = obj.source;
      if (logicCheck.toUpperCase() != "HOMEBREW") {
        var typeText = document.createTextNode(logicCheck);
        source = obj.source;
      } else {
        var typeText = document.createTextNode("Homebrew");
        source = "HMBW";
      }
      cell.appendChild(typeText);
      cell.removeAttribute("class");
      cell.setAttribute("class", source);
    });
}
