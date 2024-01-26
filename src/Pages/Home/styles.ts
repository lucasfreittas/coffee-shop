import styled from "styled-components";


export const HomeContainer = styled.div`
    width: 100%;
    margin-top: 9.6rem;
`;

export const BannerHero = styled.div`
   

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 5.6rem;

    .bannerHeroImg {
        width: 47.6rem;
    };

`;

export const BannerHeroBG = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100vw;
    height: 54.4rem;
    top: 104;
    left: 0;
`;

export const TextContainer = styled.div`
    
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 6.4rem;
    h1{
        color: ${props => props.theme.GRAY_900};
        font-size: 4.8rem;
        line-height: 130%;
        font-weight: 800;
    };

    p{
        color: ${props => props.theme.GRAY_800};
        font-size: 2rem;
        font-weight: 400;
        line-height: 130%;
    };
`;

export const BulletsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    gap: 2rem;

    :nth-child(4){
        margin-right: 1.2rem;
    }

    div{
        display: flex;
        gap: 1.2rem;
        align-items: center;
    };

    div .icon1{
        padding: 0.8rem;
        border-radius: 100%;
        background-color: ${props => props.theme.YELLOW_700};
        color: ${props => props.theme.WHITE};
    };

    div .icon2{
        padding: 0.8rem;
        border-radius: 100%;
        background-color: ${props => props.theme.GRAY_700};
        color: ${props => props.theme.WHITE};
    };

    div .icon3{
        padding: 0.8rem;
        border-radius: 100%;
        background-color: ${props => props.theme.YELLOW_500};
        color: ${props => props.theme.WHITE};
        
    };

    div .icon4{
        padding: 0.8rem;
        border-radius: 100%;
        background-color: ${props => props.theme.PURPLE_500};
        color: ${props => props.theme.WHITE};
    };

    span {
        font-size: 1.6rem;
        line-height: 130%;
        color: ${props => props.theme.GRAY_700};
    }
`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14rem 0;

    > h1 {
        font-size: 3.2rem;
    }
`;

export const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 4rem 0;
`;