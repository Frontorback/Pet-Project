import React from "react";
import { useSelector } from "react-redux";
import { Products } from "../API/api";
import ProductOrder from "../Components/Cart/ProductOrder";
import { RootState } from "../Redux/store";
import styled from "./OrderSummary.module.scss"


const OrderSummary = () =>{
    
    const IdOrder = useSelector( (state:RootState) => state.products.order)

    var items:any = []
    var ing: number[] = [0];

    if(IdOrder){
        IdOrder.map(key =>(
            items.push(Products.slice().filter(k => k.id === key))
                    )) 
                    items.map( (d:any) =>(
                        ing.push(d[0].price)
                    ))             
        
    }
    let subTotal = items.length > 0 ? ing.reduce( (a,b) => a +b) : 0

    return(
        
        <div className={styled.OrderSummary}>
            <h1 className={styled.OrderSummary__Title}>Order Summary </h1>
            <span className={styled.OrderSummary__Descrip}>Price can change depending on shipping method and taxes of your state.</span>
            {IdOrder && IdOrder.map(key => (
                <ProductOrder key={key} ID={key} />
            ))}
            <div className={styled.OrderSummaryC}>
                <div className={styled.OrderSummary__TotalPrice}>
                    <div className={styled.TotalPrice_Item}>Subtotal</div>
                    <div className={styled.TotalPrice_Item}>{subTotal} USD</div>
                </div>
                <div className={styled.OrderSummary__TotalPrice}>
                    <div className={styled.TotalPrice_Item}>Tax</div>
                    <div className={styled.TotalPrice_Item}>17% {((17 * subTotal) / 100).toFixed(2)} USD</div>
                </div>
                <div className={styled.OrderSummary__TotalPrice}>
                    <div className={styled.TotalPrice_Item}>Shipping</div>
                    <div className={styled.TotalPrice_Item}>0 USD</div>
                </div>
            </div>
            <div className={styled.OrderSummary__PromoCode}>
                <input className={styled.PromoCode_Input} placeholder="Apply promo code"/>
                <span className={styled.PromoCode_Apply}>Apply now</span>
            </div>
            <div className={styled.OrderSummary__Total}>
                <div className={styled.Total_OrderAndDelivery}>
                    <div className={styled.Order}>Total Order</div>
                    <span className={styled.Delivery}>Guaranteed delivery day:  June 12, 2020</span>
                </div>
                <div className={styled.Total_Price}>{(subTotal + (17 * subTotal) / 100).toFixed(2)} USD</div>
            </div>

        </div>
    )
}

export default OrderSummary