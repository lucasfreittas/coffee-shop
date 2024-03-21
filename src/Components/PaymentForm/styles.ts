import styled from "styled-components";

export const PaymentFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background-color: ${props => props.theme.GRAY_200};
    border-radius: 0.6rem;
`;

export const Form = styled.form`
    display: flex;
    flex: 1;
    width: 100%;
    row-gap: 1.6rem;
    column-gap: 1.2rem;

    > label{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        padding: 1.6rem 2rem 1.6rem 1.6rem;
        background-color: ${props => props.theme.GRAY_400};
        border-radius: 0.6rem;

        font-size: 1.2rem;
        line-height: 160%;
        color: ${props => props.theme.GRAY_700};

        > svg{
            color: ${props => props.theme.PURPLE_500};
        };

        &:hover{
            cursor: pointer;
            background-color: ${props => props.theme.GRAY_500};
        };

        > input[type="radio"] {
        display: none; // oculta o input de rádio
        };
    };

    .checked{
        background-color: ${props => props.theme.PURPLE_300};
        border: 1px solid ${props => props.theme.PURPLE_500};

        &:hover{
            background-color: ${props => props.theme.PURPLE_300};
        };
    };
`;

export const TitleContainer = styled.div`
    display: flex;
    gap: 0.8rem;
    margin-bottom: 3.2rem;

    > svg {
        color: ${props => props.theme.PURPLE_500};
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