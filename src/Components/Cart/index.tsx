import { CartContainer, ProductContainer, Counter, Price, TotalResume, ProductCard } from './styles';
import Cappucino from '../../Assets/Cappucino-img.png'
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { NavLink } from 'react-router-dom';

export function Cart(){
    return(
        <CartContainer>
            <ProductContainer>
                <ProductCard>
                    <img src={Cappucino} alt="" />
                    <div className='productContent'>
                        <p>Expresso Tropical</p>
                        <div>
                            <Counter>
                                <Minus size={14} weight="bold"/>
                                <input type="number" placeholder="0" />
                                <Plus size={14} weight="bold" />
                            </Counter>
                            <button type='submit' className='removeButton'> 
                                <Trash size={16} />
                                Remover
                            </button>
                        </div>
                    </div>
                    <Price>
                        <h2>R$ 9,90</h2>
                    </Price>
                </ProductCard>

                <ProductCard>
                    <img src={Cappucino} alt="" />
                    <div className='productContent'>
                        <p>Expresso Tropical</p>
                        <div>
                            <Counter>
                                <Minus size={14} weight="bold"/>
                                <input type="number" placeholder="0" />
                                <Plus size={14} weight="bold" />
                            </Counter>
                            <button type='submit' className='removeButton'> 
                                <Trash size={16} />
                                Remover
                            </button>
                        </div>
                    </div>
                    <Price>
                        <h2>R$ 9,90</h2>
                    </Price>
                </ProductCard>
                
            </ProductContainer>

            <TotalResume>
                <div className='totalItens'><p>Total de itens</p> <p>R$ 29,70</p></div>
                <div className='delivery'><p>Entrega</p> <p>R$ 3,50</p></div>
                <div className='totalAmount'><h2>Total</h2> <h2>R$ 33,20</h2></div>
            </TotalResume>

            <NavLink to='/success' title='Success'>
                <button type='submit'>CONFIRMAR PEDIDO</button>
            </NavLink>

            
        </CartContainer>
    )
} 