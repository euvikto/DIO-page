import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://i.pinimg.com/1200x/00/89/41/00894162bb5b559cfaf65f9b78e18670.jpg" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/227674818?v=4" />
          <div>
            <h4>Vitor Hugo B</h4>
            <p>Há 8 Minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito o curos de html e css no bootcamp dio do Global
            avanade...<strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FaThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export default Card;