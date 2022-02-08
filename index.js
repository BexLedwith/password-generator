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

let password = "";

// for (let i = 0; i < passwordLength; i++) {
//     getRandomInt(4) === upperCode ? password +=
// }
btn.addEventListener("click", function () {
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  let randomUpper = upperCase[getRandomInt(upperCase.length)];
  let randomLower = upperCase[getRandomInt(upperCase.length)].toLowerCase();
  let randomSpecial = specialChars[getRandomInt(specialChars.length)];
  let randomNum = numbs[getRandomInt(numbs.length)];

  console.log(randomUpper);
  console.log(randomLower);
  console.log(randomSpecial);
  console.log(randomNum);
});
