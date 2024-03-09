import { ReactNode, createContext, useContext } from "react";
import CafeComLeiteImg from "../Assets/Cafe com leite-img.png"
import ArabeImg from "../Assets/Arabe-img.png"
import CappucinoImg from "../Assets/Cappucino-img.png"
import ChocolateQuenteImg from "../Assets/Chocolate Quente-img.png"
import CubanoImg from "../Assets/Cubano-img.png"
import ExpressoAmericanoImg from "../Assets/Expresso Americano-img.png"
import ExpressoCremosoImg from "../Assets/Expresso Cremoso-img.png"
import ExpressoGeladoImg from "../Assets/Expresso Gelado-img.png"
import ExpressoTradicionalImg from "../Assets/Expresso Tradicional-img.png"
import HavianoImg from "../Assets/Havaiano-img.png"
import IrlandesImg from "../Assets/Irlandes-img.png"
import LatteImg from "../Assets/Latte-img.png"
import MacchiatoImg from "../Assets/Macchiato-img.png"
import MoccacinoImg from "../Assets/Moccacino-img.png"

interface ProductTypes {
    id: number;
    name: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
};

interface ProductsContextTypes {
    productsList: ProductTypes[]; 
};

export const ProductsContext = createContext({} as ProductsContextTypes) ;

export function ProductsProvider({children}:{children: ReactNode}){

    const productsList = [
        {
            id: 1,
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['tradicional'],
            price: 9.90,
            image: ExpressoTradicionalImg
        },
        {
            id: 2,
            name: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o tradicional',
            tags: ['tradicional'],
            price: 9.90,
            image: ExpressoAmericanoImg
        },
        {
            id: 3,
            name: 'Expresso Cremoso',
            description: 'Café expresso tradicional com espuma cremosa',
            tags: ['tradicional'],
            price: 9.90,
            image: ExpressoCremosoImg
        },
        {
            id: 4,
            name: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            tags: ['tradicional', 'Gelado'],
            price: 9.90,
            image: ExpressoGeladoImg
        },
        {
            id: 5,
            name: 'Café com Leite',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            tags: ['tradicional', 'Com leite'],
            price: 9.90,
            image: CafeComLeiteImg
        },
        {
            id: 6,
            name: 'Latte',
            description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            tags: ['tradicional', 'com leite'],
            price: 9.90,
            image: LatteImg
        },
        {
            id: 7,
            name: 'Capuccino',
            description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            tags: ['tradicional', 'com leite'],
            price: 9.90,
            image: CappucinoImg
        },
        {
            id: 8,
            name: 'Macchiato',
            description: 'Café expresso misturado com um pouco de leite quente e espuma',
            tags: ['tradicional', 'com leite'],
            price: 9.90,
            image: MacchiatoImg
        },
        {
            id: 9,
            name: 'Mocaccino',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            tags: ['tradicional', 'com leite'],
            price: 9.90,
            image: MoccacinoImg
        },
        {
            id: 10,
            name: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            tags: ['especial', 'com leite'],
            price: 9.90,
            image: ChocolateQuenteImg
        },
        {
            id: 11,
            name: 'Cubano',
            description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            tags: ['especial', 'alcoólico', 'gelado'],
            price: 9.90,
            image: CubanoImg
        },
        {
            id: 12,
            name: 'Havaiano',
            description: 'Bebida adocicada preparada com café e leite de coco',
            tags: ['especial'],
            price: 9.90,
            image: HavianoImg
        },
        {
            id: 13,
            name: 'Árabe',
            description: 'Bebida preparada com grãos de café árabe e especiariasa',
            tags: ['especial'],
            price: 9.90,
            image: ArabeImg
        },
        {
            id: 14,
            name: 'Irlandês',
            description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            tags: ['especial', 'alcoólico'],
            price: 9.90,
            image: IrlandesImg
        },
        
    ];

    return(
        <ProductsContext.Provider value={{
            productsList: productsList
        }}>
            {children}
        </ProductsContext.Provider>
    )
};

export function useProducts(){
    const context = useContext(ProductsContext);
    return context
};