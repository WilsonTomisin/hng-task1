let dayy = document.getElementById("day")
let time = document.getElementById("time")
let date = new Date()
let numberOfTheWeek = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
// let seconds = date.getSeconds();
let dayOfTheWeek ;
if (numberOfTheWeek == 1) {
    dayOfTheWeek = 'Monday'
} else if (numberOfTheWeek == 2) {
    dayOfTheWeek = 'Tuesday'
} else if (numberOfTheWeek == 3) {
    dayOfTheWeek = 'Wednesday'
} else if (numberOfTheWeek == 4) {
    dayOfTheWeek = 'Thursday'
} else if (numberOfTheWeek == 5) {
    dayOfTheWeek = 'Friday'
} else if (numberOfTheWeek == 6) {
    dayOfTheWeek = 'Saturday'
} else if (numberOfTheWeek == 7) {
    dayOfTheWeek = 'Sunday'
}
dayy.innerHTML = dayOfTheWeek
time.innerHTML = `${hours}:${minutes}`