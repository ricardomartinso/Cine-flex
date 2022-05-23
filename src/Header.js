import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header({ voltar, funcao }) {
  return (
    <HeaderLink>
      <HeaderStyled>
        <Voltar onClick={funcao}>{voltar ? voltar : ""}</Voltar>
        <HeaderH1>CINEFLEX</HeaderH1>
      </HeaderStyled>
    </HeaderLink>
  );
}
const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 65px;
  background-color: #c3cfd9;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
`;
const HeaderH1 = styled.h1`
  font-size: 34px;
  color: #e8833a;
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;
const Voltar = styled.div`
  color: red;
  position: absolute;
  bottom: 5px;
  left: 5px;
`;
const HeaderStyled = styled.header`
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
`;
