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

//-----------------------------------------
//HTML2Canvas Columns
//-----------------------------------------

function takeshot() {
  let div = document.getElementById("photo");

  // Use the html2canvas
  // function to take a screenshot
  // and append it
  // to the output div
  html2canvas(div).then(function (canvas) {
    document.getElementById("output").appendChild(canvas);
  });
}

//-----------------------------------------
//Testing Download
//-----------------------------------------
