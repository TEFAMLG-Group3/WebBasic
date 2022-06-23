const namadepan = document.getElementById("fname");
const namaBelakang = document.getElementById("lname");
const mail = document.getElementById("email");
const country = document.getElementById("country");
const getAlert = document.getElementsByClassName("alertName");

const button = document.getElementsByClassName("button");
button[0].addEventListener("click", () => {
  let name = namadepan.value;
  let bn = namaBelakang.value;
  let em = mail.value;
  let co = country.value;
  document.getElementById("pID").innerHTML = `Your Name ${name} ${bn} your mail was ${em} and your country is ${co}`;
});