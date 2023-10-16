
let countdown;
let timerDisplay = document.getElementById("timer");

function startCountdown() {
    const hoursInput = parseInt(document.getElementById("hours").value, 10) || 0;
    const minutesInput = parseInt(document.getElementById("minutes").value, 10) || 0;
    const secondsInput = parseInt(document.getElementById("seconds").value, 10) || 0;

    const targetTime = new Date().getTime() + (hoursInput * 3600000) + (minutesInput * 60000) + (secondsInput * 1000);

    countdown = setInterval(function () {
        const currentTime = new Date().getTime();
        const timeRemaining = targetTime - currentTime;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Countdown expired!";
        } else{
            const hours = Math.floor(timeRemaining / 3600000);
            const minutes = Math.floor((timeRemaining % 3600000) / 60000);
            const seconds = Math.floor((timeRemaining % 60000) / 1000);

            timerDisplay.textContent = `${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}