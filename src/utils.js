export const getMaxZIndex = () => {
  return [].slice.call(document.getElementsByTagName("*")).reduce((a, b) => Math.max(a, +window.getComputedStyle(b).zIndex || 0), 0)
}

export const checkType = data => {
  return ({}).toString.call(data).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

export const shuffleArray = array => {
  let m = array.length, t, i
  while (m) {
    i = Math.floor(Math.random() * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }
  return array
}

export const createFrame = name => {
  if (!document.querySelector(`#${name}`)) {
    let dom = document.createElement('div')
    dom.id = name
    dom.style.zIndex = getMaxZIndex()
    dom.style.position = 'relative'
    document.body.appendChild(dom)
  }
  return document.querySelector(`#${name}`)
}

export const removeDom = name => {
  let dom = document.querySelector(`#${name}`)
  if (dom) dom.parentNode.removeChild(dom)
}

export const fixedBody = status => {
  if (status) {
    let scrollTop = document.scrollingElement ? document.scrollingElement.scrollTop : document.body.scrollTop
    document.body.classList.add('fixedbody')
    document.body.style.top = -scrollTop + 'px'
    sessionStorage.setItem('fixedBodyTop', scrollTop)
  } else {
    let scrollTop = Number(sessionStorage.getItem('fixedBodyTop')) || 0
    document.body.classList.remove('fixedbody')
    document.body.style.top = ''
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = scrollTop
    } else {
      document.body.scrollTop = scrollTop
    }
    sessionStorage.removeItem('fixedBodyTop')
  }
}
