import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { switchToDetail } from "../../Redux/ProductSlice";
import styled from "./Card.module.scss";

const Card:FC<ICard> = ({ image, ProductTitle, Description, Price, OldPrice, ID, link }) =>{

    const dispatch = useDispatch();
    const showDetail = () =>{
        dispatch(switchToDetail({ID, link}))

    }
    return (
        <div className={styled.Card}>
            <img src={image} alt="Product"/>
            {OldPrice ? <div className={styled.Discount}>-{Math.ceil(100 - (Price * 100 ) / OldPrice)}%</div> : null}
            <h2>{ProductTitle}</h2>
            <h3>{Description}</h3>
            <div className={styled.PriceAndButton}>
                <div className={styled.Prices}>
                    <div>{Price} USD</div>
                    {OldPrice ? <div className={styled.OldPrice}>{OldPrice}</div> : null}
                </div>
                
                <div className={styled.BuyBtn} onClick={() => showDetail()}>Buy now</div>
            </div>
        </div>
    )
}
interface ICard {
    image: string,
    ProductTitle: string,
    Description: string,
    Price: number,
    OldPrice: number | null,
    ID?: number | null,
    link?: string,
    showDetail?: (id: number) => void
}

export default Card
