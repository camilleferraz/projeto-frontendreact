import React from "react";
import styled from "styled-components";
import {Home} from "../../components/Home/Home";
import {produtos} from "../../produtos/produtos"
import { ProductsCards } from "../../components/CardsProducts/ProductsCards";
import { useState } from "react";
import {FilterBaar} from "../../components/FilterBaar/FilterBaar"
import cartButton from "../../assets/cartButton.png"


const CardsContainer = styled.div`
  display: flex;
  position: absolute;
  right: 10vw;
`;

export const MainPage = (props)=>{

    const{goToCartPage} = props

    const [buscaNome, setBuscaNome] = useState("")
    const [ordenaValor, setOrdenaValor] = useState("")


    console.log(ordenaValor)




    return(
    <>
    <Home/>
    <FilterBaar>
    buscaNome={buscaNome}
    setBuscaNome={setBuscaNome}
    
    ordenaValor={ordenaValor}
    setOrdenaValor={setOrdenaValor}
    
    </FilterBaar>

   
    <button onClick={goToCartPage}>
    <img src={cartButton}/>
    </button>
   
   <CardsContainer>
    {produtos
    .sort((a,b)=>{
      if(ordenaValor==="crescente"){
        return a.price-b.price
      } if(ordenaValor==="decrescente"){
        return b.price-a.price
      }
    })
    .filter((produtos)=>{
     return produtos.name.toLowerCase().includes(buscaNome.toLowerCase())
    })
    .map((produtos) => {
      return(
        <ProductsCards
          key={produtos.id}
          produtos={produtos}
        />
      )
    })}
   </CardsContainer>
   </>
    )
}
   