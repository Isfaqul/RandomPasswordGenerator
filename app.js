const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const checkSymbol = document.getElementById("symbol");
const checkNumber = document.getElementById("number");
const generateButton = document.getElementById("password-btn");
const passwordLength = document.getElementById("length");
const password1El = document.getElementById("pwd-1");
const password2El = document.getElementById("pwd-2");
const outputContainerEl = document.querySelectorAll(".password-output");

// --------------- Event Listeners ---------------

generateButton.addEventListener("click", displayPassword);

for (let i = 0; i < outputContainerEl.length; i++) {
  outputContainerEl[i].addEventListener("click", copy);
}

// --------------- Functions ---------------

// Checks if the user wants to include numbers or symbols
function symbolNumberCheck() {
  let newArray;
  if (checkSymbol.checked && checkNumber.checked) {
    newArray = characters;
    return newArray;
  } else if (checkNumber.checked) {
    newArray = characters.slice(0, 62);
    return newArray;
  } else if (checkSymbol.checked) {
    newArray = characters.slice(0, 52).concat(characters.slice(62, 91));
    return newArray;
  } else {
    newArray = characters.slice(0, 52);
    return newArray;
  }
}

// Validates the password length
function validateForm(length) {
  length = Number(passwordLength.value);

  if (length < 8) {
    alert("password must be at least 8 characters long");
    return false;
  } else if (length > 15) {
    alert("password should not be more than 15 characters long");
    return false;
  } else {
    return true;
  }
}

// Selects Random Characters from Charset
function selectRandomChar(charSet) {
  charSet = symbolNumberCheck();
  let randomIndex = Math.floor(Math.random() * charSet.length);
  let char = charSet[randomIndex];
  return char;
}

// Generates the password string
function generatePassword(length) {
  length = Number(passwordLength.value);
  let password = "";

  for (let i = 0; i < length; i++) {
    randomChar = selectRandomChar();
    password += randomChar;
  }
  return password;
}

// Displays the generated passwords
function displayPassword(e) {
  e.preventDefault(); // prevents default submitting behavior of the form

  if (validateForm()) {
    password1El.innerText = generatePassword();
    password2El.innerText = generatePassword();
  } else {
    password1El.innerText = "-";
    password2El.innerText = "-";
  }
}

// Copy functions
function copy(event) {
  let copiedText = event.target.innerText;
  if (copiedText === "-") {
    return;
  } else {
    navigator.clipboard.writeText(copiedText);
    alert("Password copied!");
  }
}
