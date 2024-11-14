interface HeaderProps{
    content: string
}

export function Header(props: HeaderProps){
    return(
        <div className="bg-gray-400  text-2xl h-12 flex items-center text-white justify-center">{props.content}</div>
    )
}