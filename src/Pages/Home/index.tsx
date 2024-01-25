import { HomeContainer,
        BannerHero,
        TextContainer,
        TitleContainer,
        BulletsContainer
} from "./styles";

import BannerHeroImg from '../../Assets/coffe-bannerHero.png'

import { ShoppingCart, MapPin } from "@phosphor-icons/react";

export function Home(){
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
                        <div><div className="icon2"><ShoppingCart size={16} weight="fill" /></div> <span>Embalagem mantém o café intacto</span> </div>
                        <div><div className="icon3"><ShoppingCart size={16} weight="fill" /></div> <span>Entrega rápida e rastreada</span> </div>
                        <div><div className="icon4"><ShoppingCart size={16} weight="fill" /></div> <span>O café chega fresquinho até você</span> </div>
                    </BulletsContainer>
                </TextContainer>
                <img src={BannerHeroImg} alt="" />
           </BannerHero>
        </HomeContainer>
    );
};