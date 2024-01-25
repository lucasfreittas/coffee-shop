import { HeaderContainer, AddressButon, CartButton } from "./styles";

import { ShoppingCart, MapPin } from "@phosphor-icons/react";


import coffeShopLogo from '../../Assets/coffee-shop-logo.svg'

export function Header(){
    return(
        <HeaderContainer>
            <img src={coffeShopLogo} alt="" />
            <div>
                <AddressButon><MapPin size={22} weight="fill" /> Porto Alegre, RS</AddressButon>
                <CartButton> <ShoppingCart size={22} weight="fill" /> </CartButton>
            </div>
        </HeaderContainer>
    );
};