import React from "react";

export const CartPage = (props)=>{

    const{goToMainPage} = props

    return(
        <>
        <button onClick={goToMainPage}>Home</button>
        </>
    )

}
   