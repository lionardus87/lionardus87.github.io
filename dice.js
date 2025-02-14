document.getElementById('rollDice').addEventListener('click', function() {
    const numInput = document.getElementById('input').value;
    const randomNum = Math.floor(Math.random(numInput) * numInput + 1);
    if (numInput == 0 || numInput > 10 || numInput < 0){
        document.getElementById('output').textContent = 'Invalid number.';
    } else {
        document.getElementById('output').textContent = `Result: ${randomNum}`;
    }
});
