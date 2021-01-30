const clockContainer = document.querySelector(".clock"),
   clockTitle = clockContainer.querySelector("h1")

 function getTime() {
   const date = new Date()
   const hours = date.getHours()
   const minutes = date.getMinutes()
   const seconds = date.getSeconds()
   clockTitle.innerText = `${hours}:${minutes}:${seconds}`
 }

 function init() {
   getTime()
 }

 init()