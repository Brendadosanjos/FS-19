interface CardsProps {
    value: String,
    nome: String,
    valor: number,
    desconto: number,
    funcao: any
}

export function Cards(props: CardsProps){
    return(
        <div className={`border-4 p-5 rounded-2xl m-10 transform transition-transform duration-300 hover:scale-110 ${props.desconto>0?' border-red-400':'border-blue-400'}`}>
            <h2>{props.value}</h2>
            <div>Produto: {props.nome}</div>
            <div>Preço Original: R${props.valor}</div>
            {props.desconto>0?(
                <div>
                    <div>Desconto: R${props.desconto} </div>
                    <div>Preço final de venda: R${props.funcao(props.valor, props.desconto)}</div>
                </div>
            ): <div>Produto sem desconto</div>
            }

        </div>
    )
}

// {props.desconto>0&&( //nesse caso só para fazer o true
//     <div>
//         <div>Desconto: R${props.desconto} </div>
//         <div>Preço final de venda: R${props.funcao(props.valor, props.desconto)}</div>
//     </div>
// )}