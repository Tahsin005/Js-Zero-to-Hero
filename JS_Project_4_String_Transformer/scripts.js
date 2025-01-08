const stringInput = document.querySelector('#string-input');


const lowerCaseEl = document.getElementById('lowercase');
const upperCaseEl = document.getElementById('uppercase');
const camelCaseEl = document.getElementById('camelcase');
const pascalCaseEl = document.getElementById('pascalcase');
const snakeCaseEl = document.getElementById('snakecase');
const kebabCaseEl = document.getElementById('kebabcase');
const titleCaseEl = document.getElementById('titlecase');
const trimEl = document.getElementById('trim');

const toCamelCase = (str) => {
    return str
        .split(' ')
        .map((word, index) =>
            index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
};
function transform({ text = stringInput.value.trim() }) {
    const camelCase = toCamelCase(text)

    lowerCaseEl.textContent = text.toLowerCase();
    upperCaseEl.textContent = text.toUpperCase();
    camelCaseEl.textContent = camelCase;
    pascalCaseEl.textContent = camelCase ? camelCase[0]?.toUpperCase() + camelCase.substring(1) : '';
    snakeCaseEl.textContent = text.split(' ').join('_');
    kebabCaseEl.textContent = text.split(' ').join('-');
    trimEl.textContent = text.split(' ').join('');
  }

stringInput.addEventListener('input', transform);