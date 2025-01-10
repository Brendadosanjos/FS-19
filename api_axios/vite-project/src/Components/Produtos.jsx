import axios from "axios"
import { useState, useEffect } from "react"


function Produtos() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const fetchData  = async() => {
      try{
        const response = await axios.get("https://6780686485151f714b06afd1.mockapi.io/produtos/produtos")
        setProdutos(response.data)
    
        }catch{
          console.log("Erro ao buscar produto");
        }
      }

      fetchData()
      }, []);
      console.log(produtos);
    return (
      <>
      {
        produtos.map((produto) => (
          <div key = {produto.id}>
            <h1>{produto.name}</h1>
            <p>{produto.description}</p>
            <p>Preço: R$ {produto.price}</p>
            <p>Desconto: {produto.discount}</p>
          </div>
        ))
      }
      </>
    )
  }
  
  export default Produtos