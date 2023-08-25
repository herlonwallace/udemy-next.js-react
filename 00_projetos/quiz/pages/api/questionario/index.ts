import questoes from "../questoes/bancoDeQuestoes"

export default function Questionario (req: any, res: any) {
    res.status(200).json(questoes.map(questoes => questoes.id))
} 