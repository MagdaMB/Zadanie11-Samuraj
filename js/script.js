const btnStart = document.querySelector(".start");
const btnReset = document.querySelector(".reset");
let result = document.querySelector(".result");

let seconds = 0;
let active = false;

let idInterval;
const start = () => {
    seconds++;
    result.textContent = (seconds / 100).toFixed(3);
}

const startTime = () => {


    if (!active) {
        btnStart.textContent = "Pauza";
        active = true;
        idInterval = setInterval(start, 10);
    } else {
        btnStart.textContent = "Start";
        active = false;
        clearInterval(idInterval);
    }
}

const resetTime = () => {
    result.textContent = "---";
    seconds = 0;
    active = false;
    clearInterval(idInterval);
    btnStart.textContent = "Start";
}

btnStart.addEventListener('click', startTime);
btnReset.addEventListener('click', resetTime);