// DOM-ELEMENTS
const burger = document.querySelector('.burger')
const sideBar = document.querySelector('.adaptive-menu')
const closeSideBar = document.querySelector('.adaptive-menu-img-block')
// DOM-ELEMENTS-END


burger.addEventListener('click', e => {
  e.preventDefault()
  sideBar.classList.toggle('active')
})
closeSideBar.addEventListener('click', e => {
  e.preventDefault()
  sideBar.classList.remove('active')
})