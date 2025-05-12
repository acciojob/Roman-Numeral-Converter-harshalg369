// script.js
function convertToRoman() {
  const num = parseInt(document.getElementById("numberInput").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(num) || num < 0 || num > 100000) {
    resultDiv.textContent = "Please enter a number between 0 and 100000.";
    return;
  }

  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let roman = "";
  let i = 0;
  while (num > 0) {
    if (num >= romanMap[i][1]) {
      roman += romanMap[i][0];
      num -= romanMap[i][1];
    } else {
      i++;
    }
  }

  resultDiv.textContent = roman;
}