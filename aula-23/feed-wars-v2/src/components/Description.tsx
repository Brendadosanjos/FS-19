//kebab case - dividido-por-traco
//snake case - nome_DIVIDIDO
//camel case - divididoMaiusculas (a partir da segunda)
//pascal case - Dividida Maiuscula

interface TitleProps {
    value: string
}

export function Description(props: TitleProps){
    return (
    <p>{props.value}</p>
    )   
}