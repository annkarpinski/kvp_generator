function generateKVP() {
  var txtName = document.getElementById("txtName");
  var txtOutput = document.getElementById("txtOutput");

  var name = txtName.value;
  txtOutput.value = "custom[" + name + "]";
}
