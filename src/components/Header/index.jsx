import React from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo Dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/227674818?v=4" />
          ) : (
            <>
              <MenuRight href="#" alt="Menu">
                Home
              </MenuRight>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button title="Entrar" />
              </Link>
              <Link to="/cadaster" style={{ textDecoration: "none" }}>
                <Button title="Cadastrar" />
              </Link>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
