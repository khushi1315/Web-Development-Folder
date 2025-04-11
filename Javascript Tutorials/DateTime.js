console.log("THIS IS data and time")
let now = new Date();
console.log(now);
let dt = new Date(10000);
console.log(dt);
let newDate = new Date("2024-03-30");
console.log(newDate);
//let newDate=new Date(year,,month,date,hours,minutes,seconds,milliseconds);

let newDATE = new Date(2025, 4, 10, 2, 3, 4, 35);
console.log(newDATE, newDATE.getFullYear());
// let year=newDATE.getFullYear();
// console.log(year);
let date = newDate.getDate();
console.log("DATE of newDate", date);
let month = newDATE.getMonth();
console.log("Month of neWDATE", month);
let hours = newDate.getHours();
console.log("Hours of newDate", hours);

newDate.setDate(8);
newDate.setSeconds(2);
console.log(newDATE)

setInterval(updateTIME);
function updateTIME() {
    time.innerHTML = new Date();
}
