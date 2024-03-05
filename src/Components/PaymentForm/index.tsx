import { TitleContainer } from '../AddressForm/styles';
import { PaymentFormContainer, Form } from './styles';

import { CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";

export function PaymentForm(){
    return(
        <PaymentFormContainer>
            <TitleContainer>
                <CurrencyDollar size={22}/>
                <div>
                    <p>Pagamento</p>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
            </TitleContainer>    
                <Form name="paymentForm">
                    <label htmlFor='credit'>
                        <input type="radio" name="paymentForm" value="Credit" id='credit' />
                        <CreditCard size={16} />CARTÃO DE CRÉDITO
                    </label>
                    <label htmlFor='debit'>
                        <input type="radio" name="paymentForm" value="Debit" id='debit'/>
                        <Bank size={16} />CARTÃO DE DÉBITO
                    </label>
                    <label htmlFor='cash' className='checked'>
                        <input type="radio" name="paymentForm" value="Cash" id='cash'/>
                        <Money size={16} />DINHEIRO
                    </label>
                </Form>
        </PaymentFormContainer>
    )
}