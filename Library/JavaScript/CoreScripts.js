//-----------------------------------------
//Menu Load
//-----------------------------------------
fetch("http://localhost:8080/Menu.html")
  .then(function (Mresponse) {
    // When the page is loaded convert it to text
    return Mresponse.text();
  })
  .then(function (MenuHTML) {
    // Initialize the DOM parser
    var parser = new DOMParser();

    // Parse the text
    var MenuDoc = parser.parseFromString(MenuHTML, "text/html");

    // You can now even select part of that html as you would in the regular DOM
    // Example:
    var MenuArticle = MenuDoc.querySelector("html").innerHTML;
    document.getElementById("Nav_output").innerHTML = MenuArticle;
    console.log(MenuDoc);
    console.log("Menu Loaded Successfully...");
  })
  .catch(function (err) {
    console.log("ERROR: Failed load menu bar: ", err);
  });

//-----------------------------------------
//Footer Load
//-----------------------------------------
fetch("http://localhost:8080/Footer.html")
  .then(function (Fresponse) {
    // When the page is loaded convert it to text
    return Fresponse.text();
  })
  .then(function (FooterHTML) {
    // Initialize the DOM parser
    var parser = new DOMParser();

    // Parse the text
    var FooterDoc = parser.parseFromString(FooterHTML, "text/html");

    // You can now even select part of that html as you would in the regular DOM
    // Example:
    var FooterArticle = FooterDoc.querySelector("html").innerHTML;
    document.getElementById("Ftr_output").innerHTML = FooterArticle;
    console.log(FooterDoc);
    console.log("Footer Loaded Successfully...");
  })
  .catch(function (err) {
    console.log("ERROR: Failed load footer: ", err);
  });

//-----------------------------------------
//iFrame Watcher
//-----------------------------------------

//get all buttons and iterate through them (not i have added a class to only get youtube buttons
document.querySelectorAll(".youtube").forEach((element) => {
  //add an event listener to each one
  element.addEventListener("click", (event) => {
    //prevent the default behaviour of the event (in this instance it would reload the page with url parameters set)
    event.preventDefault();
    //set the attribute src on the frame element to the target href (target being the a tag)
    document
      .getElementById("frame")
      .setAttribute("src", event.target.getAttribute("href"));
  });
});

//-----------------------------------------
//HTML2Canvas Columns
//-----------------------------------------

function takeshot() {
  document.getElementById("output").innerHTML = "";

  let div = document.getElementById("photo");

  // Use the html2canvas
  // function to take a screenshot
  // and append it
  // to the output div
  html2canvas(div).then(function (canvas) {
    document.getElementById("output").appendChild(canvas);
  });
}
