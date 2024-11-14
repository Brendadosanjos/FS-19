interface CardProps{
    title: string,
    subtitle: string,
    content: string,
    footer: string
}

export function Card(props: CardProps){
    return(
        <div className=" bg-gray-300 flex flex-col content-between w-60 border-blue-500 rounded-lg shadow-lg shadow-slate-800 my-5 gap-2 p-3 font-sans mx-10">
        <h1 className="text-xl">{props.title}</h1>
        <div className="text-gray-700">{props.subtitle}</div>
        <div className="text-gray-700">{props.content}</div>
        <hr className="border-gray-500 border"/>
        <div>{props.footer}</div>
        </div>
    )
}