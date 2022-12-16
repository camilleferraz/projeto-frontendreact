import React from "react";
import styled from "styled-components";
import { ProductsCards } from "../../components/CardsProducts/ProductsCards";
import { produtos } from "../../produtos/produtos";

const CardsContainer = styled.div`
  display: flex;
  position: absolute;
  right: 10vw;
`;

export const CartPage = (props)=>{

    const{goToMainPage, cart, addToCart} = props
    const total = cart.reduce(
       ( (acc, product)=>(product.price*product.quantity)+acc),0)

    return(
        <>
        
        <CardsContainer>
    {cart
    .map((produtos) => {
      return(
        <ProductsCards
        addToCart={addToCart}
          key={produtos.id}
          produtos={produtos}
          isOnCartPage={true}
        />
      )
    })}
    <h3>Total:{total}</h3>
   </CardsContainer>
        <button onClick={goToMainPage}>Home</button>
        </>
    )

}
   