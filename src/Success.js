import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 225px;
  height: 42px;
  margin: 0 auto;
  background-color: #e8833a;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin-top: 40px;
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
`;
const SuccessDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  width: 94%;
  margin: 25px auto 0 auto;
  font-family: "Roboto", sans-serif;
`;
const Pick = styled.h1`
  font-family: "Roboto", sans-serif;
  text-align: left;
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => (props.cor ? props.cor : "#293845")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0px"};
`;
const SessionInfo = styled.div`
  margin-top: 5px;
  margin-bottom: 25px;
  font-size: 19px;
  line-height: 28px;
  color: #293845;
  flex-wrap: wrap;
`;

export default function Success() {
  const { state } = useLocation();

  return (
    <>
      <SuccessDiv>
        <Pick cor={"green"} marginBottom={"40px"}>
          Pedido feito com sucesso!
        </Pick>
        <Pick>Filme e sessão</Pick>
        <SessionInfo>
          <div>{state.movieTitle}</div>
          <div>
            {state.movieDate} - {state.movieTime}
          </div>
        </SessionInfo>
        <Pick>Ingressos</Pick>
        <SessionInfo>
          {state.seats
            .sort((a, b) => a - b)
            .map((seat) => (
              <div>Ingresso {seat}</div>
            ))}
        </SessionInfo>
        <Pick>Comprador</Pick>
        <SessionInfo>
          <div>Nome: {state.buyerName}</div>
          <div>CPF: {state.buyerCpf}</div>
        </SessionInfo>
      </SuccessDiv>
      <LinkStyled to="/">
        <Button>Voltar a home</Button>
      </LinkStyled>
    </>
  );
}
