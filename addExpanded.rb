def add(*numbers)
	counter = 0
	for num in numbers
		num.to_i
		counter += num
	end
	puts counter
		
end

add(1,2,3,4,5)
