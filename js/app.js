let greenButton = document.querySelector(".green")
let blueButton = document.querySelector(".blue")
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
let formUser = document.querySelector(".formTwo")
let nameI = document.querySelector(".namei")
let ageI = document.querySelector(".agei")
let userNameI = document.querySelector(".usernamei")
let adressI = document.querySelector(".adressi")
let emailI = document.querySelector(".emaili")
let info = document.querySelector(".info")
let btn = document.querySelector(".btn")
let input = document.querySelector(".name")
let agein = document.querySelector(".age")
let userin = document.querySelector(".username")
let passin = document.querySelector(".pass")
let adressin = document.querySelector(".adress")
let emailin = document.querySelector(".email")
let submit = document.querySelector(".submit")
// function guess(e) {
//     let number = Number(user.value)
//     if (number == randomNumber) {
//         answer.innerHTML = "you win"
//     }
//     else if (number < randomNumber) {
//         answer.innerHTML = "your number is smaller"
        
//     }
//     else if (number > randomNumber) {
//         answer.innerHTML = "your number is bigger"
        
//     }
// }

// healthPoint.innerHTML = hp
// submitButton.addEventListener("submit" , (e)=>{
//     event.preventDefault();
//     hp--
// if (hp <= -1) {
//    return;
   
// }
//     guess(e);
//     healthPoint.innerHTML = hp
// })

greenButton.addEventListener("click" , ()=> {
    document.body.classList.toggle("clicked")
    document.body.classList.remove("CLicked")
    document.body.classList.remove("Clicked")
    document.body.classList.remove("ClIcked")
    formUser.classList.toggle("amir")
    info.classList.toggle("amiri")
    btn.classList.toggle("Amiri")
    input.classList.toggle("AMiri")
    agein.classList.toggle("AMiri")
    userin.classList.toggle("AMiri")
    passin.classList.toggle("AMiri")
    adressin.classList.toggle("AMiri")
    emailin.classList.toggle("AMiri")
    submit.classList.toggle("AMiri")
    formUser.classList.remove("MOHamad")
    info.classList.remove("MOhamad")
    btn.classList.remove("Mohamad")
    input.classList.remove("mohamad")
    agein.classList.remove("mohamad")
    userin.classList.remove("mohamad")
    passin.classList.remove("mohamad")
    adressin.classList.remove("mohamad")
    emailin.classList.remove("mohamad")
    submit.classList.remove("mohamad")
})

blueButton.addEventListener("click" , ()=> {
    
    document.body.classList.toggle("CLicked")
    document.body.classList.remove("clicked")
    document.body.classList.remove("Clicked")
    document.body.classList.remove("ClIcked")
    formUser.classList.toggle("MOHamad")
    info.classList.toggle("MOhamad")
    btn.classList.toggle("Mohamad")
    input.classList.toggle("mohamad")
    agein.classList.toggle("mohamad")
    userin.classList.toggle("mohamad")
    passin.classList.toggle("mohamad")
    adressin.classList.toggle("mohamad")
    emailin.classList.toggle("mohamad")
    submit.classList.toggle("mohamad")
    formUser.classList.remove("amir")
    info.classList.remove("amiri")
    btn.classList.remove("Amiri")
    input.classList.remove("AMiri")
    agein.classList.remove("AMiri")
    userin.classList.remove("AMiri")
    passin.classList.remove("AMiri")
    adressin.classList.remove("AMiri")
    emailin.classList.remove("AMiri")
    submit.classList.remove("AMiri")
    
})

btn.addEventListener("click" , ()=>{
    info.classList.toggle("hide")
    btn.classList.toggle("Active")
})

menu.addEventListener("click" , ()=> {
    sideBar.classList.toggle("active")
    menu.classList.toggle("open")
})

formUser.addEventListener("submit" , ()=>{
    event.preventDefault()

    
        const user = {
             name : document.querySelector(".name"),
             age : document.querySelector(".age"),
             username : document.querySelector(".username"),
             pasword : document.querySelector(".pass"),
             adress : document.querySelector(".adress"),
             email : document.querySelector(".email")
        }
        
    nameI.innerHTML = "NAME : " + user.name.value
   ageI.innerHTML = "AGE : " + user.age.value
   userNameI.innerHTML = "USERNME : " + user.username.value
   adressI.innerHTML = "ADDRESS : " + user.adress.value
   emailI.innerHTML = "EMAIL : " + user.email.value

})
