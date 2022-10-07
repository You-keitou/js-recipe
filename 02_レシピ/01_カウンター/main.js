const display = document.getElementById("display")
const plusbutton = document.getElementById("plus-button")
const minusbutton = document.getElementById("minus-button")
const twicebutton = document.getElementById("twice-button")

let count = 0
plusbutton.onclick = function() {
	count ++
	display.innerText = count
}
minusbutton.onclick = () => {
	count --
	display.innerText = count
}
twicebutton.onclick = () => {
	count *= 2
	display.innerText = count
}