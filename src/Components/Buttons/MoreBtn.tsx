import React, { FC } from "react";
import styled from "./BtnStyle.module.scss"
import rightArrow from "../../img/rightArrow.svg"

const MoreBtn: FC<IMoreBtn> = ({ children, onClick }) =>{
    return (
        <div className={styled.MoreBtn} onClick={onClick}>
                <div>{children}</div>
                <img src={rightArrow} alt="rightArrow"/>
        </div>
    )
}

interface IMoreBtn {
    children: React.ReactNode,
    onClick: (...args: any) => void;
}

export default MoreBtn