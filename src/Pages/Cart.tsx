import React from "react";
import { useSelector } from "react-redux";
import BillingInfoAndMethods from "../CartPage/BillingInfoAndMethods";
import OrderSummary from "../CartPage/OrderSummary";
import { RootState } from "../Redux/store";
const Cart = () =>{    

    const CartItems = useSelector( (state:RootState) => state.products.order )

    return(
        <>  
            {CartItems.length > 0  ? 
        
            <div style={{display: "flex", flexDirection: "row" }}>
                <BillingInfoAndMethods/>
                <OrderSummary />
            </div>
                :   
            <h1 style={{margin: "15% 45%" }}>Cart is Empty</h1>
            }
        </>
    )
}
export default Cart