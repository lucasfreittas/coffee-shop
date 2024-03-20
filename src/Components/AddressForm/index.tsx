import { useForm, useFormContext } from 'react-hook-form';
import { AddressFormContainer, Form, TitleContainer } from './styles';
import { MapPinLine } from "@phosphor-icons/react";
import { useUser } from '../../Hooks/UserData';


export function AddressForm(){
    const { register, } = useFormContext()
    const { } = useForm();
    const { userAddress } = useUser();


    return(
        <AddressFormContainer>
            <TitleContainer>
                <MapPinLine size={22}/>
                <div>
                    <p>Endereço de Entrega</p>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
            </TitleContainer>
            <Form>
                <input type="text" placeholder='CEP' max='99999999999' defaultValue={userAddress.zipCode} {...register('zipCode')} />
                <input type="text" placeholder='Rua' className='addressInput' defaultValue={userAddress.street}  {...register('street')} />
                <input type="number" placeholder='Número' defaultValue={userAddress.addressNumber} {...register('addressNumber', { valueAsNumber: true })} />
                <input type="text" placeholder='Complemento' className='complementInput' defaultValue={userAddress.complement} {...register('complement')} />
                <input type="text" placeholder='Bairro' defaultValue={userAddress.neighborhood} {...register('neighborhood')}/>
                <input type="text" placeholder='Cidade' className='cityInput' defaultValue={userAddress.city} {...register('city')}/>

                <select defaultValue={userAddress.district} {...register('district')}>
                    <option value="" disabled selected>UF</option>       
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                </select>
            </ Form>
        </AddressFormContainer>
    )
}