// ---------------------------------------------------------------------------------------------------------
//SPELL LIST
fetch("http://localhost:8080/sources/Spells/")
  .then((response) => response.json())
  .then((data) => {
    //-----------------------
    //CREATE TABLE HEADINGS
    const tblParent = document.getElementById("sTable");
    const myTable = document.createElement("table");
    myTable.setAttribute("id", "myTable");
    //-----------------------
    const tblHead = document.createElement("thead");
    tblHead.setAttribute("class", "fixedHead");
    const tblRow = document.createElement("tr");
    //-----------------------
    const tblImage = document.createElement("th");
    tblImage.innerHTML = "Image";
    tblImage.setAttribute("style", "width:40px");
    //-----------------------
    const tblSName = document.createElement("th");
    tblSName.innerHTML = "Spell Name";
    tblSName.setAttribute("style", "width:230px");
    //-----------------------
    const tblLevel = document.createElement("th");
    tblLevel.innerHTML = "Level";
    tblLevel.setAttribute("style", "width:60px");
    //-----------------------
    const tblSchool = document.createElement("th");
    tblSchool.innerHTML = "School";
    tblSchool.setAttribute("style", "width:125px");
    //-----------------------
    const tblSource = document.createElement("th");
    tblSource.innerHTML = "Source";
    tblSource.setAttribute("style", "width:50px");
    //-----------------------
    myTable.appendChild(tblHead);
    tblHead.appendChild(tblRow);
    tblRow.appendChild(tblImage);
    tblRow.appendChild(tblSName);
    tblRow.appendChild(tblLevel);
    tblRow.appendChild(tblSchool);
    tblRow.appendChild(tblSource);
    //-----------------------
    //CREATE TABLE BODY
    const tbodyRef = document.createElement("tbody");
    myTable.appendChild(tbodyRef);
    //-----------------------
    //NAME CHECK & VARIABLE SET
    for (const prop in data) {
      if (data[prop].source.includes("UA") && data[prop].source != "UAWGE") {
        console.warn(data[prop].name);
      }
      let spellName = data[prop].name;
      var newRow = tbodyRef.insertRow();
      //-----------------------
      //SPELL ICONS
      var newImage = newRow.insertCell();
      var newImageRaw = document.createElement("img");
      newImageRaw.src =
        "http://localhost:8080/Foundry/ImageAssets/SpellIcons/" +
        data[prop].name.replace(/\//g, "-") +
        ".png";
      newImageRaw.setAttribute("class", "SpellIcon");
      newImage.appendChild(newImageRaw);
      //-----------------------
      //SPELL NAME
      var newName = newRow.insertCell();
      const jsonAnchor = document.createElement("a");
      var newNameText = document.createTextNode(spellName);
      newName.appendChild(jsonAnchor);
      var jsonlink =
        "http://localhost:8080/Pages/SpellPage.html?FileName=" + spellName;
      jsonAnchor.setAttribute("href", jsonlink);
      jsonAnchor.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        fetchData(spellName.replace("/", "-"));
      });
      jsonAnchor.appendChild(newNameText);
      newName.setAttribute("class", "bold");
      //-----------------------
      //SPELL LEVEL
      var newLevel = newRow.insertCell();
      var newLevelText = document.createTextNode(checklevel(data[prop].level));
      newLevel.appendChild(newLevelText);
      //-----------------------
      //SPELL SCHOOL
      var newSchool = newRow.insertCell();
      var newSchoolText = document.createTextNode(
        checkschool(data[prop].school)
      );
      newSchool.appendChild(newSchoolText);
      newSchool.removeAttribute("class");
      newSchool.setAttribute("class", checkschool(data[prop].school));
      //-----------------------
      //SOURCE BOOK
      var newSource = newRow.insertCell();
      var newSourceText = document.createTextNode(data[prop].source);
      newSource.appendChild(newSourceText);
      newSource.removeAttribute("class");
      newSource.setAttribute("class", data[prop].source);
      //-----------------------
    }
    //-----------------------
    //TABLE CREATE
    tblParent.appendChild(myTable);
  });

