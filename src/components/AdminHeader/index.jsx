import { BsList, BsFillHexagonFill } from "react-icons/bs";

import { Container, LogoBox, HeaderMenu, Text } from "./styles";

import { PiPencilSimple } from "react-icons/pi";


export function AdminHeader() {
    return (
        <Container>
            <HeaderMenu>
                <BsList />
                <LogoBox >
                    <BsFillHexagonFill size={24} />
                    <Text>
                        <h2>food explorer</h2>
                        <p>admin</p>
                    </Text>
                </LogoBox>
            </HeaderMenu>
        </Container>
    )
}