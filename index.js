const btn = document.getElementById("btn");
const password1 = document.getElementById("p1");
const password2 = document.getElementById("p2");
const password3 = document.getElementById("p3");
const password4 = document.getElementById("p4");

// use map function to create alphabet array

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upperCase = alpha.map((x) => String.fromCharCode(x));
const specialChars = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "}",
  "|",
  ":",
  ";",
  "'",
  '"',
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];

const numbs = [...Array(10).keys()];

// get password length from input
const passwordInput = document.getElementById("pass-length");
// generate 4 random password options:
const upperCode = 0;
const lowerCode = 1;
const specialCode = 2;
const numbCode = 3;

const getRandomInt = (max) => Math.floor(Math.random() * max);

btn.addEventListener("click", function () {
  let passwordLength = passwordInput.valueAsNumber;

  let password = "";
  let passwordArr = [];

  let i = 0;
  do {
    i += 1;
    for (let i = 0; i < passwordLength; i++) {
      getRandomInt(4) === upperCode
        ? (password += upperCase[getRandomInt(upperCase.length)])
        : getRandomInt(4) === lowerCode
        ? (password += upperCase[getRandomInt(upperCase.length)].toLowerCase())
        : getRandomInt(4) === specialCode
        ? (password += specialChars[getRandomInt(specialChars.length)])
        : (password += numbs[getRandomInt(numbs.length)]);
    }
    passwordArr.push(password);
    password = "";
  } while (i < 4);
  password1.innerHTML =
    passwordArr[0] +
    `<span class="tooltiptext">Copy <br>${passwordArr[0]}<br> to clipboard </span>`;
  password2.innerHTML =
    passwordArr[1] +
    `<span class="tooltiptext">Copy <br>${passwordArr[1]}<br> to clipboard </span>`;
  password3.innerHTML =
    passwordArr[2] +
    `<span class="tooltiptext">Copy <br>${passwordArr[2]}<br> to clipboard </span>`;
  password4.innerHTML =
    passwordArr[3] +
    `<span class="tooltiptext">Copy <br>${passwordArr[3]}<br> to clipboard </span>`;
});

// copy to the clipboard

password1.addEventListener("click", function () {
  copy(password1);
});
password2.addEventListener("click", function () {
  copy(password2);
});
password3.addEventListener("click", function () {
  copy(password3);
});
password4.addEventListener("click", function () {
  copy(password4);
});

function copy(password) {
  /*Copy the text inside the text */
  const passwordText = password.innerText;
  const textArea = document.createElement("textarea");
  document.body.appendChild(textArea);
  textArea.value = passwordText;
  textArea.select();
  textArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(textArea);
  console.log(passwordText);
  console.log(password);
}
