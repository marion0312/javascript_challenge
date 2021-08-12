var number = document.querySelector("#number")
var btn = document.querySelector("button")
var guessCount = 0
var correctNumber = createRandomNumber(0, 100)

console.log(correctNumber);

btn.onclick = () => numberGuess( number.value )

function numberGuess( number ) {
    if ( number == correctNumber ) {
        alert("you got the right number!")
    }
    else {
        alert("Try again!")
        guessCount++
        
        if ( guessCount >= 3 ) {
            alert(`Game over! Correct number: ${correctNumber}`)
        }
    }
}

function createRandomNumber( min, max ) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random () * (max - min + 1)) + min
}