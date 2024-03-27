import styled from "styled-components";

export const CoffeeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 2.4rem;
    background-color: ${props => props.theme.GRAY_200};
    border-radius: 6px 36px 6px 36px;
    max-width: 25.6rem;

    > img {
        width: 12rem;
        object-fit: cover;
        margin-top: -4rem;
    };

    > h2{
        font-size: 2rem;
        font-weight: 700;
        line-height: 130%;
    };

    > p{
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme.GRAY_600};
        text-align: center;
        margin: 0.8rem 0 3.2rem 0;
    }
`;

export const Tags = styled.div`
    color: ${props => props.theme.YELLOW_700};
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;

    display: flex;
    gap: 0.4rem;
    margin: 1.6rem;

    > span{
        padding: 0.4rem 0.8rem;
        background-color: ${props => props.theme.YELLOW_300};
        border-radius: 100px;
    }
`;

export const Price = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > .priceCountainer {
        display: flex;
        gap: 0.4rem;
        line-height: 130%;
        color: ${props => props.theme.GRAY_700};
        /* align-items: baseline; */
    }

    > div span{
        font-size: 1.4rem;
        font-weight: 400;
    };

    > div p {
        font-family: "Baloo 2";
        font-size: 2.4rem;
        font-weight: 800;
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
    height: 100%;

    input[type=number] {
    -moz-appearance: textfield;
    }
    

    > svg {
        color: ${props => props.theme.PURPLE_500};

        &:hover{
            cursor: pointer;
            color: ${props => props.theme.PURPLE_700};
        };
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
        cursor: default;
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

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.8rem;
    gap: 0.8rem;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.PURPLE_700};
        padding: 0.8rem;
        border-radius: 0.6rem;
        height: 100%;
        transition: all 0.1s ease-in-out;

        &:hover{
            background-color: ${props => props.theme.PURPLE_500};
        };
        
        &:active{
            scale: 0.95;
        };

        svg {
            color: ${props => props.theme.WHITE};
        }
    }
`;