//calcular

const display = document.getElementById('display');

// Adiciona valor ao display
const appendToDisplay = (value) => {
    display.value += value;
}

// Limpa o display
const clearDisplay = () => {
    display.value = '';
}
// Calcula o resultado
const calculate = () => {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

