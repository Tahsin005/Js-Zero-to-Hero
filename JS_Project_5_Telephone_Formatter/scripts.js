const numberInput = document.querySelector('#number-input');
const formattedOutput = document.querySelector('#formatted-output');

const transform = (e) => {
    let string = e.target.value.toString();
    let finalString = '';

    if (string.length >= 4) {
        finalString += '+(';
        finalString += string.substr(0, 3);
        finalString += ') - ';
        finalString += string.substr(3, string.length);
        formattedOutput.textContent = finalString;
    } else {

        formattedOutput.textContent = e.target.value;
    }


}

numberInput.addEventListener('input', transform);