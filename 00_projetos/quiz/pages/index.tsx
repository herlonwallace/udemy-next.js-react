import Questao from '@/componentes/Questao'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'Melhor cor?', [
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Vermelho'),
    RespostaModel.errada('Azul'),
    RespostaModel.errada('Preta'),
  ])
  
  return (
    <Questao valor={questaoTeste}/>
  )
}
