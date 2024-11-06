export function App() {
  let lista = ["Mouse", " Monitor", " WebCam"]

  return (
    <div className=" text-center">
    <p>Lista de Produtos em Promoção! {lista.join()}</p>
    </div>
  )
}

