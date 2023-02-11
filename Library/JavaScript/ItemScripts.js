function showInput() {
  document.getElementById("IName_output").innerHTML =
    document.getElementById("IName_input").value;

  document.getElementById("IType_output").innerHTML =
    document.getElementById("IType_input").value;

  document.getElementById("WType_output").innerHTML =
    document.getElementById("WType_input").value;

  document.getElementById("WDmg_output").innerHTML =
    document.getElementById("WDmg_input").value;

  document.getElementById("Desc1_output").innerHTML =
    document.getElementById("Desc1_input").value;

  document.getElementById("Desc2_output").innerHTML =
    document.getElementById("Desc2_input").value;

  document.getElementById("Desc3_output").innerHTML =
    document.getElementById("Desc3_input").value;

  document.getElementById("Source_output").innerHTML =
    document.getElementById("Source_input").value;
}

//EXPORT SOURCE CODE
document.getElementById("form-submit").addEventListener("click", (event) => {
  var form = new FormData(document.getElementById("itemform")); //loads the document into a form object based on it being the parent of the button (button is the div here because i'm lazy)
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
  var filename = document.getElementById("IName_input").value;

  hiddenElement.href = "data:attachment/text," + encodeURI(outputJson);
  hiddenElement.target = "_blank";
  hiddenElement.download = filename + ".item";
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
