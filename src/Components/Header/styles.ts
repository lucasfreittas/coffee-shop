import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 3.2rem 0;

    img {
        height: 4rem;
    };

    nav {
        display: flex;
        gap: 1.2rem;
    };
`;

export const AddressButon = styled.button`
    display: flex;
    gap: 0.4rem;
    padding: 0.8rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
    font-size: 1.4rem;
    font-weight: 400 ;
    line-height: 130%;
    background-color: ${props => props.theme.PURPLE_300};
    color: ${props => props.theme.PURPLE_700};

    svg {
        color: ${props => props.theme.PURPLE_500};
    }
`;

export const CartButton = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    background-color: ${props => props.theme.YELLOW_300};
    border-radius: 0.6rem;

    svg {
        color: ${props => props.theme.YELLOW_700};
    };

    p{
        position: absolute;
        font-family: 'Roboto';
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.2rem;
        color: ${props => props.theme.WHITE};
        background-color: ${props => props.theme.YELLOW_700};
        width: 2rem;
        height: 2rem;
        padding-left: 0.1rem;
        border-radius: 100%;
        top: -25%;
        right: -25%;

    }
`;