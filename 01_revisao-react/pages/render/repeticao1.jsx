export default function Repeticao1() {
    const listaAprovados = [
        'Joao',
        'Pedro',
        'Ana', 
        'Marcela',
        'Igor',
        'Victor',
        'Guga'
    ]

    function renderizarLista() {
        const itens = []

        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li key={i}>{listaAprovados[i]}</li>)
        }

        return itens
    }

    // Realizando com map
    //function renderizarLista() {
    //    return listaAprovados.map((nome, i) => <li key={i}>{nome}<li/>)
    //}

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )    
}