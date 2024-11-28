"use client"
import style from "./index.module.css"
import {useState} from "react"

export default function Home() {

  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("")

  function addTarefas() {
    console.log(novaTarefa)
  }

  return (
    <div className={style.divPrincipal}>

      <header className={style.Header}>
        <h1>Lista de coisas para fazer</h1>
      </header>

      <main className={style.Main}>
     
      <div className={style.divInput}>
        <input type="text" onChange={(e) => setNovaTarefa(e.target.value)}/>
        <button className={style.addButton} 
        onClick={addTarefas}>+</button>
      </div>
      <div className={style.List}>
        <ul>
         {tarefas.map((item) => 
          <li>{item}</li>
         )}
        </ul>
      </div>

      </main>

      <footer className={style.Footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
}