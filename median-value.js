function medianValue (arrayOfNums) {
    //take array of nums
    //even or odd?
    //even? find middle, -1
    //odd? find middle
    let length = arrayOfNums.length;
    console.log
    return length%2==0 ? arrayOfNums[length/2 - 1] : arrayOfNums[Math.floor(length/2)]
}

console.log(medianValue([1,2,4,9,13]))