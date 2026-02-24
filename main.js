const generateBtn = document.getElementById('generate');
const resultsDiv = document.getElementById('results');
const toggleBtn = document.getElementById('toggle-theme');

// Theme toggle logic
let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateToggleText(currentTheme);

toggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateToggleText(currentTheme);
});

function updateToggleText(theme) {
    toggleBtn.textContent = theme === 'light' ? '다크 모드' : '라이트 모드';
}

function getNumberColorClass(num) {
    if (num <= 10) return 'bg-yellow';
    if (num <= 20) return 'bg-blue';
    if (num <= 30) return 'bg-red';
    if (num <= 40) return 'bg-gray';
    return 'bg-green';
}

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
            span.className = `number ${getNumberColorClass(num)}`;
            span.textContent = num;
            row.appendChild(span);
        });
        resultsDiv.appendChild(row);
    }
});
