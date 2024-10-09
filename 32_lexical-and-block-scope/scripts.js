const username = 'Tahsin'
let userAge = 25
var a = 50

function add() {
  const username = 'Ferdous'
  const x = 5
  const y = 8
  console.log(x + y)
  console.log(username)
}

function subtract() {
  const x = 15
  const y = 18
  console.log(x - y)
  console.log(username)  

  function child() {
    const childName = 'Golu'
    console.log(childName);

    function grandChild() {
      const grandChild = 'Molu'
      console.log(grandChild)
    }

    grandChild()
  }

  child()
}

add()
subtract()

console.log('Program Ended')
