const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");


var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let positionSec = sec*(360/60);
let positionMin = ((min*360) + (positionSec))/60;
let positionHr = ((hr*360) + (positionMin))/12;

function executeClock(){

  positionSec += 6;
  positionMin += (6/60);
  positionHr += (3/360);


  PONTEIROHORA.style.transform = "rotate(" + positionHr + "deg)";
  PONTEIROMINUTO.style.transform = "rotate(" + positionMin + "deg)";
  PONTEIROSEGUNDO.style.transform = "rotate(" + positionSec + "deg)";

}

var interval = setInterval(executeClock, 1000);