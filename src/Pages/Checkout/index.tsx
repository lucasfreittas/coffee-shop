import { PaymentForm } from '../../Components/PaymentForm';
import { AddressForm } from '../../Components/AddressForm';
import { Cart } from '../../Components/Cart';

import { useNavigate } from "react-router-dom";

import { CheckoutContainer, InfoContainer, CartContainer }from './styles';

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import * as zod from 'zod' 
import { useUser } from '../../Hooks/UserData';
import { useEffect } from 'react';

const newFormValidationSchema = zod.object({
    zipCode: zod.string(),
    street: zod.string(),
    addressNumber: zod.number(),
    complement: zod.string(),
    neighborhood: zod.string(),
    city: zod.string(),
    district: zod.string(),
    payment: zod.string(),
  })
  
  type NewFormData = zod.infer<typeof newFormValidationSchema>


export function Checkout(){
    const navigate = useNavigate();
    const {setZipCode, setStreet, setAddressNumber, setNeighborhood, setCity, setDistrict, setComplement, setPayment} = useUser();

    const newForm = useForm<NewFormData>({
        resolver: zodResolver(newFormValidationSchema),

      });
    
    const { handleSubmit } = newForm

    const { userAddress } = useUser();

    function handleSendForm(data: NewFormData){
        setZipCode(data.zipCode);
        setStreet(data.street);
        setAddressNumber(data.addressNumber);
        setNeighborhood(data.neighborhood);
        setCity(data.city);
        setDistrict(data.district);
        setComplement(data.complement);
        setPayment(data.payment)

        navigate('/success');
    };

    
    return(
        <CheckoutContainer onSubmit={handleSubmit(handleSendForm)}>
                <InfoContainer>
                    <h1>Complete seu pedido</h1>
                    <FormProvider {...newForm}>
                        {userAddress.payment && <AddressForm/>}
                        <PaymentForm /> 
                    </FormProvider>
                </InfoContainer>
                <CartContainer>
                    <h1>Cafés Selecionados</h1>
                    <Cart handleSubmitForm={handleSubmit(handleSendForm)} />
                </CartContainer>
        </CheckoutContainer>
    );
};