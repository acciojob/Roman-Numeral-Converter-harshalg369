function convertToRoman() {
    const input = parseInt(document.getElementById('numberInput').value);
    if (isNaN(input) || input < 0 || input > 100000) {
        document.getElementById('result').textContent = "Please enter a valid number (0-100000).";
        return;
    }

    const romanNumerals = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let result = '';
    for (const [symbol, value] of romanNumerals) {
        while (input >= value) {
            result += symbol;
            input -= value;
        }
    }

    document.getElementById('result').textContent = result;
}
