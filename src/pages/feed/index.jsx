import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import Banner from "../../assets/banner.png";
import Card from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Title, TitleHighlight, Column } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            nome="vitor hugo"
            imagem="https://avatars.githubusercontent.com/u/227674818?v=4"
            percentual={35}
          />
          <UserInfo
            nome="vitor hugo"
            imagem="https://avatars.githubusercontent.com/u/227674818?v=4"
            percentual={82}
          />
          <UserInfo
            nome="vitor hugo"
            imagem="https://avatars.githubusercontent.com/u/227674818?v=4"
            percentual={12}
          />
          <UserInfo
            nome="vitor hugo"
            imagem="https://avatars.githubusercontent.com/u/227674818?v=4"
            percentual={65}
          />
        </Column>
      </Container>
    </>
  );
};
export default Feed;
