function getthree(limit)
{
	for (let i = 1; i <= limit; i++)
	{
		if (String(i).search('3') !== -1 || i % 3 === 0)
			console.log('%d!!!!!!!',i)
		else
			console.log(i)
	}
}

getthree(100)