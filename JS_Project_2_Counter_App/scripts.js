const incrementBtn = document.querySelector('#increment-btn');
const decrementBtn = document.querySelector('#decrement-btn');
const resetBtn = document.querySelector('#reset-btn');
const inputValue = document.querySelector('#counter-input');
const currentValue = document.querySelector('#current-value');

const updateValue = (operation) => {
    const inp_value = parseInt(inputValue.value) || 0;
    let current = parseInt(currentValue.textContent) || 0;

    if (operation === 'increment') {
        currentValue.textContent = current + inp_value;
    } else if (operation === 'decrement') {
        currentValue.textContent = current - inp_value;
    } else if (operation === 'reset') {
        currentValue.textContent = 0;
    }
};

incrementBtn.addEventListener('click', () => updateValue('increment'));
decrementBtn.addEventListener('click', () => updateValue('decrement'));
resetBtn.addEventListener('click', () => updateValue('reset'));
