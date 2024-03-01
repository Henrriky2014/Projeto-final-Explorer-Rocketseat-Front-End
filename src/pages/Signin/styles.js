import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;
    
    margin: 0 auto;
    
    max-width: 364px;
    padding-top: 158px;


    button {
        height: 48px;
        margin-bottom: 32px;
    }

    a {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`;

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    
    margin-bottom: 32px;

    label {
        align-self: flex-start;
        font-family: "Roboto", sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        margin-bottom: 8px;
        
    }

`;

export const LogoBox = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: bold;

    display: flex;
    align-items: center;

    gap: 8px;
    
    svg {
        color: ${({theme}) => theme.COLORS.CAKE_100};
    }

    margin-bottom: 80px;
    margin-right: auto;
    margin-right: auto;
`;

export const InputContent = styled.div`
    margin-bottom: 32px;
`;