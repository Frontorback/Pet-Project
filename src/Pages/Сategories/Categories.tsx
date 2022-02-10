import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { MenuAPI } from "../../API/api";
import MiniArrow from "../../img/MiniArrow.svg"
import { closeDetail } from "../../Redux/ProductSlice";
import styled from "./Categories.module.scss"

const Categories = () =>{
    const dispatch = useDispatch();
    return(
            <ul className={styled.NavList}>
                {MenuAPI.map(key =>(
                    <li key={key.id}>
                        <NavLink to={key.link} onClick={() =>  dispatch(closeDetail())}>{key.title}</NavLink>
                        <img className={styled.miniArrow} src={MiniArrow} alt="MiniArrow"/>
                    </li>
                ))}                
            </ul>
        )
}

export default Categories