import { CartContainer, ProductContainer, Counter, Price, TotalResume } from './styles';

import { Minus, Plus } from "@phosphor-icons/react";

export function Cart(){
    return(
        <CartContainer>
            <ProductContainer>
                <img src="" alt="" />
                <div>
                    <p>Expresso Tropical</p>
                    <Counter>
                        <Minus size={14} weight="bold"/>
                        <input type="number" placeholder="0" />
                        <Plus size={14} weight="bold" />
                    </Counter>
                </div>
            <Price>
                <h2>R$ 9,90</h2>
            </Price>

            <TotalResume>
                <div><p>Total de itens</p> <p>R$ 29,70</p></div>
                <div><p>Entrega</p> <p>R$ 3,50</p></div>
                <div><h2>Total</h2> <h2>R$ 33,20</h2></div>
            </TotalResume>

            <button>Confirmar Pedido</button>

            </ProductContainer>
        </CartContainer>
    )
} 