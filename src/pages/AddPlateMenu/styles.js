import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    max-width: 428px;

    margin: 0 auto;
`;

export const Content = styled.div`

    width: 100%;
    height: 100%;

    max-width: 316px;

    background: ${({theme}) => theme.COLORS.DARK_400};

    margin: auto;
    margin-top: 16px;
    margin-bottom: 33px;

    padding: 16px;

    > img {
        width: 264px;
        height: 264px;
        margin-top: 16px;
    }

`;


export const Description = styled.div`
    > h1 {
        font-size: 27px;
        font-weight: 500;


        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 24px;
    }
    > p {
        font-size: 15px;
        text-align: center;
    }
`;

export const Tags = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 0 24px;
    margin: 24px 0 48px;

    > :nth-child(-n+3) {
        margin-bottom: 24px;
    }

`;

export const BuyMenu = styled.div`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

`;

export const BuyCounter = styled.div`
    display: flex;
    align-items: center;

    gap: 14px;

    span {
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }
`;

export const MenuButton = styled.button`
    
    width: 100%;
    height: 38px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: none;
    border-radius: 3px;
    
    padding: 8px 43px;

    > p {
        font-size: 8px;
    }

    > img {
        width: 21px;
        height: 21px;
    }

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
`;