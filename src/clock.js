const clockContainer = document.querySelector(".clock"),
  clockTitle = clockContainer.querySelector(".flux"),
  dateTitle = clockContainer.querySelector(".flux-sub")

function getTime() {
  const date = new Date()
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const dow = week[date.getDay()]
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const apm = hours < 12 ? '오전' : '오후'

  dateTitle.innerText = `${year}년 ${month}월 ${day}일 (${dow})`
  
  clockTitle.innerText = `${apm} ${hours < 13 ? hours : hours - 12}시 ${
    minutes < 10 ? `0${minutes}` : minutes
  }분 ${seconds < 10 ? `0${seconds}` : seconds}초`
}

function init() {
  setInterval(getTime, 1000)
}

init()