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

//-----------------------------------------
//Adventure Selector
//-----------------------------------------
function showInput() {
  function checkadv(adventure) {
    var advresult = "";
    var lookup = {
      "": "Error",
      "Adv 1.1": "../Assets/Adventures/Adv 1.1 A Gullet Cove Hello.html",
      "Adv 2.1": "../Assets/Adventures/Adv 2.1 The Tainted Catnip.html",
      "Adv 2.2": "../Assets/Adventures/Adv 2.2 Quest For Atonement.html",
      "Adv 3.1": "../Assets/Adventures/Adv 3.1 The Sleep Of The Dreamless.html",
      "Adv 3.2": "../Assets/Adventures/Adv 3.2 Solstice Shenanigans.html",
      "Adv 4.1": "../Assets/Adventures/Adv 4.1 The Brink Of War.html",
      "Adv 4.2": "../Assets/Adventures/TBC",
    };
    advresult = lookup[adventure];
    console.log(advresult);
    AdvOut = advresult;
  }

  checkadv(document.getElementById("Adv_input").value);
  document.getElementById("frame").setAttribute("src", AdvOut);

  function checkheight(height) {
    var heightresult = "";
    var lookup = {
      "": "Error",
      "Adv 1.1": "2700px",
      "Adv 2.1": "5850px",
      "Adv 2.2": "6750px",
      "Adv 3.1": "5200px",
      "Adv 3.2": "9300px",
      "Adv 4.1": "5000px",
      "Adv 4.2": "5000px",
    };
    heightresult = lookup[height];
    console.log(heightresult);
    HeightOut = heightresult;
  }

  checkheight(document.getElementById("Adv_input").value);
  document.getElementById("frame").setAttribute("height", HeightOut);
}
