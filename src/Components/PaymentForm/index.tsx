import { PaymentFormContainer, Form } from './styles';

import { CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";

export function PaymentForm(){
    return(
        <PaymentFormContainer>
              <div>
                    <div><CurrencyDollar size={22}/><p>Pagamento</p></div>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
                <Form name="paymentForm">
                    <label>
                        <input type="radio" name="paymentForm" value="Credit" />
                        <CreditCard size={16} />Cartão de Crédito
                    </label>
                    <label>
                        <input type="radio" name="paymentForm" value="Debit" />
                        <Bank size={16} />Cartão de Débito
                    </label>
                    <label>
                        <input type="radio" name="paymentForm" value="Cash" />
                        <Money size={16} />Dinheiro
                    </label>
                </Form>
        </PaymentFormContainer>
    )
}