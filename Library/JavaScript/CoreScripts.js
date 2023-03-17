//-----------------------------------------
//Menu Load
//-----------------------------------------
console.log("Wizard: Summoning menu...");
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
    console.log("Wizard: Menu Appeared.");
  })
  .catch(function (err) {
    console.log("Wizard: Casting Failure... ", err);
  });

//-----------------------------------------
//Footer Load
//-----------------------------------------
fetch("http://localhost:8080/Footer.html")
  .then(function (Fresponse) {
    console.log("Wizard: Summoning footer...");
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
    console.log("Wizard: Footer Appeared.");
  })
  .catch(function (err) {
    console.log("Wizard: Casting Failure... ", err);
  });

//-----------------------------------------
//HTML2Canvas Columns
//-----------------------------------------

function takeshot() {
  /* console.log("Artificier: Taking Notes...");
  document.getElementById("output").innerHTML = "";
  let div = document.getElementById("photo");
  html2canvas(div).then(function (canvas) {
    document.getElementById("output").appendChild(canvas);
    var a = document.createElement("a");
    // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
    a.href = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    a.download = document.getElementById("Name-in").value + ".png";
    a.click();
  });
*/
  console.log("Artificier: Notes Taken.");
}

//-----------------------------------------
//COLLAPSABLE CONTAINERS
//-----------------------------------------
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//-----------------------------------------
//DATA CLEANSER
//-----------------------------------------
function datacleanse(rawdata) {
  var datacleanse = JSON.stringify(rawdata)
    .replace(/\[/g, "")
    .replace(/\]/g, "")
    .replace(/\\/g, "")
    .replace(/\{@atk mw,rw\}/g, "Melee or Ranged Weapon Attack:")
    .replace(/\{@atk mw\}/g, "Melee Weapon Attack:")
    .replace(/\{@atk rw\}/g, "Ranged Weapon Attack:")
    .replace(/\{@atk rs\}/g, "Ranged Spell Attack:")
    .replace(/\{@hit/g, "+")
    .replace(/\{@h\}/g, "Hit: ")
    .replace(/\{@damage /g, "")
    .replace(/\{@dice /g, "")
    .replace(/\{@dc/g, "DC")
    .replace(/\{@condition /g, "")
    .replace(/\{@spell /g, "")
    .replace(/\{@scaledamage.*\|.*\|/g, "")
    .replace(/\{@quickref /g, "")
    .replace(/\{@item /g, "")
    .replace(/, immune\[/, "; ")
    .replace(/, note/, " ")
    .replace(/, condtrue/, "")
    .replace(/\{@/g, "")
    .replace(/\|XGE/g, "")
    .replace(/\|phb}/g, "")
    .replace(/,/g, ", ")
    .replace(/"/g, "")
    .replace(/:/g, "")
    .replace(/\+/g, " +")
    .replace(/\|.*\|/g, "")
    .replace(/\|/g, "")
    .replace(/\{/g, "")
    .replace(/\}/g, "");
  return datacleanse;
}
