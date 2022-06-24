function displayCountdown(secondsCountdown) {
 
   if (!secondsCountdown) {
    secondsCountdown = seconds
   } else {
    secondsCountdown -= 1
   } 
    
// Phase 1: Convert seconds to hh:mm:ss
// 1. find out the seconds
const seconds = seconds - secondsCountdown
// 2. find out the minute
const minute = (seconds / 60).toFixed
// 3. find out the hour
const hour = (minute / 60).toFixed

const  timeString = `${hour} : ${minute} : ${second}`
console.log(timeString)
    setTimeout(displayCountdown, 1000)
}
// Input seconds
// Output -> 00:55:57

displayCountdown()