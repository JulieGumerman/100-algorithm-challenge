let dictionary = {
    3: "fizz"
}

let outputString=""
for (let i = 1; i <=15; i++) {
    // if (dictionary[i] && i%dictionary[i]==0){
    //     console.log(dictionary[i])
    // } else {
    //     console.log(i)
    // }

   

    if (i%3==0) {
        outputString = outputString + "fizz"

        
    } 
    
    if (i%5==0){
        outputString = outputString + "buzz"
    } 

    if (i%7==0) {
        outputString = outputString + "dough!"
    }
    
    if (i == "") {
        outputString = i
    }
        


    console.log(outputString)
    outputString = ""
    
}

//multiples of 3: fizz
//multiples of 5: buzz
//both : fizzbuzz