// Define a URL base da API
const API_BASE_URL = 'https://services-products.p7fvz0.easypanel.host/api'

// Declaração de uma variável para armazenar o ID do produto selecionado para edição
let idSelecionado

// Função assíncrona que faz uma requisição GET para a API para obter a lista de produtos
async function getProducts() {
  try {
    // Realiza a requisição GET para a API com um parâmetro de tamanho de página
    const response = await fetch(`${API_BASE_URL}/products?page_size=100`)
    
    // Extrai a lista de resultados do JSON da resposta
    const { results } = await response.json()
    
    // Chama a função listarProdutos para exibir os produtos no DOM
    listarProdutos(results)
  } catch (error) {
    // Captura e exibe erros no console
    console.error(error.message)
  }
}

// Chama a função getProducts ao carregar o código para buscar os produtos inicialmente
getProducts()

// Função assíncrona que envia um novo produto para a API usando o método POST
async function postProduct() {
  // Captura os valores dos campos do formulário no DOM
  const name = document.getElementById('nome')
  const price = document.getElementById('preco')
  const category = document.getElementById('categoria')

  // Cria um objeto com os dados do novo produto
  const product = {
    name: name.value,
    price: price.value,
    category: category.value
  }

  try {
    // Faz uma requisição POST para a API com o novo produto
    await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(product) // Converte o objeto product para JSON
    })
  } catch (error) {
    // Captura e exibe erros no console
    console.error(error.message)
  }

  //Ao definir Content-Type: 'application/json', estamos dizendo ao servidor que os dados enviados estão no formato JSON, o que permite que o servidor os interprete corretamente. Quando você usa JSON.stringify(product) para enviar os dados do objeto product, o conteúdo no corpo da requisição é transformado em uma string JSON, e o servidor espera esse formato graças ao cabeçalho Content-Type.

  // Limpa os campos do formulário após o envio do produto
  name.value = ''
  price.value = ''
  category.value = ''

  // Atualiza a lista de produtos após adicionar um novo
  getProducts()
}

// Função assíncrona que obtém os detalhes de um produto específico pelo ID
async function getProductById(id) {
  // Captura os campos de entrada no DOM onde os dados atualizados serão exibidos
  const name = document.getElementById('nome-atualizado')
  const price = document.getElementById('preco-atualizado')
  const category = document.getElementById('categoria-atualizada')

  try {
    // Faz uma requisição GET para buscar um produto específico pelo ID
    const response = await fetch(`${API_BASE_URL}/products/${id}`)
    
    // Extrai os dados do produto do JSON da resposta
    const product = await response.json()

    // Preenche os campos de entrada com os dados do produto para edição
    name.value = product.name
    price.value = product.price
    category.value = product.category
  } catch (error) {
    // Captura e exibe erros no console
    console.error(error.message)
  }
}

// Função assíncrona para atualizar um produto (ainda não implementada)
async function patchProduct() {
  // Exibe o ID do produto selecionado no console (falta implementar a requisição PATCH)
  console.log(idSelecionado)
}

// Função assíncrona que remove um produto pelo ID
async function deleteProduct(id) {
  try {
    // Faz uma requisição DELETE para remover o produto pelo ID
    await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE'
    })
  } catch (error) {
    // Captura e exibe erros no console
    console.error(error.message)
  }
  // Atualiza a lista de produtos após a remoção
  getProducts()
}

// Funções de manipulação do DOM

// Abre o modal de edição, exibindo-o, e carrega os dados do produto selecionado
function abrirModal(id) {
  // Obtém o modal e modifica suas classes para exibi-lo
  const modal = document.getElementById('modal')
  modal.classList.remove('hidden')
  modal.classList.add('flex')

  // Armazena o ID do produto que será editado
  idSelecionado = id

  // Chama a função para buscar os dados do produto e preencher o modal
  getProductById(id)
}

// Fecha o modal de edição, ocultando-o
function fecharModal() {
  // Obtém o modal e modifica suas classes para ocultá-lo
  const modal = document.getElementById('modal')
  modal.classList.add('hidden')
  modal.classList.remove('flex')
}

// Exibe a lista de produtos no DOM, criando uma tabela com as informações de cada produto
function listarProdutos(produtos) {
  // Obtém o elemento da lista de produtos no DOM
  const listaProdutos = document.getElementById("lista-produtos")
  
  // Limpa o conteúdo atual da lista de produtos
  listaProdutos.innerHTML = ""
  
  // Itera sobre os produtos recebidos e adiciona cada um à tabela
  produtos?.forEach((produto) => {
    listaProdutos.innerHTML += `
        <tr>
          <td>${produto.name}</td>
          <td>${produto.price}</td>
          <td>${produto.category}</td>
          <td>
            <button onclick="deleteProduct(${produto.id})">Remover</button>
          </td>
          <td>
            <button onclick="abrirModal(${produto.id})">Editar</button>
          </td>
        </tr>
    `;
  });
}