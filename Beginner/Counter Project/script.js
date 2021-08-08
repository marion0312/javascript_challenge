var counter = document.querySelector(".counter")
var button = document.querySelector("button")
var initial_count = 0

button.addEventListener("click", () => {
    initial_count++
    counter.innerHTML = initial_count
})