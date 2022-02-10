import React from "react";
import { useDispatch } from "react-redux";
import { Products } from "../../API/api";
import { switchToDetail } from "../../Redux/ProductSlice";
import styled from "./ProductTags.module.scss"

const ProductTags = () =>{
    const dispatch = useDispatch();
    return (
        <>
            <div className={styled.ProductTags}>
                <h1>Product tags</h1>
                <div className={styled.TagsRow}>
                    {Products.map(key =>(
                        <div key={key.id} className={styled.tags} onClick={() => dispatch(switchToDetail({ID: key.id, link: key.productType}))}>{key.title}</div>
                    ))
                    }
                </div>
            </div>
            <h2 className={styled.LastFooter}>Copyright © 2022 test.com</h2>
        </>
    )
}

export default ProductTags