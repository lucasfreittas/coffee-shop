import { HomeContainer,
        BannerHero,
        TextContainer,
        TitleContainer,
        BulletsContainer,
        BannerHeroBG,
        ProductsContainer,
        Products,
} from "./styles";

import BannerHeroImg from '../../Assets/coffe-bannerHero.png'
import BannerHeroBGimg  from '../../Assets/Banner-hero-background.svg'

import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";

import { CoffeeCard } from "../../Components/CoffeeCard";
import { useProducts } from '../../Hooks/ProductsData';

export function Home(){
    const { productsList } = useProducts();

    return(
        <HomeContainer>
           <BannerHero>
                <TextContainer>
                    <TitleContainer>
                        <h1>Encontrar Café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </ TitleContainer>
                    <BulletsContainer>
                        <div><div className="icon1"><ShoppingCart size={16} weight="fill" /></div> <span>Compra simples e segura</span> </div>
                        <div><div className="icon2"><Package size={16} weight="fill" /></div> <span>Embalagem mantém o café intacto</span> </div>
                        <div><div className="icon3"><Timer size={16} weight="fill" /></div> <span>Entrega rápida e rastreada</span> </div>
                        <div><div className="icon4"><Coffee size={16} weight="fill" /></div> <span>O café chega fresquinho até você</span> </div>
                    </BulletsContainer>
                </TextContainer>
                <img src={BannerHeroImg} className='bannerHeroImg'alt="" />
                <BannerHeroBG src={BannerHeroBGimg} />
           </BannerHero>
           <ProductsContainer>
                <h1>Nossos Cafés</h1>
                <Products>
                    {productsList && (
                        productsList.map((product) => (
                            <CoffeeCard
                                key={product.id} 
                                coffeedata={product}
                            />
                        ))
                    )}
                </Products>
           </ProductsContainer>
        </HomeContainer>
    );
};