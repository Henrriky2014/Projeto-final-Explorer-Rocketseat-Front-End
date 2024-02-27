import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    max-width: 364px;
    padding-top: 158px;

    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        height: 48px;
        margin-bottom: 32px;
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
    gap: 8px;
    
    svg {
        color: ${({theme}) => theme.COLORS.CAKE_100};
    }

    margin-bottom: 80px;
`;

export const InputContent = styled.div`
    margin-bottom: 32px;
`;