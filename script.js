function convertToRoman(num) {
    // Define Roman numeral symbols and their values
    const romanSymbols = [
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
    
    let result = '';
    
    // Iterate through each symbol
    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    
    return result;
}

function convert() {
    const input = document.getElementById('numberInput');
    const output = document.getElementById('output');
    const num = parseInt(input.value);
    
    // Input validation
    if (isNaN(num)) {
        output.textContent = 'Please enter a valid number';
        return;
    }
    
    if (num < 0 || num > 100000) {
        output.textContent = 'Please enter a number between 0 and 100000';
        return;
    }
    
    // Convert and display result
    const romanNumeral = convertToRoman(num);
    output.textContent = romanNumeral;
}

// Add event listener for Enter key
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convert();
    }
});
