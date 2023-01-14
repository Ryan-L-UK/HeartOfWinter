//-----------------------------------------
//Adventure Selector
//-----------------------------------------
function showInput() {
  function checkadv(adventure) {
    var advresult = "";
    var lookup = {
      "": "Error",
      "Adv 1.1 A Gullet Cove Hello":
        "http://localhost:8080/Sources/Adventures/Adv 1.1 A Gullet Cove Hello.html",
      "Adv 2.1 The Tainted Catnip":
        "http://localhost:8080/Sources/Adventures/Adv 2.1 The Tainted Catnip.html",
      "Adv 2.2 Quest For Atonement":
        "http://localhost:8080/Sources/Adventures/Adv 2.2 Quest For Atonement.html",
      "Adv 3.1 The Sleep Of The Dreamless":
        "http://localhost:8080/Sources/Adventures/Adv 3.1 The Sleep Of The Dreamless.html",
      "Adv 3.2 Solstice Shenanigans":
        "http://localhost:8080/Sources/Adventures/Adv 3.2 Solstice Shenanigans.html",
      "Adv 4.1 The Brink Of War":
        "http://localhost:8080/Sources/Adventures/Adv 4.1 The Brink Of War.html",
      "Adv 4.2": "http://localhost:8080/Sources/Adventures/TBC",
    };
    advresult = lookup[adventure];
    console.log(advresult);
    AdvOut = advresult;
  }
  checkadv(document.getElementById("Adv_input").value);
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
}
