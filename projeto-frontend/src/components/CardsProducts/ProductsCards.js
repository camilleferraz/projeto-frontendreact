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

const {addToCart} = props
  console.log(props.produtos);

  return (
    <Container>
      <h3>{props.isOnMainPage&&"Sou da tela de produtos"}
      {props.isOnCartPage && "Sou da tela de carrinho"}</h3>
      <Imagem src={props.produtos.img}/>

      <NomeProduto>{props.produtos.name}</NomeProduto>
      <Preco>{`R$${props.produtos.price}`}</Preco>
      {props.isOnMainPage&&<CartButton onClick={()=>addToCart(props.produtos)}>
        <CartImg src={cart} alt="" />
        Comprar
      </CartButton>}

      {props.isOnCartPage&&<span>{props.produtos.quantity}</span>} 
      
      {
      props.isOnCartPage && props.produtos.quantity>1 
      
      &&<button 
      
      onClick={()=> props.decreaseQuantityInCart(props.produtos)}
      
      >
        -
      </button>
      }  

      
      {
      props.isOnCartPage 
      
      &&<button 
      
      onClick={()=> props.increaseQuantityInCart(props.produtos)}
      
      >
        +
      </button>}   
    </Container>
  );
};
