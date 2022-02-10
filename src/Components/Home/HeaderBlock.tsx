import React, { FC } from "react";
import GreenRightArrow from "../../img/GreenRightArrow.svg"
import styled from "./HeaderBlock.module.scss"

const HeaderBlock: FC<IHeaderBlock> = ({ title, BtnTxt }) =>{
    return(
        <div className={styled.Header}>
            <h1>{title}</h1>
            <div className={styled.HeaderBtn}>
                <button>{BtnTxt}</button>               
                <img src={GreenRightArrow} alt="GreenRightArrow"/>
            </div>
        </div>
    )
}

interface IHeaderBlock{
    title: string,
    BtnTxt: string,

}

export default HeaderBlock