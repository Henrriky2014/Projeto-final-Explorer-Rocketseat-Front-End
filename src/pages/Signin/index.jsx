import { BsFillHexagonFill } from "react-icons/bs";

import { Input } from "../../components/Input";

import { Container, Form, LogoBox, InputContent } from "./styles";

export function Signin() {
    return (
        <Container>
            <Form>
                <LogoBox >
                    <BsFillHexagonFill size={43} />
                    <h1>food explorer</h1>
                </LogoBox>

                <InputContent>
                    <label>Email</label>
                    <Input placeholder="Exemplo: exemplo@exemplo.com.br"/>
                </InputContent>

                <InputContent>
                    <label>Senha</label>
                    <Input placeholder="No mínimo 6 caracteres"/>
                </ InputContent>

            </Form>
        </Container>
    )
}