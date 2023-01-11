function showInput() {
  document.getElementById("MName_output").innerHTML =
    document.getElementById("MName_input").value;

  var MVarTypeAlign =
    document.getElementById("MType_input").value +
    "," +
    " " +
    document.getElementById("MAlign_input").value;
  document.getElementById("MTypeAlign_output").innerHTML = MVarTypeAlign;

  document.getElementById("AC_output").innerHTML =
    document.getElementById("AC_input").value;
  document.getElementById("HP_output").innerHTML =
    document.getElementById("HP_input").value;
  document.getElementById("FT_output").innerHTML =
    document.getElementById("FT_input").value;

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

  checkstatrole(document.getElementById("STR_input").value);
  document.getElementById("STR_output").innerHTML = StatOut;

  checkstatrole(document.getElementById("DEX_input").value);
  document.getElementById("DEX_output").innerHTML = StatOut;

  checkstatrole(document.getElementById("CON_input").value);
  document.getElementById("CON_output").innerHTML = StatOut;

  checkstatrole(document.getElementById("INT_input").value);
  document.getElementById("INT_output").innerHTML = StatOut;

  checkstatrole(document.getElementById("WIS_input").value);
  document.getElementById("WIS_output").innerHTML = StatOut;

  checkstatrole(document.getElementById("CHA_input").value);
  document.getElementById("CHA_output").innerHTML = StatOut;

  let skillsoutput = document.getElementById("Skills_input").value;
  if (skillsoutput != "") {
    console.log("Skills contains DATA");
    document.getElementById("SkillsH_output").innerHTML = "Skills:";
  } else {
    console.log("Skills is NULL");
    document.getElementById("SkillsH_output").innerHTML = "";
  }

  let resistoutput = document.getElementById("DmgResist_input").value;
  if (resistoutput != "") {
    console.log("Damage Resistances contains DATA");
    document.getElementById("DmgResistH_output").innerHTML =
      "Damage Resistances:";
  } else {
    console.log("Damage Resistances is NULL");
    document.getElementById("DmgResistH_output").innerHTML = "";
  }

  let immuneoutput = document.getElementById("DmgImmune_input").value;
  if (immuneoutput != "") {
    console.log("Damage Immunities contains DATA");
    document.getElementById("DmgImmuneH_output").innerHTML =
      "Damage Immunities:";
  } else {
    console.log("Damage Immunities is NULL");
    document.getElementById("DmgImmuneH_output").innerHTML = "";
  }

  let vulnoutput = document.getElementById("DmgVuln_input").value;
  if (vulnoutput != "") {
    console.log("Damage Vulnerabilities contains DATA");
    document.getElementById("DmgVulnH_output").innerHTML =
      "Damage Vulnerabilities:";
  } else {
    console.log("Damage Vulnerabilities is NULL");
    document.getElementById("DmgVulnH_output").innerHTML = "";
  }
  let condoutput = document.getElementById("ConImmune_input").value;
  if (condoutput != "") {
    console.log("Condition Immunities contains DATA");
    document.getElementById("ConImmuneH_output").innerHTML =
      "Condition Immunities:";
  } else {
    console.log("Condition Immunities is NULL");
    document.getElementById("ConImmuneH_output").innerHTML = "";
  }

  let Sensesoutput = document.getElementById("Senses_input").value;
  if (Sensesoutput != "") {
    console.log("Senses contains DATA");
    document.getElementById("SensesH_output").innerHTML = "Senses:";
  } else {
    console.log("Senses is NULL");
    document.getElementById("SensesH_output").innerHTML = "";
  }

  let Langoutput = document.getElementById("Lang_input").value;
  if (Langoutput != "") {
    console.log("Languages contains DATA");
    document.getElementById("LangH_output").innerHTML = "Languages:";
  } else {
    console.log("Languages is NULL");
    document.getElementById("LangH_output").innerHTML = "";
  }

  document.getElementById("Skills_output").innerHTML =
    document.getElementById("Skills_input").value;
  document.getElementById("DmgImmune_output").innerHTML =
    document.getElementById("DmgImmune_input").value;
  document.getElementById("DmgResist_output").innerHTML =
    document.getElementById("DmgResist_input").value;
  document.getElementById("DmgVuln_output").innerHTML =
    document.getElementById("DmgVuln_input").value;
  document.getElementById("ConImmune_output").innerHTML =
    document.getElementById("ConImmune_input").value;
  document.getElementById("Senses_output").innerHTML =
    document.getElementById("Senses_input").value;
  document.getElementById("Lang_output").innerHTML =
    document.getElementById("Lang_input").value;

  document.getElementById("T1H_output").innerHTML =
    document.getElementById("T1H_input").value;
  document.getElementById("T1D_output").innerHTML =
    document.getElementById("T1D_input").value;
  document.getElementById("T2H_output").innerHTML =
    document.getElementById("T2H_input").value;
  document.getElementById("T2D_output").innerHTML =
    document.getElementById("T2D_input").value;
  document.getElementById("T3H_output").innerHTML =
    document.getElementById("T3H_input").value;
  document.getElementById("T3D_output").innerHTML =
    document.getElementById("T3D_input").value;
  document.getElementById("T4H_output").innerHTML =
    document.getElementById("T4H_input").value;
  document.getElementById("T4D_output").innerHTML =
    document.getElementById("T4D_input").value;

  document.getElementById("Atk1H_output").innerHTML =
    document.getElementById("Atk1H_input").value;
  document.getElementById("Atk1D_output").innerHTML =
    document.getElementById("Atk1D_input").value;
  document.getElementById("Atk2H_output").innerHTML =
    document.getElementById("Atk2H_input").value;
  document.getElementById("Atk2D_output").innerHTML =
    document.getElementById("Atk2D_input").value;
  document.getElementById("Atk3H_output").innerHTML =
    document.getElementById("Atk3H_input").value;
  document.getElementById("Atk3D_output").innerHTML =
    document.getElementById("Atk3D_input").value;
  document.getElementById("Atk4H_output").innerHTML =
    document.getElementById("Atk4H_input").value;
  document.getElementById("Atk4D_output").innerHTML =
    document.getElementById("Atk4D_input").value;
}
