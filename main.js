const generateBtn = document.getElementById('generate');
const numbersDiv = document.querySelectorAll('.number');

generateBtn.addEventListener('click', () => {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    numbers.sort((a, b) => a - b);

    numbersDiv.forEach((numberDiv, index) => {
        numberDiv.textContent = numbers[index];
    });
});
