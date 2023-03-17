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
    R: "Ranged Weapon",
    RG: "Ring",
    S: "Shield",
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
//---------------------------------------------------------------------------------------------------------
//DAMAGE TYPE FUNCTION
//---------------------------------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//IMPORT SOURCECODE
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
async function readText(event) {
  document.getElementById("itemform").reset();
  console.warn("Cleric: Casting Prestidigitation On Form...");
  const file = event.target.files.item(0);
  const text = await file.text();
  const obj = JSON.parse(text);

  // ---------------------------------------------------------------------------------------------------------
  //RML CUSTOM JSON
  // ---------------------------------------------------------------------------------------------------------
  if (obj.source == undefined) {
    console.warn("Cleric: Summoning Custom Shell");
    console.log(obj);
    for (const prop in obj) {
      console.log(`${prop} = ${obj[prop]}`);
      document.getElementById(`${prop}`).value = `${obj[prop]}`;
    }
    console.warn("Cleric: Summoning Ritual Complete");
  }
  // ---------------------------------------------------------------------------------------------------------
  //JSON CONVERTER
  // ---------------------------------------------------------------------------------------------------------
  else {
    console.warn("Cleric: Summoning Converter Shell");
    console.log(obj);
    var object = {};
    //---------------------------------------------------------------------------------------------------------
    if (obj.wondrous == true) {
      var type = "Wondrous Item";
    } else if (obj.weaponCategory != undefined) {
      var type = "Weapon";
    } else if (obj.type != undefined) {
      var type = checktype(obj.type);
    } else {
      var type = "";
    }
    if (obj.rarity == "none") {
      var rarity = "";
    } else {
      var rarity = obj.rarity;
    }
    if (obj.otherSources != undefined) {
      var otherSources = obj.otherSources[0].source.replace("UA", "");
    } else {
      var otherSources = undefined;
    }
    if (obj.otherSources != undefined) {
      var otherSourcesPage = obj.otherSources[0].page;
    } else {
      var otherSourcesPage = undefined;
    }
    //------------------------
    if (obj.reqAttune == undefined) {
      var reqAttune = "";
    } else if (obj.reqAttune == true) {
      var reqAttune = "requires attunement";
    } else {
      var reqAttune = "requires attunement " + obj.reqAttune;
    }
    if (obj.weaponCategory == undefined) {
      var staffTrue = undefined;
      var weaponCategory = "";
      var dmg1 = "";
      var dmgType = "";
      var property = "";
    } else {
      var dmgType = checkdmgtype(obj.dmgType);
      if (obj.staff == true) {
        var staffTrue = "Yes";
      } else {
        var staffTrue = undefined;
      }
      var weaponCategory =
        obj.weaponCategory + " weapon, " + checktype(obj.type);
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
    //---------------------------------------------------------------------------------------------------------
    if (obj.entries[0] != undefined) {
      if (obj.entries[0].name != undefined) {
        var entries0H = obj.entries[0].name;
        var entries0D = datacleanse(obj.entries[0].entries);
      } else {
      }
      var entries0D = datacleanse(obj.entries[0]);
    }
    if (obj.entries[1] != undefined) {
      if (obj.entries[1].name != undefined) {
        var entries1H = obj.entries[1].name + ".";
        var entries1D = datacleanse(obj.entries[1].entries);
      } else {
        var entries1D = datacleanse(obj.entries[1]);
      }
    }
    if (obj.entries[2] != undefined) {
      if (obj.entries[2].name != undefined) {
        var entries2H = obj.entries[2].name + ".";
        var entries2D = datacleanse(obj.entries[2].entries);
      } else {
        var entries2D = datacleanse(obj.entries[2]);
      }
    }
    if (obj.entries[3] != undefined) {
      if (obj.entries[3].name != undefined) {
        var entries3H = obj.entries[3].name + ".";
        var entries3D = datacleanse(obj.entries[3].entries);
      } else {
        var entries3D = datacleanse(obj.entries[3]);
      }
    }
    if (obj.entries[4] != undefined) {
      if (obj.entries[4].name != undefined) {
        var entries4H = obj.entries[4].name + ".";
        var entries4D = datacleanse(obj.entries[4].entries);
      } else {
        var entries4D = datacleanse(obj.entries[4]);
      }
    }
    if (obj.entries[5] != undefined) {
      if (obj.entries[5].name != undefined) {
        var entries5H = obj.entries[5].name + ".";
        var entries5D = datacleanse(obj.entries[5].entries);
      } else {
        var entries5D = datacleanse(obj.entries[5]);
      }
    }
    if (obj.entries[6] != undefined) {
      if (obj.entries[6].name != undefined) {
        var entries6H = obj.entries[6].name + ".";
        var entries6D = datacleanse(obj.entries[6].entries);
      } else {
        var entries6D = datacleanse(obj.entries[6]);
      }
    }
    if (obj.entries[7] != undefined) {
      if (obj.entries[7].name != undefined) {
        var entries7H = obj.entries[7].name + ".";
        var entries7D = datacleanse(obj.entries[7].entries);
      } else {
        var entries7D = datacleanse(obj.entries[7]);
      }
    }
    if (obj.entries[8] != undefined) {
      if (obj.entries[8].name != undefined) {
        var entries8H = obj.entries[8].name + ".";
        var entries8D = datacleanse(obj.entries[8].entries);
      } else {
        var entries8D = datacleanse(obj.entries[8]);
      }
    }
    //---------------------------------------------------------------------------------------------------------
    //MAPPING CODE
    //---------------------------------------------------------------------------------------------------------
    object["Name-in"] = obj["name"];
    object["Staff-in"] = staffTrue;
    object["Type-in"] = type;
    object["Rarity-in"] = rarity;
    object["reqAttune-in"] = reqAttune;
    object["Source-in"] = obj["source"];
    object["Page-in"] = obj["page"];
    object["otherSources-in"] = otherSources;
    object["otherSourcesPage-in"] = otherSourcesPage;
    object["weaponCategory-in"] = weaponCategory;
    object["dmg1-in"] = dmg1;
    object["dmg2-in"] = dmg2;
    object["dmgType-in"] = dmgType;
    object["property-in"] = property;
    object["I0H-in"] = entries0H;
    object["I0D-in"] = entries0D;
    object["I1H-in"] = entries1H;
    object["I1D-in"] = entries1D;
    object["I2H-in"] = entries2H;
    object["I2D-in"] = entries2D;
    object["I3H-in"] = entries3H;
    object["I3D-in"] = entries3D;
    object["I4H-in"] = entries4H;
    object["I4D-in"] = entries4D;
    object["I5H-in"] = entries5H;
    object["I5D-in"] = entries5D;
    object["I6H-in"] = entries6H;
    object["I6D-in"] = entries6D;
    object["I7H-in"] = entries7H;
    object["I7D-in"] = entries7D;
    object["I8H-in"] = entries8H;
    object["I8D-in"] = entries8D;
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
}
