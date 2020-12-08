function generateKVP() {
  var txtName1 = document.getElementById("txtName1");
  var txtName2 = document.getElementById("txtName2");
  var txtOutput = document.getElementById("txtOutput");

  var name1 = txtName1.value;
  var name2 = txtName2.value;

  if (name2 === "") {
    txtOutput.value = "custom[" + name1 + "]";
  } else if (name2 !== "") {
    txtOutput.value = "custom[" + name1 + "]&custom[" + name2 + "]";
  }
}
