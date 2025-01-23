import Card from "../Components/Card"
import React, {useState, useEffect} from "react"



function HomePage() {
  const [produtosEmAlta, setProdutosEmAlta] = useState([])

  useEffect(() => {
    const buscarDados = async() => {
      try {
        let page = 1
        let perPage = 10
        const response = await fetch(`https://6792c350cf994cc6804b0058.mockapi.io/produtos/Produtos?limit=${perPage}&page=${page}`)
        const data = await response.json()
        
        setProdutosEmAlta(data)

      } catch (error) {
        console.log(`ERRO ao buscar produto: ${error}`);
      }
    }
    buscarDados()
  }, []);

    return (
      <>
      <section>
      {
        produtosEmAlta.map((produto)=>(
          <Card
          id={produto.id}
          imageURL={produto.imageURL}
          category={produto.category}
          description={produto.description}
          price={produto.price}
          />
        ))
      }
      </section>
      </>
    )
  }
  
  export default HomePage