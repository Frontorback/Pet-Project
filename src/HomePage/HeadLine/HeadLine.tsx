import React, { FC } from "react";
import { IProducts } from "../../API/api";
import Card from "../../Components/ViewType/Card";
import HeaderBlock from "../../Components/Home/HeaderBlock";
import styled from "./HeadLine.module.scss"

const HeadLine: FC<IHeadLine> = ({Products, Title ,BtnTxt}) =>{
    return(
        <div>
            <HeaderBlock title={Title} BtnTxt={BtnTxt}/>
            <div className={styled.HeadLineCards}>
                {Products.slice(0, 4).map(key =>(
                    <Card key={key.id} Description={key.productDescription} OldPrice={key.oldPrice} Price={key.price} image={key.image} ProductTitle={key.title} ID={key.id}/>
                ))}
            </div>
        </div>
    )
}

interface IHeadLine{
    Products: IProducts[],
    Title: string,
    BtnTxt: string
}
export default HeadLine