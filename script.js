// Connects "- or +" button to "comparison" function
document.getElementById('button').addEventListener('click', comparison)
let userInput = 0

function comparison () {
  // get User input and convert to an integer
  userInput = document.getElementById('input').value 
  userInput = parseInt(userInput)

  // check if userInput is less then 0
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = 'negative'
  } else {
    document.getElementById('answer').innerHTML = 'positive'
  }
}
