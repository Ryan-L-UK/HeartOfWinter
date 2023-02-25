//-----------------------------------------
//Adventure Selector
//-----------------------------------------

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const Adv = urlParams.get("Adventure");
console.log(Adv);

var AdvOut = "";
AdvOut = "http://localhost:8080/Sources/Adventures/" + Adv + ".html";
console.log(AdvOut);

fetch(AdvOut)
  .then(function (Lresponse) {
    // When the page is loaded convert it to text
    return Lresponse.text();
  })
  .then(function (AdventureHTML) {
    // Initialize the DOM parser
    var parser = new DOMParser();

    // Parse the text
    var AdventureDoc = parser.parseFromString(AdventureHTML, "text/html");

    // You can now even select part of that html as you would in the regular DOM
    // Example:
    var AdventureArticle = AdventureDoc.querySelector("html").innerHTML;
    document.getElementById("Adv_output").innerHTML = AdventureArticle;
    console.log(AdventureDoc);
    console.log("Adventure Loaded Successfully...");
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
