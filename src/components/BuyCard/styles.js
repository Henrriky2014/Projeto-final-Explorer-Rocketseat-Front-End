import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    max-width: 210px;

    background-color: ${({theme}) => theme.COLORS.DARK_200};
    
    margin-top: 24px;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 12px;

    img {
        
        width: 88px;
        height: 88px;

        display: flex;
        align-self: center;

        margin: auto;
        margin-top: 24px;
    }

    svg:nth-child(2) {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        position: absolute;
        right: 0;
        margin-right: 16px;
        margin-top: 16px;
    }

    h3 { 
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        margin: 12px 24px;
    }
    
    p {
        color: ${({theme}) => theme.COLORS.CAKE_200};
        font-family: "Roboto", sans-serif;
    }

    button {
        width: 162px;
        padding: 4px 59px;
        margin-bottom: 24px;
    }
`;

export const BuyCounter = styled.div`

    display: flex;
    align-items: center;
    gap: 14px;

    span {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }
`;