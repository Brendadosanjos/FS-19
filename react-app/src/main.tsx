import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import Header from './components/header.tsx'
import { Cards } from './components/Cards.tsx'

const desciption = "Promoção!"

function calcDesc(v:number,d:number){
  return v-d
}

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <Header/>
    <App/>
    <div className='flex justify-center gap-10 '>
    <Cards value={desciption} nome={'Mouse'} valor={150.50} desconto={15} funcao={calcDesc}/>
    <Cards value={desciption} nome={'Monitor'} valor={900.99} desconto={20} funcao={calcDesc}/>
    <Cards value={desciption} nome={'WebCam'} valor={60.99} desconto={5} funcao={calcDesc}/>
    <Cards value={""} nome={'CPU'} valor={490.99} desconto={0} funcao={calcDesc}/>
    
    </div>
  </StrictMode>
)
