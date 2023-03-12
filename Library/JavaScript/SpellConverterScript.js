//---------------------------------------------------------------------------------------------------------
//SPELL SCHOOL FUNCTION
//---------------------------------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//IMPORT SOURCECODE
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
async function readText(event) {
  document.getElementById("spellform").reset();
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
    if (obj.range.type == "radius") {
      var range =
        "Self (" +
        obj.range.distance.amount +
        "-" +
        obj.range.distance.type +
        " " +
        obj.range.type +
        ")";
    } else {
      var range = obj.range.distance.amount + " " + obj.range.distance.type;
    }
    if (obj.components.v == true) {
      var Verbal = "V";
    } else {
      var Verbal = "";
    }
    if (obj.components.s == true) {
      var Somatic = ", S";
    } else {
      var Somatic = "";
    }
    if (obj.components.m == true) {
      var Material = ", M";
    } else {
      var Material = "";
    }
    let components = Verbal + Somatic + Material;
    if (components.charAt(0) == ",") {
      components = components.substring(2);
    }
    if (obj.duration[0].type == "instant") {
      var duration = "instant";
    } else {
      var duration =
        obj.duration[0].duration.amount + " " + obj.duration[0].duration.type;
    }
    if (obj.duration[0].concentration != undefined) {
      var concentration = "Yes";
    } else {
      var concentration = undefined;
    }
    if (obj.savingThrow != undefined) {
      var savingThrow = datacleanse(obj.savingThrow);
    } else {
      var savingThrow = undefined;
    }
    //---------------------------------------------------------------------------------------------------------
    //ENTRIES CODE
    //---------------------------------------------------------------------------------------------------------
    if (obj.classes.fromClassList[0] != undefined) {
      var class0 = obj.classes.fromClassList[0].name;
    } else {
      var class0 = undefined;
    }
    if (obj.classes.fromClassList[1] != undefined) {
      var class1 = obj.classes.fromClassList[1].name;
    } else {
      var class1 = undefined;
    }
    if (obj.classes.fromClassList[2] != undefined) {
      var class2 = obj.classes.fromClassList[2].name;
    } else {
      var class2 = undefined;
    }
    if (obj.classes.fromClassList[3] != undefined) {
      var class3 = obj.classes.fromClassList[3].name;
    } else {
      var class3 = undefined;
    }
    if (obj.classes.fromClassList[4] != undefined) {
      var class4 = obj.classes.fromClassList[4].name;
    } else {
      var class4 = undefined;
    }
    if (obj.classes.fromClassList[5] != undefined) {
      var class5 = obj.classes.fromClassList[5].name;
    } else {
      var class5 = undefined;
    }
    if (obj.classes.fromClassList[6] != undefined) {
      var class6 = obj.classes.fromClassList[6].name;
    } else {
      var class6 = undefined;
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
    if (obj.entriesHigherLevel != undefined) {
      var entriesHigherLevel = datacleanse(obj.entriesHigherLevel[0].entries);
    } else {
      var entriesHigherLevel = undefined;
    }
    //---------------------------------------------------------------------------------------------------------
    //MAPPING CODE
    //---------------------------------------------------------------------------------------------------------
    object["Name-in"] = obj.name;
    object["Type-in"] = checkschool(obj.school);
    object["level-in"] = obj.level;
    object["time-in"] = obj.time[0].number + " " + obj.time[0].unit;
    object["range-in"] = range;
    object["components-in"] = components;
    object["duration-in"] = duration;
    object["concentration-in"] = concentration;
    object["savingThrow-in"] = savingThrow;
    object["class0-in"] = class0;
    object["class1-in"] = class1;
    object["class2-in"] = class2;
    object["class3-in"] = class3;
    object["class4-in"] = class4;
    object["class5-in"] = class5;
    object["class6-in"] = class6;
    object["S0H-in"] = entries0H;
    object["S0D-in"] = entries0D;
    object["S1H-in"] = entries1H;
    object["S1D-in"] = entries1D;
    object["S2H-in"] = entries2H;
    object["S2D-in"] = entries2D;
    object["S3H-in"] = entries3H;
    object["S3D-in"] = entries3D;
    object["S4H-in"] = entries4H;
    object["S4D-in"] = entries4D;
    object["S5H-in"] = entries5H;
    object["S5D-in"] = entries5D;
    object["S6H-in"] = entries6H;
    object["S6D-in"] = entries6D;
    object["S7H-in"] = entries7H;
    object["S7D-in"] = entries7D;
    object["S8H-in"] = entries8H;
    object["S8D-in"] = entries8D;
    object["entriesHigherLevel-in"] = entriesHigherLevel;
    object["Source-in"] = obj["source"];
    object["Page-in"] = obj["page"];
    console.log(object);
    // ---------------------------------------------------------------------------------------------------------
    // Extract File
    // ---------------------------------------------------------------------------------------------------------
    let outputJson = JSON.stringify(object); //turn the object into json
    document.getElementById("spellform").reset();
    const objct = JSON.parse(outputJson);
    for (const prop in objct) {
      console.log(`${objct[prop]}`);
      document.getElementById(`${prop}`).value = `${objct[prop]}`;
    }
    console.warn("Cleric: Summoning Ritual Complete");
  }
}
