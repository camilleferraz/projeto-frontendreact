import { Home } from "./components/Home/Home";
import styled, { createGlobalStyle } from "styled-components";
import {produtos} from "./produtos/produtos"
import { ProductsCards } from "./components/CardsProducts/ProductsCards";
import { useState } from "react";
import {FilterBaar} from "./components/FilterBaar/FilterBaar"
import { MainPage } from "./Pages/MainPage/MainPage";
import{CartPage} from "./Pages/CartPage/CartPage"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    background-color: #f8f9f9;
  
  }
`;


function App() {

const [activeScreen, setActiveScreen] = useState("MainPage")

const goToMainPage = () => setActiveScreen("MainPage")
const goToCartPage = () => setActiveScreen("CartPage")

const renderScreen=()=>{
  switch(activeScreen){
    case "MainPage":
      return <MainPage
      goToCartPage={goToCartPage}
      />
    case "CartPage":
      return <CartPage
      goToMainPage={goToMainPage}
      />
    default:
      return <div>Page not found</div>
  }
}



  return (renderScreen());
}

export default App;
