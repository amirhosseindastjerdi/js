let userNumber = Number(prompt("Enter your first number : "))
let userSecondNumber = prompt("")
let userThirdNumber = Number(prompt("Enter your second number : "))

switch (userSecondNumber) {
    case "+" :
        console.log(userNumber + userThirdNumber)
        break;
    case "-" :
        console.log(userNumber - userThirdNumber)
        break; 
    case "*" :
            console.log(userNumber * userThirdNumber)
        break;
    case "/" : 
            console.log(userNumber / userThirdNumber)
        break;
    case "**" :
            console.log(userNumber ** userThirdNumber)
        break;
    case "%" : 
            console.log(userNumber % userThirdNumber)
        break;
    case "++" :
            console.log(++userNumber)
        break;
    case "--" :
            console.log(--userNumber)
        break;
}
