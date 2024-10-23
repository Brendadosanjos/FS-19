'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempCliente = {
    nome: 'Fernando',
    email: 'franando@gmail.com',
    celular: '1123564477',
    cidade: 'São Paulo'
}

//CRUD - CREATE
const createCliente = (cliente) => 
    localStorage.setItem('db_cliente', cliente)

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)