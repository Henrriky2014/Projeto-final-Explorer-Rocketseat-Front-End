import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 77px;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;

    padding: 27px 29px;
    gap: 8px;

    margin-top: 25px;

    background-color: ${({theme}) => theme.COLORS.DARK_600};

`;

export const FooterLogo = styled.div`
    
    display: flex;
    align-items: center;

    gap: 6px;

    h1 {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    color: ${({theme}) => theme.COLORS.LIGHT_700};
`;

export const FooterText = styled.div`
    
    display: flex;
    align-items: center;

    p {
        font-size: 12px;
        font-family: 'DM Sans', sans-serif;
    }

    color: ${({theme}) => theme.COLORS.LIGHT_200};

`;