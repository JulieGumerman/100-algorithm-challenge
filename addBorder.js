function addBorder(array) {
	let buffer = "*"

	let border = ""
	
	let length = array.length + 2
	for (let i = 0; i < length ; i++) {
		border = border +  buffer
	}
	
	for (let i = 0; i < array.length; i++) {
		let current = array[i]
		console.log(current)
		array[i] = buffer + current + buffer
	}

	array.push(border)
	array.unshift(border)
	return array
}

console.log(addBorder(["aaa", "bbb", "ccc"]))
