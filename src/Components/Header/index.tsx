import { HeaderContainer, AddressButon, CartButton } from "./styles";

import { ShoppingCart, MapPin } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";

import coffeShopLogo from '../../Assets/coffee-shop-logo.svg'

export function Header(){
    return(
        <HeaderContainer>
            <NavLink to='/' title='Home'>
                <img src={coffeShopLogo} alt="" />
            </NavLink>
            <NavLink to='/checkout' title='Your Cart'>
                <nav>
                    <AddressButon>
                        <MapPin size={22} weight="fill" />
                        Porto Alegre, RS
                    </AddressButon>
                    <CartButton> 
                        <ShoppingCart size={22} weight="fill" />
                    </CartButton>
                </nav>
            </NavLink>
        </HeaderContainer>
    );
};