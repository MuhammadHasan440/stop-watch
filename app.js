
const time = document.querySelector(".time");
const head = document.querySelector("h1")


let sec = 0;
let intervel = null;
function timer(){
    sec ++;
    let hours = Math.floor(sec / 3600);
    let mints = Math.floor((sec - (hours * 3600))/ 60);
    let secs = sec % 60;

    if(secs  < 10) secs = ' 0' + secs; 
    if(mints < 10) mints = ' 0' + mints;
    if(hours < 10) hours = ' 0' + hours;

    
    head.innerHTML = `${hours} : ${mints} : ${secs}`

}

function watchstart(){
    console.log('watch start');
    if(intervel){
        return
    }
    intervel = setInterval(timer ,1000)

}

function watchstop(){
    console.log('watch stop');
    clearInterval(intervel)
    intervel = null;
}

function watchreset(){
    console.log('watch reset');
    watchstop();
    sec = 0;
    head.innerHTML = "00 : 00 : 00"
}