//---------------------------------------------------------------------------------------------------------
//ITEM TYPE FUNCTION
function checktype(type) {
  var checktype = "";
  var lookup = {
    // TG: "Trade Good",
    // $: "Treasure",
    // AIR: "Vehicle (Air)",
    // FD: "Food And Drink",
    // MNT: "Mount",
    // SHP: "Vehicle (Ship)",
    // TAH: "Tack and harness",
    // VEH: "Vehicle (Land)",
    A: "Ammunition",
    AF: "Ammunition",
    AT: "Artisan's Tools",
    EXP: "Explosive",
    G: "Adventuring Gear",
    GS: "Gaming Set",
    GV: "Generic Variant",
    HA: "Heavy Armour",
    INS: "Instrument",
    LA: "Light Armour",
    M: "Melee Weapon",
    MA: "Medium Armour",
    OTH: "Other",
    P: "Potion",
    R: "Ranged Weapon",
    RD: "Rod",
    RG: "Ring",
    S: "Shield",
    SC: "Scroll",
    SCF: "Spellcasting Focus",
    T: "Tools",
    WD: "Wand",
  };
  checktype = lookup[type];
  return checktype;
}
//---------------------------------------------------------------------------------------------------------
//DAMAGE TYPE FUNCTION
function checkdmgtype(dmgtype) {
  var checkdmgtype = "";
  var lookup = {
    A: "Acid",
    B: "Bludgeoning",
    C: "Cold",
    F: "Fire",
    FC: "Force",
    L: "Lightning",
    N: "Necrotic",
    P: "Piercing",
    PO: "Poison",
    PS: "Psychic",
    R: "Radiant",
    S: "Slashing",
    T: "Thunder",
  };
  checkdmgtype = lookup[dmgtype];
  return checkdmgtype;
}
//---------------------------------------------------------------------------------------------------------
//PROPERTIES FUNCTION
function checkproperties(property) {
  var checkproperties = "";
  var lookup = {
    AF: "Ammunition",
    A: "Ammunition",
    F: "Finesse",
    H: "Heavy",
    L: "Light",
    RLF: "Reload",
    LD: "Loading",
    R: "Reach",
    S: "Special",
    T: "Thrown",
    "2H": "Two-Handed",
    V: "Versatile",
  };
  checkproperties = lookup[property];
  return checkproperties;
}
// ---------------------------------------------------------------------------------------------------------
//IMPORT FROM URL
function fetchData(fileName) {
  console.log(
    "Librarians: Looking in the 'Magical Items' section, for '" + fileName + "'"
  );
  document.getElementById("itemform").reset();
  console.warn("Cleric: Casting Prestidigitation On Form...");
  fetch("http://localhost:8080/Sources/MagicItems/" + fileName + ".json")
    .then(function (urlOUTPUT) {
      return urlOUTPUT.text();
    })
    .then(function (etl) {
      const text = etl;
      const obj = JSON.parse(text);
      runETL(obj);
    })
    .then(function () {
      showInput();
    });
}
//---------------------------------------------------------------------------------------------------------
//IMPORT FROM FILE
async function readText(event) {
  document.getElementById("itemform").reset();
  console.warn("Cleric: Casting Prestidigitation On Form...");
  const file = event.target.files.item(0);
  const text = await file.text();
  const obj = JSON.parse(text);
  runETL(obj);
}
// ---------------------------------------------------------------------------------------------------------
//EXTRACT TRANSFORM & LOAD
function runETL(obj) {
  // ---------------------------------------------------------------------------------------------------------
  //JSON CONVERTER

  if (obj.customIndicator == undefined) {
    console.warn("Cleric: Summoning Converter Shell");
    console.log(obj);
    var object = {};
    //---------------------------------------------------------------------------------------------------------
    if (obj.reqAttune == undefined) {
      var reqAttune = undefined;
    } else {
      var reqAttune = "Yes";
    }
    //-----------------------------
    if (obj.rarity == "none") {
      var rarity = "";
    } else {
      var rarity = obj.rarity;
    }
    //-----------------------------
    if (obj.wondrous == true) {
      var type = "Wondrous Item";
    } else if (obj.weaponCategory != undefined) {
      var type = "Weapon";
    } else if (obj.type != undefined) {
      var type = checktype(obj.type);
    } else {
      var type = undefined;
    }
    //-----------------------------
    if (obj.weaponCategory == undefined) {
      var staffTrue = undefined;
      var weaponCategory = undefined;
      var dmg1 = undefined;
      var dmgType = undefined;
      var property = undefined;
    } else {
      var dmgType = checkdmgtype(obj.dmgType);
      if (obj.staff == true) {
        var staffTrue = "Yes";
      } else {
        var staffTrue = undefined;
      }

      if (obj.type != undefined) {
        var weaponCategory =
          obj.weaponCategory + " weapon, " + checktype(obj.type);
      } else if (staffTrue == "Yes") {
        var weaponCategory = obj.weaponCategory + " weapon, melee weapon";
      } else {
        var weaponCategory = obj.weaponCategory;
      }

      var dmg1 = obj.dmg1;
      if (obj.dmg2 != undefined) {
        var dmg2 = obj.dmg2;
      } else {
        var dmg2 = undefined;
      }

      if (obj.property[0] != undefined) {
        if (obj.property[0] == "A") {
          var property0 =
            checkproperties(obj.property[0]) + " (" + obj.range + " ft.)";
        } else {
          var property0 = checkproperties(obj.property[0]);
        }
      } else {
        var property0 = "";
      }
      if (obj.property[1] != undefined) {
        if (obj.property[1] == "A") {
          var property1 =
            ", " +
            checkproperties(obj.property[1]) +
            " (" +
            obj.range +
            " ft.)";
        } else {
          var property1 = ", " + checkproperties(obj.property[1]);
        }
      } else {
        var property1 = "";
      }
      if (obj.property[2] != undefined) {
        if (obj.property[2] == "A") {
          var property2 =
            ", " +
            checkproperties(obj.property[2]) +
            " (" +
            obj.range +
            " ft.)";
        } else {
          var property2 = ", " + checkproperties(obj.property[2]);
        }
      } else {
        var property2 = "";
      }
      var property = property0 + property1 + property2;
    }
    //---------------------------------------------------------------------------------------------------------
    //ENTRIES CODE
    let entriesOut = [];
    var entriesList = obj.entries;
    var entriesLength = entriesList.length;
    for (var i = 0; i < entriesLength; i++) {
      if (entriesList[i].name != undefined) {
        entriesOut.push({
          name: entriesList[i].name,
          data: datacleanse(entriesList[i].entries),
        });
      } else {
        entriesOut.push({ data: datacleanse(entriesList[i]) });
      }
    }
    //---------------------------------------------------------------------------------------------------------
    //MAPPING CODE
    object["name"] = obj["name"];

    object["reqAttune"] = reqAttune;
    object["rarity"] = rarity;
    object["type"] = type;

    object["charges"] = obj["charges"];
    object["source"] = obj["source"];
    object["page"] = obj["page"];

    object["staff"] = staffTrue;
    object["weaponCategory"] = weaponCategory;
    object["dmgType"] = dmgType;
    object["dmg1"] = dmg1;
    object["dmg2"] = dmg2;
    object["property"] = property;

    var entriesOutLength = entriesOut.length;
    for (var i = 0; i < entriesOutLength; i++) {
      object["I" + [i] + "H"] = entriesOut[i].name;
      object["I" + [i] + "D"] = entriesOut[i].data;
    }
    console.log(object);
    // ---------------------------------------------------------------------------------------------------------
    // Extract File
    // ---------------------------------------------------------------------------------------------------------
    let outputJson = JSON.stringify(object); //turn the object into json
    document.getElementById("itemform").reset();
    const objct = JSON.parse(outputJson);
    for (const prop in objct) {
      console.log(`${objct[prop]}`);
      document.getElementById(`${prop}`).value = `${objct[prop]}`;
    }
    console.warn("Cleric: Summoning Ritual Complete");
  }

  //RML CUSTOM JSON
  else {
    console.warn("Cleric: Summoning Custom Shell");
    console.log(obj);
    for (const prop in obj) {
      console.log(`${prop} = ${obj[prop]}`);
      document.getElementById(`${prop}`).value = `${obj[prop]}`;
    }
    console.warn("Cleric: Summoning Ritual Complete");
  }
}
