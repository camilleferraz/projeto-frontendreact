import { Home } from "./components/Home/Home";
import styled, { createGlobalStyle } from "styled-components";
import produtos from "./produtos/produtos.json"
import { ProductsCards } from "./components/Home/ProductsCards/ProductsCards";
import { useState } from "react";
import {FilterBaar} from "./components/Home/FilterBaar/FilterBaar"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    background-color: #f8f9f9;
  
  }
`;


const CardsContainer = styled.div`
  display: flex;
  position: absolute;
  right: 10vw;
`;

function App() {

  

  const [buscaNome, setBuscaNome] = useState("")
  const [ordenaValor, setOrdenaValor] = useState("")
  console.log(ordenaValor)

  return (
    <>
   <Home/>
   <GlobalStyle/>
    <FilterBaar
    buscaNome={buscaNome}
    setBuscaNome={setBuscaNome}
    
    ordenaValor={ordenaValor}
    setOrdenaValor={setOrdenaValor}
    />
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
  );
}

export default App;
