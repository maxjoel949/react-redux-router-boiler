
import React from 'react'
import { createPortal } from 'react-dom'

const createPortalForModal = () => {
    const element = document.createElement('div')
    element.setAttribute('id', 'tester')
    document.body.insertAdjacentElement('beforeend', element)
}
const Modal = () => {
    createPortalForModal()
    const eli = document.getElementById('tester')
    createPortal(eli, <div><h1>HOLA</h1></div>)
}

export default Modal