import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AdicionadosAoCarrinho = styled.div`
  background-color: gray;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SomatoriaCarrinho = styled.p`
  background-color: red;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export default class Car extends React.Component {
  render() {
    return (
      <ContainerCarrinho>
        <h3>Carrinho:z</h3>
        <AdicionadosAoCarrinho>
          <p>nX</p>
          <p>produto</p>
          <button>Remover</button>
        </AdicionadosAoCarrinho>
        <SomatoriaCarrinho>Valor total:</SomatoriaCarrinho>
      </ContainerCarrinho>
    );
  }
}