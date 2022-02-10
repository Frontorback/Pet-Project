import React from "react";
import styled from "./ProductDescripton.module.scss"

const ProductDescripton = () =>{
    return(
        <>
            <h1 className={styled.ProductDescription__topic}>Origins</h1>
            <p className={styled.ProductDescription__article}>
                We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality.
                If we don’t grow them ourselves, we source them from carefully chosen suppliers,
                preferring to buy locally whenever possible.
            </p>
            <h2 className={styled.ProductDescription__topic}>How to cook</h2>
            <p className={styled.ProductDescription__article}>
                From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness,
                texture and colour to an enormous number of recipes.</p>
            <h3 className={styled.ProductDescription__topic}>Full of Vitamins!</h3>
            
                <div className={styled.titleVitamins}>
                    <div>Vitamins</div>
                    <div>Quantity</div>
                    <div>% DV</div>
                </div>
                <div className={styled.Vitamins_border}></div>
                <div className={styled.VitaminsDetail}>
                    <div className={styled.VitaminsDetail__items}>
                        <span>Vitamin A equiv.</span>
                        <span>Thiamine (B1)</span>
                        <span>Niacin (B3)</span>
                        <span>Folate (Bg)</span>
                        <span>Vitamin C</span>
                        <span>Vitamin E</span>
                        <span>Vitamin K</span>
                    </div>
                    <div className={styled.VitaminsDetail__items}>
                        <span>735 μg</span>
                        <span>0.066 mg</span>
                        <span>0.983 mg</span>
                        <span>19 μg</span>
                        <span>5.9 mg</span>
                        <span>0.66 mg</span>
                        <span>13.2 mg</span>
                    </div>
                    <div className={styled.VitaminsDetail__items}>
                        <span>104 %</span>
                        <span>6 %</span>
                        <span>7 %</span>
                        <span>4 %</span>
                        <span>3 %</span>
                        <span>2 %</span>
                        <span>1 %</span>
                    </div>
                </div>
            
        </>
    )
}

export default ProductDescripton