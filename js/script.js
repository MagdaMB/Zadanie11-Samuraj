let time = document.querySelector(".result");

const showTime = () => {
    const date = new Date();

    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();


    time.textContent = `Aktualna godzina to: ${hour}:${minute}:${seconds}`;


}

setInterval(showTime, 1000);