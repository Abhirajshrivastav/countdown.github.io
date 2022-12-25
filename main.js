const daysEl =  document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = '1 Jan 2023' ;

countdown = () =>{
    const NewYearsDate = new Date(newYears);
    const currentDate = new Date() ;
     
    const seconds = (NewYearsDate - currentDate) / 1000 ;
     
    const day = Math.floor(seconds / 3600 / 24) ;

    const hour = Math.floor(seconds / 3600 ) % 24 ;

    const minute = Math.floor(seconds / 60) % 60 ;

    const sec = Math.floor(seconds ) % 60 ;

    daysEl.innerHTML = formatTime(day);
    hoursEl.innerHTML = formatTime(hour);
    minsEl.innerHTML = formatTime(minute);
    secondsEl.innerHTML = formatTime(sec);
}

formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time ;
}


// initial call
countdown();

setInterval(countdown,1000);




