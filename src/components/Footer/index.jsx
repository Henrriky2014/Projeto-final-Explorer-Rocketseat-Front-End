import { Container, FooterLogo, FooterText } from "./styles"

import { BsFillHexagonFill } from "react-icons/bs";

export function Footer() {
    return (
        <Container>
            <FooterLogo>
                <BsFillHexagonFill size={22}/>
                <h1>food explorer</h1>
            </FooterLogo>
            <FooterText>
                <p>© 2023 - Todos os direitos reservados.</p>
            </FooterText>
        </Container>
    )
}