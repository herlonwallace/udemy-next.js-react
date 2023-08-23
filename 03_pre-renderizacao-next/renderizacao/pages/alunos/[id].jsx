export function getStaticPaths() {
    return {
        fallback: false, // 404
        paths: [
            { params: { id: '107' } },
            { params: { id: '207' } },
            { params: { id: '1345' } },
        ]
    }
}

export function getStaticProps() {
    return (
        props: {}
    )
}

export default function AlunoPorId() {
    return (
        <div>
            <h1>Detalhes do Aluno</h1>
        </div>
    )
}