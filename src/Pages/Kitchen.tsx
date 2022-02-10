import React from "react";
import { Products } from "../API/api";
import AreaWithProducts from "../Components/ProductPage/AreaWithProducts";

const Kitсhen = () =>{
    const FilterProducts = Products.filter(e => e.productType === "Kitсhen")
    
    return(
        <AreaWithProducts FilterProducts={FilterProducts} link={"Kitсhen"}/>
    )
}
export default Kitсhen