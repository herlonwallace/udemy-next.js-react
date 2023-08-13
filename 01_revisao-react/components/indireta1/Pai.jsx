import Filho from "./Filho";

export default function Pai(props) {

    function falarComigo(param1) {
        console.log(param1)
    }

    return (
        <div>
            <Filho funcao={falarComigo}/>
        </div>
    )
}