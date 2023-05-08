//-----------------------------------------
//Map Selector
//-----------------------------------------
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const Type = urlParams.get("Type");
console.log("Cartographer: This is a " + Type + " map.");

if (Type == "Location") {
  document
    .getElementById("mainmap")
    .setAttribute(
      "src",
      "../Sources/Faerun/Gullet Cove Map/Location/00_City_Map.jpeg"
    );
  document.getElementById("caption").innerHTML =
    "Map of the City of Gullet Cove";
  document
    .getElementById("mainmap")
    .setAttribute("usemap", "#gullet-locations");
} else {
  document
    .getElementById("mainmap")
    .setAttribute(
      "src",
      "../Sources/Faerun/Gullet Cove Map/District/00_District_Map.jpg"
    );
  document.getElementById("caption").innerHTML = "District Map of Gullet Cove";
  document
    .getElementById("mainmap")
    .setAttribute("usemap", "#gullet-districts");
}

console.log(
  "Cartographer: " +
    document.getElementById("mainmap").getAttribute("usemap") +
    " map located."
);
