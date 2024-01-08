export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/header__back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/svg/header__avatar.svg',
  },
]
export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)

    header.insertAdjacentElement('afterend', button)
  })
  return header
}

// =====
export const creatElement = (tag, className, text) => {
  const elem = document.creatElement(tag)

  if (className) {
    element.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER__BUTTON__LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/header__back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/svg/header__avatar.svg',
  },
]
export const creatHeader = () => {
  const header = creatElement('header', 'header')

  HEADER__BUTTON__LIST.forEach((params) => {
    const button = creatElement('button', 'button')

    const img = creatElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)

    header.insertAdjacentElement('afterend', button)
  })
  return header
}
