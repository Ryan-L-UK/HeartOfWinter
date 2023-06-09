// ---------------------------------------------------------------------------------------------------------
//CREATURE LIST
fetch("http://localhost:8080/Sources/Creatures")
  .then((response) => response.json())
  .then((data) => {
    let missingTypes = [];
    let legendaryCreatures = [];
    //-----------------------
    //CREATE TABLE HEADINGS
    const tblParent = document.getElementById("cTable");
    const myTable = document.createElement("table");
    myTable.setAttribute("id", "myTable");
    //-----------------------
    const tblHead = document.createElement("thead");
    tblHead.setAttribute("class", "fixedHead");
    const tblRow = document.createElement("tr");
    //-----------------------
    const tblImage = document.createElement("th");
    tblImage.innerHTML = "Image";
    tblImage.setAttribute("width", "40px");
    //-----------------------
    const tblCName = document.createElement("th");
    tblCName.innerHTML = "Creature Name";
    tblCName.setAttribute("width", "205px");
    //-----------------------
    const tblSize = document.createElement("th");
    tblSize.innerHTML = "Size";
    tblSize.setAttribute("width", "77px");
    //-----------------------
    const tblType = document.createElement("th");
    tblType.innerHTML = "Type";
    tblType.setAttribute("width", "77px");
    //-----------------------
    const tblSource = document.createElement("th");
    tblSource.innerHTML = "Source";
    tblSource.setAttribute("width", "56px");
    //-----------------------
    myTable.appendChild(tblHead);
    tblHead.appendChild(tblRow);
    tblRow.appendChild(tblImage);
    tblRow.appendChild(tblCName);
    tblRow.appendChild(tblSize);
    tblRow.appendChild(tblType);
    tblRow.appendChild(tblSource);
    //-----------------------
    //CREATE TABLE BODY
    const tbodyRef = document.createElement("tbody");
    myTable.appendChild(tbodyRef);
    //-----------------------
    //NAME CHECK & VARIABLE SET
    for (const prop in data) {
      if (data[prop].source.includes("UA") && data[prop].source != "UAWGE") {
        console.warn("Unearthed Arcana: " + data[prop].name);
      }
      if (data[prop].legendary != undefined) {
        legendaryCreatures.push(data[prop].name);
      }
      let creatureName = data[prop].name;
      var newRow = tbodyRef.insertRow();
      //-----------------------
      //CREATURE ICONS
      var newImage = newRow.insertCell();
      var newImageRaw = document.createElement("img");

      newImageRaw.src =
        "http://localhost:8080/Foundry/ImageAssets/CreatureIcons/" +
        data[prop].name +
        ".png";
      newImageRaw.setAttribute("class", "CListIcon");
      newImage.appendChild(newImageRaw);
      //-----------------------
      //CREATURE NAME
      var newName = newRow.insertCell();
      const jsonAnchor = document.createElement("a");
      var newNameText = document.createTextNode(creatureName);
      newName.appendChild(jsonAnchor);
      var jsonlink =
        "http://localhost:8080/Pages/CreaturePage.html?FileName=" +
        creatureName;
      jsonAnchor.setAttribute("href", jsonlink);
      jsonAnchor.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        fetchData(creatureName.replace("/", "-"));
      });
      jsonAnchor.appendChild(newNameText);
      newName.setAttribute("class", "bold");
      //-----------------
      //CREATURE SIZE
      var newSize = newRow.insertCell();
      if (data[prop].customIndicator != undefined) {
        var newSizeText = document.createTextNode(
          data[prop].size.charAt(0).toUpperCase() + data[prop].size.slice(1)
        );
      } else if (data[prop].size != undefined) {
        var newSizeText = document.createTextNode(checksize(data[prop].size));
      } else {
        var newSizeText = document.createTextNode("N/A");
      }
      newSize.appendChild(newSizeText);
      //-----------------
      //CREATURE TYPE
      var newType = newRow.insertCell();
      if (data[prop].type != undefined && data[prop].type.type != undefined) {
        var newTypeText = document.createTextNode(
          data[prop].type.type.charAt(0).toUpperCase() +
            data[prop].type.type.slice(1)
        );
      } else if (data[prop].type != undefined) {
        var newTypeText = document.createTextNode(
          data[prop].type.charAt(0).toUpperCase() + data[prop].type.slice(1)
        );
      } else {
        var newTypeText = document.createTextNode("N/A");
        missingTypes.push(data[prop].name);
      }
      newType.appendChild(newTypeText);
      //-----------------------
      //SOURCE BOOK
      var newSource = newRow.insertCell();
      var newSourceText = document.createTextNode(
        data[prop].source.charAt(0).toUpperCase() + data[prop].source.slice(1)
      );
      newSource.appendChild(newSourceText);
      newSource.removeAttribute("class");
      newSource.setAttribute("class", data[prop].source);
    }
    tblParent.appendChild(myTable);
    console.warn("Legendary Creatures:");
    console.log(legendaryCreatures);
    console.warn("Creatures Missing Types:");
    console.log(missingTypes);
  });

