import { SuccessContainer, DeliveryDetails, TextContainer, Address, Time, Payment }from './styles';

import DeliveryIllustration from '../../Assets/Delivery Illustration.svg';
import LocationIcon from '../../Assets/location icon.svg';
import TimeIcon from '../../Assets/time icon.png';
import PriceIcon from '../../Assets/price icon.png';
import { useUser } from '../../Hooks/UserData';



export function Success(){
    const { userAddress } = useUser();

    function handlePaymentName(){
        let paymentName;

        switch(userAddress.payment){
            case 'Credit':
                paymentName = 'Cartão de Crédito';
                break;

            case 'Debit':
                paymentName = 'Cartão de Débito';
                break;
            
            case 'Cash':
                paymentName = 'Dinheiro';
                break;
            
            default:
                paymentName = 'Método de pagamento inváldio';
                break
            };

        return paymentName
    };

    return(
        <SuccessContainer>
            <TextContainer>
                <h1>Uhu! Pedido confirmado</h1>
                <h2>Agora é só aguardar que logo o café chegará até você</h2>
                
                <DeliveryDetails>
                    <Address>
                        <img src={LocationIcon} alt="Ícone de localização" />
                        <div>
                            <p>Entrega em <b>{userAddress.street}, {userAddress.addressNumber}</b></p>
                            <p>{userAddress.neighborhood} - {userAddress.city}, {userAddress.district}</p>
                        </div>
                    </Address>
                    <Time>
                        <img src={TimeIcon} alt="Ícone de Tempo" />
                        <div>
                            <p>Previsão de entrega</p>
                            <b>20 min - 30 min</b>
                        </div>
                    </Time>
                    <Payment>
                        <img src={PriceIcon} alt="Ícone de Preço" />
                        <div>
                            <p>Pagamento na entrega</p>
                            <b>{handlePaymentName()}</b>
                        </div>
                    </Payment>
                </DeliveryDetails>
            </TextContainer>    
            <img src={DeliveryIllustration} alt="" />
        </SuccessContainer>
    );
};