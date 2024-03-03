import { Container, BuyCounter } from './styles.js'

import { Button } from '../Button';

import { FaRegHeart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

export function BuyCard( { title, img, ...rest } ) {
    return(
        <Container>
            <img src = {img} alt="Prato de Comida" />
            <FaRegHeart size={24} />
            <h3>{ title }</h3>
            <p>R$ 49,97</p>
            <BuyCounter>
                <FaMinus size={24}/>
                <span>01</span>
                <FaPlus size={24}/>
            </BuyCounter>
            <Button title="Incluir"/>
        </Container>
    )
}