// ---------------------------------------------------------------------------------------------------------
//SPELL INPUT
function showInput() {
  //-----------------------
  //CLEAR CORE VALUES
  document.getElementById("spellImage").setAttribute("src", "");
  document.getElementById("concentration-out").setAttribute("src", "");
  document.getElementById("saveIcon-out").setAttribute("src", "");
  //-----------------------
  document.getElementById("name-out").innerHTML =
    document.getElementById("name").value;
  //-----------------------
  document.getElementById("SLvlType-out").innerHTML =
    checklevel(document.getElementById("level").value) +
    " - " +
    document.getElementById("school").value;
  //-----------------------
  document
    .getElementById("spellImage")
    .setAttribute(
      "src",
      "http://localhost:8080/Foundry/ImageAssets/SpellIcons/" +
        document.getElementById("name").value.replace(/\//g, "-") +
        ".png"
    );
  //-----------------------
  document.getElementById("time-out").innerHTML =
    document.getElementById("time").value;
  document.getElementById("range-out").innerHTML =
    document.getElementById("range").value;
  document.getElementById("components-out").innerHTML =
    document.getElementById("components").value;
  var Concentration = document.getElementById("concentration").value;
  var Duration = document.getElementById("duration").value;
  if (Concentration == "Yes") {
    console.log("Sorcerer: This spell requires some serious concentration...");
    document
      .getElementById("concentration-out")
      .setAttribute(
        "src",
        "/Foundry/ImageAssets/CoreSpellIcons/concentration.png"
      );
    document
      .getElementById("concentration-out")
      .setAttribute("class", "conicon");
    document.getElementById("duration-out").innerHTML =
      "Concentration, " + Duration;
  } else {
    document
      .getElementById("concentration-out")
      .setAttribute(
        "src",
        "/Foundry/ImageAssets/CoreSpellIcons/concentration.png"
      );
    document
      .getElementById("concentration-out")
      .setAttribute("class", "hidden");
    document.getElementById("duration-out").innerHTML = Duration;
  }
  //-----------------------
  if (document.getElementById("savingThrow").value == "") {
    document.getElementById("save-heading").innerHTML = "Attack/Save: ";
    document.getElementById("savingThrow-out").innerHTML = "--";
  } else if (
    document.getElementById("savingThrow").value == "Ranged" ||
    document.getElementById("savingThrow").value == "Melee"
  ) {
    var saveType = document.getElementById("savingThrow").value;
    document.getElementById("save-heading").innerHTML = "Attack Type: ";
    document.getElementById("savingThrow-out").innerHTML = saveType;
    document
      .getElementById("saveIcon-out")
      .setAttribute(
        "src",
        "/Foundry/ImageAssets/CoreSpellIcons/" + saveType + ".png"
      );
    document.getElementById("saveIcon-out").setAttribute("class", "icon");
  } else {
    document.getElementById("save-heading").innerHTML = "Saving Throw: ";
    document.getElementById("savingThrow-out").innerHTML =
      document.getElementById("savingThrow").value;
  }
  //-----------------------

  for (let i = 0; i <= 8; i++) {
    const index = `S${i}`;
    document.getElementById(`${index}H-out`).innerHTML =
      document.getElementById(`${index}H`).value;
    if (document.getElementById(`${index}H`).value != "") {
      document.getElementById(`${index}H-out`).classList.add("TopMargin");
    } else {
      document.getElementById(`${index}H-out`).classList.remove("TopMargin");
    }

    document.getElementById(`${index}D-out`).innerHTML =
      document.getElementById(`${index}D`).value;
    if (document.getElementById(`${index}D`).value != "") {
      document.getElementById(`${index}D-out`).classList.add("BottomMargin");
    } else {
      document.getElementById(`${index}D-out`).classList.remove("BottomMargin");
    }
  }

  //--------------------
  if (document.getElementById("entriesHigherLevel").value != "") {
    console.log("Sorcerer: A strong spell...");
    document.getElementById("HigherHide").classList.remove("hidden");
    document.getElementById("HigherHide").classList.add("TopMargin");
    document.getElementById("higherLevelH-out").innerHTML = "At Higher Levels:";
    document.getElementById("entriesHigherLevel-out").innerHTML =
      document.getElementById("entriesHigherLevel").value;
  } else {
    console.log("Sorcerer: This spell is for the weak...");
    document.getElementById("higherLevelH-out").innerHTML = "";
    document.getElementById("HigherHide").classList.add("hidden");
    document.getElementById("HigherHide").classList.remove("TopMargin");
  }

  //--------------------
  for (let i = 0; i <= 8; i++) {
    const input = document.getElementById(`class${i}`);
    const output = document.getElementById(`class${i}-out`);

    output.innerHTML = input.value;
  }
  //--------------------
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
}
// ---------------------------------------------------------------------------------------------------------
//EXPORT SOURCE CODE
function exportSource() {
  var form = new FormData(document.getElementById("spellform")); //loads the document into a form object based on it being the parent of the button (button is the div here because i'm lazy)
  let outputObject = {};
  for (var [key, value] of form) {
    //loop the form data
    if (value == 0) {
      //Do nothing
    } else if (value != "") {
      //if the key exists
      outputObject[key] = value; //store it in the object
    }
  }
  let outputJson = JSON.stringify(outputObject); //turn the object into json
  var hiddenElement = document.createElement("a");
  var filename = document.getElementById("name").value;
  hiddenElement.href = "data:attachment/text," + encodeURI(outputJson);
  hiddenElement.target = "_blank";
  hiddenElement.download = filename + ".json";
  hiddenElement.click();
}
