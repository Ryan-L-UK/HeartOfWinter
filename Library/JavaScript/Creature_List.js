// ---------------------------------------------------------------------------------------------------------
//FUNCTION CHECK SIZE
function checksize(size) {
  var checksize = "";
  var lookup = {
    T: "Tiny",
    S: "Small",
    M: "Medium",
    L: "Large",
    H: "Huge",
    G: "Gargantuan",
  };
  checksize = lookup[size];
  return checksize;
}
// ---------------------------------------------------------------------------------------------------------
//CREATURE LIST
fetch("http://localhost:8080/folders/Sources/Creatures")
  .then((response) => response.json())
  .then((data) => {
    for (const prop in data) {
      const suffix = `${data[prop]}`.split(".");
      let extension = suffix[1];
      if (extension == "json") {
        console.log(`${data[prop]}`);
        var tbodyRef = document
          .getElementById("myTable")
          .getElementsByTagName("tbody")[0];
        var newRow = tbodyRef.insertRow();
        var newName = newRow.insertCell();
        var newSize = newRow.insertCell();
        var newDetails = newRow.insertCell();
        var newSource = newRow.insertCell();
        var newView = newRow.insertCell();
        var newEdit = newRow.insertCell();
        var newNameText = document.createTextNode(suffix[0]);
        newName.appendChild(newNameText);

        readText(suffix[0], "size", newSize);
        readText(suffix[0], "type", newDetails);

        readSource(suffix[0], newSource);

        const pngAnchor = document.createElement("a");
        var newViewText = document.createTextNode("View");
        newView.appendChild(pngAnchor);
        var pnglink =
          "http://localhost:8080/Sources/Creatures/" + suffix[0] + ".png";
        pngAnchor.setAttribute("href", pnglink);
        pngAnchor.appendChild(newViewText);
        const jsonAnchor = document.createElement("a");
        var newEditText = document.createTextNode("Edit");
        newEdit.appendChild(jsonAnchor);
        var jsonlink =
          "http://localhost:8080/Pages/CreaturePage.html?FileName=" + suffix[0];
        jsonAnchor.setAttribute("href", jsonlink);
        jsonAnchor.appendChild(newEditText);
      }
    }
  });
// ---------------------------------------------------------------------------------------------------------
//IMPORT DETAILS
function readText(creature, i, cell) {
  fetch("/Sources/Creatures/" + creature + ".json")
    .then((response) => response.json())
    .then((obj) => {
      if (i == "type") {
        if (obj.type.type != undefined) {
          var typeText = document.createTextNode(
            obj.type.type.charAt(0).toUpperCase() + obj.type.type.slice(1)
          );
        } else {
          var typeText = document.createTextNode(
            obj.type.charAt(0).toUpperCase() + obj.type.slice(1)
          );
        }
      }
      if (i == "size") {
        if (obj.cr == undefined) {
          var typeText = document.createTextNode(
            obj.size.charAt(0).toUpperCase() + obj.size.slice(1)
          );
        } else {
          var typeText = document.createTextNode(checksize(obj.size));
        }
      }
      cell.appendChild(typeText);
    });
}
// ---------------------------------------------------------------------------------------------------------
//IMPORT SOURCECODE
function readSource(creature, cell) {
  fetch("/Sources/Creatures/" + creature + ".json")
    .then((response) => response.json())
    .then((obj) => {
      var logicCheck = obj.source;
      if (logicCheck.toUpperCase() != "HOMEBREW") {
        var typeText = document.createTextNode(logicCheck);
        source = obj.source;
      } else {
        var typeText = document.createTextNode("Homebrew");
        source = "HMBW";
      }
      cell.appendChild(typeText);
      cell.removeAttribute("class");
      cell.setAttribute("class", source);
    });
}
