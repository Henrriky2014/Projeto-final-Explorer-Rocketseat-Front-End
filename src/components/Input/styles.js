import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    > input {
        width: 100%;
        
        border: none;
        border-radius: 8px;
        
        padding: 14px 16px;
        
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background-color: ${({theme}) => theme.COLORS.DARK_900};
    }
    
    border-radius: 8px;


`;
