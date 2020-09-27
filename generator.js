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
  // generate a random case from the possible ones
  let random = Math.floor(Math.random() * 4 + 1);
  switch (random) {
    case 1:
      if (low) {
        generatedPassword += randomLowercase();
        // adds the newly generated random letter in the generated password variable
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
  // creates a sufficiently long generated password
  for (let i = 0; i < 100; i++) {
    callRandomFunction(l, u, n, s, len);
  }
  generatedPassword = generatedPassword.substring(0, len);
  // make generated password to the desired length
  return generatedPassword;
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
