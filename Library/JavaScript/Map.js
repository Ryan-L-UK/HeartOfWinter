//-----------------------------------------
//Map Selector
//-----------------------------------------
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const Type = urlParams.get("Type");
console.log("Type: " + Type);

if (Type == "Location") {
  document
    .getElementById("mainmap")
    .setAttribute(
      "src",
      "../Sources/Faerun/Gullet Cove Map/Map Assets/00_City_Map.png"
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
      "../Sources/Faerun/Gullet Cove Map/Map Assets/00_District_Map.png"
    );
  document.getElementById("caption").innerHTML = "District Map of Gullet Cove";
  document
    .getElementById("mainmap")
    .setAttribute("usemap", "#gullet-districts");
}

console.log(
  "Image Map Loaded: " +
    document.getElementById("mainmap").getAttribute("usemap")
);
