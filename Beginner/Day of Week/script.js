var day = document.querySelector("#date")

day .onchange = () => alert(getDayofWeek(day))

function getDayofWeek( date ) {
    var newDate = new Date()
    return getDay()
}