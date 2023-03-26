//-----------------------------------------
//Menu Load
console.log("Wizard: Summoning menu...");
fetch("http://localhost:8080/Library/Components/Menu.html")
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
fetch("http://localhost:8080/Library/Components/Footer.html")
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
function takeshot() {
  console.log("Artificier: Taking Notes...");
  document.getElementById("output").innerHTML = "";
  let div = document.getElementById("photo");
  html2canvas(div).then(function (canvas) {
    document.getElementById("output").appendChild(canvas);
    var a = document.createElement("a");
    // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
    a.href = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    a.download = document.getElementById("name").value + ".png";
    a.click();
  });
  console.log("Artificier: Notes Taken.");
}
//-----------------------------------------
//COLLAPSABLE CONTAINERS
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
//SORT TABLE
function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

//-----------------------------------------
//TABLE FILTER
function tableFilter() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//-----------------------------------------
//DATA CLEANSER
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
    .replace(/\{@italic /g, "")
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
