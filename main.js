const generateBtn = document.getElementById('generate');
const resultsDiv = document.getElementById('results');

function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers.sort((a, b) => a - b);
}

generateBtn.addEventListener('click', () => {
    resultsDiv.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const numbers = generateLottoNumbers();
        const row = document.createElement('div');
        row.className = 'numbers';
        numbers.forEach(num => {
            const span = document.createElement('span');
            span.className = 'number';
            span.textContent = num;
            row.appendChild(span);
        });
        resultsDiv.appendChild(row);
    }
});
