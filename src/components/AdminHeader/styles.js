import { styled } from "styled-components";


export const Container = styled.div`
    grid-area: header;

    width: 100%;
    height: 114px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    
    background-color: ${({theme}) => theme.COLORS.DARK_700};
`;

export const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;

    max-width: 372px;

    margin: 56px 28px 24px;

    gap: 16px;
    
    > svg:nth-child(1) {
        width: 26px;
        height: 100%;

        cursor: pointer;

        margin: 0;
    }
`;

export const LogoBox = styled.div`
    font-size: 10px;

    width: 100%;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 64px;

    gap: 8px;
    
    svg {
        color: ${({theme}) => theme.COLORS.CAKE_100};
        cursor: default;
    }

    h2 {
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }

`;

export const Text = styled.div`
    
    width: 100%;
    
    display: flex;
    align-items: center;

    > p{
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        
        color: ${({theme}) => theme.COLORS.CAKE_200};
        margin-left: 8px;
    }
`;