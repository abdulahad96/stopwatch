document.getElementById("stop").disabled =true;
document.getElementById("reset").disabled =true;
var min = 0;
var sec = 0;
var millisec = 0;
var timer;
function calltimer() {
    millisec++;
    if (millisec < 100) {
        if (millisec === 99) {
            millisec = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
            }
        }
    }
    else {
        millisec = 0;
    }
    document.getElementById("timer").innerHTML = pad(min) + ":" + pad(sec) + ":" + pad(millisec);
}
function start() {
    document.getElementById("start").disabled =true;
    document.getElementById("stop").disabled =false;
    document.getElementById("reset").disabled =false;
    timer = setInterval(calltimer, 10);
}
function stop1() {
    document.getElementById("stop").disabled =true
    document.getElementById("reset").disabled =false;;
    document.getElementById("start").disabled =false;
    clearInterval(timer);
    
}
function clea(){
    document.getElementById("stop").disabled =true;
    document.getElementById("reset").disabled =true;
    document.getElementById("start").disabled =false;
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "00:00:00";
    min = 0;
    sec = 0;
    millisec = 0;
}
function pad(num) {
    return (num < 10 ? "0" : "") + num;
}