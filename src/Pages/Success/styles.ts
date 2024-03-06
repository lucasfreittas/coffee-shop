import styled from "styled-components";

export const SuccessContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 8rem;
    padding-bottom: 14rem;

    > img {
        width: 49.2rem;
    }
   
`;

export const TextContainer = styled.div`
    > h1 {
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 130%;
        color: ${props => props.theme.YELLOW_700};
        margin-bottom: 0.4rem;
    };

    > h2 {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 2rem;
        line-height: 130%;
        color: ${props => props.theme.GRAY_800};
    };
`;


export const DeliveryDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 4rem;
    width: 100%;
    border: 1px solid ${props => props.theme.YELLOW_700};
    border-radius: 0.6rem 3.6rem 0.6rem 3.6rem;
    margin-top: 4rem;
`;

export const Address = styled.div`
    display: flex;
    gap: 1.2rem;
    align-items: center;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;
    color: ${props => props.theme.GRAY_700};

    > img {
        width: 3.2rem
    };
`;

export const Time = styled(Address)`

`;

export const Payment = styled(Address)`

`;


