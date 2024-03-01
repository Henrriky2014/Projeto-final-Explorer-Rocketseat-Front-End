import { BsList, BsFillHexagonFill } from "react-icons/bs";

import { Container, LogoBox, HeaderMenu } from "./styles";

import List from '../../assets/List.svg';

export function Header() {
    return (
        <Container>
            <HeaderMenu>
                <BsList />
                <LogoBox >
                    <BsFillHexagonFill size={24} />
                    <h1>food explorer</h1>
                </LogoBox>
                <img src={List} alt="Sacola de Compras" />
                <p>0</p>
            </HeaderMenu>
        </Container>
    )
}