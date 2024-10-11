// higher order function
// only accepts function as a argument
function a(b) {
    console.dir(b);
    b()
}




// callback function
a(function() {
    console.log('Hiiiiiiiiiiiiiiiiiii');
})
