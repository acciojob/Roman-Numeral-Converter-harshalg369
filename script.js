function convertToRoman() {
  const num = parseInt(document.getElementById("numberInput").value);
  const output = document.getElementById("output");

  if (isNaN(num) || num < 1 || num > 100000) {
    output.textContent = "Please enter a number between 1 and 100000.";
    output.style.color = "red";
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

  let result = "";
  let number = num;

  for (let [symbol, value] of romanMap) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }

  output.textContent = `Roman numeral: ${result}`;
  output.style.color = "green";
}
