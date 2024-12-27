const h1 = document.querySelector('h1');

window.addEventListener('keypress', (e) => {
    console.log(e.code);
    console.log(e.key);
});
window.addEventListener('keyup', (e) => {
    console.log(e.code);
    console.log(e.key);
});
window.addEventListener('keydown', (e) => {
    console.log(e.code);
    console.log(e.key);
});

// If we change the language, the code will remain the same but the key(value) would change.