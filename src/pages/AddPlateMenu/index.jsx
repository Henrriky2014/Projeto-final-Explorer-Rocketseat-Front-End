import { Container, Content, Description, Tags, BuyCounter, BuyMenu, MenuButton } from "./styles"

import { CustomerHeader } from '../../components/CustomerHeader';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Footer } from '../../components/Footer';


import { SlArrowLeft } from "react-icons/sl";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";

import List from '../../assets/List.svg';

import salad_plate from '../../assets/salad_plate.png';

export function AddPlateMenu() {
    return (
        <Container>
            <CustomerHeader />
            <Content>
                <ButtonText icon={SlArrowLeft} title="voltar"/>
                <img src={salad_plate} alt="Imagem de vários doces coloridos" />
                <Description>
                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                </Description>
                <Tags>
                    <Tag title="alface"/>
                    <Tag title="cebola"/>
                    <Tag title="pão naan"/>
                    <Tag title="pepino"/>
                    <Tag title="rabanete"/>
                    <Tag title="tomate"/>
                </Tags>
                <BuyMenu>
                <BuyCounter>
                    <HiOutlineMinus size={24}/>
                    <span>01</span>
                    <HiOutlinePlus size={24}/>
                </BuyCounter>
                <MenuButton>
                    <img src={List} alt="Sacola de Compras" />
                    <p>pedir ∙ R$ 25,00</p>
                </MenuButton>
                </BuyMenu>
            </Content>
            <Footer />
        </Container>
    )
}