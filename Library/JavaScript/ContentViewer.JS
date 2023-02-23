//-----------------------------------------
//Map Selector
//-----------------------------------------
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const Type = urlParams.get("Type");
const FileName = urlParams.get("FileName");
console.log(
  "Librarians: Looking in the '" + Type + "' section, for '" + FileName + "'"
);

if (Type == "Location") {
  var ContentView = "Faerun/Gullet Cove Map/Location/" + FileName;
} else if (Type == "District") {
  var ContentView = "Faerun/Gullet Cove Map/District/" + FileName;
} else if (Type == "Faerun") {
  var ContentView = "Faerun/" + FileName + "/" + FileName;
} else if (Type == "Item") {
  var ContentView = "Magic Items/" + FileName;
} else if (Type == "Ruleset") {
  var ContentView = "Rules/" + FileName;
} else {
  console.error("Shes Dead Jim");
}

var ContentViewOut = "";
ContentViewOut = "http://localhost:8080/Sources/" + ContentView + ".html";

fetch(ContentViewOut)
  .then(function (Lresponse) {
    // When the page is loaded convert it to text
    return Lresponse.text();
  })
  .then(function (ContentViewHTML) {
    // Initialize the DOM parser
    var parser = new DOMParser();

    // Parse the text
    var ContentViewDoc = parser.parseFromString(ContentViewHTML, "text/html");

    // You can now even select part of that html as you would in the regular DOM
    // Example:
    var ContentViewArticle = ContentViewDoc.querySelector("html").innerHTML;
    document.getElementById("Content_output").innerHTML = ContentViewArticle;
  })
  .catch(function (err) {
    console.log(
      "Librarians: If it is not in our records, it does not exist. ",
      err
    );
  })

  //-----------------------------------------
  //Menu Creator Selector
  //-----------------------------------------

  .then(function () {
    console.warn("Sourceror: Constructing Menu...");
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
      console.log(elementtag + ": " + menuselector + " ---> " + jumplink);
      newAnchor.setAttribute("href", jumplink);
      if (headingtest == 0) {
        newAnchor.setAttribute("class", "menuhead");
        newAnchor.setAttribute("href", "#top");
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
    console.warn("Sourceror: Menu Constructed.");
  })
  .then(function () {
    const checker = document.getElementsByClassName("sidenav");
    const menucheck = checker.item(0).innerHTML;
    if (menucheck == 0) {
      sidenav.classList.add("hideme");
      console.warn("Menu Blank -> Status: Hidden");
    } else {
      sidenav.classList.remove("hideme");
      console.log("Menu Populated -> Status: Revealed");
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

var stickyos = sticky - 70;

// Add the sticky class to the sidenav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= stickyos) {
    console.log("Sourceror: Menu Locked...");
    sidenav.classList.add("sticky");
  } else {
    sidenav.classList.remove("sticky");
    console.log("Sourceror: Menu Unlocked...");
  }
}
