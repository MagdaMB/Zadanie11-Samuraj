const endTime = new Date('2019-02-25 15:34:00').getTime();
const spanD = document.querySelector(".d");
const spanH = document.querySelector(".h");
const spanM = document.querySelector(".m");
const spanS = document.querySelector(".s");

setInterval(() => {
        const nowTime = new Date().getTime();
        const time = endTime - nowTime;

        const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
        let hours = Math.floor(((endTime / (1000 * 60 * 60)) - (nowTime / (1000 * 60 * 60))) % 24);

        hours = hours < 10 ? `0${hours}` : hours;

        let minutes = Math.floor(((endTime / (1000 * 60)) - (nowTime / (1000 * 60))) % 60);

        minutes = minutes < 10 ? `0${minutes}` : minutes;

        let seconds = Math.floor(((endTime / (1000)) - (nowTime / (1000))) % 60);

        seconds = seconds < 10 ? `0${seconds}` : seconds;

        spanD.textContent = `${days} dni :`;
        spanH.textContent = `${hours} godzin :`;
        spanM.textContent = `${minutes} minut :`;
        spanS.textContent = `${seconds} sekund :`;
    },
    1000)