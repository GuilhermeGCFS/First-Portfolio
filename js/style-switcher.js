// Toggle Style Switcher =================================>
const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
})

// Hide Style - Switcher on Scroll =================================>
window.addEventListener("scroll", () => {
  if(document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
})

// Theme Colors =================================>
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    }
    else {
      style.setAttribute("disabled", "true");
    }
  })
}

// Theme Day & Night mode =================================>
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("svg").classList.toggle("fa-sun");
  dayNight.querySelector("svg").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
  if(document.body.classList.contains("dark")) {
    dayNight.querySelector("svg").classList.add("fa-sun");
  }
  else {
    dayNight.querySelector("svg").classList.add("fa-moon");
  }
})