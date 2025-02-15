function randomNum(faces){
    return Math.floor(Math.random() * faces) + 1;
}

document.getElementById('rollDice').addEventListener('click', function() {
    const diceSelect = document.getElementById('diceface')
    const faces = diceSelect.value
    const result = randomNum(faces)
    document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('result').textContent = 'Result: ';
    document.getElementById('diceface').value = '6';
});