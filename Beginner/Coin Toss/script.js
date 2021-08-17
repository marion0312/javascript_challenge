var heads = document.querySelector("#heads")
var tails = document.querySelector("#tails")
var answer = document.querySelector("#answer")
var number = createRandomNumber(0, 1)


function createRandomNumber( min, max ) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random () * (max - min + 1)) + min
}

const coinToss = ( answer ) => {
    var number = createRandomNumber(0, 1)
    var toss = ( number == 1 ? 'heads' : 'tails' )

    return ( toss == answer ? 'Correct' : 'Wrong' )
}

heads.onclick = () => answer.innerHTML = coinToss('heads')
tails.onclick = () => answer.innerHTML = coinToss('tails')
