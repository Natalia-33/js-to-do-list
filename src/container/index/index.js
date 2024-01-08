import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

// ==========

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: false,
  },
  {
    category: [{ text: 'Нова', id: 2 }],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '24.01',
    viewed: true,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post__header')

    // ========

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        'post__category post__category--${category.id}',
        category.text,
      )
      categoryList.append(categorySpan)
    })

    // ====
    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )

    // =======

    postHeader.append(categoryList, dateSpan)

    // ======

    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )
    post.append(postHeader, infoParagraph)

    // ========
    postList.append(post)
  })

  return postList
}

// =======

const post = createPost()
page.append(post)

//=======

import {
  creatElement,
  creatHeader,
} from '../../script/layout'

const page2 = document.querySelector('.page')

const header2 = creatHeader()

page2.append(header2)

const title2 = creatElement('h1', 'title', 'Коммьюніті')

page2.append(title2)

// ==========

const POST__LIST = [
  {
    category2: [
      { line: 'База знань', id: 1 },
      { line2: 'Інфорнмація', id: 2 },
    ],
    title: 'Зустрічай!',
    text: 'Наше коммьюніті у Телеграм!',
    p: 'Що таке база знань?',
    info: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
    button: 'Перейти до коммьюніті у Телеграм!',
  },
]

const creatPost = () => {
  const postList = creatElement('main', 'post__list')

  POST__LIST.forEach((postData) => {
    const post = creatElement(
      'div',
      postData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )

    const postHeader = creatElement('div', 'post__header')

    // ========

    const categoryList = creatElement(
      'div',
      'post__category-list',
    )

    postData.category2.forEach((category) => {
      const categorySpan = creatElement(
        'span',
        'post__category2 post__category--${category2.id}',
        category.text,
      )
      categoryList.append(categorySpan)
    })

    // =======

    postHeader.append(categoryList)

    // ======

    const infoParagraph = creatElement('p', 'info')
    post2.append(
      postHeader,
      infoParagraph,
      buttonInformation,
    )

    // ========
    postList.append(post)
  })

  return postList
}

// =======

const post2 = creatPost()
page.append(post)

//=======
