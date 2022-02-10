import React from "react";
import styled from "./style.module.scss"

const FirstHeader = () =>{
    return (
        <div className={styled.firstHeader}>
            <div className={styled.contacts}>
                <div>Chat with us</div>
                <div>+420 336 775 664</div>
                <div>info@freshnesecom.com</div>
            </div>

            <div className={styled.info}>
                <div>Blog</div>
                <div>About Us</div>
                <div>Careers</div>
            </div>
        </div>
    )
}
export default FirstHeader