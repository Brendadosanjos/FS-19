import { ReactNode } from "react"
import { Card } from "./Card"

interface MainProps {
    children: ReactNode
}

export function Main(props: MainProps) {
    return (
        <main>
            <Card title="Título Card 1" subtitle="Subtitle Card1" content="Conteúdo Principal"
            footer="Rodapé do Card 1" />

            <Card title="Título Card 2" subtitle="Subtitle Card2" content="Conteúdo Principal" footer="Rodapé do Card 2" />

            <Card title="Título Card 3" subtitle="Subtitle Card3" content="Conteúdo Principa3" footer="Rodapé do Card 3" />
        </main>
    )
}