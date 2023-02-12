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
  document
    .getElementById("mainmap")
    .setAttribute("usemap", "#gullet-locations");
} else {
  document
    .getElementById("mainmap")
    .setAttribute("src", "../Sources/Gullet Cove Map/GC_District_Map.png");
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
  });
