//-----------------------------------------
//Adventure Placeholder
//-----------------------------------------
fetch("http://localhost:8080/Sources/Adventures/Adv 0.0 Placeholder.html")
  .then(function (Aresponse) {
    // When the page is loaded convert it to text
    return Aresponse.text();
  })
  .then(function (AdvHTML) {
    // Initialize the DOM parser
    var parser = new DOMParser();

    // Parse the text
    var AdvDoc = parser.parseFromString(AdvHTML, "text/html");

    // You can now even select part of that html as you would in the regular DOM
    // Example:
    var AdvArticle = AdvDoc.querySelector("html").innerHTML;
    document.getElementById("Adv_output").innerHTML = AdvArticle;
    console.log(AdvDoc);
    console.log("Adventure Splash Loaded Successfully...");
  })
  .catch(function (err) {
    console.log("ERROR: Failed to load splash: ", err);
  });

//-----------------------------------------
//Adventure Selector
//-----------------------------------------

document.querySelectorAll(".adv").forEach((element) => {
  //add an event listener to each one
  element.addEventListener("click", (event) => {
    //prevent the default behaviour of the event (in this instance it would reload the page with url parameters set)
    event.preventDefault();
    //set the attribute src on the frame element to the target href (target being the a tag)
    AdvOut = event.target.getAttribute("href");
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
  });
});
