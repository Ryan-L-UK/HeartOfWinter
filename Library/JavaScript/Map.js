//-----------------------------------------
//Map Watcher
//-----------------------------------------
/*
//get all buttons and iterate through them (not i have added a class to only get youtube buttons
document.querySelectorAll(".mapbutton").forEach((element) => {
  //add an event listener to each one
  element.addEventListener("click", (event) => {
    //prevent the default behaviour of the event (in this instance it would reload the page with url parameters set)
    event.preventDefault();
    //set the attribute src on the frame element to the target href (target being the a tag)
    document
      .getElementById("frame")
      .setAttribute("src", event.target.getAttribute("href"));
    document
      .getElementById("frame")
      .setAttribute("height", event.target.getAttribute("size"));
  });
});
*/

//get all buttons and iterate through them (not i have added a class to only get youtube buttons
document.querySelectorAll(".mapbutton").forEach((element) => {
  //add an event listener to each one
  element.addEventListener("click", (event) => {
    //prevent the default behaviour of the event (in this instance it would reload the page with url parameters set)
    event.preventDefault();

    fetch(event.target.getAttribute("href"))
      .then(function (Lresponse) {
        // When the page is loaded convert it to text
        return Lresponse.text();
      })
      .then(function (LocationHTML) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var LocationDoc = parser.parseFromString(LocationHTML, "text/html");

        // You can now even select part of that html as you would in the regular DOM
        // Example:
        var LocationArticle = LocationDoc.querySelector("html").innerHTML;
        document.getElementById("Loc_output").innerHTML = LocationArticle;
        console.log(LocationDoc);
        console.log("Location Loaded Successfully...");
      })
      .catch(function (err) {
        console.log("ERROR: Location failed to load: ", err);
      });
  });
});
