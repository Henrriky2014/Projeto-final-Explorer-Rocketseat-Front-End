import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;

    border: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
`;