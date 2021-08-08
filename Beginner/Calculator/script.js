var result = document.querySelector(".result")
var operation = document.querySelector(".operation")
var operand_buttons = document.querySelectorAll(".operand")
var number_buttons = document.querySelectorAll(".number")
var equals = document.querySelector(".equals")
var [n1, n2, operand, total] = [0, 0, "none", 0]

// ASSIGN ALL NUMBERS WITH EVENT LISTENERS
number_buttons.forEach( button =>
    button.addEventListener("click", () => {
        result.innerHTML += button.innerHTML
        console.log(result.innerHTML.length)
    } )    
)

operand_buttons.forEach( button => {
    button.addEventListener("click", () => {
        operation.innerHTML = button.innerHTML
        n1 = result.innerHTML
        operand = button.innerHTML
        result.innerHTML = ''
        console.log(n1);
    } )
} )

// equals.addEventListener("click", () => console.log("Hello"))

equals.onclick = () => {
    n2 = result.innerHTML

    if ( operand == "+" ) { total = Number(n1) + Number(n2) }
    if ( operand == "-" ) { total = Number(n1) - Number(n2) }
    if ( operand == "*" ) { total = Number(n1) * Number(n2) }
    if ( operand == "/" ) { total = Number(n1) / Number(n2) }

    result.innerHTML = total
}