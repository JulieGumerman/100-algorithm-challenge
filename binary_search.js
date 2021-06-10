function binary_search (list, item) {
	let low = 0;
	let high = list.length -1
	console.log("high", high)

	while (low <= high) {
		let mid = Math.floor((low + high) /2)
		let guess = list[mid]


		if (guess === item) {
			console.log("found it!!! Guess:" + guess + " Index:" + mid)
			return item
		} else if (guess < item){
			low = mid + 1
		} else if (guess > item){
			high = mid -1
		}
		//return "Item not found"
	}
}

console.log(binary_search([1, 2, 3, 4,], 3))
// console.log(binary_search([1, 2, 3, 4, 5], 7))
