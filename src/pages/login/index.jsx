import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import {
  Container,
  Wrapper,
  Column,
  Row,
  Title,
  TitleLogin,
  SubTitleLogin,
  ForgetText,
  CriarText,
} from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

const schema = yup
  .object({
    email: yup.string().email().required("campo obrigatório"),
    password: yup
      .string()
      .min(3, "No minimo 3 Caracteres")
      .required("campo obrigatório"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

const onSubmit = async (formData) => {
   console.log("formData:", formData);
  try {
    const { data } = await api.get(
      `users?email=${formData.email}&password=${formData.password}`,
    );
    if (data.length === 1) {
      navigate("/feed");
    } else {
      alert("email ou senha invalidos");
    }
  } catch {
    alert("houve um erro, tente de novo");
  }
};

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            aspernatur quo provident ex, perspiciatis explicabo nobis tempora
            facere sapiente dolorem?
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors.email?.message}
                control={control}
                type="email"
                placeholder="E-mail"
              />
              <Input
                name="password"
                errorMessage={errors.password?.message}
                control={control}
                type="password"
                placeholder="Senha"
              />
              <Button
                title="entrar"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <ForgetText />
              <CriarText />
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
