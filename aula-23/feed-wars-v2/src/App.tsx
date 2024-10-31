import { Title } from './components/Title'
import { Description } from './components/description'
import { Button } from './components/ui/button'

export function App() { //o JS fica aqui
  const description = "It's my first page"

return (
<>  
  <Title value="Primeiro" />
  <Title value="Segundo" />
  <Title value="Terceiro" />
  <Description value="It's my first page" />
  <Button>Default</Button>
</>
)
}