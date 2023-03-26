function showInput() {
  var fullsource = "";
  document.getElementById("weaponCategory-out").innerHTML = "";
  document.getElementById("dmg-out").innerHTML = "";
  document.getElementById("name-out").innerHTML =
    document.getElementById("name").value;
  if (document.getElementById("reqAttune").value != "") {
    var reqAttune = "(" + document.getElementById("reqAttune").value + ")";
  } else {
    var reqAttune = "";
  }
  if (document.getElementById("staff").value != "") {
    var staff = "staff, ";
  } else {
    var staff = "";
  }
  document.getElementById("type-out").innerHTML =
    staff +
    document.getElementById("type").value +
    ", " +
    document.getElementById("rarity").value +
    " " +
    reqAttune;
  //------
  if (document.getElementById("dmg2").value != "") {
    var dmg2 = " (" + document.getElementById("dmg2").value + ")";
  } else {
    dmg2 = "";
  }
  if (document.getElementById("weaponCategory").value == "") {
    //do nothing
  } else {
    document.getElementById("weaponCategory-out").innerHTML =
      document.getElementById("weaponCategory").value;
    document.getElementById("dmg-out").innerHTML =
      document.getElementById("dmg1").value +
      " " +
      document.getElementById("dmgType").value +
      " - " +
      document.getElementById("property").value +
      dmg2;
  }
  var source = document.getElementById("source").value.toUpperCase();
  document.getElementById("source-out").innerHTML =
    document.getElementById("source").value;
  if (source != "HOMEBREW") {
    document.getElementById("page-out").innerHTML =
      "p" + document.getElementById("page").value;
  } else {
    document.getElementById("page-out").innerHTML = "";
  }
  document.getElementById("source-out").removeAttribute("class");
  document.getElementById("source-out").classList.add("source");

  if (source == "HOMEBREW") {
    document.getElementById("source-out").classList.add("HMBW");
    document.getElementById("source-out").innerHTML = "Homebrew";
  } else {
    document
      .getElementById("source-out")
      .classList.add(document.getElementById("source").value);
  }

  document.getElementById("I0H-out").innerHTML =
    document.getElementById("I0H").value;
  document.getElementById("I0D-out").innerHTML =
    document.getElementById("I0D").value;
  document.getElementById("I1H-out").innerHTML =
    document.getElementById("I1H").value;
  document.getElementById("I1D-out").innerHTML =
    document.getElementById("I1D").value;
  document.getElementById("I2H-out").innerHTML =
    document.getElementById("I2H").value;
  document.getElementById("I2D-out").innerHTML =
    document.getElementById("I2D").value;
  document.getElementById("I3H-out").innerHTML =
    document.getElementById("I3H").value;
  document.getElementById("I3D-out").innerHTML =
    document.getElementById("I3D").value;
  document.getElementById("I4H-out").innerHTML =
    document.getElementById("I4H").value;
  document.getElementById("I4D-out").innerHTML =
    document.getElementById("I4D").value;
  document.getElementById("I5H-out").innerHTML =
    document.getElementById("I5H").value;
  document.getElementById("I5D-out").innerHTML =
    document.getElementById("I5D").value;
  document.getElementById("I6H-out").innerHTML =
    document.getElementById("I6H").value;
  document.getElementById("I6D-out").innerHTML =
    document.getElementById("I6D").value;
  document.getElementById("I7H-out").innerHTML =
    document.getElementById("I7H").value;
  document.getElementById("I7D-out").innerHTML =
    document.getElementById("I7D").value;
  document.getElementById("I8H-out").innerHTML =
    document.getElementById("I8H").value;
  document.getElementById("I8D-out").innerHTML =
    document.getElementById("I8D").value;

  if (source == "HOMEBREW") {
    fullsource = "Homebrew.";
  } else if (document.getElementById("otherSources").value == "") {
    var fullsource =
      document.getElementById("source").value +
      ", page " +
      document.getElementById("page").value;
  } else {
    var fullsource =
      document.getElementById("source").value +
      ", page " +
      document.getElementById("page").value +
      ". Also found in " +
      document.getElementById("otherSources").value +
      ", page " +
      document.getElementById("otherSourcesPage").value +
      ".";
  }
  document.getElementById("fullSource-out").innerHTML = fullsource;
}
//---------------------------------------------------------------------------------------------------------
//EXPORT SOURCE CODE
//---------------------------------------------------------------------------------------------------------
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
  var filename = document.getElementById("Name").value;
  hiddenElement.href = "data:attachment/text," + encodeURI(outputJson);
  hiddenElement.target = "_blank";
  hiddenElement.download = filename + ".json";
  hiddenElement.click();
});
