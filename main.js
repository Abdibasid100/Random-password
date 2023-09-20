let PasswordBox = document.getElementById("password");
let length = 12;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Number = "0123456789";
const Symbols = "~!@#$%^&**()_<>+={}|,./";

const allchars = UpperCase + LowerCase + Number + Symbols;

function createpassword() {
  let password = "";
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += Number[Math.floor(Math.random() * Number.length)];
  password += Symbols[Math.floor(Math.random() * Symbols.length)];

  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  PasswordBox.value = password;
}

function copyPass() {
  PasswordBox.select();
  document.execCommand("copy");
}
