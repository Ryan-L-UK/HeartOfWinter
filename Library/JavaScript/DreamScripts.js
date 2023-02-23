window.onload = function () {
  document.getElementById("line").setAttribute("class", "whiteline");
};
function showInput() {
  let playername = document.getElementById("DName_input").value.toUpperCase();

  document.getElementById("DName_output").innerHTML = playername;

  var input1 = document.getElementById("Desc1_input").value;
  var input2 = document.getElementById("Desc2_input").value;
  var input3 = document.getElementById("Desc3_input").value;
  var input4 = document.getElementById("Desc4_input").value;
  var input5 = document.getElementById("Desc5_input").value;
  var input6 = document.getElementById("Desc6_input").value;
  var input7 = document.getElementById("Desc7_input").value;
  var input8 = document.getElementById("Desc8_input").value;

  var checkBox1 = document.getElementById("Quote1");
  var checkBox2 = document.getElementById("Quote2");
  var checkBox3 = document.getElementById("Quote3");
  var checkBox4 = document.getElementById("Quote4");
  var checkBox5 = document.getElementById("Quote5");
  var checkBox6 = document.getElementById("Quote6");
  var checkBox7 = document.getElementById("Quote7");
  var checkBox8 = document.getElementById("Quote8");

  if (input1 == "") {
    document.getElementById("Desc1_output").innerHTML = "";
  } else if (checkBox1.checked == true) {
    document.getElementById("Desc1_output").setAttribute("class", "quotetext");
    document.getElementById("Desc1_output").innerHTML = '"' + input1 + '"';
  } else {
    document.getElementById("Desc1_output").setAttribute("class", "standard");
    document.getElementById("Desc1_output").innerHTML = input1;
  }

  if (input2 == "") {
    document.getElementById("Desc2_output").innerHTML = "";
  } else if (checkBox2.checked == true) {
    document.getElementById("Desc2_output").setAttribute("class", "quotetext");

    document.getElementById("Desc2_output").innerHTML = '"' + input2 + '"';
  } else {
    document.getElementById("Desc2_output").setAttribute("class", "standard");
    document.getElementById("Desc2_output").innerHTML = input2;
  }

  if (input3 == "") {
    document.getElementById("Desc3_output").innerHTML = "";
  } else if (checkBox3.checked == true) {
    document.getElementById("Desc3_output").setAttribute("class", "quotetext");
    document.getElementById("Desc3_output").innerHTML = '"' + input3 + '"';
  } else {
    document.getElementById("Desc3_output").setAttribute("class", "standard");
    document.getElementById("Desc3_output").innerHTML = input3;
  }

  if (input4 == "") {
    document.getElementById("Desc4_output").innerHTML = "";
  } else if (checkBox4.checked == true) {
    document.getElementById("Desc4_output").setAttribute("class", "quotetext");
    document.getElementById("Desc4_output").innerHTML = '"' + input4 + '"';
  } else {
    document.getElementById("Desc4_output").setAttribute("class", "standard");
    document.getElementById("Desc4_output").innerHTML = input4;
  }

  if (input5 == "") {
    document.getElementById("Desc5_output").innerHTML = "";
  } else if (checkBox5.checked == true) {
    document.getElementById("Desc5_output").setAttribute("class", "quotetext");
    document.getElementById("Desc5_output").innerHTML = '"' + input5 + '"';
  } else {
    document.getElementById("Desc5_output").setAttribute("class", "standard");
    document.getElementById("Desc5_output").innerHTML = input5;
  }

  if (input6 == "") {
    document.getElementById("Desc6_output").innerHTML = "";
  } else if (checkBox6.checked == true) {
    document.getElementById("Desc6_output").setAttribute("class", "quotetext");
    document.getElementById("Desc6_output").innerHTML = '"' + input6 + '"';
  } else {
    document.getElementById("Desc6_output").setAttribute("class", "standard");
    document.getElementById("Desc6_output").innerHTML = input6;
  }

  if (input7 == "") {
    document.getElementById("Desc7_output").innerHTML = "";
  } else if (checkBox7.checked == true) {
    document.getElementById("Desc7_output").setAttribute("class", "quotetext");
    document.getElementById("Desc7_output").innerHTML = '"' + input7 + '"';
  } else {
    document.getElementById("Desc7_output").setAttribute("class", "standard");
    document.getElementById("Desc7_output").innerHTML = input7;
  }

  if (input8 == "") {
    document.getElementById("Desc8_output").innerHTML = "";
  } else if (checkBox8.checked == true) {
    document.getElementById("Desc8_output").setAttribute("class", "quotetext");
    document.getElementById("Desc8_output").innerHTML = '"' + input8 + '"';
  } else {
    document.getElementById("Desc8_output").setAttribute("class", "standard");
    document.getElementById("Desc8_output").innerHTML = input8;
  }
}

//EXPORT SOURCE CODE
document.getElementById("form-submit").addEventListener("click", (event) => {
  console.log("Lucienne: Just noting down this dream in the archive...");
  var form = new FormData(document.getElementById("dreamform")); //loads the document into a form object based on it being the parent of the button (button is the div here because i'm lazy)
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
  var filename = document.getElementById("DName_input").value;

  hiddenElement.href = "data:attachment/text," + encodeURI(outputJson);
  hiddenElement.target = "_blank";
  hiddenElement.download = filename + ".dream";
  hiddenElement.click();
  console.log("Lucienne: Dream has been catalogued and stored.");
});

//IMPORT SOURCECODE
async function readText(event) {
  console.log("Lucienne: Just finding the dream archive...");
  const file = event.target.files.item(0);
  const text = await file.text();
  const obj = JSON.parse(text);

  for (const prop in obj) {
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
  console.log("Lucienne: Dream archive located, enjoy.");
}
