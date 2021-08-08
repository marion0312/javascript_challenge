var quotes = ['Lorem ipsum', 'dolor sit amet', 'consectetur adipisicing elit']
var btn = document.querySelector(".btn")
var p = document.querySelector(".quote")
var counter = 0


btn.addEventListener("click", () => {
    if ( counter >= quotes.length ) {
        counter = 0
    }
    console.log(counter, quotes[counter]);
    p.innerHTML = quotes[counter]
    counter++

})