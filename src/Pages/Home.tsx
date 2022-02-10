import React from "react";
import { useSelector } from "react-redux";
import { Products } from "../API/api";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import BestFarmers from "../HomePage/BestFarmers/BestFarmers";
import BestSelling from "../HomePage/BestSelling/BestSelling";
import BlogPosts from "../HomePage/BlogPosts/BlogPosts";
import CategoryMenu from "../HomePage/CategoryMenu/CategoryMenu";
import Customers from "../HomePage/Customers/Customers";
import HeadLine from "../HomePage/HeadLine/HeadLine";
import { RootState } from "../Redux/store";

const Home = () =>{
    const sliceCheck = useSelector( (state:RootState) => state.products.isActive)
    return(
        <>
        {sliceCheck ? <ProductDetail  /> :
            <>
            <CategoryMenu />
            <BestSelling />
            <BestFarmers />
            <Customers />
            <HeadLine Products={Products} Title="Section Headline" BtnTxt="Button"/>
            <BlogPosts />
            </> 
        }   
        </>
    )
}
export default Home