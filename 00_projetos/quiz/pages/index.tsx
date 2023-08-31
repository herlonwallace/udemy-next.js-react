import Questao from '@/componentes/Questao'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'
import { useState } from 'react'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelho'),
  RespostaModel.errada('Azul'),
  RespostaModel.errada('Preta'),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)
  

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
    
  }

  function tempoEsgotado() {
    if(questao.naoRespondida) {
      setQuestao(questao.responderCom(-1))  
    }
    
    
  }
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao valor={questao}
        tempoPraResposta={5}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado} /> 
       
    </div>
    
  )
}
