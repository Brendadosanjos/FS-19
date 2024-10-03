let produtos = [
    { id: 1, nome: "Laptop", preco: "4000.00", categoria: "tecnologia" },
    { id: 2, nome: "Termômetro", preco: "50.00", categoria: "saude" },
    { id: 3, nome: "Pincel de Pintura", preco: "20.00", categoria: "arte" },
    {
      id: 4,
      nome: "Livro de Receitas",
      preco: "35.00",
      categoria: "gastronomia",
    },
    { id: 5, nome: "Bola de Futebol", preco: "60.00", categoria: "esporte" },
  ];
  
  const nome = document.getElementById("nome");
  const preco = document.getElementById("preco");
  const categoria = document.getElementById("categoria");
  
  const listaProdutos = document.getElementById("lista-produtos");
  
  const modal = document.getElementById("modal");
  
  const nomeAtualizado = document.getElementById("nome-atualizado");
  const precoAtualizado = document.getElementById("preco-atualizado");
  const categoriaAtualizada = document.getElementById("categoria-atualizada");
  
  function gerarId() {
    const ultimoIndice = produtos.length - 1;
    if (ultimoIndice < 0) return 1;
    const ultimoId = produtos[ultimoIndice].id;
    return ultimoId + 1;
  }
  
  function cadastrarProduto() {
    const produto = {
      id: gerarId(),
      nome: nome.value,
      preco: preco.value,
      categoria: categoria.value,
    };
  
    produtos.push(produto);
    listarProdutos();
  }
  
  function deletarProduto(id) {
    const indice = produtos.findIndex((produto) => produto.id === id);
  
    produtos.splice(indice, 1);
    listarProdutos();
  }
  
  function listarProdutos() {
    listaProdutos.innerHTML = "";
    produtos.forEach((produto) => {
      listaProdutos.innerHTML += `
          <tr>
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>${produto.categoria}</td>
            <td>
              <button onclick="deletarProduto(${produto.id})">Remover</button>
            </td>
            <td>
              <button onclick="abrirModal(${produto.id})">Editar</button>
            </td>
          </tr>
      `;
    });
  }
  
  listarProdutos();
  
  function abrirModal(id) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  
    const produto = produtos.find((produto) => produto.id === id);
  
    nomeAtualizado.value = produto.nome;
  }
  
  function fecharModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
  