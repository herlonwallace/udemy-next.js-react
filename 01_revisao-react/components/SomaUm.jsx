export default function SomaUm(props) {
    // props somente leitura, não alterar o valor
    // props.numero++
    return (
        <div>
            <h1>{props.numero + 1}</h1>
        </div>
    )
}