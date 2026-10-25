let greenButton = document.querySelector(".green")
let blueButton = document.querySelector(".blue")
let redButton = document.querySelector(".red")
let lightGreenButton = document.querySelector(".lightgreen")
let sideBar = document.querySelector(".side")
let menu = document.querySelector(".button")


greenButton.addEventListener("click" , ()=> {
    document.body.classList.toggle("clicked")
    document.body.classList.remove("CLicked")
    document.body.classList.remove("Clicked")
    document.body.classList.remove("ClIcked")

})

blueButton.addEventListener("click" , ()=> {
    document.body.classList.toggle("CLicked")
    document.body.classList.remove("clicked")
    document.body.classList.remove("Clicked")
    document.body.classList.remove("ClIcked")

})

redButton.addEventListener("click" , ()=> {
    document.body.classList.toggle("Clicked")
    document.body.classList.remove("CLicked")
    document.body.classList.remove("clkicked")
    document.body.classList.remove("ClIcked")
})

lightGreenButton.addEventListener("click" , ()=> {
    document.body.classList.toggle("ClIcked")
    document.body.classList.remove("CLicked")
    document.body.classList.remove("clkicked")
    document.body.classList.remove("Clicked")
})

menu.addEventListener("click" , ()=> {
    sideBar.classList.toggle("active")
    menu.classList.toggle("open")
})
