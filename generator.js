const length = document.getElementById("length").value;
const lowercase = document.getElementById("lower").checked;
const uppercase = document.getElementById("upper").checked;
const number = document.getElementById("number").checked;
const symbol = document.getElementById("symbol").checked;
let password = "";

function randomLowercase() {
  // lowercase : 97 - 122
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function randomUppercase() {
  // uppercase : 65 - 90
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function randomNumber() {
  // number : 48 - 57
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function randomSymbol() {
  const symbols = "!@#$&{}*?_";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function callRandomFunction(low, up, num, sym) {
  let random = Math.floor(Math.random() * 3 + 1);
  switch (random) {
    case 1:
      if (low) {
        password = password.concat(randomLowercase());
      }
      break;
    case 2:
      if (up) {
        password = password.concat(randomUppercase());
      }
      break;
    case 3:
      if (num) {
        password = password.concat(randomNumber());
      }
      break;
    case 4:
      if (sym) {
        password = password.concat(randomSymbol());
      }
      break;
  }
}

window.onload = function () {
  const btn = document.getElementById("generate");
  btn.onclick = generatePassword();
  function generatePassword() {
    for (let i = 0; i < 100; i++) {
      callRandomFunction(lowercase, uppercase, number, symbol);
    }
    password = password.substring(0, length);
    document.getElementById("password").innerHTML = password;
  }
};
