import React, { FC } from "react";
import styled from "./ProductOrder.module.scss"
import SmallHeart from "../../img/SmallHeart.svg"
import SmallCompare from "../../img/SmallCompare.svg"
import SmallClose from "../../img/SmallClose.svg"
import star from "../../img/star.svg"
import WhiteStar from "../../img/WhiteStar.svg"
import DownBlackArrow from "../../img/DownBlackArrow.svg"
import { Products } from "../../API/api";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/ProductSlice";



const ProductOrder: FC<IProductOrder> = ( {ID} ) =>{

    const dispatch = useDispatch();

    let ProductFilter =  Products.slice().filter( k => k.id === ID)
    
    const Rating1 = new Array(ProductFilter[0].rating).fill(0);
    const Rating2 = new Array(5 - ProductFilter[0].rating).fill(1);
    const ResulRating = Rating1.concat(Rating2)


    return(
        <div className={styled.ProductOrder}>
            <div className={styled.ProductOrderRow}>
                <div className={styled.ProductOrder__First}>
                    <img className={styled.First_Image} src={ProductFilter[0].image} alt="product"/>
                    <div className={styled.First_ItemRow}> 
                        <img src={SmallHeart} alt="SmallHeart"/>
                        <span className={styled.OrderSpan}>Wishlist</span>
                    </div>
                    <div className={styled.First_ItemRow}>
                        <img src={SmallCompare} alt="SmallCompare"/>
                        <span className={styled.OrderSpan}>Compare</span>
                    </div>
                    <div className={styled.First_ItemRow} onClick={() => dispatch(removeFromCart(ProductFilter[0].id))}>
                        <img src={SmallClose} alt="SmallClose"/>
                        <span className={styled.OrderSpan}>Remove</span>
                    </div>
                </div>


                <div className={styled.ProductOrder_Second}>
                    <h2>{ProductFilter[0].title}</h2>
                    <div className={styled.Second_Info}>
                        <span className={styled.OrderSpan}>Brand:</span>
                        <div className={styled.Second_InfoName}>{ProductFilter[0].brand}</div>
                    </div>
                    <div className={styled.Second_Info}>
                        <span className={styled.OrderSpan}>Freshness:</span>
                        <div className={styled.Second_InfoName}>1 day old</div>
                    </div>
                    <div className={styled.Second_Rating}>
                        {ResulRating.map((key, idx) =>(
                                <img 
                                 key={idx} 
                                 className={styled.ratingStars} 
                                 src={key === 0 ? star : WhiteStar} 
                                 alt="rating"
                                />
                            ))
                        }
                    </div>
                    <div className={styled.Second_PriceSection}>
                        <div className={styled.priceColumn}>
                            <div className={styled.price}>{ProductFilter[0].price}</div>
                            {ProductFilter[0].oldPrice ? <div className={styled.OldPrice}>{ProductFilter[0].oldPrice}</div> : null}
                        </div>
                        <div className={styled.ChooseCount}>
                            <div className={styled.ChooseCount_count}>1</div>
                            <span className={styled.ChooseCount_border}></span>
                            <span className={styled.ChooseCount_options}>
                                Pcs
                                <img src={DownBlackArrow} alt="DownBlackArrow"/>
                            </span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className={styled.ProductOrder_BorderBottom}></div>
    </div>
    )
}

interface IProductOrder {
    ID: number,
}

export default ProductOrder