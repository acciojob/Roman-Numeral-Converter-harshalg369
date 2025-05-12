function convertToRoman(num) {
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

    if (isNaN(num)) {
        output.textContent = 'Please enter a valid number.';
        return;
    }

    // Traditional Roman numerals range
    if (num <= 0 || num > 3999) {
        output.textContent = 'Enter a number between 1 and 3999 (traditional Roman numeral limit).';
        return;
    }

    const romanNumeral = convertToRoman(num);
    output.textContent = romanNumeral;
}

// Trigger convert on pressing Enter
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convert();
    }
});
