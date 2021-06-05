function add (...numbers) {
	try {
		let counter = 0
		for (let i = 0; i < numbers.length; i++) {
			counter += i
		}
		return counter
	} 
	catch (err) {
		return "It broke"
	}
}

console.log(add(1, 2, 3, 4, 5))
