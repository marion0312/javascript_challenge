var color_value = document.querySelector(".input-text")
var button = document.querySelector(".btn")
var body = document.querySelector("body")

button.addEventListener( "click", ( ) => {
    body.style.backgroundColor = color_value.value
    console.log(color_value.value);
} )