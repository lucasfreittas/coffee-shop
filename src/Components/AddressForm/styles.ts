import styled from "styled-components";

export const AddressFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 64rem;
    padding: 4rem;
    background-color: ${props => props.theme.GRAY_200};
    border-radius: 0.6rem;
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    width: 100%;
    row-gap: 1.6rem;
    column-gap: 1.2rem;
    
    > input, select {
        width: 20rem;
        font-size: 1.4rem;
        line-height: 130%;
        padding: 1.2rem;
        background-color: ${props => props.theme.GRAY_300};
        border: 1px solid ${props => props.theme.GRAY_400};
        border-radius: 0.4rem;
        color: ${props => props.theme.GRAY_700};

        &.placeholder{
            color: ${props => props.theme.GRAY_600};
        };

        &:focus{
            outline: 1px solid ${props => props.theme.YELLOW_700};
        };
        
    };

    > .addressInput {
        width: 100%;
    };

    > .complementInput {
        width: 34.8rem;
    };

    > .cityInput {
        width: 27.6rem;
    };

    > select{
        width: 6rem;
        -webkit-appearance: none; 
        -moz-appearance: none;
        appearance: none;
    };

    input[type=number] {
    -webkit-appearance: textfield; /* Safari */
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield; /* Outros */
    };

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none; /* Safari */
        appearance: none; /* Outros */
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    gap: 0.8rem;
    margin-bottom: 3.2rem;

    > svg {
        color: ${props => props.theme.YELLOW_700};
    };

    > div p {
        font-size: 1.6rem;
        line-height: 150%;
        color: ${props => props.theme.GRAY_800};
    };

    > div span {
        font-size: 1.4rem;
        line-height: 150%;
        color: ${props => props.theme.GRAY_700};
    };
`;