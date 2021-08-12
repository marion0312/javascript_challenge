var bill = document.querySelector("#input_bill")
var tip_percent = document.querySelector("#input_tip")
var btn = document.querySelector("button")

btn.onclick = () => {
    alert(bill.value * (tip_percent.value/100))
}