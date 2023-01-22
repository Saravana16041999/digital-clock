`use strict`


const Hours = document.getElementById(`hours`);
const Minutes = document.getElementById(`min`);
const Seconds = document.getElementById(`sec`);
const session = document.getElementById('session');


function DisplayUI(){
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(hrs >= 12){
        session.innerHTML = 'PM' 
    }else{
        session.innerHTML = `AM`
    }

    if(hrs > 12){
        hrs =  hrs - 12
    }

    Hours.innerText = hrs;
    Minutes.innerText = min;
    Seconds.innerText = sec


    
}

setInterval(DisplayUI,1000)
