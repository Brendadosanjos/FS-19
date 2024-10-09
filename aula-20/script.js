const API_BASE_URL = 'https://services-products.p7fvz0.easypanel.host/api'


async function getProducts(){
  try {
    const reponse = await fetch(`${API_BASE_URL}/products`)
    const { results } = await reponse.json()
    listarProdutos(results)
    console.log(data.results);
  } catch (error) {
    console.log(error);
    
  }
}

getProducts()

async function getProductById(id) { }
async function patchProduct(id) { }
async function deleteProduct(id) { }

function listarProdutos(produtos) {
  const listarProdutos= document.getElementById('lista-produtos')

  listarProdutos.innerHTML = " "

  produtos.forEach((produto)=> {
    listarProdutos.innerHTML += `
        <tr>
          <td>${produto.name}</td>
          <td>${produto.price}</td>
          <td>${produto.category}</td>
          <td>
            <button onclick="deletarProduto(${produto.id})">Remover</button>
          </td>
          <td>
            <button onclick="abrirModal(${produto.id})">Editar</button>
          </td>
        </tr>
    
    `  
  });
}