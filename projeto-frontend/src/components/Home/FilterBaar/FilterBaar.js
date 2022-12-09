import React from "react";
// import { Container,Input } from "./styles";

export const FilterBaar = (props) =>{

const inputStyle = {
    borderRadius:'50px',
    width:'342px',
    height:'48px',
    paddingLeft:'16px',
    border: '#aa22aa 2px solid',
    marginLeft:'29vw',
    outline:'0',
}

const selectStyle = {
    borderRadius:'50px',
    width:'150px',
    height:'48px',
    paddingLeft:'16px',
    border: '#aa22aa 2px solid',
    marginLeft:'5vw',
    outline:'0',
}


const onChangeName=(e)=>{
    props.setBuscaNome(e.target.value)
}

const onChangeOrdenacao=(e)=>{
    props.setOrdenaValor(e.target.value)
}

    return(
    <div>
        
        <input style={inputStyle} 
        value={props.buscaNome}
        onChange={onChangeName}
        type="text" 
        placeholder="Do que seu planeta precisa?" />

        <select style={selectStyle} value={props.ordenaValor} onChange={onChangeOrdenacao}>
        <option  value="">Ordenar</option>
        <option  value="crescente">Menor Preço</option>
        <option  value="decrescente">Maior Preço</option>
        </select>
        
    
    </div>
    )
}