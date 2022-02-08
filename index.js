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
console.log(upperCase);
console.log(specialChars);
console.log(numbs);

// generate 4 random password options:
let passwordLength = 13;
const upperCode = 0;
const lowerCode = 1;
const specialCode = 2;
const numbCode = 3;

const getRandomInt = (max) => Math.floor(Math.random() * max);

btn.addEventListener("click", function () {
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
  password1.textContent = passwordArr[0];
  password2.textContent = passwordArr[1];
  password3.textContent = passwordArr[2];
  password4.textContent = passwordArr[3];
});
