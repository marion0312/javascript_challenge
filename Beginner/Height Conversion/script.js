// Ft & in to cm
// 1. ft * cm 
//  1 ft = 30.48cm
//  Round off the result
// 2. in * cm
//  1 in = 2.54cm 
// 3. Add the total number of cm

// function convertFtToIn(feet, inches) {
//     return converted = ( feet * 30.48 ) + ( inches * 2.54 )
// }

var btn = document.querySelector("button")
var feet = document.querySelector("#feet")
var inches = document.querySelector("#inches")
var answer = document.querySelector("textarea")

const convertFtToIn = (f, i) => ( f * 30.48 ) + ( i * 2.54 )

btn.onclick = () => answer.innerHTML = convertFtToIn(feet.value, inches.value) + "cm"