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

  textUpdate(year, month, day, dow, apm, hours, minutes, seconds)
}

function textUpdate(a, b, c, d, e, f, g, h) {
  f = f < 13 ? f : f - 12
  g = g < 10 ? `0${g}` : g
  h = h < 10 ? `0${h}` : h
  
  dateTitle.innerText = `${a}년 ${b}월 ${c}일 (${d})`
  clockTitle.innerText = `${e} ${f}시 ${g}분 ${h}초`
}

function init() {
  setInterval(getTime, 1000)
}

init()