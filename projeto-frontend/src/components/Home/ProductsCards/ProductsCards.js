import React from "react";
import { Container, Imagem, CartButton, NomeProduto,Preco, CartImg, TypesContainer } from "./styles";
import cart from "../../../assets/cart-img.png"
import img001 from "./rocks/001.png"
import img002 from "./rocks/002.png"
import img003 from "./rocks/003.png"
import img004 from "./rocks/004.png"



export const ProductsCards = (props) =>{

    const getImg = (img) => {
        switch (img) {
            case "img001":
              return img001;
            case "img002":
              return img002;
            case "img003":
              return img003;
            case "img004":
              return img004;
            default:
              return img004;
          }
        };


    return(
        
        <Container>
            <TypesContainer>
          {props.produtos.img.map((img)=>{
            return <Imagem key={img} src={getImg(img)} alt="" />;
          })}
        </TypesContainer>
        
            
            
            <NomeProduto>{props.produtos.name}</NomeProduto>
            <Preco>{`R$${props.produtos.price}`}</Preco>
            <CartButton>
            <CartImg
            src={cart}
            alt=""
            />    
            Comprar</CartButton>
        </Container>
        
    )
}