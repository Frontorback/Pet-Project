import React from "react";
import RecepiesArea from "./RecepiesArea";
import styled from "./ProductsArea.module.scss"
import MenuList from "../../Components/Home/MenuList";
import { MenuAPI } from "../../API/api";

const CategoryMenu = () =>{
    return (
        <div className={styled.ProductsArea}>
            <MenuList title="Category menu" BtnTxt="categories" Best={MenuAPI} isProduct={false}/>
            <RecepiesArea />
        </div>
    )
}

export default CategoryMenu