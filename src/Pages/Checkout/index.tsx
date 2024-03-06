import { PaymentForm } from '../../Components/PaymentForm';
import { AddressForm } from '../../Components/AddressForm';
import { Cart } from '../../Components/Cart';

import { CheckoutContainer, InfoContainer, CartContainer }from './styles';



export function Checkout(){
    return(
        <CheckoutContainer>
                <InfoContainer>
                    <h1>Complete seu pedido</h1>
                    <AddressForm />
                    <PaymentForm /> 
                </InfoContainer>
                <CartContainer>
                    <h1>Cafés Selecionados</h1>
                    <Cart />
                </CartContainer>
        </CheckoutContainer>
    );
};