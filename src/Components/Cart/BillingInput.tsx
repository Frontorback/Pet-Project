import React, { FC } from "react";
import styled from "./BillingInput.module.scss"

const BillingInput: FC<IBillingInput> = ({ Title, Type, Placeholder, Name, MaxLength, MinLength, register, errorsTxt }) =>{

    return(
        <div className={styled.InputColumn}>
            <label>{Title}</label>
            <input 
             className={errorsTxt && styled.inputBorderError} 
             type={Type} 
             placeholder={Placeholder} 
             {...register(Name, {
                required: "required",
                minLength: {
                    value: MinLength,
                    message: `MIN LENGTH IS ${MinLength}`
                },
                maxLength: {
                    value: MaxLength,
                    message: `MAX LENGTH IS ${MaxLength}`
                }
             })
             }
            /> 
            {errorsTxt && <div className={styled.inputError}>{errorsTxt.message}</div>}
    </div>
    )
}
interface IBillingInput{
    Title: string,
    Type:string,
    Placeholder: string,
    Name: string,
    MaxLength: number,
    MinLength: number,
    register: any,
    errorsTxt: any
}

export default BillingInput
