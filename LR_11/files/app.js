"use strict";

function closeModal() {
    let first_modal = document.querySelector('.first')
    first_modal.style.display = 'none'
}

function openError() {
    let second_modal = document.querySelector('.second')
    second_modal.style.display = 'block'
    second_modal.style.opacity = '1'
}

function openFinish() {
    let third_modal = document.querySelector('.third')
    third_modal.style.display = 'block'
    third_modal.style.opacity = '1'
}

function sendFormFirst() {
    let nameError = document.querySelector('.name_error')
    let phoneError = document.querySelector('.phone_error')
    nameError.style.display = 'none'
    phoneError.style.display = 'none'

    let name = document.querySelector('.name').value
    let tel = document.querySelector('.telephone').value
    let email = 'tatuyana.harazduyk@gmail.com'

    let data = {
        name,
        tel,
        email
    }
    if (name.length < 3 || tel.length < 4) {
        if (name.length < 3) {
            nameError.style.display = 'block'
        }
        if (tel.length < 4) {
            phoneError.style.display = 'block'

        }
    } else {
                closeModal()
        openFinish()
    }

}