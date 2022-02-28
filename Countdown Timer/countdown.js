// Assigning IDs to days, hours, minutes, seconds...
var daysEl = document.getElementById("days");
var hoursEl = document.getElementById("hours");
var minsEl = document.getElementById("mins");
var secondsEl = document.getElementById("seconds");

// Future Date...
var newYears = "1 jan 2023";

// Function for getting Days, hours, mins, seconds...
function countdown() {
  var newYearsDate = new Date(newYears);
  var currentDate = new Date();

  //   console.log(newYearsDate - currentDate);

  var totalSeconds = (newYearsDate - currentDate) / 1000;

  // DSA for counting remaining days, hours, minutes, seconds...
  var days = Math.floor(totalSeconds / 3600 / 24);
  var hours = Math.floor(totalSeconds / 3600) % 24;
  var mins = Math.floor(totalSeconds / 60) % 60;
  var seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

// Function to add 0 at start of single digit.
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
//   if (time < 10) {
//     return "0${time}" + time;
//   } else {
//     return time;
//   }
}

// initial call
countdown();

setInterval(countdown, 1000);
