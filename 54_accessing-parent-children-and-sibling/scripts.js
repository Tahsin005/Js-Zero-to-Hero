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

// Access the <h2> tag with custom attribute ferdous
const h2Element = document.querySelector('[ferdous="Tahsin"]');
console.log("H2 Element:", h2Element);

// Access the parent of the <h2> element
const parentOfH2 = h2Element.parentElement;
console.log("Parent of H2:", parentOfH2);

// Access the next sibling of <h2>
const nextSiblingOfH2 = h2Element.nextElementSibling;
console.log("Next Sibling of H2:", nextSiblingOfH2);

// Access the <ul> element and its first child
const ulElement = document.querySelector("ul");
const firstChildOfUl = ulElement.firstElementChild;
console.log("UL Element:", ulElement);
console.log("First Child of UL:", firstChildOfUl);

// Access all child nodes of the <ul>
const childrenOfUl = ulElement.children;
console.log("Children of UL:", childrenOfUl);

// Access the previous sibling of <ul>
const previousSiblingOfUl = ulElement.previousElementSibling;
console.log("Previous Sibling of UL:", previousSiblingOfUl);

// Access a specific element by its ID (e.g., the JavaScript image)
const jsImage = document.getElementById("js-image");
console.log("JS Image:", jsImage);

// Access the parent of the JS image
const parentOfJsImage = jsImage.parentElement;
console.log("Parent of JS Image:", parentOfJsImage);

// Access all siblings of the CSS image (id="css-image")
const cssImage = document.getElementById("css-image");
const siblings = [...cssImage.parentElement.children].filter(
  (child) => child !== cssImage
);
console.log("Siblings of CSS Image:", siblings);

// Find the last child of the ordered list (JavaScript Frameworks)
const olJavaScript = ulElement.querySelector("li:nth-child(3) ol");
const lastChildOfOl = olJavaScript.lastElementChild;
console.log("Last Child of Ordered List:", lastChildOfOl);
