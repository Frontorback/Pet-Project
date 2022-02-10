import React from "react";
import { Products } from "../API/api";
import AreaWithProducts from "../Components/ProductPage/AreaWithProducts";

const FruitAndVegetables = () =>{
    const FilterProducts = Products.filter(e => e.productType === "Fruit And Vegetables")
    
    return(
        <>
        <AreaWithProducts FilterProducts={FilterProducts} link={"Fruit And Vegetables"}/>
        </>
    )
}
export default FruitAndVegetables