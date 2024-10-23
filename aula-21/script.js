const API_BASE_URL = 'http://localhost:3333'
// const API_BASE_URL = 'https://services-products.p7fvz0.easypanel.host/api'

async function getProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`)
    // const { results: data } = await response.json()
    const data = await response.json()
    listarProdutos(data)
  } catch (error) {
    console.error(error.message)
  }
}

getProducts()

async function postProduct() {
  const name = document.getElementById('nome')
  const price = document.getElementById('preco')
  const category = document.getElementById('categoria')

  const product = {
    name: name.value,
    price: price.value,
    category: category.value
  }

  try {
    await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    })
  } catch (error) {
    console.error(error.message)
  }

  name.value = ''
  price.value = ''
  category.value = ''

  getProducts()
}

async function getProductById(id) {
  const name = document.getElementById('nome-atualizado')
  const price = document.getElementById('preco-atualizado')
  const category = document.getElementById('categoria-atualizada')

  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`)
    const product = await response.json()

    name.value = product.name
    price.value = product.price
    category.value = product.category
  } catch (error) {
    console.error(error.message)
  }
}

async function patchProduct(id) {
  console.log(id)
  // Utilizar manipulacao do DOM, para captar os dados dos INPUTS/SELECT
  // Criar um objeto produto com os dados atuais
  // Fazer uma requisicao PATCH para atualizar
  // Fechar o Modal
}

async function deleteProduct(id) {
  try {
    await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE'
    })
  } catch (error) {
    console.error(error.message)
  }
  getProducts()
}

// FUNÇÕES DE MANIPULAÇÃO DO DOM
function abrirModal(id) {
  const modal = document.getElementById('modal')
  modal.classList.remove('hidden')
  modal.classList.add('flex')

  const patchButtonElement = document.getElementById('patch-button');
  patchButtonElement.onclick = function() {
    patchProduct(id)
  }

  getProductById(id)
}

function fecharModal() {
  const modal = document.getElementById('modal')
  modal.classList.add('hidden')
  modal.classList.remove('flex')
}

function listarProdutos(produtos) {
  const listaProdutos = document.getElementById("lista-produtos")
  
  listaProdutos.innerHTML = ""
  
  produtos?.forEach((produto) => {
    listaProdutos.innerHTML += `
        <tr>
          <td>${produto.name}</td>
          <td>${produto.price}</td>
          <td>${produto.category}</td>
          <td>
            <button onclick="deleteProduct('${produto.id}')">Remover</button>
          </td>
          <td>
            <button onclick="abrirModal('${produto.id}')">Editar</button>
          </td>
        </tr>
    `;
  });
}