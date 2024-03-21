import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    grid-area: content;


    max-width: 428px;

    margin: 0 auto;

    background: ${({theme}) => theme.COLORS.DARK_400};

    > p {
        font-size: 18px;
        font-weight: 500;
    }
`;

export const Box = styled.div`

    margin-left: 24px;


    width: 100%;
    height: 120px;

    max-width: 376px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-image: linear-gradient(to right, #091E26, #00131C);

    margin: 44px auto 62px;

    border-radius: 13px;

    
    > img {
        margin-left: -32px;
        margin-top: -24px;
    }

    > div {
        
        width: 100%;
        

        h1 {
            font-family: "Poppins", sans-serif;
            
            font-size: 18px;   
            font-weight: 600;
            

            margin-bottom: 3px;
        }

        p {
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-size: 12px;
            
            text-align: left;
            
        }

        
    }
    
`;

export const Meals = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;


    h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 12px;
        
        text-align: left;
        margin-top: 24px;
    }
    
`;

export const Cards = styled.div`

    width: 100%;

    max-width: 428px;

    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    overflow: hidden;
    flex-shrink: 0;
`;
