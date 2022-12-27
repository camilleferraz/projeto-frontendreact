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
const [cart, setCart]=useState([])


const goToMainPage = () => setActiveScreen("MainPage")
const goToCartPage = () => setActiveScreen("CartPage")

const [buscaNome, setBuscaNome] = useState("")
const [ordenaValor, setOrdenaValor] = useState("")


const renderScreen=()=>{
  switch(activeScreen){
    case "MainPage":
      return <MainPage
      addToCart={addToCart}
      goToCartPage={goToCartPage}
      buscaNome={buscaNome}
      ordenaValor={ordenaValor}
      />
    case "CartPage":
      return <CartPage
      increaseQuantityInCart={increaseQuantityInCart}
      decreaseQuantityInCart={decreaseQuantityInCart}
      cart={cart}
      goToMainPage={goToMainPage}
      />
    default:
      return <div>Page not found</div>
  }
}

const addToCart = (productToAdd)=>{
  const newCart =[...cart]

  const productFound = newCart.find((productInCart)=>productInCart.id===productToAdd.id)

  if(!productFound){
    const newProduct = {...productToAdd,quantity:1}
    newCart.push(newProduct)
  } else{
    productFound.quantity++
  }

  setCart(newCart)

}

const increaseQuantityInCart = (productToIncrease)=>{
  const newCart =[...cart]

  const productFound = newCart.find((productInCart)=>productInCart.id===productToIncrease.id)

productFound.quantity++

setCart(newCart)
}

const decreaseQuantityInCart = (productToDecrease)=>{
  const newCart =[...cart]

  const productFound = newCart.find((productInCart)=>productInCart.id===productToDecrease.id)

productFound.quantity--

setCart(newCart)
}

  return (
    <>
<Home/>
<FilterBaar
    
    buscaNome={buscaNome}
    setBuscaNome={setBuscaNome}
    
    ordenaValor={ordenaValor}
    setOrdenaValor={setOrdenaValor}
    
    />
    {renderScreen()}
    
    </>
    
  );
}

export default App;
