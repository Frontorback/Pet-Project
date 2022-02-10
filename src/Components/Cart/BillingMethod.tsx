import React, { FC } from "react";
import styled from "./BillingMethod.module.scss";

const BillingMethod: FC<IBillingMethod> = ({ Title, Price, Image, setActive, ActiveMethod, ActiveItem  }) =>{
    return (
        <div className={styled.BillingItems_Row}>
            <div className={styled.firstItem}>
                <span
                 className={
                    ActiveMethod === ActiveItem ? 
                    `${styled.firstItem_checkboxActive} ${styled.firstItem_checkbox}` : 
                    styled.firstItem_checkbox 
                    } 
                 onClick={() => setActive(ActiveItem)}
                ></span>
                <span>{Title}</span>
            </div>
            <div className={styled.AdditionalPrice}>
                <span className={styled.AdditionalPrice_count}>+{Price} USD</span>
                <span className={styled.AdditionalPrice_name}>Additional price</span>
            </div>
            <img src={Image} alt="FedEx"/>
        </div>
    )
}

export default BillingMethod

interface IBillingMethod {
    Title: string,
    Price?: number,
    Image: string,
    setActive: (title: string) => void,
    ActiveMethod: string,
    ActiveItem: string
}