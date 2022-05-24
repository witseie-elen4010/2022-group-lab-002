'use strict'
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
//const overlay = document.getElementById('overlay')

window.onload = function () {
  modal.classList.add('active')
  overlay.classList.add('active')
}
/
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach((modal) => {
    closeModal(modal)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function closeModal (modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
