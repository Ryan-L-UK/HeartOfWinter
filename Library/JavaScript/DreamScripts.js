function showInput() {
  let playername = document.getElementById("DName_input").value.toUpperCase();

  document.getElementById("DName_output").innerHTML = playername;

  document.getElementById("Desc1_output").innerHTML =
    document.getElementById("Desc1_input").value;

  document.getElementById("Desc2_output").innerHTML =
    document.getElementById("Desc2_input").value;

  document.getElementById("Desc3_output").innerHTML =
    document.getElementById("Desc3_input").value;

  document.getElementById("Desc4_output").innerHTML =
    document.getElementById("Desc4_input").value;
}
