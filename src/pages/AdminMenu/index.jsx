import { Container, Header, Buttons, Search, ClickText } from "./styles"

import { Input } from '../../components/Input'

import { HiOutlineXMark } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { Footer } from "../../components/Footer";

export function AdminMenu() {
    return (
        <Container>
            <Header>
                <Buttons>
                    <HiOutlineXMark size={18}/>
                    <h1>Menu</h1>
                </Buttons>
            </Header>
            <Search>
                <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch}/>
                <ClickText>
                    <h1>Novo prato</h1>
                    <h1>Sair</h1>
                </ClickText>
            </Search>
            <Footer />


        </Container>
    )
}