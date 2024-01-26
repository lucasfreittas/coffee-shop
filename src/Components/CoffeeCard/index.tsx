import { CoffeeContainer, Tags, Price, Counter } from "./styles";

export function CoffeeCard(){
    return(
        <CoffeeContainer>
            <img src="" alt="" />
            <Tags>
                <span>TRADICIONAL</span>
                <span>COM LEITE</span>
            </Tags>
            <h2>Capuccino</h2>
            <p>Bebida com canela feita de doses iguais de café, leite e espuma</p>
            <Price>
                <span>R$</span>
                <p>9,90</p>
                <Counter>
                    <input type="number" />
                </Counter>
                <button></button>
            </Price>
            
        </CoffeeContainer>
    )

};