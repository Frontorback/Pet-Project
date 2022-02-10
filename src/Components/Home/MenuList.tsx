import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { ICategories, IProducts } from "../../API/api";
import styled from "./MenuList.module.scss"
import MoreBtn from "../Buttons/MoreBtn";
import { useDispatch } from "react-redux";
import { switchToDetail } from "../../Redux/ProductSlice";

const MenuList: FC<IMenuList> = ({title, BtnTxt, Best, isProduct}) =>{
    const [show, setShow] = useState(true)

    let Menu = show ? Best.slice(0,5) : Best

    const dispatch = useDispatch();

    const showDetail = (ID:number, link:string) =>{
        dispatch(switchToDetail({ID, link}))
    }
    
    return (
        <div className={styled.MenuList}>
            <h1 className={styled.menuTitle}>{title}</h1>
            <ul>
                {Menu.map(key =>(
                    <li
                     className={styled.menuItem} 
                     key={key.id}>
                     {isProduct ?
                        <div
                         className={styled.link} 
                         onClick={() => showDetail(key.id, key.link)}
                        >{key.title}</div>
                        :
                        <NavLink className={styled.link} to={key.link} >{key.title}</NavLink>
                     }   
                    </li>
                ))
                }    
            </ul>
            <MoreBtn onClick={() => setShow(!show)}>{show ? "More" : "Less"} {BtnTxt}</MoreBtn>
            
        </div>
    )
}

interface IMenuList {
    title: string,
    BtnTxt: string,
    Best: IProducts[] | ICategories[] ,
    isProduct?: boolean
}

export default MenuList