import { Container, BuyCounter } from './styles.js'

import { Button } from '../Button';

import { FaMinus, FaPlus } from "react-icons/fa6";

export function BuyCard( { icon: Icon, title, img, value, ...rest} ) {
    return(
        <Container>
            {Icon && <Icon size={24} />}
            <img src = {img} alt="Prato de Comida" />
            <h3>{ title }</h3>
            <p>{value}</p>
            <BuyCounter>
                <FaMinus size={24}/>
                <span>01</span>
                <FaPlus size={24}/>
            </BuyCounter>
            <Button title="Incluir"/>
        </Container>
    )
}