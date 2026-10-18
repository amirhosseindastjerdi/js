let userNumber = prompt("enter your number")

if (userNumber % 3 == 0 && userNumber % 5 == 0) {
    console.log("fizzbazz")
    
}
else if (userNumber % 3 == 0){
    console.log("bazz")
}
else if (userNumber % 5 == 0){
    console.log("fizz")
}