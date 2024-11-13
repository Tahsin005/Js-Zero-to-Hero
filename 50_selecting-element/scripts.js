function changeImage() {
    document.body.children[4].src = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8='
}

// changeImage()


// const allImages = document.images;
// const allImages = document.getElementsByTagName('img');

// const cssImage = document.getElementsByClassName('css-image');
// const cssImage = document.getElementById('css-image');
// const cssImage = document.querySelector('#css-image');
const cssImage = document.querySelector('.css-image');

console.log(cssImage);


// const jsImage = document.querySelector('#js-image');
const jsImage = document.querySelector('[alt="javascript roadmap"]'); // attribute selector

console.log(jsImage);

// const li = document.querySelector('ul li');
const li = document.querySelectorAll('ul li');

console.dir(li);

const ul = document.querySelector('ul')

const allImages = document.querySelectorAll('img')

const imageInsideUl = ul.querySelector('.css-image') // if we query select on particular element, than the query would be limited to that element instead of the whole document

const imagesUrl = [
    'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=',
]

// allImages[0].src = imagesUrl[0]
// allImages[1].src = imagesUrl[1]
// allImages[2].src = imagesUrl[2]

// for (let i = 0; i < allImages.length; i++) {
//     allImages[i].src = imagesUrl[i]
// }

allImages.forEach((image, i) => {
    image.src = imagesUrl[i]
})

// can perform looping on nodelist, but not on html collection





const complexQuery = document.querySelector("body > ul > li:nth-child(3) > ol > li:nth-child(2) > p > i")

console.log(complexQuery);