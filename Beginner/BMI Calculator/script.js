var kg = document.querySelector("#kilogram")
var meters = document.querySelector("#meters")
var meters_squared = Math.pow(meters.value, 2)
var btn = document.querySelector("button")

// FORMULA: BMI = kg/m^2

btn.onclick = () => {
    var bmi = Number(kg.value)/Math.pow(meters.value, 2)
    alert(bmi)
}