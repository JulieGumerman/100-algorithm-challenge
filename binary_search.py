def binary_search(list, item):
	low = 0
	high = len(list)-1
	
	while low <=high:
		mid = (low + high) / 2
		print("mid", mid)
		guess = list[mid]
		
		if guess == item:
			return "You will find this in the index" + str(mid)
		if guess > item:
			high =  mid - 1
		else:
			low = mid + 1
	return None;

my_list = [1, 3, 5, 7, 9]

#print binary_search(my_list, 2)
print binary_search(my_list, 9)
