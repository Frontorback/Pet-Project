import React, { FC } from "react";
import styled from "./CardList.module.scss";
import blackStar from "../../img/blackStar.svg"
import whiteStarS from "../../img/whiteStarS.svg"
import WhiteRightArrow from "../../img/WhiteRightArrow.svg"
import heart from "../../img/heart.svg"
import { useDispatch } from "react-redux";
import { switchToDetail } from "../../Redux/ProductSlice";

const CardList:FC<ICardList> = ({ image, ProductTitle, Description, Price, OldPrice, Brand, Delivery, Rating, ID, link }) =>{
    const Rating1 = new Array(Rating).fill(0);
    const Rating2 = new Array(5 - Rating).fill(1);
    const ResulRating = Rating1.concat(Rating2)
    
    const dispatch = useDispatch();

    const showDetail = () =>{
        dispatch(switchToDetail({ID, link}))
    }
    return (
        <div className={styled.CardList}>
            <img className={styled.productImg} src={image} alt="Product"/>
            <div className={styled.productInfo}>
            
                <h1>{ProductTitle}</h1>
                <h2>{Description}</h2>
                <div className={styled.rating}>
                    {ResulRating.map((key, idx) =>(
                        <img key={idx} className={styled.ratingStars} src={key === 0 ? blackStar : whiteStarS} alt="rating"/>
                    ))
                    }
                </div>
                <div className={styled.productFrom}>
                    <div className={styled.productFrom__First}>
                        <div>Fresheness</div>
                        <div>Farm</div>
                        <div>Delivery</div>
                        <div>Stock</div>
                    </div>
                    <div className={styled.productFrom__First}>
                        <div><span>New</span> (Extra fresh)</div>
                        <div>{Brand}</div>
                        <div>{Delivery}</div>
                        <span>320 pcs</span>
                    </div>
                    
                </div>
                
            </div>
            <div className={styled.ProductAdd}>
                <div className={styled.Prices}>
                    <div>{Price} USD</div>
                    {OldPrice ? <div className={styled.OldPrice}>{OldPrice}</div> : null}
                </div>
                <div>
                    <div className={styled.Shipping}>Free Shipping</div>
                    <div className={styled.Delivery}>Delivery in 1 day</div>
                    <div className={styled.DetailBtn} onClick={() => showDetail()}>
                        <div>Product Detail</div>
                        <img src={WhiteRightArrow} alt="WhiteRightArrow"/>
                    </div>
                    <div className={styled.WishList}>
                        
                        <img src={heart} alt="heart"/>
                        <div>Add to wish list</div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}
interface ICardList {
    image: string,
    ProductTitle: string,
    Description: string,
    Price: number,
    OldPrice: number | null,
    Brand: string,
    Delivery:string,
    Rating: number,
    ID: number,
    link: string

}

export default CardList