//---------------------------------------------------------------------------------------------------------
//ITEM TYPE FUNCTION
//---------------------------------------------------------------------------------------------------------
function checktype(type) {
  var checktype = "";
  var lookup = {
    $: "treasure",
    AF: "Ammunition",
    AIR: "Vehicle (Air)",
    AT: "Artisan's Tools",
    EXP: "Explosive",
    FD: "Food And Drink",
    G: "Adventuring gear",
    GS: "Gaming Set",
    GV: "Generic Variant",
    HA: "Heavy Armour",
    INS: "Instrument",
    LA: "Light Armour",
    M: "Melee Weapon",
    MA: "Medium Armour",
    MNT: "Mount",
    OTH: "Other",
    P: "Potion",
    R: "Ranged Weapon",
    RD: "Rod",
    RG: "Ring",
    S: "Shield",
    SC: "Scroll",
    SCF: "Spellcasting Focus",
    SHP: "Vehicle (Ship)",
    T: "Tools",
    TAH: "Tack and harness",
    TG: "Trade Good",
    WD: "Wand",
    VEH: "Vehicle (Land)",
  };
  checktype = lookup[type];
  return checktype;
}
// ---------------------------------------------------------------------------------------------------------
//ITEM LIST
fetch("http://localhost:8080/folders/Sources/MagicItems/")
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
        var newType = newRow.insertCell();
        var newRarity = newRow.insertCell();
        var newSource = newRow.insertCell();
        var newView = newRow.insertCell();
        var newEdit = newRow.insertCell();
        var newNameText = document.createTextNode(suffix[0]);
        newName.appendChild(newNameText);
        readText(suffix[0], "type", newType);
        readText(suffix[0], "rarity", newRarity);

        readSource(suffix[0], newSource);
        const pngAnchor = document.createElement("a");
        var newViewText = document.createTextNode("View");
        newView.appendChild(pngAnchor);
        var pnglink =
          "http://localhost:8080/Sources/MagicItems/" + suffix[0] + ".png";
        pngAnchor.setAttribute("href", pnglink);
        pngAnchor.appendChild(newViewText);
        const jsonAnchor = document.createElement("a");
        var newEditText = document.createTextNode("Edit");
        newEdit.appendChild(jsonAnchor);
        var jsonlink =
          "http://localhost:8080/Pages/ItemsPage.html?FileName=" + suffix[0];
        jsonAnchor.setAttribute("href", jsonlink);
        jsonAnchor.appendChild(newEditText);
      }
    }
  });
// ---------------------------------------------------------------------------------------------------------
//IMPORT DETAILS
function readText(item, i, cell) {
  const typecheck = [
    "$",
    "AF",
    "AIR",
    "AT",
    "EXP",
    "FD",
    "G",
    "GS",
    "GV",
    "HA",
    "INS",
    "LA",
    "M",
    "MA",
    "MNT",
    "OTH",
    "P",
    "R",
    "RD",
    "RG",
    "S",
    "SC",
    "SCF",
    "SHP",
    "T",
    "TAH",
    "TG",
    "WD",
    "VEH",
  ];
  fetch("/Sources/MagicItems/" + item + ".json")
    .then((response) => response.json())
    .then((obj) => {
      if (i == "type") {
        if (obj.wondrous != undefined) {
          var typeText = document.createTextNode("Wondrous Item");
        } else if (obj.staff != undefined) {
          var typeText = document.createTextNode("Staff");
        } else if (typecheck.indexOf(obj.type) >= 0) {
          var typeText = document.createTextNode(checktype(obj.type));
        } else {
          var typeText = document.createTextNode(
            obj.type.charAt(0).toUpperCase() + obj.type.slice(1)
          );
        }
      }
      if (i == "rarity") {
        var typeText = document.createTextNode(
          obj.rarity.charAt(0).toUpperCase() + obj.rarity.slice(1)
        );
      }
      cell.appendChild(typeText);
    });
}
// ---------------------------------------------------------------------------------------------------------
//IMPORT SOURCECODE
function readSource(item, cell) {
  fetch("/Sources/MagicItems/" + item + ".json")
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
