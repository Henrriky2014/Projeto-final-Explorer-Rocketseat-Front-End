import { Container, HeaderMenu, LogoBox } from "./styles";

export function AdminHeader() {
    return (
        <Container>
            <HeaderMenu>
                {/* <BsList /> */}
                <LogoBox >
                    {/* <BsFillHexagonFill size={24} /> */}
                    <h1>food explorer</h1>
                </LogoBox>
                <img src={List} alt="Sacola de Compras" />
                <p>0</p>
            </HeaderMenu>
        </Container>
    )
}