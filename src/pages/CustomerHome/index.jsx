import { Container,Box } from "./styles"

import { Header } from "../../components/CustomerHeader"
import eggImg from '../../assets/eggs.png'

export function CustomerHome() {
  return(
    <Container>
      <Header />
      <Box>
        <img src={eggImg} alt="Imagem de vários doces coloridos" />
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Box>
    </Container>
  )
}
