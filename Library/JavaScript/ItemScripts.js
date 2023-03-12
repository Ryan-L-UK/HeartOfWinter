function showInput() {
  var fullsource = "";
  document.getElementById("weaponCategory-out").innerHTML = "";
  document.getElementById("dmg-out").innerHTML = "";
  document.getElementById("Name-out").innerHTML =
    document.getElementById("Name-in").value;
  if (document.getElementById("reqAttune-in").value != "") {
    var reqAttune = "(" + document.getElementById("reqAttune-in").value + ")";
  } else {
    var reqAttune = "";
  }
  if (document.getElementById("Staff-in").value != "") {
    var staff = "Staff, ";
  } else {
    var staff = "";
  }
  document.getElementById("Type-out").innerHTML =
    staff +
    document.getElementById("Type-in").value +
    ", " +
    document.getElementById("Rarity-in").value +
    " " +
    reqAttune;
  //------
  if (document.getElementById("dmg2-in").value != "") {
    var dmg2 = " (" + document.getElementById("dmg2-in").value + ")";
  } else {
    dmg2 = "";
  }
  if (document.getElementById("weaponCategory-in").value == "") {
    //do nothing
  } else {
    document.getElementById("weaponCategory-out").innerHTML =
      document.getElementById("weaponCategory-in").value;
    document.getElementById("dmg-out").innerHTML =
      document.getElementById("dmg1-in").value +
      " " +
      document.getElementById("dmgType-in").value +
      " - " +
      document.getElementById("property-in").value +
      dmg2;
  }
  var source = document.getElementById("Source-in").value.toUpperCase();
  document.getElementById("Source-out").innerHTML =
    document.getElementById("Source-in").value;
  if (source != "HOMEBREW") {
    document.getElementById("Page-out").innerHTML =
      "p" + document.getElementById("Page-in").value;
  } else {
    document.getElementById("Page-out").innerHTML = "";
  }
  document.getElementById("Source-out").removeAttribute("class");
  document.getElementById("Source-out").classList.add("source");

  if (source == "HOMEBREW") {
    document.getElementById("Source-out").classList.add("HMBW");
    document.getElementById("Source-out").innerHTML = "Homebrew";
  } else {
    document
      .getElementById("Source-out")
      .classList.add(document.getElementById("Source-in").value);
  }

  document.getElementById("I0H-out").innerHTML =
    document.getElementById("I0H-in").value;
  document.getElementById("I0D-out").innerHTML =
    document.getElementById("I0D-in").value;
  document.getElementById("I1H-out").innerHTML =
    document.getElementById("I1H-in").value;
  document.getElementById("I1D-out").innerHTML =
    document.getElementById("I1D-in").value;
  document.getElementById("I2H-out").innerHTML =
    document.getElementById("I2H-in").value;
  document.getElementById("I2D-out").innerHTML =
    document.getElementById("I2D-in").value;
  document.getElementById("I3H-out").innerHTML =
    document.getElementById("I3H-in").value;
  document.getElementById("I3D-out").innerHTML =
    document.getElementById("I3D-in").value;
  document.getElementById("I4H-out").innerHTML =
    document.getElementById("I4H-in").value;
  document.getElementById("I4D-out").innerHTML =
    document.getElementById("I4D-in").value;
  document.getElementById("I5H-out").innerHTML =
    document.getElementById("I5H-in").value;
  document.getElementById("I5D-out").innerHTML =
    document.getElementById("I5D-in").value;
  document.getElementById("I6H-out").innerHTML =
    document.getElementById("I6H-in").value;
  document.getElementById("I6D-out").innerHTML =
    document.getElementById("I6D-in").value;
  document.getElementById("I7H-out").innerHTML =
    document.getElementById("I7H-in").value;
  document.getElementById("I7D-out").innerHTML =
    document.getElementById("I7D-in").value;
  document.getElementById("I8H-out").innerHTML =
    document.getElementById("I8H-in").value;
  document.getElementById("I8D-out").innerHTML =
    document.getElementById("I8D-in").value;

  if (source == "HOMEBREW") {
    fullsource = "Homebrew.";
  } else if (document.getElementById("otherSources-in").value == "") {
    var fullsource =
      document.getElementById("Source-in").value +
      ", page " +
      document.getElementById("Page-in").value;
  } else {
    var fullsource =
      document.getElementById("Source-in").value +
      ", page " +
      document.getElementById("Page-in").value +
      ". Also found in " +
      document.getElementById("otherSources-in").value +
      ", page " +
      document.getElementById("otherSourcesPage-in").value +
      ".";
  }
  document.getElementById("FullSource-out").innerHTML = fullsource;
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
  var filename = document.getElementById("Name-in").value;
  hiddenElement.href = "data:attachment/text," + encodeURI(outputJson);
  hiddenElement.target = "_blank";
  hiddenElement.download = filename + ".json";
  hiddenElement.click();
});
