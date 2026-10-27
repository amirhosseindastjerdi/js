let greenButton = document.querySelector(".green")
let blueButton = document.querySelector(".blue")
let redButton = document.querySelector(".red")
let lightGreenButton = document.querySelector(".lightgreen")
let sideBar = document.querySelector(".side")
let menu = document.querySelector(".button")
let randomNumber = Math.floor(Math.random() * 100)
let userNumber = document.querySelector(".form")
let user = document.querySelector(".input")
let answer = document.querySelector(".answer")
let submitButton = document.querySelector(".form")
let divTwo = document.querySelector(".div2")
let hp = 10
let healthPoint = document.querySelector(".hp")

function guess(e) {
    let number = Number(user.value)
    if (number == randomNumber) {
        answer.innerHTML = "you win"
    }
    else if (number < randomNumber) {
        answer.innerHTML = "your number is smaller"
        
    }
    else if (number > randomNumber) {
        answer.innerHTML = "your number is bigger"
        
    }
}

healthPoint.innerHTML = hp
submitButton.addEventListener("submit" , (e)=>{
    event.preventDefault();
    hp--
if (hp <= -1) {
   return;
   submitButton.eset
}
    guess(e);
    healthPoint.innerHTML = hp
})

greenButton.addEventListener("click" , ()=> {
    document.body.classList.toggle("clicked")
    document.body.classList.remove("CLicked")
    document.body.classList.remove("Clicked")
    document.body.classList.remove("ClIcked")
    divTwo.classList.toggle("ali")
})

blueButton.addEventListener("click" , ()=> {
    document.body.classList.toggle("CLicked")
    document.body.classList.remove("clicked")
    document.body.classList.remove("Clicked")
    document.body.classList.remove("ClIcked")
    divTwo.classList.toggle("amir")
})

redButton.addEventListener("click" , ()=> {
    document.body.classList.toggle("Clicked")
    document.body.classList.remove("CLicked")
    document.body.classList.remove("clkicked")
    document.body.classList.remove("ClIcked")
    divTwo.classList.toggle("mmd")
})

lightGreenButton.addEventListener("click" , ()=> {
    document.body.classList.toggle("ClIcked")
    document.body.classList.remove("CLicked")
    document.body.classList.remove("clkicked")
    document.body.classList.remove("Clicked")
    divTwo.classList.toggle("hossein")
})

menu.addEventListener("click" , ()=> {
    sideBar.classList.toggle("active")
    menu.classList.toggle("open")
})

