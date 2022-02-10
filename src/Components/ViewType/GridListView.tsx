import React, { FC } from "react";
import styled from "./GridListView.module.scss"
import GridView from "../../img/GridView.svg"
import GridViewActive from "../../img/GridViewActive.svg"
import ListView from "../../img/ListView.svg"
import ListViewActive from "../../img/ListViewActive.svg"

const GridListView:FC<IGridListView> = ({ title, ProductsCount, ProductView, listOrRow }) =>{
    return(
        <div className={styled.GridListView}>
            <h1>{title}</h1>
            <div className={styled.GridListProductsRow}>
                <div className={styled.GridListRow} onClick={() => ProductView(true)}>
                    <img src={listOrRow ? GridViewActive : GridView} alt="Grid view"/>
                    <div className={styled.viewActive}>Grid view</div>
                </div>
                <div className={styled.GridListRow} onClick={() => ProductView(false)}>
                    <img src={listOrRow ? ListView : ListViewActive} alt="List view"/>
                    <div className={styled.viewUnActive}>List view</div>
                </div>
                <div className={styled.ProductsRow}>
                    <div className={styled.ProductsCount}>{ProductsCount}</div>
                    <div className={styled.Products}>Products</div>
                </div>
            </div>
            
        </div>
    )
}

interface IGridListView{
    title: string,
    ProductsCount: number,
    ProductView: (arg0: boolean) => void,
    listOrRow: boolean
} 
export default GridListView