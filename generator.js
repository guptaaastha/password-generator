const length1 = document.getElementById("length");
const lower1 = document.getElementById("lower");
const upper1 = document.getElementById("upper");
const num1 = document.getElementById("number");
const sym1 = document.getElementById("symbol");
const result = document.getElementById("password");

var generatedPassword = "";

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
  return symbols.charAt(Math.floor(Math.random() * symbols.length));
}

function callRandomFunction(low, up, num, sym) {
  let random = Math.floor(Math.random() * 4 + 1);
  switch (random) {
    case 1:
      if (low) {
        generatedPassword += randomLowercase();
      }
      break;
    case 2:
      if (up) {
        generatedPassword += randomUppercase();
      }
      break;
    case 3:
      if (num) {
        generatedPassword += randomNumber();
      }
      break;
    case 4:
      if (sym) {
        generatedPassword += randomSymbol();
      }
      break;
  }
}

function generatePassword(l, u, n, s, len) {
  for (let i = 0; i < 100; i++) {
    callRandomFunction(l, u, n, s, len);
  }
  generatedPassword = generatedPassword.substring(0, len);
  console.log(generatedPassword);
  return generatedPassword;
}

generate.addEventListener("click", () => {
  const length = length1.value;
  const lowercase = lower1.checked;
  const uppercase = upper1.checked;
  const number = num1.checked;
  const symbol = sym1.checked;

  result.innerText = generatePassword(
    lowercase,
    uppercase,
    number,
    symbol,
    length
  );
});
