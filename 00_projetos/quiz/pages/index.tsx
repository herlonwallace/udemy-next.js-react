import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'
import { useState } from 'react'
import Questionario from '../componentes/Questionario'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelho'),
  RespostaModel.errada('Azul'),
  RespostaModel.errada('Preta'),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)
  
  function questaoRespondida(questao: QuestaoModel) {

  }

  function irPraProximoPasso() {

  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questionario 
        questao={questao}
        ultima={true}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />   
    </div>
    
  )
}
