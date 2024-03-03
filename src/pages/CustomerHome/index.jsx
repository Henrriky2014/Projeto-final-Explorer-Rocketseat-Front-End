import { Container,Box, Meals, Cards } from "./styles";

import { Header } from "../../components/CustomerHeader";
import { BuyCard } from "../../components/BuyCard"; 

import eggImg from '../../assets/eggs.png';
import saladPlate from '../../assets/salad_plate.png'
import spaghetti from '../../assets/spaghetti.png';

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
      <Meals>
        <h1>Refeições</h1>
        <Cards>
          <BuyCard title="Salada Ravanello >" img={saladPlate}/>
          <BuyCard title="Spaguetti Gambe >" img = {spaghetti} />
        </Cards>
      </Meals>
    </Container>
  )
}
