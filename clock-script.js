function displayTime() {
// Phase 1: Get the current time
const currentDate = new Date()


// 1. retrieve the hour from current date
const hour = currentDate.getHours() // this is given in military time( 0 - 23)
    let dayTime = hour < 12 ? "am" : "pm"   // AM or PM
    let timeOfDay = hour < 13 ? hour : hour - 12  // STANDARD TIME (no zero in front, NEED TO ADD)


// 2. retrieve the minutes from current date

const minute = currentDate.getMinutes()

// 3. retrieve the minutes from current date
const seconds = currentDate.getSeconds()

let hours = timeOfDay < 10 ? `0${timeOfDay}` : `${timeOfDay}`
let minutes = minute < 10 ? `0${minute}` : `${minute}`
let second = seconds < 10 ? `0${seconds}` : `${seconds}`


const timeString = `${hours} : ${minutes} : ${second} ${dayTime}`
console.log(timeString)


const myClock = document.getElementById('DigitalClock')
myClock.innerHTML = timeString
// Phase 2: Use DOM to update the HTML element
// Phase 3: run the function every 1 second

// this is in milliseconds; 1 second - 1000 milliseconds (ms)
 
 setTimeout(displayTime, 1000)
    
}
displayTime()