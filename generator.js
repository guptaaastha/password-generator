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

// to call random generator functions of the types
const callRandomFunction = {
  lower: randomLowercase,
  upper: randomUppercase,
  number: randomNumber,
  symbol: randomSymbol,
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const countTypes = lower + upper + number + symbol;
  const arrayTypes = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  // nothing has been selected
  if (countTypes === 0) {
    return "";
  }

  // create a loop to go through all the selected types
  for (let i = 0; i < length; i += countTypes) {
    arrayTypes.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += callRandomFunction[funcName]();
    });
  }

  const theGeneratedPassword = generatedPassword.slice(0, length);

  return theGeneratedPassword;
}

generate.addEventListener("click", () => {
  // getting status of checkboxes and value of length
  const length = length1.value;
  const lowercase = lower1.checked;
  const uppercase = upper1.checked;
  const number = num1.checked;
  const symbol = sym1.checked;

  if (length < 1 || length > 20) {
    alert("The length of password should be between 1 and 20 (inclusive)");
  } else {
    result.innerText = generatePassword(
      lowercase,
      uppercase,
      number,
      symbol,
      length
    );
  }
});

clipboard.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  // pw refers to the generatedPassword
  const pw = result.innerText;

  if (!pw) {
    return;
  }

  textarea.value = pw;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
