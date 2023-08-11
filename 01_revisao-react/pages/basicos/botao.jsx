function acao1() {
    console.log("acao1")
}

export default function botao() {
    return (
        <div>
            <button onClick={acao1}>Click</button>
        </div>
    )

}