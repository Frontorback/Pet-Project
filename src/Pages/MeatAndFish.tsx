import React from "react";
import { Products } from "../API/api";
import AreaWithProducts from "../Components/ProductPage/AreaWithProducts";

const MeatAndFish = () =>{
    const FilterProducts = Products.filter(e => e.productType === "Meat and fish")
    
    return(
        <AreaWithProducts FilterProducts={FilterProducts} link={"Meat and fish"}/>
    )
}
export default MeatAndFish