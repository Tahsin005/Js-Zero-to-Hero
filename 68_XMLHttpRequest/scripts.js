const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  // fetch('https://dog.ceo/api/breeds/image/random')
  //   .then((response) => response.json())
  //   .then((json) => {
  //     image.src = json.message
  //   })


  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()

  // xhr.addEventListener('load', () => {
  //   console.log(xhr.response)
  //   image.src = xhr.response.message
  // })

  xhr.onload = () => {
    console.log(xhr.response)
    image.src = xhr.response.message
  }
})
