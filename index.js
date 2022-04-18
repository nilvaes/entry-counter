// document.getElementById("count-el").innerText = 6

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapSum() {
//   let totalTime = lap1 + lap2 + lap3
//   console.log(totalTime)
// }

// lapSum()

// let lapsCompleted = 0

// function lapCounts() {
//   lapsCompleted += 1
// }

// lapCounts()
// lapCounts()
// lapCounts()

// console.log(lapsCompleted)

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.innerText = count
}


function save() {
  let agu = count + " - "
  saveEl.textContent += agu
  count = 0
  countEl.textContent = 0

}









// let username = "per"
// let message = "You have tree new notfications"
// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// let name = "Sebas"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)


