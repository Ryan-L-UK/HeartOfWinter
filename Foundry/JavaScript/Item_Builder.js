// ---------------------------------------------------------------------------------------------------------
//ITEM LIST
fetch("http://localhost:8080/sources/MagicItems/")
  .then((response) => response.json())
  .then((data) => {
    //-----------------------
    //CREATE TABLE HEADINGS
    const tblParent = document.getElementById("iTable");
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
    const tblIName = document.createElement("th");
    tblIName.innerHTML = "Item Name";
    tblIName.setAttribute("width", "205px");
    const tblType = document.createElement("th");
    //-----------------------
    tblType.innerHTML = "Type";
    tblType.setAttribute("width", "120px");
    //-----------------------
    const tblRare = document.createElement("th");
    tblRare.innerHTML = "Rarity";
    //-----------------------
    const tblSource = document.createElement("th");
    tblSource.innerHTML = "Source";
    //-----------------------
    myTable.appendChild(tblHead);
    tblHead.appendChild(tblRow);
    tblRow.appendChild(tblImage);
    tblRow.appendChild(tblIName);
    tblRow.appendChild(tblType);
    tblRow.appendChild(tblRare);
    tblRow.appendChild(tblSource);
    //-----------------------
    //CREATE TABLE BODY
    const tbodyRef = document.createElement("tbody");
    myTable.appendChild(tbodyRef);
    let voidItems = 0;
    //let voidImages = 0;
    const voidItemsArray = [];
    //const voidImages = [];

    for (const prop in data) {
      //-----------------
      // Data Cleanser

      if (
        (data[prop].source.includes("UA") && data[prop].source != "UAWGE") ||
        (data[prop].customIndicator == undefined &&
          data[prop].entries == undefined) ||
        data[prop].type == "SHP" ||
        data[prop].type == "SPC" ||
        data[prop].type == "AIR" ||
        data[prop].type == "VEH" ||
        data[prop].type == "MNT" ||
        data[prop].type == "TAH" ||
        data[prop].type == "FD" ||
        data[prop].type == "TG" ||
        data[prop].type == "$" ||
        data[prop].source == "XMtS" ||
        data[prop]._copy != undefined
      ) {
        voidItems++;
        voidItemsArray.push(data[prop].name + ".json");
      }

      //-----------------
      let itemName = data[prop].name;
      var newRow = tbodyRef.insertRow();
      //-----------------------
      //ITEM ICONS
      var newImage = newRow.insertCell();
      var newImageRaw = document.createElement("img");
      newImageRaw.src =
        "http://localhost:8080/Foundry/ImageAssets/ItemIcons/" +
        data[prop].name
          .replace(/\//g, "-")
          .replace(/\+1 /g, "")
          .replace(/\+2 /g, "")
          .replace(/\+3 /g, "")
          .replace(/\+4 /g, "")
          .replace(/ \(Awakened\)/g, "")
          .replace(/ \(Dormant\)/g, "")
          .replace(/ \(Exalted\)/g, "")
          .replace(/ \(Black Sapphire\)/g, "")
          .replace(/ \(Diamond\)/g, "")
          .replace(/ \(Jacinth\)/g, "")
          .replace(/ \(Rainbow Pearl\)/g, "")
          .replace(/ \(Ruby\)/g, "")
          .replace(/Black Dragon /g, "Dragon ")
          .replace(/Blue Dragon /g, "Dragon ")
          .replace(/Brass Dragon /g, "Dragon ")
          .replace(/Bronze Dragon /g, "Dragon ")
          .replace(/Copper Dragon /g, "Dragon ")
          .replace(/Gold Dragon /g, "Dragon ")
          .replace(/Green Dragon /g, "Dragon ")
          .replace(/Red Dragon /g, "Dragon ")
          .replace(/Silver Dragon /g, "Dragon ")
          .replace(/White Dragon /g, "Dragon ") +
        ".png";

      newImageRaw.setAttribute("class", "ListIcon");
      newImage.appendChild(newImageRaw);
      //-----------------------
      //ITEM NAME
      var newName = newRow.insertCell();
      const jsonAnchor = document.createElement("a");
      var newNameText = document.createTextNode(itemName);
      newName.appendChild(jsonAnchor);
      var jsonlink =
        "http://localhost:8080/Pages/ItemsPage.html?FileName=" + itemName;
      jsonAnchor.setAttribute("href", jsonlink);
      jsonAnchor.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        fetchData(itemName.replace("/", "-"));
      });
      jsonAnchor.appendChild(newNameText);
      newName.setAttribute("class", data[prop].rarity);
      //-----------------
      var newType = newRow.insertCell();
      if (data[prop].customIndicator == undefined) {
        if (data[prop].wondrous == true) {
          var newTypeText = document.createTextNode("Wondrous Item");
        } else if (data[prop].staff != undefined) {
          var newTypeText = document.createTextNode("Staff");
        } else if (data[prop].poison != undefined) {
          var newTypeText = document.createTextNode("Poison");
        } else {
          var newTypeText = document.createTextNode(checktype(data[prop].type));
        }
      } else {
        var newTypeText = document.createTextNode(data[prop].type);
      }
      newType.appendChild(newTypeText);
      //-----------------
      var newRarity = newRow.insertCell();

      if (data[prop].rarity != undefined) {
        var newRarityText = document.createTextNode(
          data[prop].rarity.charAt(0).toUpperCase() + data[prop].rarity.slice(1)
        );
      } else {
        var newRarityText = document.createTextNode("N/A");
      }
      newRarity.appendChild(newRarityText);
      newRarity.removeAttribute("class");
      newRarity.setAttribute("class", data[prop].rarity);
      //-----------------
      var newSource = newRow.insertCell();

      var newSourceText = document.createTextNode(data[prop].source);
      newSource.appendChild(newSourceText);
      newSource.removeAttribute("class");
      newSource.setAttribute("class", data[prop].source);
      //------------------
    }
    tblParent.appendChild(myTable);
    if (voidItems > "0") {
      window.alert(
        "There are: " +
          voidItems +
          " items that meet the delete conditions. Please review the logs."
      );
      console.warn("Copy the object below to: FileRelocationList.txt");
      console.log(voidItemsArray);
    }
  });

