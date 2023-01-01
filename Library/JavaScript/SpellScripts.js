function showInput() {
  document.getElementById("SName_output").innerHTML =
    document.getElementById("SName_input").value;

  var SVarLvlType =
    "level " +
    document.getElementById("SL_input").value +
    "-" +
    " " +
    document.getElementById("SType_input").value;
  document.getElementById("SLvlType_output").innerHTML = SVarLvlType;

  document.getElementById("CT_output").innerHTML =
    document.getElementById("CT_input").value;

  document.getElementById("Range_output").innerHTML =
    document.getElementById("Range_input").value;

  document.getElementById("Comp_output").innerHTML =
    document.getElementById("Comp_input").value;

  document.getElementById("Dur_output").innerHTML =
    document.getElementById("Dur_input").value;

  document.getElementById("P1D_output").innerHTML =
    document.getElementById("P1D_input").value;

  document.getElementById("P2D_output").innerHTML =
    document.getElementById("P2D_input").value;

  document.getElementById("P3D_output").innerHTML =
    document.getElementById("P3D_input").value;

  document.getElementById("P4D_output").innerHTML =
    document.getElementById("P4D_input").value;

  document.getElementById("Class1_output").innerHTML =
    document.getElementById("Class1_input").value;
  document.getElementById("Class2_output").innerHTML =
    document.getElementById("Class2_input").value;
  document.getElementById("Class3_output").innerHTML =
    document.getElementById("Class3_input").value;
  document.getElementById("Class4_output").innerHTML =
    document.getElementById("Class4_input").value;
  document.getElementById("Class5_output").innerHTML =
    document.getElementById("Class5_input").value;
  document.getElementById("Class6_output").innerHTML =
    document.getElementById("Class6_input").value;
  document.getElementById("Class7_output").innerHTML =
    document.getElementById("Class7_input").value;
  document.getElementById("Source_output").innerHTML =
    document.getElementById("Source_input").value;
}
