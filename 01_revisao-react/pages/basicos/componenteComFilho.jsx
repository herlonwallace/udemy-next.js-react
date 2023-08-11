import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho(){
    return (
        <div>
            <Lista>
                <Item conteudo="Item #11"/>
                <Item conteudo="Item #12"/>
                <Item conteudo="Item #13"/>
                <Item conteudo="Item #13"/>
                <Item conteudo="Item #14"/>
                <Item conteudo="Item #22"/>
            </Lista>
        </div>
    )
}