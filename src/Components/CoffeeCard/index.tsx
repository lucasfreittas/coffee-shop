import { CoffeeContainer, Tags, Price, Counter, AmountContainer } from "./styles";
import { Plus, Minus, ShoppingCart } from "@phosphor-icons/react";

interface CoffeeType{
    id: number,
    name: string,
    description: string,
    tags: string[],
    price: number,
    image: string
};

interface CoffeeCardProps {
    coffeedata: CoffeeType;
};


export function CoffeeCard({coffeedata}:CoffeeCardProps){
    return(
        <CoffeeContainer>
            <img src={coffeedata.image} alt="" />
            <Tags>
                {coffeedata.tags && (
                    coffeedata.tags.map((tag) => (
                        <span key={coffeedata.id}>{tag}</span>
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