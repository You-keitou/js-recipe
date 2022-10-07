const MultipleOfThree = function (limit) {

	if (typeof MultipleOfThree.index === 'undefined')
		MultipleOfThree.index = 1
	if (MultipleOfThree.index > limit)
	{
		clearInterval(timer)
		return
	}
	if (MultipleOfThree.index % 3 === 0) console.log(MultipleOfThree.index + "!!!!!!!")
	else console.log(MultipleOfThree.index)
	MultipleOfThree.index++

}
const timer = setInterval(MultipleOfThree,1000)
