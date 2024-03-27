import { CartContainer, ProductContainer, Counter, Price, TotalResume, ProductCard } from './styles';
import Cappucino from '../../Assets/Cappucino-img.png'
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useCart } from '../../Hooks/Cart';
import { useEffect } from 'react';

interface CoffeeType{
    id: number,
    name: string,
    description: string,
    tags: string[],
    price: number,
    image: string,
    amount: number,
};

export function Cart({handleSubmitForm}: any){

    const { cart, removeOneFromTheCart, addOneToTheCart, deleteFromTheCart, cartPrice } = useCart()

    function handleRemoveOneFromTheCart(product:CoffeeType){
        removeOneFromTheCart(product)
    };

    function handleAddOneToTheCart(product:CoffeeType){
        addOneToTheCart(product)
    };

    function handleDeleteFromTheCart(product:CoffeeType){
        deleteFromTheCart(product)
    };

    useEffect(() => {

    }, [cart])

    return(
        <CartContainer>
            <ProductContainer>
                {cart && (
                    cart.map((product) => (
                        product.amount > 0 && (
                            <ProductCard>
                                <img src={product.image} alt="" />
                                <div className='productContent'>
                                <p>{product.name}</p>
                                    <div>
                                        <Counter>
                                            <Minus size={14} weight="bold" onClick={() => handleRemoveOneFromTheCart(product)}/>
                                            <input type="number" placeholder="0" value={product.amount} />
                                            <Plus size={14} weight="bold" onClick={() => handleAddOneToTheCart(product)} />
                                        </Counter>
                                        <button type='submit' className='removeButton' onClick={() => handleDeleteFromTheCart(product)}> 
                                            <Trash size={16} />
                                            Remover
                                        </button>
                                    </div>
                                </div>
                                <Price>
                                    <h2>{`R$ ${(product.price * product.amount).toFixed(2)}`}</h2>
                                </Price>
                            </ProductCard>
                        )
                        
                            ))
                )}
            </ProductContainer>
            <TotalResume>
                <div className='totalItens'><p>Total de itens</p> <p>{`R$ ${cartPrice.toFixed(2)}`}</p></div>
                <div className='delivery'><p>Entrega</p> <p>R$ 10,00</p></div>
                <div className='totalAmount'><h2>Total</h2> <h2>{`R$ ${(cartPrice + 10).toFixed(2)}`}</h2></div>
            </TotalResume>

            {/* <NavLink to='/success' title='Success'> */}
                <button type='submit' onClick={handleSubmitForm}>CONFIRMAR PEDIDO</button>
            {/* </NavLink> */}

            
        </CartContainer>
    )
} 