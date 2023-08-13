let time = document.getElementById('time-text');
let hours_button = document.getElementById('hours-button');
let hours_list = document.querySelector('.hours-list');
let minutes_button = document.getElementById('minutes-button');
let minutes_list = document.querySelector('.minutes-list');
let ampm_button = document.getElementById('ampm-button');
let ampm_list = document.querySelector('.ampm-list');
let set_button = document.getElementById('set-button');
let alarm;
ringtone = new Audio('./files/alarm.m4r');

setInterval(ringAlarm, 100);

hours_button.addEventListener('click', () => {
        for (let i = 0; i < 13; i++) {
            const hoursDiv = document.createElement('div');
            hoursDiv.classList.add('hours');
            i < 10 ? hoursDiv.innerHTML = '0' + i : hoursDiv.innerHTML = i;

            hours_list.appendChild(hoursDiv);
            hours_list.style.overflowY = 'scroll';
            hours_list.style.zIndex = '1';

            hoursDiv.addEventListener('click', () => {
                hours_button.innerHTML = hoursDiv.innerHTML + '<i class = "fa fa-caret-down" aria-hidden = "true"></i>';
                hours_list.innerHTML = '';
                hours_list.style.overflowY = 'hidden';
                hours_list.style.zIndex = '0';
            })
        }
})

minutes_button.addEventListener('click', () => {
    for(let i = 0; i < 60; i ++) {
        const minutesDiv = document.createElement('div');
        minutesDiv.classList.add('minutes');
        i < 10 ? minutesDiv.innerHTML = '0' + i : minutesDiv.innerHTML = i;

        minutes_list.appendChild(minutesDiv);
        minutes_list.style.overflowY = 'scroll';
        minutes_list.style.zIndex = '1';

        minutesDiv.addEventListener('click', () => {
            minutes_button.innerHTML = minutesDiv.innerHTML + '<i class = "fa fa-caret-down" aria-hidden = "true"></i>';
            minutes_list.innerHTML = '';
            minutes_list.style.overflowY = 'hidden';
            minutes_list.style.zIndex = '0';
        })
    }
})

ampm_button.addEventListener('click', () => {
    for(let i = 0; i < 2; i ++) {
        const ampmDiv = document.createElement('div');
        ampmDiv.classList.add('ampm');
        i === 0 ? ampmDiv.innerHTML = 'AM': ampmDiv.innerHTML = 'PM';

        ampm_list.appendChild(ampmDiv);
        ampm_list.style.zIndex = '1';

        ampmDiv.addEventListener('click', () => {
            ampm_button.innerHTML = ampmDiv.innerHTML + '<i class = "fa fa-caret-down" aria-hidden = "true"></i>';
            ampm_list.innerHTML = '';
            ampm_list.style.overflowY = 'hidden';
            ampm_list.style.zIndex = '0';
        })
    }
})

set_button.addEventListener('click', () => {
    let input_hour = hours_button.textContent;
    let input_minute = minutes_button.textContent;
    let input_ampm = ampm_button.textContent;
    alarm = input_hour + ":" + input_minute + ":" + "00" + " " + input_ampm;
    console.log(alarm)
})

function ringAlarm(){
    if(alarm === realTime()){
        return ringtone.play();
    }
}

function realTime() {
    let d = new Date();
    let hours = d.getHours();
    let m;
    d.getMinutes() < 10 ? m = '0' + d.getMinutes() : m = d.getMinutes();
    let s;
    d.getSeconds() < 10 ? s = '0' + d.getSeconds() : s = d.getSeconds();
    let ampm;
    let h;
    hours >= 12 ? (ampm = 'PM') && (h = "0" + (hours - 12)) : (ampm = 'AM') && (h = "0" + hours);

    return time.innerHTML = h + ":" + m + ":" + s + ' ' + ampm;
}


