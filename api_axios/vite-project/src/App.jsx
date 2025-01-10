import HomePage from "./Pages/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProdutosPage from "./Pages/ProdutosPage";
import DetalhesProdutosPage from "./Pages/DetalhesProdutosPage";
import LoginPage from "./Pages/LoginPage";
import ConfirmarCompraPage from "./Pages/ConfirmarCompraPage";

function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="produtos" element={<ProdutosPage/>}/>
          <Route path="detalhesprodutos" element={<DetalhesProdutosPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="confirmarcompra" element={<ConfirmarCompraPage/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
