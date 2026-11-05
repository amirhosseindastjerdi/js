let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let btn = document.querySelector(".btn");
let d = document.querySelector(".d");
let mo = document.querySelector(".mo");
let y = document.querySelector(".y");
let h = document.querySelector(".h");
let m = document.querySelector(".m");
let s = document.querySelector(".s");
let wheater = document.querySelector(".wheater");
let dot = document.querySelector(".dot");
let dots = document.querySelector(".dots");
let hor = document.querySelector(".hor");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

setInterval(() => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const years = new Date().getFullYear();
  const months = new Date().getMonth();
  const days = new Date().getDate();

  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;

  year.innerHTML = years;
  month.innerHTML = months;
  day.innerHTML = days;

  dot.classList.toggle("hide");
  dots.classList.toggle("hide");
}, 1000);

btn.addEventListener("click", () => {
  d.classList.toggle("clicked");
  mo.classList.toggle("clicked");
  y.classList.toggle("clicked");
  h.classList.toggle("clicked");
  m.classList.toggle("clicked");
  s.classList.toggle("clicked");
  wheater.classList.toggle("clicked");
  dots.classList.toggle("hides");
  dot.classList.toggle("hides");
  hor.classList.toggle("green");
  min.classList.toggle("green");
  sec.classList.toggle("green");
});
