export default function Header(){
    return(
        <div className="items-center bg-zinc-300 h-[50px] text-center justify-center flex">
            <h1 className="color font-bold"> React Application </h1>
        </div>
    )
}


//da forma representada abaixo é a exportação nomeada, o componente pode ser exportado por seu nome exato

// interface TitleProps {
//     value: string
// }

// export function Title(props: TitleProps) {
//     return (
//         <h1>{props.value}</h1>
//     )   
// }

//lá no main ficaria assim: import { title } from './title.tsx'