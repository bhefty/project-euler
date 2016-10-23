'use script'

var problem1Answer = document.getElementById('problem1-answer')
var problem1SubmitButton = document.getElementById('problem1-submit')
var problem1Value = document.getElementById('maxNumber').value
var sumOfMultiplesOfThree = 0
var sumOfMultiplesOfFive = 0
var totalSum

problem1SubmitButton.addEventListener('click', function(event) {
  updateAnswer()
})

function updateAnswer() {
  problem1Value = document.getElementById('maxNumber').value
  sumOfMultiplesOfThree = multiplesOfThree(problem1Value)
  sumOfMultiplesOfFive = multiplesOfFive(problem1Value)
  totalSum = sumOfMultiplesOfThree + sumOfMultiplesOfFive
  problem1Answer.innerHTML = totalSum
}

function multiplesOfThree(val) {
  var sum = 0
  for (var i = 0; i <= val; i++) {
    if (i % 3 == 0) {
      sum += i
    }
  }
  return sum
}

function multiplesOfFive(val) {
  var sum = 0
  for (var i = 0; i < val; i++) {
    if (i % 5 == 0) {
      sum += i
    }
  }
  return sum
}
