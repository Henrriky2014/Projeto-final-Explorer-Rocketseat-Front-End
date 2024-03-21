import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    
    grid-template-areas: 
    "header"
    "search"
    "content";

    grid-area: content;

    max-width: 428px;

    margin: 0 auto;

    background: ${({theme}) => theme.COLORS.DARK_400};

`;

export const Header = styled.div`
    grid-area: header;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;


    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    
`;

export const Buttons = styled.div`
    
    display: flex;
    align-items: center;

    margin: 28px 56px 28px 24px;

    > h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 500;
        margin-left: 16px;
    }


`;

export const Search = styled.div`
    grid-area: search;
    
    width: 100%;
    height: 667px;

    max-width: 372px;


    margin: 0 auto;
    margin-top: 36px;

    svg {
        cursor:default;
        
        width: 24px;
        height: 24px;
        
        margin-left: 14px;

        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    input {
        color: ${({theme}) => theme.COLORS.LIGHT_400};

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};

        }
    }
`;

export const ClickText = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: 36px;


    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: 300;

        padding: 10px;

        border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
        
    }

    h2 {

    }


`;