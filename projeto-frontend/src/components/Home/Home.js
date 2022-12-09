import React from "react"
import home from "../../assets/rocket4.png"
import { Rocket, Tittle1, Tittle2,TittleContainer,Descricao } from "./styles";

export const Home = () =>{
    return( 
    <>
    <Rocket src={home} alt="home-rocket" />
    
    <TittleContainer>
    <Tittle2>Monte o </Tittle2>
    <Tittle1> seu planeta.</Tittle1>
    
    </TittleContainer>

    <Descricao>Agora que você já escolheu o seu planeta monte e personalize do seu jeito do seu jeito.</Descricao>
    </>
    )
}