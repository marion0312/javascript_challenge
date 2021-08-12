var phrase = document.querySelector("#phrase")
var btn = document.querySelector("button")

// console.log(phrase.value)

btn.onclick = () => alert(wordCount(phrase.value))

function wordCount( phrase ) {
    return phrase.split(" ").length
}