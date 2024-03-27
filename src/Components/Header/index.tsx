import { HeaderContainer, AddressButon, CartButton } from "./styles";

import { ShoppingCart, MapPin } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";

import coffeShopLogo from '../../Assets/coffee-shop-logo.svg'
import { useCart } from "../../Hooks/Cart";
import { useEffect } from "react";

export function Header(){
    const { cart } = useCart();
    console.log(cart)

    useEffect(() => {
        console.log(cart)
    },[cart])
    return(
        <HeaderContainer>
            <NavLink to='/' title='Home'>
                <img src={coffeShopLogo} alt="" />
            </NavLink>
            <NavLink to='/checkout' title='Your Cart'>
                <nav>
                    <AddressButon>
                        <MapPin size={22} weight="fill" />
                        São Paulo, SP
                    </AddressButon>
                    <CartButton> 
                        <ShoppingCart size={22} weight="fill" />
                        {cart.length > 0 && (
                            <p>{cart.length}</p>
                        )}
                    </CartButton>
                </nav>
            </NavLink>
        </HeaderContainer>
    );
};