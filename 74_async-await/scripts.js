async function makeAsyncRequest() {
    const url = `https://dummyjson.com/users`
    const response = await fetch(url)
    /*
        await makes this functions code asyncronous...but remembers where its execution was left off and continues from there..
    */
    const data = await response.json()
    console.log(data)
    console.log('Hi')
}

// function makeSyncRequest() {
//     const url = `https://dummyjson.com/users`
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener('load', () => {
//         console.log(xhr)
//     })

//     xhr.open('GET', url, false); // false argument makes this request syncronous... thus we cannot do anyting else untill it finishes its tasks..it basically freezes the js engine
//     xhr.send();
// }

makeAsyncRequest()