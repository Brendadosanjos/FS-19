interface FooterProps{
    content: string
}

export function Footer(props: FooterProps){
    return(
        <div>{props.content}</div>
    )
}