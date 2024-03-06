import styled from "styled-components";

export const CartContainer = styled.div`
    background-color: ${props => props.theme.GRAY_200};
    padding: 4rem;
    border-radius: 0.6rem 4.4rem 0.6rem 4.4rem;

    button[type=submit]{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 1.2rem;
        background-color: ${props => props.theme.YELLOW_500};
        color: ${props => props.theme.WHITE};
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 160%;
        font-family: 'Roboto';
        border-radius: 0.6rem;

        &:hover{
            background-color: ${props => props.theme.YELLOW_700};
            cursor: pointer;
        };
    };
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;

export const ProductCard = styled.div`
    display: flex;
    width: 100%;
    gap: 2rem;
    border-bottom: 1px solid ${props => props.theme.GRAY_400};
    padding-bottom: 3.2rem;

    > img {
        width: 6.4rem;
    };
    
    > .productContent {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        width: 100%;
        font-size: 1.6rem;
        line-height: 130%;
        color: ${props => props.theme.GRAY_800};

        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;

            .removeButton{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.4rem;
                padding: 0.8rem;
                background-color: ${props => props.theme.GRAY_400};
                border-radius: 0.6rem;
                width: fit-content;
                font-size: 1.2rem;
                font-weight: 700;
                color: ${props => props.theme.GRAY_700};

                > svg {
                    color: ${props => props.theme.PURPLE_500};
                };
            };
        };
    };
`;

export const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.8rem;
    background-color: ${props => props.theme.GRAY_400};
    border-radius: 0.6rem;
    width: fit-content;

    > svg {
        color: ${props => props.theme.PURPLE_500};
    };

    > input {
        outline: none;
        border: none;
        height: 100%;
        background-color: transparent;
        text-align: center;
        font-size: 1.6rem;
        line-height: 130%;
        color: ${props => props.theme.GRAY_900};
        width: 2rem;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        &::placeholder{
            color: ${props => props.theme.GRAY_900};
        };
    };
`;

export const Price = styled.div`
    display: flex;
    width: 60%;
    justify-content: flex-end;
    h2 {
        font-family: 'Roboto';
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 130%;
        color: ${props => props.theme.GRAY_700};
    };
`;

export const TotalResume = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    width: 100%;
    font-size: 1.4rem;
    line-height: 130%;
    color: ${props => props.theme.GRAY_700};
    margin: 2.4rem 0;

    > .totalItens, .delivery {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        :nth-child(2){
            font-size: 1.6rem;
        };
    };

    > .totalAmount{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;

            > h2 {
                font-family: 'Roboto';
                font-size: 2rem;
                font-weight: 700;
                color: ${props => props.theme.GRAY_800};
            };
            
        };


`;