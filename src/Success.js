import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.div`
  width: 225px;
  height: 42px;
  background-color: #e8833a;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin-top: 40px;
`;
export default function Success() {
  const { state } = useLocation();

  return (
    <>
      <div className="success">
        <h2 className="pick green">Pedido feito com sucesso!</h2>
        <h1 className="pick">Filme e sessão</h1>
        <div>{state.movieTitle}</div>
        <div>
          {state.movieDate} - {state.movieTime}
        </div>
        <h1 className="pick">Ingressos</h1>
        <div>
          {state.seats
            .sort((a, b) => a - b)
            .map((seat) => (
              <div>Ingresso {seat}</div>
            ))}
        </div>
        <h1 className="pick">Comprador</h1>
        <div>Nome: {state.buyerName}</div>
        <div>CPF: {state.buyerCpf}</div>
      </div>
      <Link to="/">
        <Button>Voltar a home</Button>
      </Link>
    </>
  );
}
