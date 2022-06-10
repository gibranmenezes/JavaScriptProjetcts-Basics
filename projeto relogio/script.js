const HOURPOINTER = document.querySelector("#hour");
const MINUTEPOINTER = document.querySelector("#minute");
const SECONDPOINTER = document.querySelector("#second");

var date = new Date();
  
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
console.log("Hour: " + hour + " Minute: " + minute + " Second: " + second);

let positionHour = (hour*360/12)+(minute*(360/60)/12);
let positionMinute = (minute*360/60)+(second*(360/60)/60);
let positionSecond = second*360/60;

function executeClock(){
  positionHour += (3/360);
  positionMinute +=(6/60);
  positionSecond += 6;

  HOURPOINTER.style.transform = "rotate("  + positionHour + "deg)";
  MINUTEPOINTER.style.transform = "rotate("  + positionMinute + "deg)";
  SECONDPOINTER.style.transform = "rotate("  + positionSecond + "deg)";

}

var interval = setInterval(executeClock, 1000);