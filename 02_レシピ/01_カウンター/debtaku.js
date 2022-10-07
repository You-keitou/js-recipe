let num_button = []
let enzan_button = {}
const enzan_id = {add: '+', minus: '-', times: '×', divide: '÷', equal: '='}

const display = document.getElementById("display")

let temp = 0
let wait_for_cal = []
let suusiki = ""
for(let i = 0; i < 10; i++)
{
	num_button[i] = document.getElementById(String(i))
	num_button[i].onclick = function()
	{
		temp = temp * 10 + i
		if (i !== 0 || (i === 0 && temp !== 0))
		{
			suusiki += String(i)
			display.innerText = suusiki
		}
	}
}
for (const member in enzan_id)
{
	enzan_button[member] = document.getElementById(member)

	enzan_button[member].onclick = function()
	{
		suusiki += enzan_id[member]
		display.innerText = suusiki
	}
}