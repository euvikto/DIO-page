import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import Banner from "../../assets/banner.png";
import { Container, Title, TitleHighlight, TextContainer } from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const HandleCLiclSignin = () =>{
    navigate("/login")
  }
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContainer>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContainer>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={HandleCLiclSignin}
          />
        </div>
        <div>
          <img src={Banner} alt="Banner" />
        </div>
      </Container>
    </>
  );
};
export default Home;
