import React from "react";
import {
  Container,
  Imagem,
  CartButton,
  NomeProduto,
  Preco,
  CartImg,
  TypesContainer,
} from "./styles";
import cart from "../../assets/cart-img.png";


export const ProductsCards = (props) => {


  console.log(props.produtos);

  return (
    <Container>
      <Imagem src={props.produtos.img}/>

      <NomeProduto>{props.produtos.name}</NomeProduto>
      <Preco>{`R$${props.produtos.price}`}</Preco>
      <CartButton>
        <CartImg src={cart} alt="" />
        Comprar
      </CartButton>
    </Container>
  );
};
