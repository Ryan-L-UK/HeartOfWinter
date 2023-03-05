function showInput() {
  var checkBox1 = "";

  document.getElementById("Name-out").innerHTML =
    document.getElementById("Name-in").value;

  var TypeAlign =
    document.getElementById("Type-in").value +
    "," +
    " " +
    document.getElementById("Alignment-in").value;
  document.getElementById("TypeAlign-out").innerHTML = TypeAlign;

  document.getElementById("AC-out").innerHTML =
    document.getElementById("AC-in").value;
  document.getElementById("HP-out").innerHTML =
    document.getElementById("HP-in").value;
  document.getElementById("FT-out").innerHTML =
    document.getElementById("FT-in").value;

  function checkstatrole(modifier) {
    var checkresult = "";
    var lookup = {
      "": "Error",
      1: "1 (-5)",
      2: "2 (-4)",
      3: "3 (-4)",
      4: "4 (-3)",
      5: "5 (-3)",
      6: "6 (-2)",
      7: "7 (-2)",
      8: "8 (-1)",
      9: "9 (-1)",
      10: "10 (+0)",
      11: "11 (+0)",
      12: "12 (+1)",
      13: "13 (+1)",
      14: "14 (+2)",
      15: "15 (+2)",
      16: "16 (+3)",
      17: "17 (+3)",
      18: "18 (+4)",
      19: "19 (+4)",
      20: "20 (+5)",
      21: "21 (+5)",
      22: "22 (+6)",
      23: "23 (+6)",
      24: "24 (+7)",
      25: "25 (+7)",
      26: "26 (+8)",
      27: "27 (+8)",
      28: "28 (+9)",
      29: "29 (+9)",
      30: "30 (+10)",
    };
    checkresult = lookup[modifier];
    console.log(checkresult);
    StatOut = checkresult;
  }

  checkstatrole(document.getElementById("STR-in").value);
  document.getElementById("STR-out").innerHTML = StatOut;

  checkstatrole(document.getElementById("DEX-in").value);
  document.getElementById("DEX-out").innerHTML = StatOut;

  checkstatrole(document.getElementById("CON-in").value);
  document.getElementById("CON-out").innerHTML = StatOut;

  checkstatrole(document.getElementById("INT-in").value);
  document.getElementById("INT-out").innerHTML = StatOut;

  checkstatrole(document.getElementById("WIS-in").value);
  document.getElementById("WIS-out").innerHTML = StatOut;

  checkstatrole(document.getElementById("CHA-in").value);
  document.getElementById("CHA-out").innerHTML = StatOut;

  let savesoutput = document.getElementById("Saves-in").value;
  if (savesoutput != "") {
    console.log("Saves contains DATA");
    document.getElementById("SavesH-out").innerHTML = "Saving Throws:";
  } else {
    console.log("Saves is NULL");
    document.getElementById("SavesH-out").innerHTML = "";
  }

  let skillsoutput = document.getElementById("Skills-in").value;
  if (skillsoutput != "") {
    console.log("Skills contains DATA");
    document.getElementById("SkillsH-out").innerHTML = "Skills:";
  } else {
    console.log("Skills is NULL");
    document.getElementById("SkillsH-out").innerHTML = "";
  }

  let resistoutput = document.getElementById("Resist-in").value;
  if (resistoutput != "") {
    console.log("Damage Resistances contains DATA");
    document.getElementById("ResistH-out").innerHTML = "Damage Resistances:";
  } else {
    console.log("Damage Resistances is NULL");
    document.getElementById("ResistH-out").innerHTML = "";
  }

  let immuneoutput = document.getElementById("Immune-in").value;
  if (immuneoutput != "") {
    console.log("Damage Immunities contains DATA");
    document.getElementById("ImmuneH-out").innerHTML = "Damage Immunities:";
  } else {
    console.log("Damage Immunities is NULL");
    document.getElementById("ImmuneH-out").innerHTML = "";
  }

  let vulnoutput = document.getElementById("Vulnerable-in").value;
  if (vulnoutput != "") {
    console.log("Damage Vulnerabilities contains DATA");
    document.getElementById("VulnerableH-out").innerHTML =
      "Damage Vulnerabilities:";
  } else {
    console.log("Damage Vulnerabilities is NULL");
    document.getElementById("VulnerableH-out").innerHTML = "";
  }
  let condoutput = document.getElementById("conditionImmune-in").value;
  if (condoutput != "") {
    console.log("Condition Immunities contains DATA");
    document.getElementById("conditionImmuneH-out").innerHTML =
      "Condition Immunities:";
  } else {
    console.log("Condition Immunities is NULL");
    document.getElementById("conditionImmuneH-out").innerHTML = "";
  }

  let Sensesoutput = document.getElementById("Senses-in").value;
  if (Sensesoutput != "") {
    console.log("Senses contains DATA");
    document.getElementById("SensesH-out").innerHTML = "Senses:";
  } else {
    console.log("Senses is NULL");
    document.getElementById("SensesH-out").innerHTML = "";
  }

  let Langoutput = document.getElementById("languages-in").value;
  if (Langoutput != "") {
    console.log("Languages contains DATA");
    document.getElementById("languagesH-out").innerHTML = "Languages:";
  } else {
    console.log("Languages is NULL");
    document.getElementById("languagesH-out").innerHTML = "";
  }

  document.getElementById("Saves-out").innerHTML =
    document.getElementById("Saves-in").value;
  document.getElementById("Skills-out").innerHTML =
    document.getElementById("Skills-in").value;
  document.getElementById("Immune-out").innerHTML =
    document.getElementById("Immune-in").value;
  document.getElementById("Resist-out").innerHTML =
    document.getElementById("Resist-in").value;
  document.getElementById("Vulnerable-out").innerHTML =
    document.getElementById("Vulnerable-in").value;
  document.getElementById("conditionImmune-out").innerHTML =
    document.getElementById("conditionImmune-in").value;
  document.getElementById("Senses-out").innerHTML =
    document.getElementById("Senses-in").value;
  document.getElementById("languages-out").innerHTML =
    document.getElementById("languages-in").value;

  var checkBox1 = document.getElementById("spellcasting");

  if (checkBox1.checked == true) {
    if (document.getElementById("CasterInnate-in").value == "Spellcaster") {
      document.getElementById("CasterInnateH-out").innerHTML = "Spellcasting.";
    } else {
      document.getElementById("CasterInnateH-out").innerHTML = "Innate.";
    }

    document.getElementById("headerentry-out").innerHTML =
      document.getElementById("headerentry-in").value;

    if (document.getElementById("cantrip-in").value != "") {
      document.getElementById("CantripH-out").innerHTML =
        "Cantrips (at will): ";
      document.getElementById("cantrip-out").innerHTML =
        document.getElementById("cantrip-in").value;
    }

    if (document.getElementById("lvl1slots-in").value > 0) {
      document.getElementById("lvl1spellsH").innerHTML =
        "1st Level (" +
        document.getElementById("lvl1slots-in").value +
        " slots): ";
      document.getElementById("lvl1spells-out").innerHTML =
        document.getElementById("lvl1spells-in").value;
    }

    if (document.getElementById("lvl2slots-in").value > 0) {
      document.getElementById("lvl2spellsH").innerHTML =
        "2nd Level (" +
        document.getElementById("lvl2slots-in").value +
        " slots): ";
      document.getElementById("lvl2spells-out").innerHTML =
        document.getElementById("lvl2spells-in").value;
    }

    if (document.getElementById("lvl3slots-in").value > 0) {
      document.getElementById("lvl3spellsH").innerHTML =
        "3rd Level (" +
        document.getElementById("lvl3slots-in").value +
        " slots): ";
      document.getElementById("lvl3spells-out").innerHTML =
        document.getElementById("lvl3spells-in").value;
    }

    if (document.getElementById("lvl4slots-in").value > 0) {
      document.getElementById("lvl4spellsH").innerHTML =
        "4th Level (" +
        document.getElementById("lvl4slots-in").value +
        " slots): ";
      document.getElementById("lvl4spells-out").innerHTML =
        document.getElementById("lvl4spells-in").value;
    }

    if (document.getElementById("lvl5slots-in").value > 0) {
      document.getElementById("lvl5spellsH").innerHTML =
        "5th Level (" +
        document.getElementById("lvl5slots-in").value +
        " slots): ";
      document.getElementById("lvl5spells-out").innerHTML =
        document.getElementById("lvl5spells-in").value;
    }

    if (document.getElementById("footerentry-in").value != null) {
      document.getElementById("footerentry-out").innerHTML =
        document.getElementById("footerentry-in").value;
    }
  } else {
    document.getElementById("CasterInnateH-out").innerHTML = "";
    var casterdesc = "";
    document.getElementById("headerentry-out").innerHTML = casterdesc;

    console.log("Creature has no spell casting abilities");
  }

  document.getElementById("T1H-out").innerHTML =
    document.getElementById("T1H-in").value;
  document.getElementById("T1D-out").innerHTML =
    document.getElementById("T1D-in").value;
  document.getElementById("T2H-out").innerHTML =
    document.getElementById("T2H-in").value;
  document.getElementById("T2D-out").innerHTML =
    document.getElementById("T2D-in").value;
  document.getElementById("T3H-out").innerHTML =
    document.getElementById("T3H-in").value;
  document.getElementById("T3D-out").innerHTML =
    document.getElementById("T3D-in").value;
  document.getElementById("T4H-out").innerHTML =
    document.getElementById("T4H-in").value;
  document.getElementById("T4D-out").innerHTML =
    document.getElementById("T4D-in").value;

  document.getElementById("A1H-out").innerHTML =
    document.getElementById("A1H-in").value;
  document.getElementById("A1D-out").innerHTML =
    document.getElementById("A1D-in").value;
  document.getElementById("A2H-out").innerHTML =
    document.getElementById("A2H-in").value;
  document.getElementById("A2D-out").innerHTML =
    document.getElementById("A2D-in").value;
  document.getElementById("A3H-out").innerHTML =
    document.getElementById("A3H-in").value;
  document.getElementById("A3D-out").innerHTML =
    document.getElementById("A3D-in").value;
  document.getElementById("A4H-out").innerHTML =
    document.getElementById("A4H-in").value;
  document.getElementById("A4D-out").innerHTML =
    document.getElementById("A4D-in").value;
  document.getElementById("A5H-out").innerHTML =
    document.getElementById("A5H-in").value;
  document.getElementById("A5D-out").innerHTML =
    document.getElementById("A5D-in").value;
}

//EXPORT SOURCE CODE
document.getElementById("form-submit").addEventListener("click", (event) => {
  var form = new FormData(document.getElementById("creatureform")); //loads the document into a form object based on it being the parent of the button (button is the div here because i'm lazy)
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
  var filename = document.getElementById("Name-in").value;

  hiddenElement.href = "data:attachment/text," + encodeURI(outputJson);
  hiddenElement.target = "_blank";
  hiddenElement.download = filename + ".creature";
  hiddenElement.click();
});

//IMPORT SOURCECODE
async function readText(event) {
  document.getElementById("creatureform").reset();
  const file = event.target.files.item(0);
  const text = await file.text();
  const obj = JSON.parse(text);

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
}

//EXPAND SPELLS
const selectElement = document.getElementById("spellcasting");

selectElement.addEventListener("change", () => {
  console.log("A Powerful Magic User...");
  var x = document.getElementById("spell-list");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});
