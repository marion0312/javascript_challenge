var open_modal = document.querySelector("#open-modal")
var modal = document.querySelector(".modal")
var close_modal = document.querySelector(".close")

// open_modal.addEventListener("click", () => {
//     modal.style.display = "block"
// })

// close_modal.addEventListener("click", () => {
//     modal.style.display = "none"
// })

open_modal.onclick = () => modal.style.display = "block"
close_modal.onclick = () => modal.style.display = "none"

// THE TWO CODES ABOVE DOES THE SAME THING WITH LESSER LINES OF CODES!