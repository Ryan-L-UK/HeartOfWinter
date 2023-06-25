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

    U: "Unaligned",
  };
  checkalignment = lookup[alignment];
  return checkalignment;
}
// ---------------------------------------------------------------------------------------------------------
//IMPORT CREATURE
function fetchData(fileName) {
  console.log(
    "Librarians: Looking in the 'Bestiary' section, for '" + fileName + "'"
  );
  document.getElementById("creatureform").reset();
  console.warn("Cleric: Casting Prestidigitation On Form...");
  fetch("http://localhost:8080/Sources/Creatures/" + fileName + ".json")
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
// ---------------------------------------------------------------------------------------------------------
//IMPORT FROM FILE
async function readText(event) {
  document.getElementById("creatureform").reset();
  console.warn("Cleric: Casting Prestidigitation On Form...");
  const file = event.target.files.item(0);
  const text = await file.text();
  const obj = JSON.parse(text);
  runETL(obj);
}
// ---------------------------------------------------------------------------------------------------------
//EXTRACT TRANSFORM & LOAD
function runETL(obj) {
  //CUSTOM JSON LOADER
  if (obj.customIndicator == "RML") {
    console.warn("Cleric: Summoning Custom Shell");
    console.log(obj);
    for (const prop in obj) {
      console.log(`${obj[prop]}`);
      document.getElementById(`${prop}`).value = `${obj[prop]}`;
    }
    console.warn("Cleric: Summoning Ritual Complete");
  }
  // ---------------------------------------------------------------------------------------------------------
  //JSON CONVERTER
  else {
    console.warn("Cleric: Summoning Converter Shell");
    console.log(obj);
    // ---------------------------------------------------------------------------------------------------------
    if (obj._copy != undefined) {
      alert(
        "This creature has a _copy marker. It data is incomplete, and the load will have failed."
      );
    }
    // ---------------------------------------------------------------------------------------------------------
    var object = {};
    // ---------------------------------------------------------------------------------------------------------
    if (obj.type.type != undefined) {
      var type = obj.type.type;
    } else {
      var type = obj.type;
    }
    if (obj.type.tags != undefined) {
      var tags = obj.type.tags;
    } else {
      var tags = "";
    }
    // ---------------------------------------------------------------------------------------------------------
    if (obj.alignment == undefined) {
      var alignTypeOut = undefined;
    } else if (obj.alignment[0] == "NX") {
      var alignTypeOut = "Any Non-Lawful Alignment";
      var alignClassOut = "";
    } else {
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
    }
    // ---------------------------------------------------------------------------------------------------------
    // CREATURE SPEED
    if (obj.speed == undefined) {
      var walk = undefined;
    } else {
      if (obj.speed.walk >= 0) {
        var walk = "Walk " + obj.speed.walk + " feet";
      } else {
        var walk = "";
      }
      if (obj.speed.fly != undefined) {
        if (obj.speed.fly.number != undefined) {
          var fly =
            ", Fly " +
            obj.speed.fly.number +
            " feet " +
            obj.speed.fly.condition;
        } else if (obj.speed.fly > 0) {
          var fly = ", Fly " + obj.speed.fly + " feet";
        }
      } else {
        var fly = "";
      }
      if (obj.speed.swim > 0) {
        var swim = ", Swim " + obj.speed.swim + " feet";
      } else {
        var swim = "";
      }
      if (obj.speed.burrow > 0) {
        var burrow = ", Burrow " + obj.speed.burrow + " feet";
      } else {
        var burrow = "";
      }
      var rawspeed = walk + fly + swim + burrow;
      if (rawspeed.charAt(0) == ",") {
        var speed = rawspeed.slice(2);
      } else {
        var speed = rawspeed;
      }
    }
    // ---------------------------------------------------------------------------------------------------------
    // CREATURE STATS
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
      var passive = ", passive perception " + obj.passive;
    }
    var sensesOut = senses + passive;
    if (obj.languages == null) {
      var langOut = undefined;
    } else {
      var langOut = datacleanse(obj.languages);
    }
    // ---------------------------------------------------------------------------------------------------------
    // CREATURE TRAITS
    let traitsOut = [];
    var traitsList = obj.trait;
    if (traitsList == undefined) {
      var traitsLength = 0;
    } else {
      var traitsLength = traitsList.length;
    }
    for (var i = 0; i < traitsLength; i++) {
      if (traitsList[i].name != undefined) {
        traitsOut.push({
          name: traitsList[i].name,
          data: datacleanse(obj.trait[i].entries).replace(/\{.*\|0\|/g, ""),
        });
      }
    }

    // ---------------------------------------------------------------------------------------------------------
    // CREATURE ACTIONS

    let actionsOut = [];
    var actionsList = obj.action;

    if (actionsList == undefined) {
      var actionsLength = 0;
    } else {
      var actionsLength = actionsList.length;
    }

    for (var i = 0; i < actionsLength; i++) {
      if (actionsList[i].name != undefined) {
        actionsOut.push({
          name: actionsList[i].name.replace(/\{@r/, "(R").replace(/\}/, ")"),
          data: datacleanse(obj.action[i].entries),
        });
      }
    }

    // ---------------------------------------------------------------------------------------------------------
    // CREATURE REACTIONS

    let reactionsOut = [];
    var reactionsList = obj.reaction;

    if (obj.reaction != undefined) {
      if (reactionsList == undefined) {
        var reactionsLength = 0;
      } else {
        var reactionsLength = reactionsList.length;
      }

      for (var i = 0; i < reactionsLength; i++) {
        if (reactionsList[i].name != undefined) {
          reactionsOut.push({
            name: reactionsList[i].name
              .replace(/\{@r/, "(R")
              .replace(/\}/, ")"),
            data: datacleanse(obj.reaction[i].entries),
          });
        }
      }
    }

    // ---------------------------------------------------------------------------------------------------------
    // CREATURE LEGENDARY ACTIONS

    let LegendaryActionsOut = [];
    var LegendaryActionsList = obj.legendary;

    if (obj.legendary != undefined) {
      if (LegendaryActionsList == undefined) {
        var LegendaryActionsLength = 0;
      } else {
        var LegendaryActionsLength = LegendaryActionsList.length;
      }

      for (var i = 0; i < LegendaryActionsLength; i++) {
        if (LegendaryActionsList[i].name != undefined) {
          LegendaryActionsOut.push({
            name: LegendaryActionsList[i].name
              .replace(/\{@r/, "(R")
              .replace(/\}/, ")"),
            data: datacleanse(obj.legendary[i].entries),
          });
        }
      }
    }

    // ---------------------------------------------------------------------------------------------------------
    if (obj.spellcasting == undefined) {
      console.log("Not A Spellcaster");
    } else {
      var spellArray = obj.spellcasting;
      var I = spellArray.findIndex((item) =>
        item.name.includes("Innate Spellcasting")
      );
      var S = spellArray.findIndex((item) => item.name === "Spellcasting");
      console.log("Innate: " + I);
      console.log("Spellcaster: " + S);
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
        var CasterInnate = rawCasterInnate.slice(1);
      } else {
        var CasterInnate = rawCasterInnate;
      }
    }
    // ---------------------------------------------------------------------------------------------------------
    object["name"] = obj["name"];
    object["size"] = checksize(obj.size);
    object["source"] = obj["source"];
    object["page"] = obj["page"];
    object["type"] = type;
    object["tags"] = tags;
    object["alignment"] = alignTypeOut + " " + alignClassOut;

    if (obj.ac != undefined) {
      if (obj.ac[0].ac != undefined) {
        object["ac"] = obj.ac[0].ac;
      } else {
        object["ac"] = obj.ac[0];
      }
    } else {
      object["ac"] = undefined;
    }

    if (obj.hp != undefined) {
      object["hp"] = obj.hp.average;
    } else {
      object["hp"] = "N/A";
    }

    object["speed"] = speed;
    object["STR"] = obj["str"];
    object["DEX"] = obj["dex"];
    object["CON"] = obj["con"];
    object["INT"] = obj["int"];
    object["WIS"] = obj["wis"];
    object["CHA"] = obj["cha"];
    object["saves"] = saves;
    object["skills"] = skills;
    object["resist"] = resists;
    object["immune"] = immunes;
    object["vulnerable"] = vulnerables;
    object["conditionImmune"] = ConImmune;

    if (sensesOut.charAt(0) == ",") {
      object["senses"] = sensesOut.slice(2);
    } else {
      object["senses"] = sensesOut;
    }

    object["languages"] = langOut;

    if (traitsOut != undefined) {
      var traitsOutLength = traitsOut.length;
      for (var i = 0; i < traitsOutLength; i++) {
        object["T" + [i] + "H"] = traitsOut[i].name;
        object["T" + [i] + "D"] = traitsOut[i].data;
      }
    } else {
      console.warn("ERROR");
      object[T0H] = undefined;
      object[T0D] = undefined;
    }
    if (actionsOut != undefined) {
      var actionsOutLength = actionsOut.length;
      for (var i = 0; i < actionsOutLength; i++) {
        object["A" + [i] + "H"] = actionsOut[i].name;
        object["A" + [i] + "D"] = actionsOut[i].data;
      }
    } else {
      console.warn("ERROR");
      object[A0H] = undefined;
      object[A0D] = undefined;
    }

    if (reactionsOut != undefined) {
      var reactionsOutLength = reactionsOut.length;
      for (var i = 0; i < reactionsOutLength; i++) {
        object["RA" + [i] + "H"] = reactionsOut[i].name;
        object["RA" + [i] + "D"] = reactionsOut[i].data;
      }
    } else {
      console.warn("ERROR");
      object[RA0H] = undefined;
      object[RA0D] = undefined;
    }

    if (LegendaryActionsOut != undefined) {
      var LegendaryActionsOutLength = LegendaryActionsOut.length;
      for (var i = 0; i < LegendaryActionsOutLength; i++) {
        object["LA" + [i] + "H"] = LegendaryActionsOut[i].name;
        object["LA" + [i] + "D"] = LegendaryActionsOut[i].data;
      }
    } else {
      console.warn("ERROR");
      object[LA0H] = undefined;
      object[LA0D] = undefined;
    }

    object["CasterInnate"] = CasterInnate;
    object["innateHeaderEntry"] = headerentryI;
    object["spellHeaderEntry"] = headerentryS;
    object["cantrip"] = cantrips;
    object["lvl1slots"] = lvl1slots;
    object["lvl1spells"] = lvl1spells;
    object["lvl2slots"] = lvl2slots;
    object["lvl2spells"] = lvl2spells;
    object["lvl3slots"] = lvl3slots;
    object["lvl3spells"] = lvl3spells;
    object["lvl4slots"] = lvl4slots;
    object["lvl4spells"] = lvl4spells;
    object["lvl5slots"] = lvl5slots;
    object["lvl5spells"] = lvl5spells;
    object["atWill"] = will;
    object["daily1e"] = daily1e;
    object["daily2e"] = daily2e;
    object["daily3e"] = daily3e;
    object["innateFooterEntry"] = footerentryI;
    object["spellFooterEntry"] = footerentryS;
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
    }
    console.warn("Cleric: Summoning Ritual Complete");
  }
}
