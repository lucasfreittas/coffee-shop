import styled from "styled-components";

export const CartContainer = styled.div`

`;

export const ProductContainer = styled.div`

`;

export const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.8rem;
    background-color: ${props => props.theme.GRAY_400};
    border-radius: 0.6rem;
    height: 100%;

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

`;

export const TotalResume = styled.div`

`;