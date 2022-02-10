import React, { FC } from "react";
import BillingInput from "./BillingInput";
import styled from "./PaymentMethod.module.scss"

const PaymentMethod: FC<IPaymentMethod> = ({Title, Image, ActiveItem, register, errorCardNum, errorHolder, errorDate, errorCVC}) =>{
    return (
        <div className={styled.BillingItems_active }>
            <div className={styled.BillingItems_RowActive}>
                <div className={styled.firstItem}>
                    <span className={styled.firstItem_checkboxActive}></span>
                    <span>{Title}</span>
                </div>
                <img src={Image} alt={Title}/>
            </div>
                <>
                    <BillingInput 
                     Title="Card number" 
                     Type="number" 
                     Placeholder="Card number" 
                     Name={`CardNumber${ActiveItem}`} 
                     MaxLength={16} 
                     MinLength={16} 
                     register={register} 
                     errorsTxt={errorCardNum}
                    />
                    <div className={styled.InputActiveRow}>
                    <BillingInput 
                     Title="Card holder" 
                     Type="text" 
                     Placeholder="Card holder" 
                     Name={`holder${ActiveItem}`} 
                     MaxLength={16} 
                     MinLength={1} 
                     register={register} 
                     errorsTxt={errorHolder}
                    />
                    <BillingInput
                     Title="Expiration date" 
                     Type="number" 
                     Placeholder="DD/MM/YY" 
                     Name={`date${ActiveItem}`} 
                     MaxLength={16} 
                     MinLength={1} 
                     register={register} 
                     errorsTxt={errorDate}
                    />
                    <BillingInput
                     Title="CVC" 
                     Type="number" 
                     Placeholder="CVC" 
                     Name={`CVC${ActiveItem}`} 
                     MaxLength={3} 
                     MinLength={3} 
                     register={register} 
                     errorsTxt={errorCVC}
                    />
                    </div>
                </>
                
        </div>
    )
}

interface IPaymentMethod {
    Title: string,
    Image: string,
    ActiveItem: string,
    register:any,
    errorCardNum:string,
    errorHolder:string,
    errorDate:string,
    errorCVC:string,
}

export default PaymentMethod