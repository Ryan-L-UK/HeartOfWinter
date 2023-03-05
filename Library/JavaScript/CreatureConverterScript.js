//IMPORT SOURCECODE
async function readTextConvert(event) {
  const file = event.target.files.item(0);
  const text = await file.text();
  const obj = JSON.parse(text);

  console.log(obj);

  var object = {};
  /* ---------------------------------------------------------------------------------------------------------*/
  /* Size Code*/
  /* ---------------------------------------------------------------------------------------------------------*/
  function checksize(size) {
    var checktype = "";
    var lookup = {
      T: "Tiny",
      S: "Small",
      M: "Medium",
      L: "Large",
      H: "Huge",
      G: "Gargantuan",
    };

    checktype = lookup[size];
    sizeOut = checktype;
  }
  checksize(obj.size);

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

  var sizetypeout = sizeOut + " " + type + tags;

  /* ---------------------------------------------------------------------------------------------------------*/
  /* Armour Class Code*/
  /* ---------------------------------------------------------------------------------------------------------*/

  if (obj.ac[0].ac == undefined) {
    var ac = obj.ac[0];
  } else {
    var ac = obj.ac[0].ac;
  }

  if (obj.ac[0].from == undefined) {
    var from = "";
  } else {
    var rawfrom = JSON.stringify(obj.ac[0].from)
      .replace(/\[/g, "")
      .replace(/\]/g, "")
      .replace(/"/g, "")
      .replace(/\{@item /g, "")
      .replace(/\|phb}/g, "")
      .replace(/,/g, ", ");
    console.log(rawfrom);
    var from = " (" + rawfrom + ")";
  }

  /* ---------------------------------------------------------------------------------------------------------*/
  /* Alignment Code*/
  /* ---------------------------------------------------------------------------------------------------------*/
  function checkaligntype(alignment) {
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
    alignTypeOut = checkalignment;
  }
  if (obj.alignment[0] != undefined) {
    checkaligntype(obj.alignment[0]);
  } else {
    alignTypeOut = "";
  }

  function checkalignclass(alignment) {
    var checkalignment = "";
    var lookup = {
      C: "Chaotic",
      T: "True",
      L: "Lawful",
      N: "Neutral",
      G: "Good",
      E: "Evil",
    };

    checkalignment = lookup[alignment];
    alignClassOut = checkalignment;
  }
  if (obj.alignment[1] != undefined) {
    checkalignclass(obj.alignment[1]);
  } else {
    alignClassOut = "";
  }

  /* ---------------------------------------------------------------------------------------------------------*/
  /* Speed Code*/
  /* ---------------------------------------------------------------------------------------------------------*/
  if (obj.speed.walk > 0) {
    var walk = obj.speed.walk + " ft.";
  } else {
    var walk = "";
  }

  if (obj.speed.fly > 0) {
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

  /* ---------------------------------------------------------------------------------------------------------*/
  /* Properties/Skills Code*/
  /* ---------------------------------------------------------------------------------------------------------*/
  if (obj.save == null) {
    var saves = "";
  } else {
    var saves = JSON.stringify(obj.save)

      .replace(/"/g, "")
      .replace(/:/g, "")
      .replace(/\+/g, " +")
      .replace(/,/g, ", ")
      .replace(/\{/g, "")
      .replace(/\}/g, "");
  }

  if (obj.skill == null) {
    var skills = "";
  } else {
    var skills = JSON.stringify(obj.skill)
      .replace(/"/g, "")
      .replace(/:/g, "")
      .replace(/\+/g, " +")
      .replace(/,/g, ", ")
      .replace(/\{/g, "")
      .replace(/\}/g, "");
  }

  if (obj.resist == null) {
    var resists = "";
  } else {
    var resists = JSON.stringify(obj.resist)
      .replace(/"/g, "")
      .replace(/:/g, "")
      .replace(/\+/g, " +")
      .replace(/,/g, ", ")
      .replace(/\{/g, "")
      .replace(/\}/g, "")
      .replace(/\[/, "")
      .replace(/, immune\[/, "; ")
      .replace(/, note/, " ")
      .replace(/, condtrue/, "")
      .replace(/\]/g, "");
  }

  if (obj.immune == null) {
    var immunes = "";
  } else {
    var immunes = JSON.stringify(obj.immune)
      .replace(/"/g, "")
      .replace(/:/g, "")
      .replace(/\+/g, " +")
      .replace(/,/g, ", ")
      .replace(/\{/g, "")
      .replace(/\}/g, "")
      .replace(/\[/, "")
      .replace(/, immune\[/, "; ")
      .replace(/, note/, " ")
      .replace(/, condtrue/, "")
      .replace(/\]/g, "");
  }

  if (obj.vulnerable == null) {
    var vulnerables = "";
  } else {
    var vulnerables = JSON.stringify(obj.vulnerable)
      .replace(/"/g, "")
      .replace(/:/g, "")
      .replace(/\+/g, " +")
      .replace(/,/g, ", ")
      .replace(/\{/g, "")
      .replace(/\}/g, "")
      .replace(/\[/, "")
      .replace(/\]/g, "");
  }

  if (obj.conditionImmune == null) {
    var ConImmune = "";
  } else {
    var ConImmune = JSON.stringify(obj.conditionImmune)
      .replace(/"/g, "")
      .replace(/,/g, ", ")
      .replace(/\[/, "")
      .replace(/\]/g, "");
  }

  if (obj.senses == null) {
    var senses = "";
  } else {
    console.log(JSON.stringify(obj.senses));
    var senses =
      JSON.stringify(obj.senses)
        .replace(/"/g, "")
        .replace(/,/g, ", ")
        .replace(/\[/, "")
        .replace(/\]/g, "") + " ";
    console.log(senses);
  }

  if (obj.passive == null) {
    var passive = "";
  } else {
    var passive = "passive perception " + obj.passive;
  }

  var sensesOut = senses + passive;

  if (obj.languages == null) {
    var langOut = "";
  } else {
    var langOut = JSON.stringify(obj.languages)
      .replace(/"/g, "")
      .replace(/,/g, ", ")
      .replace(/\[/, "")
      .replace(/\]/g, "");
  }

  /* ---------------------------------------------------------------------------------------------------------*/
  /* Traits Code*/
  /* ---------------------------------------------------------------------------------------------------------*/
  if (obj.trait == undefined) {
    console.log("Traits Undefined");
  } else {
    if (obj.trait[0] == null) {
      var T1H = "";
      var T1D = "";
    } else {
      var T1H = obj.trait[0].name;
      var T1D = JSON.stringify(obj.trait[0].entries)
        .replace(/"/g, "")
        .replace(/\[/, "")
        .replace(/\]/g, "")
        .replace(/\\/g, "")
        .replace(/\{@hit/g, "+")
        .replace(/\{@h\}/g, "Hit: ")
        .replace(/\{@damage /g, "")
        .replace(/\{@dice /g, "")
        .replace(/\{@dc/g, "DC")
        .replace(/\{@condition /g, "")
        .replace(/\{@spell /g, "")
        .replace(/\{.*\|0\|/g, "")
        .replace(/\}/g, "");
    }

    if (obj.trait[1] == null) {
      var T2H = "";
      var T2D = "";
    } else {
      var T2H = obj.trait[1].name;
      var T2D = JSON.stringify(obj.trait[1].entries)
        .replace(/"/g, "")
        .replace(/\[/, "")
        .replace(/\]/g, "")
        .replace(/\\/g, "")
        .replace(/\{@hit/g, "+")
        .replace(/\{@h\}/g, "Hit: ")
        .replace(/\{@damage /g, "")
        .replace(/\{@dice /g, "")
        .replace(/\{@dc/g, "DC")
        .replace(/\{@condition /g, "")
        .replace(/\{@spell /g, "")
        .replace(/\{.*\|0\|/g, "")
        .replace(/\}/g, "");
    }

    if (obj.trait[2] == null) {
      var T3H = "";
      var T3D = "";
    } else {
      var T3H = obj.trait[2].name;
      var T3D = JSON.stringify(obj.trait[2].entries)
        .replace(/"/g, "")
        .replace(/\[/, "")
        .replace(/\]/g, "")
        .replace(/\\/g, "")
        .replace(/\{@hit/g, "+")
        .replace(/\{@h\}/g, "Hit: ")
        .replace(/\{@damage /g, "")
        .replace(/\{@dice /g, "")
        .replace(/\{@dc/g, "DC")
        .replace(/\{@condition /g, "")
        .replace(/\{@spell /g, "")
        .replace(/\{.*\|0\|/g, "")
        .replace(/\}/g, "");
    }

    if (obj.trait[3] == null) {
      var T4H = "";
      var T4D = "";
    } else {
      var T4H = obj.trait[3].name;
      var T4D = JSON.stringify(obj.trait[3].entries)
        .replace(/"/g, "")
        .replace(/\[/, "")
        .replace(/\]/g, "")
        .replace(/\\/g, "")
        .replace(/\{@hit/g, "+")
        .replace(/\{@h\}/g, "Hit: ")
        .replace(/\{@damage /g, "")
        .replace(/\{@dice /g, "")
        .replace(/\{@dc/g, "DC")
        .replace(/\{@condition /g, "")
        .replace(/\{@spell /g, "")
        .replace(/\{.*\|0\|/g, "")
        .replace(/\}/g, "");
    }
  }

  /* ---------------------------------------------------------------------------------------------------------*/
  /* Actions Code*/
  /* ---------------------------------------------------------------------------------------------------------*/
  if (obj.action == undefined) {
    console.log("Actions Undefined");
  } else {
    if (obj.action[0] == null) {
      var A1H = "";
      var A1D = "";
    } else {
      var A1H = obj.action[0].name.replace(/\{@r/, "(R").replace(/\}/, ")");
      var A1D = JSON.stringify(obj.action[0].entries)
        .replace(/"/g, "")
        .replace(/\[/, "")
        .replace(/\]/g, "")
        .replace(/\\/g, "")
        .replace(/\{@atk mw\}/g, "Melee Weapon Attack:")
        .replace(/\{@atk rw\}/g, "Ranged Weapon Attack:")
        .replace(/\{@atk mw,rw\}/g, "Melee or Ranged Weapon Attack:")
        .replace(/\{@hit/g, "+")
        .replace(/\{@h\}/g, "Hit: ")
        .replace(/\{@damage /g, "")
        .replace(/\{@dice /g, "")
        .replace(/\{@dc/g, "DC")
        .replace(/\{@condition /g, "")
        .replace(/\{@spell /g, "")
        .replace(/\}/g, "");
    }

    if (obj.action[1] == null) {
      var A2H = "";
      var A2D = "";
    } else {
      var A2H = obj.action[1].name.replace(/\{@r/, "(R").replace(/\}/, ")");
      var A2D = JSON.stringify(obj.action[1].entries)
        .replace(/"/g, "")
        .replace(/\[/, "")
        .replace(/\]/g, "")
        .replace(/\\/g, "")
        .replace(/\{@atk mw\}/g, "Melee Weapon Attack:")
        .replace(/\{@atk rw\}/g, "Ranged Weapon Attack:")
        .replace(/\{@atk mw,rw\}/g, "Melee or Ranged Weapon Attack:")
        .replace(/\{@hit/g, "+")
        .replace(/\{@h\}/g, "Hit: ")
        .replace(/\{@damage /g, "")
        .replace(/\{@dice /g, "")
        .replace(/\{@dc/g, "DC")
        .replace(/\{@condition /g, "")
        .replace(/\{@spell /g, "")
        .replace(/\}/g, "");
    }

    if (obj.action[2] == null) {
      var A3H = "";
      var A3D = "";
    } else {
      var A3H = obj.action[2].name.replace(/\{@r/, "(R").replace(/\}/, ")");
      var A3D = JSON.stringify(obj.action[2].entries)
        .replace(/"/g, "")
        .replace(/\[/, "")
        .replace(/\]/g, "")
        .replace(/\\/g, "")
        .replace(/\{@atk mw\}/g, "Melee Weapon Attack:")
        .replace(/\{@atk rw\}/g, "Ranged Weapon Attack:")
        .replace(/\{@atk mw,rw\}/g, "Melee or Ranged Weapon Attack:")
        .replace(/\{@hit/g, "+")
        .replace(/\{@h\}/g, "Hit: ")
        .replace(/\{@damage /g, "")
        .replace(/\{@dice /g, "")
        .replace(/\{@dc/g, "DC")
        .replace(/\{@condition /g, "")
        .replace(/\{@spell /g, "")
        .replace(/\}/g, "");
    }

    if (obj.action[3] == null) {
      var A4H = "";
      var A4D = "";
    } else {
      var A4H = obj.action[3].name.replace(/\{@r/, "(R").replace(/\}/, ")");
      var A4D = JSON.stringify(obj.action[3].entries)
        .replace(/"/g, "")
        .replace(/\[/, "")
        .replace(/\]/g, "")
        .replace(/\\/g, "")
        .replace(/\{@atk mw\}/g, "Melee Weapon Attack:")
        .replace(/\{@atk rw\}/g, "Ranged Weapon Attack:")
        .replace(/\{@atk mw,rw\}/g, "Melee or Ranged Weapon Attack:")
        .replace(/\{@hit/g, "+")
        .replace(/\{@h\}/g, "Hit: ")
        .replace(/\{@damage /g, "")
        .replace(/\{@dice /g, "")
        .replace(/\{@dc/g, "DC")
        .replace(/\{@condition /g, "")
        .replace(/\{@spell /g, "")
        .replace(/\}/g, "");
    }
    if (obj.action[4] == null) {
      var A5H = "";
      var A5D = "";
    } else {
      var A5H = obj.action[4].name.replace(/\{@r/, "(R").replace(/\}/, ")");
      var A5D = JSON.stringify(obj.action[4].entries)
        .replace(/"/g, "")
        .replace(/\[/, "")
        .replace(/\]/g, "")
        .replace(/\\/g, "")
        .replace(/\{@atk mw\}/g, "Melee Weapon Attack:")
        .replace(/\{@atk rw\}/g, "Ranged Weapon Attack:")
        .replace(/\{@atk mw,rw\}/g, "Melee or Ranged Weapon Attack:")
        .replace(/\{@hit/g, "+")
        .replace(/\{@h\}/g, "Hit: ")
        .replace(/\{@damage /g, "")
        .replace(/\{@dice /g, "")
        .replace(/\{@dc/g, "DC")
        .replace(/\{@condition /g, "")
        .replace(/\{@spell /g, "")
        .replace(/\}/g, "");
    }
  }
  /* ---------------------------------------------------------------------------------------------------------*/
  /* Spells Code*/
  /* ---------------------------------------------------------------------------------------------------------*/

  if (obj.spellcasting == undefined) {
    console.log("not a spell caster");
    var spellcaster = "";
  } else {
    var spellcaster = "on";

    var headerentry = JSON.stringify(obj.spellcasting[0].headerEntries[0])
      .replace(/\{@dc/g, "DC")
      .replace(/\{@hit/g, "+")
      .replace(/\}/g, "")
      .replace(/\"/g, "");
    console.log(headerentry);

    var cantrips = JSON.stringify(obj.spellcasting[0].spells[0].spells)
      .replace(/\{@spell /g, "")
      .replace(/\{@/g, "")
      .replace(/\}/g, "")
      .replace(/\[/, "")
      .replace(/\]/, "")
      .replace(/\|XGE/g, "")
      .replace(/\"/g, "")
      .replace(/,/g, ", ");

    var lvl1slots = JSON.stringify(obj.spellcasting[0].spells[1].slots);
    var lvl1spells = JSON.stringify(obj.spellcasting[0].spells[1].spells)
      .replace(/\{@spell /g, "")
      .replace(/\{@/g, "")
      .replace(/\}/g, "")
      .replace(/\[/, "")
      .replace(/\]/, "")
      .replace(/\|XGE/g, "")
      .replace(/\"/g, "")
      .replace(/,/g, ", ");

    var lvl2slots = JSON.stringify(obj.spellcasting[0].spells[2].slots);
    var lvl2spells = JSON.stringify(obj.spellcasting[0].spells[2].spells)
      .replace(/\{@spell /g, "")
      .replace(/\{@/g, "")
      .replace(/\}/g, "")
      .replace(/\[/, "")
      .replace(/\]/, "")
      .replace(/\|XGE/g, "")
      .replace(/\"/g, "")
      .replace(/,/g, ", ");

    var lvl3slots = JSON.stringify(obj.spellcasting[0].spells[3].slots);
    var lvl3spells = JSON.stringify(obj.spellcasting[0].spells[3].spells)
      .replace(/\{@spell /g, "")
      .replace(/\{@/g, "")
      .replace(/\}/g, "")
      .replace(/\[/, "")
      .replace(/\]/, "")
      .replace(/\|XGE/g, "")
      .replace(/\"/g, "")
      .replace(/,/g, ", ");

    var lvl4slots = JSON.stringify(obj.spellcasting[0].spells[4].slots);
    var lvl4spells = JSON.stringify(obj.spellcasting[0].spells[4].spells)
      .replace(/\{@spell /g, "")
      .replace(/\{@/g, "")
      .replace(/\}/g, "")
      .replace(/\[/, "")
      .replace(/\]/, "")
      .replace(/\|XGE/g, "")
      .replace(/\"/g, "")
      .replace(/,/g, ", ");

    var lvl5slots = JSON.stringify(obj.spellcasting[0].spells[5].slots);
    var lvl5spells = JSON.stringify(obj.spellcasting[0].spells[5].spells)
      .replace(/\{@spell /g, "")
      .replace(/\{@/g, "")
      .replace(/\}/g, "")
      .replace(/\[/, "")
      .replace(/\]/, "")
      .replace(/\|XGE/g, "")
      .replace(/\"/g, "")
      .replace(/,/g, ", ");

    var footerentry = JSON.stringify(obj.spellcasting[0].footerEntries[0])
      .replace(/\{@dc/g, "DC")
      .replace(/\{@hit/g, "+")
      .replace(/\}/g, "")
      .replace(/\"/g, "");
    console.log(footerentry);
  }

  /* ---------------------------------------------------------------------------------------------------------*/
  /* ---------------------------------------------------------------------------------------------------------*/
  /* Mapping Code*/
  /* ---------------------------------------------------------------------------------------------------------*/
  /* ---------------------------------------------------------------------------------------------------------*/

  object["Name-in"] = obj["name"];
  object["Type-in"] = sizetypeout;
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
  object["spellcasting"] = spellcaster;

  object["headerentry-in"] = headerentry;
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
  object["footerentry-in"] = footerentry;

  console.log(object);

  /* ---------------------------------------------------------------------------------------------------------*/
  /* ---------------------------------------------------------------------------------------------------------*/
  /* Extract File*/
  /* ---------------------------------------------------------------------------------------------------------*/
  /* ---------------------------------------------------------------------------------------------------------*/

  let outputJson = JSON.stringify(object); //turn the object into json

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
}
