import React from "react";
import styled from "./FirstFooter.module.scss"

const FirstFooter = () =>{
    return(
        <div className={styled.FooterFirst}>
            <div className={styled.FooterFirstBlock}>
                <h1>Get in touch</h1>
                <a href="?">About Us</a>
                <a href="?">Careers</a>
                <a href="?">Press Releases</a>
                <a href="?">Blog</a>
            </div>
            <div className={styled.FooterFirstBlock}>
                <h1>Connections</h1>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className={styled.FooterFirstBlock}>
                <h1>Earnings</h1>
                <a href="?">Become an Affiliate</a>
                <a href="?">Advertise your product</a>
                <a href="?">Sell on Market</a>
            </div>
            <div className={styled.FooterFirstBlock}>
                <h1>Account</h1>
                <a href="?">Your account</a>
                <a href="?">Returns Centre</a>
                <a href="?">100 % purchase protection</a>
                <a href="?">Chat with us</a>
                <a href="?">Help</a>
            </div>
        </div>
    )
}

export default FirstFooter