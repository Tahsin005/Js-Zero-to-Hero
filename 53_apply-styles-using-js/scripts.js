document.querySelector('h1').style.color = 'hotpink';
document.querySelector('h1').style.backgroundColor = 'pink';

const anchorTags = document.querySelectorAll('a');

anchorTags.forEach((anchor) => {
    anchor.style.color = 'teal';
});

for (const link of anchorTags) {
    // link.style.textDecoration = 'none';
    // link.style.fontWeight = '700';
    // link.style.fontFamily = 'cursive';

    // link.style.cssText = 'font-size: 18px; text-decoration-line: none; color: teal; font-family: cursive;'
    // link.className = 'green-link';
    link.classList.add('wavy-link');
    link.classList.toggle('green-link');
}