function showInput() {
  document.getElementById("SName_output").innerHTML =
    document.getElementById("SName_input").value;

  function checklevel(lvl) {
    var checkresult = "";
    var lookup = {
      "": "Error",
      0: "cantrip",
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
    checkresult = lookup[lvl];
    console.log(checkresult);
    LvlOut = checkresult;
  }

  checklevel(document.getElementById("SL_input").value);

  var SVarLvlType =
    LvlOut + " " + "-" + " " + document.getElementById("SType_input").value;
  document.getElementById("SLvlType_output").innerHTML = SVarLvlType;

  document.getElementById("CT_output").innerHTML =
    document.getElementById("CT_input").value;

  document.getElementById("Range_output").innerHTML =
    document.getElementById("Range_input").value;

  document.getElementById("Comp_output").innerHTML =
    document.getElementById("Comp_input").value;

  document.getElementById("Dur_output").innerHTML =
    document.getElementById("Dur_input").value;

  document.getElementById("P1D_output").innerHTML =
    document.getElementById("P1D_input").value;

  document.getElementById("P2D_output").innerHTML =
    document.getElementById("P2D_input").value;

  document.getElementById("P3D_output").innerHTML =
    document.getElementById("P3D_input").value;

  document.getElementById("P4D_output").innerHTML =
    document.getElementById("P4D_input").value;

  let output = document.getElementById("HL1D_input").value;
  if (output != "") {
    console.log("At higher levels contains DATA");
    document.getElementById("HL1H_output").innerHTML = "At Higher Levels:";
  } else {
    console.log("At higher levels is NULL");
    document.getElementById("HL1H_output").innerHTML = "";
  }

  document.getElementById("HL1D_output").innerHTML =
    document.getElementById("HL1D_input").value;

  document.getElementById("Class1_output").innerHTML =
    document.getElementById("Class1_input").value;
  document.getElementById("Class2_output").innerHTML =
    document.getElementById("Class2_input").value;
  document.getElementById("Class3_output").innerHTML =
    document.getElementById("Class3_input").value;
  document.getElementById("Class4_output").innerHTML =
    document.getElementById("Class4_input").value;
  document.getElementById("Class5_output").innerHTML =
    document.getElementById("Class5_input").value;
  document.getElementById("Class6_output").innerHTML =
    document.getElementById("Class6_input").value;
  document.getElementById("Class7_output").innerHTML =
    document.getElementById("Class7_input").value;
  document.getElementById("Source_output").innerHTML =
    document.getElementById("Source_input").value;
}

//EXPORT SOURCE CODE
document.getElementById("form-submit").addEventListener("click", (event) => {
  var form = new FormData(document.getElementById("spellform")); //loads the document into a form object based on it being the parent of the button (button is the div here because i'm lazy)
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
  var filename = document.getElementById("SName_input").value;

  hiddenElement.href = "data:attachment/text," + encodeURI(outputJson);
  hiddenElement.target = "_blank";
  hiddenElement.download = filename + ".spell";
  hiddenElement.click();
});

//IMPORT SOURCECODE
async function readText(event) {
  const file = event.target.files.item(0);
  const text = await file.text();
  const obj = JSON.parse(text);

  for (const prop in obj) {
    console.log(`${prop} = ${obj[prop]}`);
    document.getElementById(`${prop}`).value = `${obj[prop]}`;
  }
}
