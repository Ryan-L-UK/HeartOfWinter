// ---------------------------------------------------------------------------------------------------------
//FUNCTION CHECK SIZE
function checksize(size) {
  var checksize = "";
  var lookup = {
    T: "Tiny",
    S: "Small",
    M: "Medium",
    L: "Large",
    H: "Huge",
    G: "Gargantuan",
  };
  checksize = lookup[size];
  return checksize;
}
// ---------------------------------------------------------------------------------------------------------
//FUNCTION CHECK ALLIGNMENT
function checkalignment(alignment) {
  var checkalignment = "";
  var lookup = {
    C: "Chaotic",
    T: "True",
    L: "Lawful",
    N: "Neutral",
    G: "Good",
    E: "Evil",
    A: "Any Alignment",
  };
  checkalignment = lookup[alignment];
  return checkalignment;
}
// ---------------------------------------------------------------------------------------------------------
//IMPORT SOURCECODE
async function readText(event) {
  document.getElementById("creatureform").reset();
  console.warn("Cleric: Casting Prestidigitation On Form...");
  const file = event.target.files.item(0);
  const text = await file.text();
  const obj = JSON.parse(text);
  // ---------------------------------------------------------------------------------------------------------
  //CUSTOM JSON LOADER
  if (obj.cr == undefined) {
    console.warn("Cleric: Summoning Custom Shell");
    console.log(obj);
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
    console.warn("Cleric: Summoning Ritual Complete");
  }
  // ---------------------------------------------------------------------------------------------------------
  //JSON CONVERTER
  else {
    console.warn("Cleric: Summoning Converter Shell");
    console.log(obj);
    var object = {};
    // ---------------------------------------------------------------------------------------------------------
    if (obj.type.type == undefined) {
      var type = obj.type;
    } else {
      var type = obj.type.type;
    }
    if (obj.type.tags == undefined) {
      var tags = "";
    } else {
      var tags = " (" + obj.type.tags + ")";
    }
    var typetag = type + tags;
    // ---------------------------------------------------------------------------------------------------------
    if (obj.ac[0].ac == undefined) {
      var ac = obj.ac[0];
    } else {
      var ac = obj.ac[0].ac;
    }
    if (obj.ac[0].from == undefined) {
      var from = "";
    } else {
      var from = " (" + datacleanse(obj.ac[0].from) + ")";
    }
    // ---------------------------------------------------------------------------------------------------------
    if (obj.alignment[0] != undefined) {
      var alignTypeOut = checkalignment(obj.alignment[0]);
    } else {
      var alignTypeOut = "";
    }
    if (obj.alignment[1] != undefined) {
      var alignClassOut = checkalignment(obj.alignment[1]);
    } else {
      var alignClassOut = "";
    }
    // ---------------------------------------------------------------------------------------------------------
    if (obj.speed.walk >= 0) {
      var walk = obj.speed.walk + " ft.";
    } else {
      var walk = "";
    }

    if (obj.speed.fly.number != undefined) {
      var fly =
        ", fly " + obj.speed.fly.number + " ft. " + obj.speed.fly.condition;
    } else if (obj.speed.fly > 0) {
      var fly = ", fly " + obj.speed.fly + " ft.";
    } else {
      var fly = "";
    }
    if (obj.speed.swim > 0) {
      var swim = ", swim " + obj.speed.swim + " ft.";
    } else {
      var swim = "";
    }
    if (obj.speed.burrow > 0) {
      var burrow = ", burrow " + obj.speed.burrow + " ft.";
    } else {
      var burrow = "";
    }
    var rawspeed = walk + fly + swim + burrow;
    if (rawspeed.charAt(0) == ",") {
      var speed = rawspeed.slice(2);
    } else {
      var speed = rawspeed;
    }
    // ---------------------------------------------------------------------------------------------------------
    if (obj.save == null) {
      var saves = undefined;
    } else {
      var saves = datacleanse(obj.save);
    }
    if (obj.skill == null) {
      var skills = undefined;
    } else {
      var skills = datacleanse(obj.skill);
    }
    if (obj.resist == null) {
      var resists = undefined;
    } else {
      var resists = datacleanse(obj.resist);
    }
    if (obj.immune == null) {
      var immunes = undefined;
    } else {
      var immunes = datacleanse(obj.immune);
    }
    if (obj.vulnerable == null) {
      var vulnerables = undefined;
    } else {
      var vulnerables = datacleanse(obj.vulnerable);
    }
    if (obj.conditionImmune == null) {
      var ConImmune = undefined;
    } else {
      var ConImmune = datacleanse(obj.conditionImmune);
    }
    if (obj.senses == null) {
      var senses = "";
    } else {
      var senses = datacleanse(obj.senses);
    }
    if (obj.passive == null) {
      var passive = "";
    } else {
      var passive = "passive perception " + obj.passive;
    }
    var sensesOut = senses + passive;
    if (obj.languages == null) {
      var langOut = undefined;
    } else {
      var langOut = datacleanse(obj.languages);
    }
    // ---------------------------------------------------------------------------------------------------------
    if (obj.trait == undefined) {
      console.log("Traits Undefined");
    } else {
      if (obj.trait[0] == null) {
        var T1H = undefined;
        var T1D = undefined;
      } else {
        var T1H = obj.trait[0].name;
        var T1D = datacleanse(obj.trait[0].entries).replace(/\{.*\|0\|/g, "");
      }
      if (obj.trait[1] == null) {
        var T2H = undefined;
        var T2D = undefined;
      } else {
        var T2H = obj.trait[1].name;
        var T2D = datacleanse(obj.trait[1].entries).replace(/\{.*\|0\|/g, "");
      }
      if (obj.trait[2] == null) {
        var T3H = undefined;
        var T3D = undefined;
      } else {
        var T3H = obj.trait[2].name;
        var T3D = datacleanse(obj.trait[2].entries).replace(/\{.*\|0\|/g, "");
      }
      if (obj.trait[3] == null) {
        var T4H = undefined;
        var T4D = undefined;
      } else {
        var T4H = obj.trait[3].name;
        var T4D = datacleanse(obj.trait[3].entries).replace(/\{.*\|0\|/g, "");
      }
    }
    // ---------------------------------------------------------------------------------------------------------
    if (obj.action == undefined) {
      console.log("Actions Undefined");
    } else {
      if (obj.action[0] == null) {
        var A1H = undefined;
        var A1D = undefined;
      } else {
        var A1H = obj.action[0].name.replace(/\{@r/, "(R").replace(/\}/, ")");
        var A1D = datacleanse(obj.action[0].entries);
      }
      if (obj.action[1] == null) {
        var A2H = undefined;
        var A2D = undefined;
      } else {
        var A2H = obj.action[1].name.replace(/\{@r/, "(R").replace(/\}/, ")");
        var A2D = datacleanse(obj.action[1].entries);
      }
      if (obj.action[2] == null) {
        var A3H = undefined;
        var A3D = undefined;
      } else {
        var A3H = obj.action[2].name.replace(/\{@r/, "(R").replace(/\}/, ")");
        var A3D = datacleanse(obj.action[2].entries);
      }
      if (obj.action[3] == null) {
        var A4H = undefined;
        var A4D = undefined;
      } else {
        var A4H = obj.action[3].name.replace(/\{@r/, "(R").replace(/\}/, ")");
        var A4D = datacleanse(obj.action[3].entries);
      }
      if (obj.action[4] == null) {
        var A5H = undefined;
        var A5D = undefined;
      } else {
        var A5H = obj.action[4].name.replace(/\{@r/, "(R").replace(/\}/, ")");
        var A5D = datacleanse(obj.action[4].entries);
      }
    }
    // ---------------------------------------------------------------------------------------------------------
    if (obj.spellcasting == undefined) {
      console.log("Not A Spellcaster");
    } else {
      var spellArray = obj.spellcasting;
      var I = spellArray.findIndex(
        (item) => item.name === "Innate Spellcasting"
      );
      var S = spellArray.findIndex((item) => item.name === "Spellcasting");
      console.log(I);
      console.log(S);
      if (I >= 0) {
        console.log("Innate Spellcaster");
        var Innate = "/Innate";
        var headerentryI = datacleanse(obj.spellcasting[I].headerEntries[0]);
        if (obj.spellcasting[I].will != undefined) {
          var will = datacleanse(obj.spellcasting[I].will);
        }
        if (obj.spellcasting[I].daily["1e"] != undefined) {
          var daily1e = datacleanse(obj.spellcasting[I].daily["1e"]);
        }
        if (obj.spellcasting[I].daily["2e"] != undefined) {
          var daily2e = datacleanse(obj.spellcasting[I].daily["2e"]);
        }
        if (obj.spellcasting[I].daily["3e"] != undefined) {
          var daily3e = datacleanse(obj.spellcasting[I].daily["3e"]);
        }
        if (obj.spellcasting[I].footerEntries != undefined) {
          var footerentryI = datacleanse(obj.spellcasting[I].footerEntries[0]);
        }
      } else {
        var Innate = "";
      }
      if (S >= 0) {
        console.log("Spellcaster");
        var Caster = "Spellcaster";
        var headerentryS = datacleanse(obj.spellcasting[S].headerEntries[0]);
        if (obj.spellcasting[S].spells[0].spells != undefined) {
          var cantrips = datacleanse(obj.spellcasting[S].spells[0].spells);
        }
        if (obj.spellcasting[S].spells[1] != undefined) {
          var lvl1slots = JSON.stringify(obj.spellcasting[S].spells[1].slots);
          var lvl1spells = datacleanse(obj.spellcasting[S].spells[1].spells);
        }
        if (obj.spellcasting[S].spells[2] != undefined) {
          var lvl2slots = JSON.stringify(obj.spellcasting[S].spells[2].slots);
          var lvl2spells = datacleanse(obj.spellcasting[S].spells[2].spells);
        }
        if (obj.spellcasting[S].spells[3] != undefined) {
          var lvl3slots = JSON.stringify(obj.spellcasting[S].spells[3].slots);
          var lvl3spells = datacleanse(obj.spellcasting[S].spells[3].spells);
        }
        if (obj.spellcasting[S].spells[4] != undefined) {
          var lvl4slots = JSON.stringify(obj.spellcasting[S].spells[4].slots);
          var lvl4spells = datacleanse(obj.spellcasting[S].spells[4].spells);
        }
        if (obj.spellcasting[S].spells[5] != undefined) {
          var lvl5slots = JSON.stringify(obj.spellcasting[S].spells[5].slots);
          var lvl5spells = datacleanse(obj.spellcasting[S].spells[5].spells);
        }
        if (obj.spellcasting[S].footerEntries != undefined) {
          var footerentryS = datacleanse(obj.spellcasting[S].footerEntries[0]);
        }
      } else {
        var Caster = "";
      }
      var rawCasterInnate = Caster + Innate;
      if (rawCasterInnate.charAt(0) == "/") {
        var CasterInnate = rawCasterInnate.slice(2);
      } else {
        var CasterInnate = rawCasterInnate;
      }
    }
    // ---------------------------------------------------------------------------------------------------------
    object["Name-in"] = obj["name"];
    object["Size-in"] = checksize(obj.size);
    object["Type-in"] = typetag;
    object["Alignment-in"] = alignTypeOut + " " + alignClassOut;
    object["AC-in"] = ac + from;
    object["HP-in"] = obj.hp.average + " (" + obj.hp.formula + ")";
    object["FT-in"] = speed;
    object["STR-in"] = obj["str"];
    object["DEX-in"] = obj["dex"];
    object["CON-in"] = obj["con"];
    object["INT-in"] = obj["int"];
    object["WIS-in"] = obj["wis"];
    object["CHA-in"] = obj["cha"];
    object["Saves-in"] = saves;
    object["Skills-in"] = skills;
    object["Resist-in"] = resists;
    object["Immune-in"] = immunes;
    object["Vulnerable-in"] = vulnerables;
    object["conditionImmune-in"] = ConImmune;
    object["Senses-in"] = sensesOut;
    object["languages-in"] = langOut;
    object["T1H-in"] = T1H;
    object["T1D-in"] = T1D;
    object["T2H-in"] = T2H;
    object["T2D-in"] = T2D;
    object["T3H-in"] = T3H;
    object["T3D-in"] = T3D;
    object["T4H-in"] = T4H;
    object["T4D-in"] = T4D;
    object["A1H-in"] = A1H;
    object["A1D-in"] = A1D;
    object["A2H-in"] = A2H;
    object["A2D-in"] = A2D;
    object["A3H-in"] = A3H;
    object["A3D-in"] = A3D;
    object["A4H-in"] = A4H;
    object["A4D-in"] = A4D;
    object["A5H-in"] = A5H;
    object["A5D-in"] = A5D;
    object["CasterInnate-in"] = CasterInnate;
    object["innateheaderentry-in"] = headerentryI;
    object["spellheaderentry-in"] = headerentryS;
    object["cantrip-in"] = cantrips;
    object["lvl1slots-in"] = lvl1slots;
    object["lvl1spells-in"] = lvl1spells;
    object["lvl2slots-in"] = lvl2slots;
    object["lvl2spells-in"] = lvl2spells;
    object["lvl3slots-in"] = lvl3slots;
    object["lvl3spells-in"] = lvl3spells;
    object["lvl4slots-in"] = lvl4slots;
    object["lvl4spells-in"] = lvl4spells;
    object["lvl5slots-in"] = lvl5slots;
    object["lvl5spells-in"] = lvl5spells;
    object["atwill-in"] = will;
    object["daily1e-in"] = daily1e;
    object["daily2e-in"] = daily2e;
    object["daily3e-in"] = daily3e;
    object["innatefooterentry-in"] = footerentryI;
    object["spellfooterentry-in"] = footerentryS;
    console.log(object);
    // ---------------------------------------------------------------------------------------------------------
    // Extract File
    // ---------------------------------------------------------------------------------------------------------
    let outputJson = JSON.stringify(object);
    document.getElementById("creatureform").reset();
    const objct = JSON.parse(outputJson);
    for (const prop in objct) {
      console.log(`${objct[prop]}`);
      document.getElementById(`${prop}`).value = `${objct[prop]}`;
      if (`${objct[prop]}` == "on") {
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
    console.warn("Cleric: Summoning Ritual Complete");
  }
}