// ---------------------------------------------------------------------------------------------------------
function checkstatrole(modifier) {
  var output = Math.floor((modifier - 10) / 2);
  var symbol = "";
  if (output >= 0) {
    symbol = "+";
  }
  return modifier + " (" + symbol + output + ")";
}
// ---------------------------------------------------------------------------------------------------------
function checkheader(header) {
  var headerout = "";
  var lookup = {
    "": "Error",
    saves: "Saving Throws:",
    skills: "Skills:",
    resist: "Damage Resistances:",
    immune: "Damage Immunities:",
    vulnerable: "Damage Vulnerabilities:",
    conditionImmune: "Condition Immunities:",
    senses: "Senses:",
    languages: "Languages:",
    innateHeaderEntry: "Innate:",
    spellHeaderEntry: "Spellcasting:",
    atWill: "At will: ",
    daily1e: "1/Day Each: ",
    daily2e: "2/Day Each: ",
    daily3e: "3/Day Each: ",
    cantrip: "Cantrips (at will): ",
    lvl1slots: "1st Level (",
    lvl2slots: "2nd Level (",
    lvl3slots: "3rd Level (",
    lvl4slots: "4th Level (",
    lvl5slots: "5th Level (",
  };
  headerout = lookup[header];
  return headerout;
}
// ---------------------------------------------------------------------------------------------------------
function showInput() {
  //---------------
  //Output Clearer
  document
    .getElementsByName("clearme")
    .forEach((Element) => (Element.innerHTML = ""));
  document.getElementById("innatebreak").classList.remove("margin");
  document.getElementById("spellbreak").classList.remove("margin");

  document
    .getElementById("CreatureImage")
    .setAttribute(
      "src",
      "http://localhost:8080/Foundry/ImageAssets/CreatureIcons/" +
        document.getElementById("name").value +
        ".png"
    );

  //---------------
  //Function Start
  var form = new FormData(document.getElementById("creatureform"));
  const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
  const skills = [
    "saves",
    "skills",
    "resist",
    "immune",
    "vulnerable",
    "conditionImmune",
    "senses",
    "languages",
  ];
  const ignore = [
    "source",
    "page",
    "spellHeaderEntry",
    "spellFooterEntry",
    "cantrip",
    "lvl1slots",
    "lvl2slots",
    "lvl3slots",
    "lvl4slots",
    "lvl5slots",
    "lvl1spells",
    "lvl2spells",
    "lvl3spells",
    "lvl4spells",
    "lvl5spells",
    "innateHeaderEntry",
    "innateFooterEntry",
    "atWill",
    "daily1e",
    "daily2e",
    "daily3e",
    "customIndicator",
  ];
  skills.forEach(function (skill) {
    if (document.getElementById(skill).value != "") {
      document.getElementById(skill + "H-out").innerHTML = checkheader(skill);
    }
  });
  for (var [key, value] of form) {
    if (ignore.indexOf(key) >= 0) {
      //do nothing
    } else if (key == "tags") {
      if (value != "") {
        document.getElementById(key + "-out").innerHTML =
          "(" + document.getElementById(key).value + "), ";
      } else {
        document.getElementById(key + "-out").innerHTML = ",";
      }
    } else if (stats.indexOf(key) >= 0) {
      document.getElementById(key + "-out").innerHTML = checkstatrole(
        document.getElementById(key).value
      );
    } else if (key == "CasterInnate") {
      if (document.getElementById(key).value == "Spellcaster/Innate") {
        SpellCasterHeaders();
        InnateSpellsHeaders();
      } else if (document.getElementById(key).value == "Spellcaster") {
        SpellCasterHeaders();
      } else if (document.getElementById(key).value == "Innate") {
        InnateSpellsHeaders();
      } else {
        //do nothing
      }
    } else {
      document.getElementById(key + "-out").innerHTML = [value];
    }
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
    document.getElementById("source-out").innerHTML = "Hmbrw";
  } else {
    document
      .getElementById("source-out")
      .classList.add(document.getElementById("source").value);
  }
}
function SpellCasterHeaders() {
  const slots = [
    "spellHeaderEntry",
    "cantrip",
    "lvl1slots",
    "lvl2slots",
    "lvl3slots",
    "lvl4slots",
    "lvl5slots",
  ];
  document.getElementById("spellbreak").classList.add("margin");
  slots.forEach(function (header) {
    if (document.getElementById(header).value != 0) {
      if (header == "spellHeaderEntry" || header == "cantrip") {
        document.getElementById(header + "H-out").innerHTML =
          checkheader(header);
      } else {
        document.getElementById(header + "H-out").innerHTML =
          checkheader(header) +
          document.getElementById(header).value +
          " slots): ";
      }
      const fields = [
        "spellHeaderEntry",
        "cantrip",
        "lvl1spells",
        "lvl2spells",
        "lvl3spells",
        "lvl4spells",
        "lvl5spells",
        "spellFooterEntry",
      ];
      fields.forEach(function (fieldname) {
        if (document.getElementById(fieldname).value != "") {
          document.getElementById(fieldname + "-out").innerHTML =
            document.getElementById(fieldname).value;
        }
      });
      if (document.getElementById("spellFooterEntry").value != null) {
        document.getElementById("spellFooterEntry-out").innerHTML =
          document.getElementById("spellFooterEntry").value;
      }
    }
  });
}
function InnateSpellsHeaders() {
  const fields = [
    "innateHeaderEntry",
    "atWill",
    "daily1e",
    "daily2e",
    "daily3e",
  ];
  document.getElementById("innatebreak").classList.add("margin");
  fields.forEach(function (header) {
    if (document.getElementById(header).value != "") {
      document.getElementById(header + "H-out").innerHTML = checkheader(header);
      document.getElementById(header + "-out").innerHTML =
        document.getElementById(header).value;
    }
  });
  if (document.getElementById("innateFooterEntry").value != "") {
    document.getElementById("innateFooterEntry-out").innerHTML =
      document.getElementById("innateFooterEntry").value;
  }
}
// ---------------------------------------------------------------------------------------------------------
//EXPORT SOURCE CODE
function exportSource() {
  var form = new FormData(document.getElementById("creatureform")); //loads the document into a form object based on it being the parent of the button (button is the div here because i'm lazy)
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
