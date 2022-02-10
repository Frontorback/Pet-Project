import React, { FC } from "react";
import styled from "./Rating.module.scss"
import star from "../../../img/star.svg"
import whiteStar from "../../../img/WhiteStar.svg"

const Rating: FC<IRating> = ({Rating,  isRatingChecked, checked}) =>{
    const Rating1 = new Array(Rating).fill(0);
    const Rating2 = new Array(5 - Rating).fill(1);
    const ResulRating = Rating1.concat(Rating2)

    return(
        <div className={styled.BrandsRow}>
            <input 
             className={styled.inputBox} 
             type="checkbox" 
             id={`boxS${Rating}`} 
             name={`boxS${Rating}`} 
             onChange={e => isRatingChecked(e.target.checked, Rating)} 
             checked={checked}
            />
            <label className={styled.labelBox} htmlFor={`boxS${Rating}`}>
                {ResulRating.map((key, idx) =>(
                    <img
                     key={idx} 
                     className={styled.ratingStars} 
                     src={key === 0 ? star : whiteStar}
                     alt="rating"/>
                ))
                }
            </label>
        </div>
    )
}

interface IRating{
    Rating: number,
    isRatingChecked: (arg1:boolean, arg2: number) => void,
    checked: boolean
}
export default Rating