var startbtn = document.getElementById("start");
var stopbtn = document.getElementById("stop");
var resetbtn = document.getElementById("reset");
var lapbtn = document.getElementById("lap");

var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;
var lapcurr = null

startbtn.addEventListener('click', function () {
    timer = true;
    stopwatch();
    console.log('Start clicked');
});

stopbtn.addEventListener('click', function () {
    console.log('Stop Clicked');
    timer = false;
});

resetbtn.addEventListener('click', function () {
    console.log('reset clicked');
    timer = false;
    hr = min = sec = ms = 0;
    console.warn(hr, min, sec, ms);
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('milisec').innerHTML = "00";
    document.getElementById('laprecord').innerHTML = "";
});

lapbtn.addEventListener('click', function(){
    console.log('Lap button pressed');
    lapcurr = ` ${hr} : ${min} : ${sec} : ${ms}`;
    document.getElementById('laprecord').innerHTML += `<br>` +lapcurr;
});

function stopwatch() {
    if (timer) {
        console.log('Timer is running')
        ms++;
        
        if (ms == 100) {
            sec++;
            ms = 0;
        }

        if (sec == 60) {
            min++;
            sec = 0;
        }

        if (min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        //Format time to display in clock
        function formatTime(value) {
            return value < 10 ? '0' + value : '' + value;
        }

        document.getElementById('hr').innerHTML = formatTime(hr);
        document.getElementById('min').innerHTML = formatTime(min);
        document.getElementById('sec').innerHTML = formatTime(sec);
        document.getElementById('milisec').innerHTML = formatTime(ms);
        setTimeout(stopwatch, 10);
    } else {
        console.log("Timer not started");
    }
};




