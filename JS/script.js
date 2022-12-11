// DOM-ELEMENTS
const scrollBtn = document.querySelector('.nav-btn')
const scrollBtn2 = document.querySelector('.banner-content-mobile-btn')
const burger = document.querySelector('.burger')
const sideBar = document.querySelector('.adaptive-menu')
const closeSideBar = document.querySelector('.adaptive-menu-img-block')
const closePopUp = document.querySelector('.close2')
const form = document.querySelector('.form')
const overley = document.querySelector('.overley')
// DOM-ELEMENTS-END


scrollBtn.addEventListener('click', () => window.scrollTo({ top: 2700, behavior: 'smooth' }))
scrollBtn2.addEventListener('click', () => window.scrollTo({ top: 2950, behavior: 'smooth' }))

burger.addEventListener('click', () => sideBar.classList.toggle('active'))

closeSideBar.addEventListener('click', () => sideBar.classList.remove('active'))

form.addEventListener('submit', e => {
  e.preventDefault()
  overley.classList.toggle('active')
})

closePopUp.addEventListener('click', () => overley.classList.remove('active'))

