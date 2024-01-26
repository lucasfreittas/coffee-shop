import { CoffeeContainer, Tags, Price, Counter, AmountContainer } from "./styles";
import Cappucino from '../../Assets/Cappucino-img.png'
import { Plus, Minus, ShoppingCart } from "@phosphor-icons/react";

export function CoffeeCard(){
    return(
        <CoffeeContainer>
            <img src={Cappucino} alt="" />
            <Tags>
                <span>TRADICIONAL</span>
                <span>COM LEITE</span>
            </Tags>
            <h2>Capuccino</h2>
            <p>Bebida com canela feita de doses iguais de café, leite e espuma</p>
            <Price>
                <div className='priceCountainer'>
                    <span>R$</span>
                    <p>9,90</p>
                </div>
                <AmountContainer>
                <Counter>
                    <Minus size={14} weight="bold"/>
                    <input type="number" placeholder="0" />
                    <Plus size={14} weight="bold" />
                </Counter>
                <button><ShoppingCart size={20}/></button>
                </AmountContainer>
            </Price>
            
        </CoffeeContainer>
    )

};