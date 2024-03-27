import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface CoffeeType{
    id: number,
    name: string,
    description: string,
    tags: string[],
    price: number,
    image: string,
    amount: number,
};

interface ProductsContextTypes {
    addToCart: (coffeedata: CoffeeType) => void;
    removeOneFromTheCart: (coffeedata: CoffeeType) => void;
    addOneToTheCart: (coffeedata: CoffeeType) => void;
    deleteFromTheCart: (coffeedata: CoffeeType) => void;
    cart: CoffeeType[];
    cartPrice: number;
};

export const CartContext = createContext({} as ProductsContextTypes) ;

export function CartProvider({children}:{children: ReactNode}){
    const [ cart, setCart ] = useState<CoffeeType[]>([]);

    const cartPrice = cart.reduce((totalPrice, item) => {
        return totalPrice + (item.price * item.amount);
    }, 0)
    

    function addToCart(coffeedata: CoffeeType) {

        const idChecker = cart.findIndex(i => i.id === coffeedata.id);

        if(idChecker === -1 ){
            setCart([...cart, coffeedata])
        } else{
            const updatedCart = [...cart];
            updatedCart[idChecker].amount += coffeedata.amount;
            setCart(updatedCart);
        };
        
    };

    function removeOneFromTheCart(coffeedata: CoffeeType){

        if(coffeedata.amount <= 1){
            deleteFromTheCart(coffeedata)
        } else {
            const getId = cart.findIndex(i => i.id === coffeedata.id);
            const updatedCart = [...cart];
            updatedCart[getId].amount -= 1;
            setCart(updatedCart);
        }
    };

    function addOneToTheCart(coffeedata: CoffeeType){
        const getId = cart.findIndex(i => i.id === coffeedata.id);
        const updatedCart = [...cart];
        updatedCart[getId].amount += 1;
        setCart(updatedCart);
    };

    function deleteFromTheCart(coffeedata: CoffeeType){
        const updatedCart = cart.filter(item => item.id !== coffeedata.id);
        setCart(updatedCart);
    };

    useEffect(() => {
        console.log(cart)
    },[cart])

    return(
        <CartContext.Provider value={{
            addToCart,
            removeOneFromTheCart,
            addOneToTheCart,
            deleteFromTheCart,
            cart,
            cartPrice,
        }}>
            {children}
        </CartContext.Provider>
    )
};

export function useCart(){
    const context = useContext(CartContext);
    return context
};