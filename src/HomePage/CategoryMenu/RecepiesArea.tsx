import React from "react";
import { RecepiesAPI } from "../../API/api";
import styled from "./RecepiesArea.module.scss"
import GreenRightArrow from "../../img/GreenRightArrow.svg"

const RecepiesArea = () =>{
    return (
        <div className={styled.RecepArea}>
            {RecepiesAPI.map(key =>(
                <div key={key.id} className={styled.RecepCard}>
                    <div className={styled.banner}>
                        <div>{key.banner}</div>
                        <h1>{key.title}</h1>
                    </div>
                    <div className={styled.RecepiesBtn}>
                        <div>Read recepies</div>
                        <img src={GreenRightArrow} alt="rightArrow"/>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default RecepiesArea