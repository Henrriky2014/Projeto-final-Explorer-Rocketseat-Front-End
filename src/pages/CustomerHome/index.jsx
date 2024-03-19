import { Container,Box, Meals, Cards } from "./styles";

import { Header } from "../../components/CustomerHeader";
import { BuyCard } from "../../components/BuyCard"; 

import eggImg from '../../assets/eggs.png';
import saladPlate from '../../assets/salad_plate.png'
import spaghetti from '../../assets/spaghetti.png';
import prugnapie from '../../assets/prugna_pie.png'
import peachypastrie from '../../assets/peachy_pastrie.png'
import espresso from '../../assets/espresso.png';
import sucodemaracuja from '../../assets/suco_de_maracuja.png';

import Slider from "../../components/Slider";

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
          <Slider>
            <BuyCard title="Salada Ravanello >" img={saladPlate} value="R$ 49,97"/>
            <BuyCard title="Spaguetti Gambe >" img = {spaghetti} value="R$ 79,97" />
            <BuyCard title="Spaguetti Gambe >" img = {spaghetti} value="R$ 79,97" />
            <BuyCard title="Spaguetti Gambe >" img = {spaghetti} value="R$ 79,97" />
            <BuyCard title="Spaguetti Gambe >" img = {spaghetti} value="R$ 79,97" />
            <BuyCard title="Spaguetti Gambe >" img = {spaghetti} value="R$ 79,97" />
          </Slider>
        </Cards>
      </Meals>
      <Meals>
        <h1>Pratos principais</h1>
        <Cards>
          <Slider>
            <BuyCard title="Prugna Pie >" img={prugnapie} value="R$ 79,97"/>
            <BuyCard title="Spaguetti Gambe >" img = {peachypastrie} value="R$ 32,97" />
            <BuyCard title="Spaguetti Gambe >" img = {spaghetti} value="R$ 79,97" />
            <BuyCard title="Spaguetti Gambe >" img = {spaghetti} value="R$ 79,97" />
            <BuyCard title="Spaguetti Gambe >" img = {spaghetti} value="R$ 79,97" />
          </Slider>
        </Cards>
      </Meals>
      <Meals>
        <h1>Pratos principais</h1>
        <Cards>
          <Slider>
            <BuyCard title="Espresso >" img={espresso} value="R$ 15,97"/>
            <BuyCard title="Suco de maracujá >" img = {sucodemaracuja} value="R$ 13,97" />
            <BuyCard title="Spaguetti Gambe >" img = {spaghetti} value="R$ 79,97" />
            <BuyCard title="Spaguetti Gambe >" img = {spaghetti} value="R$ 79,97" />
            <BuyCard title="Spaguetti Gambe >" img = {spaghetti} value="R$ 79,97" />
          </Slider>
        </Cards>
      </Meals>
    </Container>
  )
}
