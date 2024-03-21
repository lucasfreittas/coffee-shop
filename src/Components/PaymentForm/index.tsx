import { useFormContext } from 'react-hook-form';
import { TitleContainer } from './styles';
import { PaymentFormContainer, Form } from './styles';

import { CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { useUser } from '../../Hooks/UserData';


export function PaymentForm(){
    const { register, watch } = useFormContext();
    const payment = watch('payment')

    const { setPayment } = useUser();

    function handlePaymentOption(selectedPayment: any){
        setPayment(selectedPayment.target.defaultValue)
    }; 

    return(
        <PaymentFormContainer>
            <TitleContainer>
                <CurrencyDollar size={22}/>
                <div>
                    <p>Pagamento</p>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
            </TitleContainer>    
                <Form onChange={handlePaymentOption}>
                    <label htmlFor='credit' className={payment === 'Credit' ? 'checked' : ''} >
                        <input type="radio" value="Credit" id='credit' {...register('payment')} />
                        <CreditCard size={16} />CARTÃO DE CRÉDITO
                    </label>
                    <label htmlFor='debit' className={payment === 'Debit' ? 'checked' : ''} >
                        <input type="radio" value="Debit" id='debit' {...register('payment')}/>
                        <Bank size={16} />CARTÃO DE DÉBITO
                    </label>
                    <label htmlFor='cash' className={payment === 'Cash' ? 'checked' : ''}>
                        <input type="radio" value="Cash" id='cash' {...register('payment')}/>
                        <Money size={16} />DINHEIRO
                    </label>
                </Form>
        </PaymentFormContainer>
    )
}