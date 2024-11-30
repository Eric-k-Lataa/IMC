document.getElementById('calcular').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);
    
    if (peso > 0 && estatura > 0) {
        const imc = peso / (estatura * estatura);
        document.getElementById('resultado').innerText = `IMC: ${imc.toFixed(2)}`;
        
        // Determinar el color según el IMC
        const colorCode = document.getElementById('color-code');
        if (imc < 18.5) {
            colorCode.style.backgroundColor = 'lightblue'; // Bajo peso
        } else if (imc < 24.9) {
            colorCode.style.backgroundColor = 'lightgreen'; // Peso normal
        } else if (imc < 29.9) {
            colorCode.style.backgroundColor = 'yellow'; // Sobrepeso
        } else if (imc < 34.9) {
            colorCode.style.backgroundColor = 'orange'; // Obesidad I
        } else if (imc < 39.9) {
            colorCode.style.backgroundColor = 'darkorange'; // Obesidad II
        } else {
            colorCode.style.backgroundColor = 'red'; // Obesidad III
        }
    } else {
        alert('Por favor, ingresa valores válidos.');
    }
});