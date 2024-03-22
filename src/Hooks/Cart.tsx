import { ReactNode, createContext, useContext } from "react";

interface ProductTypes {
    id: number;
    name: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
};

interface ProductsContextTypes {
    helloWorld: () => void;
};

export const CartContext = createContext({} as ProductsContextTypes) ;

export function CartProvider({children}:{children: ReactNode}){

    function helloWorld(){
        console.log('oi')
    };

    return(
        <CartContext.Provider value={{
            helloWorld
        }}>
            {children}
        </CartContext.Provider>
    )
};

export function useCart(){
    const context = useContext(CartContext);
    return context
};