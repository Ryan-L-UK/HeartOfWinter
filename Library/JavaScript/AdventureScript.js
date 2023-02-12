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
    console.log("ERROR: Adventure failed to load: ", err);
  });
