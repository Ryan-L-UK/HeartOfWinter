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
  document.getElementById("frame").setAttribute("src", AdvOut);

  function checkheight(height) {
    var heightresult = "";
    var lookup = {
      "": "Error",
      "Adv 1.1 A Gullet Cove Hello": "2800px",
      "Adv 2.1 The Tainted Catnip": "5850px",
      "Adv 2.2 Quest For Atonement": "6750px",
      "Adv 3.1 The Sleep Of The Dreamless": "5200px",
      "Adv 3.2 Solstice Shenanigans": "9300px",
      "Adv 4.1 The Brink Of War": "5000px",
      "Adv 4.1 The Brink Of War": "5000px",
    };
    heightresult = lookup[height];
    console.log(heightresult);
    HeightOut = heightresult;
  }

  checkheight(document.getElementById("Adv_input").value);
  document.getElementById("frame").setAttribute("height", HeightOut);
}
