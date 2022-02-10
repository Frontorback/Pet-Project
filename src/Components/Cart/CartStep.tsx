import React, { FC } from "react";
import styled from "./CartStep.module.scss"

const CartStep: FC<ICartStep> = ({Title, Description, NumStep}) =>{
    return(
        <>
            <h1 
             className={
                NumStep === "1" ?  
                `${styled.BillingInfoAndMethods__FirstTitle} ${styled.BillingInfoAndMethods__Title}`: 
                styled.BillingInfoAndMethods__Title}
            >{Title}</h1>
            <div
             className={
                NumStep === "1" ? 
                `${styled.BillingInfoAndMethods__Step} ${styled.BillingInfoAndMethods__FirstStep}`: 
                styled.BillingInfoAndMethods__Step}
            >
                <span>{Description}</span>
                <span>Step {NumStep} of 5</span>
            </div>
        </>
    )
}

interface ICartStep{
    Title:string,
    Description: string,
    NumStep: string
}

export default CartStep