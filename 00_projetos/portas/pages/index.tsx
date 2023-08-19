import PortaModel from "@/model/porta"
import Porta from "../components/Porta"
import { useState } from "react"
import { atualizarPortas, criarPortas } from "@/functions/portas"

export default function Home() {

  const [portas, setPortas] = useState(criarPortas(4, 3))

  function renderizaPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <div style={{display: "flex"}}>
      {renderizaPortas()}  
    </div>
  )
}
