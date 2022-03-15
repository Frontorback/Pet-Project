import React, { FC, useEffect } from "react";
import styled from "./styled.module.scss"
import Freshnesecom from "../../../img/Freshnesecom.svg"
import { MenuAPI } from "../../../API/api";
import { Link } from "react-router-dom";

const Burger: FC<IBurger> = ({burger, setBurger}) =>{

    useEffect(() =>{
        const body:any = document.querySelector("body")
        body.style.overflow = burger ?  `${styled.menu} ${styled.active}` : styled.auto
    })
      

    return (
        <div className={burger ?  `${styled.menu} ${styled.active}` : styled.menu} onClick={() => setBurger(false)}>
            <div className={styled.backGrey}></div>
            <div className={styled.menu__content} onClick={(e) => e.stopPropagation()}>
                <Link to={"/"} className={styled.Logo}>
                    <img src={Freshnesecom} alt="Freshnesecom" onClick={() => setBurger(false)}/>
                </Link>
                
                <ul >
                {MenuAPI && MenuAPI.map(key =>(
                    <li key={key.id}>
                        <Link to={key.link} onClick={() => setBurger(false)}>{key.title}</Link>
                    </li>
                ))}
                </ul>
            </div>


        </div>
    )
}
interface IBurger{
    burger: boolean
    setBurger: (b:boolean) => void
}
export default Burger