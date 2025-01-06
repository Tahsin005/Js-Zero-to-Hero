// try {
//     console.log(a)
// } catch (error) {
//     console.log(error)
//     console.log(error.message)
//     console.log(error.name)
// } finally {
//     console.log('Hello World!')
// }

// console.log(5 + 5)

async function makeAsyncRequest() {
    try {
        const url = 'https://dummyjson.com/users'
        const response = await fetch(url)
        const data = await response.json()

        console.log(data)
        console.log('Got a response!')
    } catch (error) {
        console.log(error)
    }

    console.log('Outside try catch!')
}

makeAsyncRequest()