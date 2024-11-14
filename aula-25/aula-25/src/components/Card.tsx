interface CardProps{
    title: string,
    subtitle: string,
    content: string,
    footer: string
}

export function Card(props: CardProps){
    return(
        <div className=" bg-gray-200 flex flex-col content-between w-60 border-blue-300 rounded-lg shadow-lg my-5 gap-2 p-3 font-sans mx-3">
        <h1 className="text-xl">{props.title}</h1>
        <div>{props.subtitle}</div>
        <div>{props.content}</div>
        <hr className="border-gray-300 border"/>
        <div>{props.footer}</div>
        </div>
    )
}