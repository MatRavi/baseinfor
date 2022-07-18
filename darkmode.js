"use strict"
function darkMode() {
    var corpo = document.body
    var element = document.getElementById("DarkModetext")
    var jo = document.getElementById("oi")
    corpo.className = "dark-mode"
    element.innerText = "Dark Mode LIGADO"
    element.style.color = "white"
    jo.style.color = "purple"
  }
  function lightMode() {
    var corpo = document.body
    var element = document.getElementById("DarkModetext")
    var jo = document.getElementById("oi")
    corpo.className = "light-mode"
    element.innerText = "Dark Mode DESLIGADO"
    element.style.color = "black"
    jo.style.color = "black"
  }