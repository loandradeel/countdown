const daysEL = document.querySelector("#days");
const hoursEL = document.querySelector("#hours");
const minutesEL = document.querySelector("#minutes");
const secondsEL = document.querySelector("#seconds");

const happy = "22 Março 2024"

function countdown () {
    const happyDate = new Date(happy)
    const currentDate = new Date()

    const totalSecond = (happyDate - currentDate) / 1000

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) % 24 ;   
    const minutes = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60;
    
    
    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minutesEL.innerHTML = minutes;
    secondsEL.innerHTML = seconds;
}


countdown();

setInterval(countdown, 1000);