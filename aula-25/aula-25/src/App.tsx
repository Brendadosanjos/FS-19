import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import './index.css'

function App() {

  return (
    <div className='bg-gray-100'>
    <Header content={"Header"}/>
    <Main>
      <div>
        <p>Main</p>
      </div>
    </Main>
    <Footer content={"Footer"}/>
    </div>
  )
}

export default App
