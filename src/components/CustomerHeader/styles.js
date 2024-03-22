import { styled } from "styled-components";


export const Container = styled.div`
    grid-area: header;

    width: 100%;
    height: 114px;

    display: flex;
    align-items: center;
    flex-direction: column;
    
    background-color: ${({theme}) => theme.COLORS.DARK_700};
`;

export const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: 56px 28px 24px;


    > svg {
        width: 26px;
        height: 100%;

        margin-top: 6px;
        cursor: pointer;
    }

    > p {
        width: 20px;
        height: 20px;
        
        border-radius: 99%;
        
        text-align: center;

        background-color: ${({theme}) => theme.COLORS.TOMATO_100};

        margin-left: -12px;
        margin-top: -24px;
        cursor: pointer;
    }

    img {
        cursor: pointer;
    }

`;

export const LogoBox = styled.div`
    font-size: 10px;

    width: 200px;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
    
    margin-top: 4px;

    svg {
        color: ${({theme}) => theme.COLORS.CAKE_100};
    }

    p {
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }

    
`;

