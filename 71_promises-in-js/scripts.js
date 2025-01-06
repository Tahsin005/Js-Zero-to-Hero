const resolveBtn = document.querySelector('#resolve-btn');
const rejectBtn = document.querySelector('#reject-btn');

const p = new Promise((resolve, reject) => {
    // resolve('Promise resolved')
    // reject('Promise rejected')

    resolveBtn.addEventListener('click', () => {
        resolve('Promise resolved manually');
    })

    rejectBtn.addEventListener('click', () => {
        reject('Promise rejected manually');
    })
})


// p.then((data) => {
//     console.log(data)
//     console.log('Promise resolved');
// }).catch((error) => {
//     console.log(error)
//     console.log('Promise rejected');
// }).finally(() => {
//     console.log('Promise is resolved or rejected');
// })


p.then((data) => { // .then & .catch it self returns a promise
    console.log(data);
    return 122;
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error);
})