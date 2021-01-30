const clockContainer = document.querySelector(".clock"),
  clockTitle = clockContainer.querySelector(".flux")

function getTime() {
  const date = new Date()
  const hours = 13
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const apm = hours < 12 ? '오전' : '오후'
  
  clockTitle.innerText = `${apm} ${hours < 13 ? hours : hours - 12}시 ${
    minutes < 10 ? `0${minutes}` : minutes
  }분 ${seconds < 10 ? `0${seconds}` : seconds}초`
}

function init() {
  setInterval(getTime, 1000)
}

init()