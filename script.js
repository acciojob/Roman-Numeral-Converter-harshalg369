function convertToRoman() {
  const input = document.getElementById("numberInput").value;
  const num = parseInt(input);

  if (num <= 0 || num > 100000) {
    document.getElementById("output").textContent = "Enter a number between 1 and 100000";
    return;
  }

  const romanMap = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";
  let tempNum = num;

  for (let i = 0; i < romanMap.length; i++) {
    const [symbol, value] = romanMap[i];
    while (tempNum >= value) {
      result += symbol;
      tempNum -= value;
    }
  }

  document.getElementById("output").textContent = result;
}
