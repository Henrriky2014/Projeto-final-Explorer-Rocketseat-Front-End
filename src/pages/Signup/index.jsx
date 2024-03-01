import { BsFillHexagonFill } from "react-icons/bs";

import { Input } from "../../components/Input";

import { Link } from 'react-router-dom';

import { Container, Form, LogoBox, InputContent } from "./styles";
import { Button } from "../../components/Button";

export function Signup() {
    return (
        <Container>
            <LogoBox >
                <BsFillHexagonFill size={43} />
                <h1>food explorer</h1>
            </LogoBox>
            
            <Form>
                <InputContent>
                    <label>Seu nome</label>
                    <Input placeholder="Exemplo: Maria da Silva"/>
                </InputContent>
                <InputContent>
                    <label>Email</label>
                    <Input placeholder="Exemplo: exemplo@exemplo.com.br"/>
                </InputContent>

                <InputContent>
                    <label>Senha</label>
                    <Input placeholder="No mínimo 6 caracteres"/>
                </ InputContent>
            </Form>
                <Button title="Criar Conta"/>

            <a href="#">Já tenho uma conta</a>
        </Container>
    )
}