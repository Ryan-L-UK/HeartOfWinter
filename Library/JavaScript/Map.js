//-----------------------------------------
//Map Selector
//-----------------------------------------
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const Type = urlParams.get("Type");
console.log("Type: " + Type);
const Place = urlParams.get("Place");
console.log("Place: " + Place);

if (Type == "Location") {
  document
    .getElementById("mainmap")
    .setAttribute("src", "../Sources/Gullet Cove Map/GC_City_Map.png");
  document.getElementById("caption").innerHTML =
    "Map of the City of Gullet Cove";
  document
    .getElementById("mainmap")
    .setAttribute("usemap", "#gullet-locations");
} else {
  document
    .getElementById("mainmap")
    .setAttribute("src", "../Sources/Gullet Cove Map/GC_District_Map.png");
  document.getElementById("caption").innerHTML = "District Map of Gullet Cove";
  document
    .getElementById("mainmap")
    .setAttribute("usemap", "#gullet-districts");
}

console.log(
  "Image Map Loaded: " +
    document.getElementById("mainmap").getAttribute("usemap")
);

if (Type == "Location") {
  var DistrictLocation = "Location/" + Place;
} else {
  var DistrictLocation = "District/" + Place;
}

if (Place == null) {
  var DistrictLocation = "0Placeholder";
  console.log("HANDLER: 'Place' == null, Placeholder file loaded");
}

var DistrictLocationOut = "";

DistrictLocationOut =
  "http://localhost:8080/Sources/Gullet Cove Map/" + DistrictLocation + ".html";

fetch(DistrictLocationOut)
  .then(function (Lresponse) {
    // When the page is loaded convert it to text
    return Lresponse.text();
  })
  .then(function (DistrictLocationHTML) {
    // Initialize the DOM parser
    var parser = new DOMParser();

    // Parse the text
    var DistrictLocationDoc = parser.parseFromString(
      DistrictLocationHTML,
      "text/html"
    );

    // You can now even select part of that html as you would in the regular DOM
    // Example:
    var DistrictLocationArticle =
      DistrictLocationDoc.querySelector("html").innerHTML;
    document.getElementById("Loc_output").innerHTML = DistrictLocationArticle;
    console.log(DistrictLocationDoc);
  })
  .catch(function (err) {
    console.log("ERROR: District/Location failed to load: ", err);
  })

  .then(function () {
    console.warn("Menu Builder Starting...");
    const collection = document.querySelectorAll("h1,h2");

    function addElement(menuselector) {
      const newDiv = document.createElement("div");
      const newAnchor = document.createElement("a");
      const newContent = document.createTextNode(menuselector);
      document.querySelector(".sidenav").appendChild(newDiv);
      newDiv.appendChild(newAnchor);

      var jumplinkspec = menuselector.replace(/[^a-zA-Z0-9 ]/g, "");
      var jumplinkCap = "#" + jumplinkspec.replaceAll(" ", "-");
      var jumplink = jumplinkCap.toLowerCase();
      console.log(menuselector + " ---> " + jumplink);
      newAnchor.setAttribute("href", jumplink);
      if (headingtest == 0) {
        newAnchor.setAttribute("class", "menuhead");
      } else if (elementtag == "H1") {
        newAnchor.setAttribute("class", "menu");
      } else {
        newAnchor.setAttribute("class", "submenu");
      }
      newAnchor.appendChild(newContent);
    }

    for (let i = 0; i < collection.length; i++) {
      const menuselector = collection.item(i).innerHTML;
      var headingtest = i;
      var elementtag = collection.item(i).tagName;

      addElement(menuselector);
    }
  })
  .then(function () {
    const checker = document.getElementsByClassName("sidenav");
    const menucheck = checker.item(0).innerHTML;
    if (menucheck == 0) {
      sidenav.classList.add("hideme");
      console.warn("Menu Blank -> Status: Hidden");
    } else {
      sidenav.classList.remove("hideme");
      console.warn("Menu Populated -> Status: Revealed");
    }
  });

//-----------------------------------------
//Sticky Menu Selector
//-----------------------------------------

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the sidenav
var sidenav = document.getElementById("sidenav");

// Get the offset position of the sidenav
var sticky = sidenav.offsetTop;

var stickyos = sticky + 825;

// Add the sticky class to the sidenav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= stickyos) {
    sidenav.classList.add("sticky");
  } else {
    sidenav.classList.remove("sticky");
  }
}
