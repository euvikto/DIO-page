import React from "react";
import { Container, UserPicture, NameText, Progress } from "./styles";
const UserInfo = ({nome, imagem, percentual}) => {
  return (
    <Container>
      <UserPicture src={imagem} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};

export { UserInfo };
