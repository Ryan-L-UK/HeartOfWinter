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
//HTML2Canvas Columns
//-----------------------------------------

function takeshot() {
  document.getElementById("output").innerHTML = "";
  let div = document.getElementById("photo");
  html2canvas(div).then(function (canvas) {
    document.getElementById("output").appendChild(canvas);
  });
}

//-----------------------------------------
//Expandable Columns
//-----------------------------------------
var toggler = document.getElementsByClassName("expandable");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("expandable-down");
  });
}

function scrollTop() {
  console.log("Crew Generator Starting");
}
