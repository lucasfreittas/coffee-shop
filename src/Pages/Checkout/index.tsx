import { PaymentForm } from '../../Components/PaymentForm';
import { AddressForm } from '../../Components/AddressForm';
import { Cart } from '../../Components/Cart';

import { CheckoutContainer,
        AddressContainer,
        CartContainer,}
        from './styles';



export function Checkout(){
    return(
        <CheckoutContainer>
                <AddressContainer>
                    <h1>Complete seu pedido</h1>
                    <AddressForm />
                    <PaymentForm /> 
                </AddressContainer>
                <CartContainer>
                    <h1>Cafés Selecionados</h1>
                    <Cart />
                </CartContainer>
        </CheckoutContainer>
    );
};