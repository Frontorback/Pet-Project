import React from "react";
import { Products } from "../API/api";
import AreaWithProducts from "../Components/ProductPage/AreaWithProducts";

const Bakery = () =>{
    const FilterProducts = Products.filter(e => e.productType === "Bakery")
    
    return(
        <AreaWithProducts FilterProducts={FilterProducts} link={"Bakery"}/>
    )
}
export default Bakery