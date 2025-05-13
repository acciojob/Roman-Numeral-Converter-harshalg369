function convertToRoman() {
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput, 10);
    const result = document.getElementById('result');

    if (isNaN(number) || number < 1 || number > 100000) {
        result.textContent = "Please enter a number between 1 and 100000";
        return;
    }

    const romanNumerals = [
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

    let romanNumber = '';
    let num = number;

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i][1]) {
            romanNumber += romanNumerals[i][0];
            num -= romanNumerals[i][1];
        }
    }

    result.textContent = romanNumber;
}

// Enable Enter key for conversion
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertToRoman();
    }
});
