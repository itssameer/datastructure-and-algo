function factorial(num){
    if(num == 1) return 1 
    return num * factorial(num -1)
}

console.log(factorial(5));

//Pitfalls to recursive

// if base case not defined intelligently then it will break