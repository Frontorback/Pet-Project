import React from "react";
import { useSelector } from "react-redux";
import { Products } from "../API/api";
import AreaWithProducts from "../Components/ProductPage/AreaWithProducts";
import { RootState } from "../Redux/store";

const Search = () =>{
    const searchItem = useSelector( (state: RootState) => state.filters.search) 
    const FilterProducts = Products.filter(e => e.title.toLowerCase().includes(searchItem.toLowerCase()))
    return (
        <>
            <AreaWithProducts FilterProducts={FilterProducts} link={"search"}/>
        </>
    )
}
export default Search