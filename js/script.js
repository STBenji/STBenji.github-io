const html = document.querySelector("#time")
const jornada = document.querySelector(".jornada")
const dia = document.querySelector("#day")
const mes = document.querySelector("#month")
const ano = document.querySelector("#year")
const dark = document.querySelector(".dark")
const bgdark = document.querySelector(".main-container")

dark.addEventListener("click", () => {
  dark.classList.toggle("dark-active")
  document.body.classList.toggle("dark-active")
})

setInterval(function () {
  date = new Date()

  hours = date.getHours()
  minutes = date.getMinutes()
  seconds = date.getSeconds()

  dia.textContent = date.toLocaleString("es", { day: "numeric" })
  mes.textContent = date.toLocaleString("es", { month: "short" })
  ano.textContent = date.toLocaleString("es", { year: "numeric" })

  if (hours >= 12) {
    hours = hours - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  if (hours == 0) {
    hours = 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  jornada.textContent = ampm

  html.innerHTML = hours + ":" + minutes + ":" + seconds
}, 1000)
