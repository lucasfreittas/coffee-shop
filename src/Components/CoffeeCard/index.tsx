import { useEffect, useState } from "react";
import { CoffeeContainer, Tags, Price, Counter, AmountContainer } from "./styles";
import { Plus, Minus, ShoppingCart } from "@phosphor-icons/react";
import { useCart } from "../../Hooks/Cart";

interface CoffeeType{
    id: number,
    name: string,
    description: string,
    tags: string[],
    price: number,
    image: string,
};

interface CoffeeCardProps {
    coffeedata: CoffeeType;
};


export function CoffeeCard({coffeedata}:CoffeeCardProps){

    const [renderAmount, setRenderAmount] = useState(0);

    const { addToCart } = useCart();

    function handleIncreaseAmount(){
        if(renderAmount >= 0 && renderAmount <= 98){
            setRenderAmount(renderAmount + 1)
        };
        
    };

    function handleDecreaseAmount(){
        if(renderAmount >= 1 && renderAmount <= 100){
            setRenderAmount(renderAmount - 1)
        };
    };

    function handleAddToCart(e: any, coffeedata:CoffeeType){
        e.preventDefault();
        if(renderAmount > 0){
            const coffeToCard = {...coffeedata, amount: renderAmount};
            addToCart(coffeToCard)
            setRenderAmount(0)
        } else{
            return
        }
    };

    useEffect(() => {

    },[renderAmount,])

    return(
        <CoffeeContainer>
            <img src={coffeedata.image} alt="" />
            <Tags>
                {coffeedata.tags && (
                    coffeedata.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))
                )}
            </Tags>
            <h2>{coffeedata.name}</h2>
            <p>{coffeedata.description}</p>
            <Price>
                <div className='priceCountainer'>
                    <span>R$</span>
                    <p>{coffeedata.price.toString().padEnd(4, '0')}</p>
                </div>
                <AmountContainer>
                <Counter>
                    <Minus size={14} weight="bold" onClick={handleDecreaseAmount} />
                        <input type="number" placeholder="0" value={renderAmount} readOnly />
                    <Plus size={14} weight="bold" onClick={handleIncreaseAmount} />
                </Counter>
                <button onClick={(e) => handleAddToCart(e, coffeedata)}><ShoppingCart size={20}/></button>
                </AmountContainer>
            </Price>
            
        </CoffeeContainer>
    )

};