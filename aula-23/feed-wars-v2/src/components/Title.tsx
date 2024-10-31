//kebab case - dividido-por-traco
//snake case - nome_DIVIDIDO
//camel case - divididoMaiusculas (a partir da segunda)
//pascal case - Dividida Maiuscula

interface TitleProps {
    value: string
}

export function Title(props: TitleProps){
    return (
    <h1>{props.value}</h1>
    )   
}