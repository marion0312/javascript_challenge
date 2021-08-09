var btn = document.querySelector("button")

var text_hours = document.querySelector(".timer_hours")
var text_minutes = document.querySelector(".timer_minutes")
var text_seconds = document.querySelector(".timer_seconds")


function startTimer(hours = 0, minutes = 0, seconds = 0) {
    let timer = setInterval(() => {
        seconds--
        text_seconds.innerHTML = seconds
        text_minutes.innerHTML = minutes
        text_hours.innerHTML = hours
        if (seconds == 0) {
            text_minutes.innerHTML = minutes
            if (seconds == 0 && minutes != 0) {
                minutes--
                seconds = 59
                if (minutes == 0 && hours != 0) {
                    hours--
                    minutes = 59
                    text_hours.innerHTML = hours
                }
            }
        }
        if (seconds == 0 && minutes == 0 && hours == 0) {
            clearInterval(timer)
            alert("Timer done!")
        }
    }, 10)

}

// btn.onclick = () => startTimer(input_hours, input_minutes, input_seconds)
// btn.onclick = () => setInterval(startTimer(input_hours.value, input_minutes.value, input_seconds.value), 1000)
btn.onclick = () => {
    var input_hours = Number(document.querySelector("#hours").value)
    var input_minutes = Number(document.querySelector("#minutes").value)
    var input_seconds = Number(document.querySelector("#seconds").value)
    startTimer(input_hours, input_minutes, input_seconds)
}