function binary_search (list, item) {
	let low = 0;
	let high = list.length -1
	console.log("high", high)

	while (low <= high) {
		let mid = low + high
		console.log("mid", mid)
		let guess = list[mid]
		console.log("guess", guess)

		if (guess == item) {
			console.log("found it!!!")
			return item
		}
		if (guess < item){
			console.log("guess", guess)
			low = guess + 1
		} else {
			console.log("guess", guess)
			high = guess -1
		}
		//return "Item not found"
	}
}

console.log(binary_search([1, 2, 3, 4,], 3))
// console.log(binary_search([1, 2, 3, 4, 5], 7))
