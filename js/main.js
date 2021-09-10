let btn = document.querySelector('button')

function updateTime() {
    // create variable for new Date to pull date/time info
    var date = new Date();
    // variables to pull hour, minute, second
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    // convert to standard time
    if (hour > 12) {
        hour = (hour - 12);
    } else if (hour == 0) {
        hour = '12';
    }

    // if hour, minute or second are less than 10, add a zero in front to format
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }

    // variable to format time as a clock would, with colons between hour/minute/second
    var currentTime = `${hour}<span class="blink">:</span>${minute}<span class="blink">:</span>${second}`;

    // display time in 'time' in HTML
    document.getElementById('time').innerHTML=currentTime
}

// update updateTime every second, continuous
setInterval(updateTime, 1000)

// function for alarm - play sound, show alert when executed
function alarm() {
    document.getElementById('alertSound').play();
    alert('!');
}

// variables to run different alarms
var eightHour = document.getElementById('eightHour');
var tenMinute = document.getElementById('tenMinute');
var tenSecond = document.getElementById('tenSecond');

// function calls for alarms
eightHour.onclick = setTimeout(alarm, 28800000);
tenMinute.onclick = setTimeout(alarm, 60000);
tenSecond.onclick = setTimeout(alarm, 10000);


// specific time of day alarm goes here
// if (hour === 15 && minute === 30 && second === 0) {
//     alarm();
// }