// ---------------------------------------------------------------------------------------------------------
//ITEM INPUT
function showInput() {
  document.getElementById("dmg-out").innerHTML = "";

  document.getElementById("ItemImage").setAttribute(
    "src",

    "http://localhost:8080/Foundry/ImageAssets/ItemIcons/" +
      document
        .getElementById("name")
        .value.replace(/\//g, "-")
        .replace(/\//g, "-")
        .replace(/\+1 /g, "")
        .replace(/\+2 /g, "")
        .replace(/\+3 /g, "")
        .replace(/\+4 /g, "")
        .replace(/ \(Awakened\)/g, "")
        .replace(/ \(Dormant\)/g, "")
        .replace(/ \(Exalted\)/g, "")
        .replace(/ \(Black Sapphire\)/g, "")
        .replace(/ \(Diamond\)/g, "")
        .replace(/ \(Jacinth\)/g, "")
        .replace(/ \(Rainbow Pearl\)/g, "")
        .replace(/ \(Ruby\)/g, "")
        .replace(/Black Dragon /g, "Dragon ")
        .replace(/Blue Dragon /g, "Dragon ")
        .replace(/Brass Dragon /g, "Dragon ")
        .replace(/Bronze Dragon /g, "Dragon ")
        .replace(/Copper Dragon /g, "Dragon ")
        .replace(/Gold Dragon /g, "Dragon ")
        .replace(/Green Dragon /g, "Dragon ")
        .replace(/Red Dragon /g, "Dragon ")
        .replace(/Silver Dragon /g, "Dragon ")
        .replace(/White Dragon /g, "Dragon ") +
      ".png"
  );

  document.getElementById("name-out").innerHTML =
    document.getElementById("name").value;

  if (document.getElementById("reqAttune").value != "") {
    document
      .getElementById("attunement-out")
      .setAttribute("class", "attuneicon");
    document.getElementById("attunement-out").classList.remove("hidden");
  } else {
    document.getElementById("attunement-out").setAttribute("class", "hidden");
  }
  //------

  if (document.getElementById("staff").value != "") {
    var staff = "staff, ";
  } else {
    var staff = "";
  }

  if (
    document.getElementById("type").value == "Weapon" ||
    document.getElementById("type").value == "Ranged"
  ) {
    var type = document.getElementById("weaponCategory").value;
  } else {
    var type = document.getElementById("type").value;
  }

  document.getElementById("type-out").innerHTML =
    staff + type + ", " + document.getElementById("rarity").value;

  //------
  if (document.getElementById("dmg2").value != "") {
    var dmg2 = " (" + document.getElementById("dmg2").value + ")";
  } else {
    dmg2 = "";
  }
  if (document.getElementById("weaponCategory").value == "") {
    //do nothing
  } else {
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
  for (let i = 0; i < 9; i++) {
    const index = `I${i}`;
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

  if (document.getElementById("charges").value == "") {
    document.getElementById("cHeading-out").classList.remove("TopMargin");
    document.getElementById("cHeading-out").classList.add("hidden");
    document.getElementById("charges-out").classList.add("hidden");
  } else {
    document.getElementById("cHeading-out").classList.add("TopMargin");
    document.getElementById("cHeading-out").classList.remove("hidden");
    document.getElementById("charges-out").classList.remove("hidden");

    document.getElementById("cHeading-out").innerHTML =
      "Charges: " + document.getElementById("charges").value;
    var charges = document.getElementById("charges").value;
    var checkmarks = "";
    for (var i = 0; i < charges; i++) {
      checkmarks += "【 】";
    }
    document.getElementById("charges-out").innerHTML = checkmarks;
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
}
// ---------------------------------------------------------------------------------------------------------
//EXPORT SOURCE CODE
function exportSource() {
  var form = new FormData(document.getElementById("itemform")); //loads the document into a form object based on it being the parent of the button (button is the div here because i'm lazy)
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
