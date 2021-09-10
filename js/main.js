let btn = document.querySelector('button')

function updateTime() {
    // create variable for new Date to pull date/time info
    var date = new Date();
    // variables to pull hour, minute, second
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    // if hour, minute or second are less than 10, add a zero in front
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
    // actually display time in 'time' in HTML
    document.getElementById('time').innerHTML=currentTime
}

// update updateTime every second
setInterval(updateTime, 1000)

function alarm() {
    document.getElementById('alertSound').play();
    alert('!');
}
