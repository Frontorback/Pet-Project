import React from "react";
import { Products } from "../API/api";
import AreaWithProducts from "../Components/ProductPage/AreaWithProducts";

const Drinks = () =>{
    const FilterProducts = Products.filter(e => e.productType === "Drinks")
    
    return(
        <AreaWithProducts FilterProducts={FilterProducts} link={"Drinks"}/>
    )
}
export default Drinks