import React from "react";
import { BlogRecepis } from "../../API/api";
import HeaderBlock from "../../Components/Home/HeaderBlock";
import styled from "./BlogPosts.module.scss"
import ProfileNone from "../../img/ProfileNone.jpg"

const BlogPosts = () =>{
    let data = BlogRecepis.sort((a,b) =>{
        return b.rating - a.rating
    })
    return(
        <>
        <HeaderBlock title="BlogPosts" BtnTxt="Go to Blog"/>
        <div className={styled.Blog}>
            <div className={styled.BlogMain}>
                <img src={data[0].BGImg} alt="foodImg"/>
                <div className={styled.BlogMainTxt}>
                    <span className={styled.tag}>{data[0].tag}</span>
                    <p>{data[0].title}</p>
                    <div className={styled.Author}>
                        <img src={data[0].profileImg || ProfileNone} alt="profilePhoto"/>
                        <div className={styled.name}>{data[0].profileName}</div>
                        <div>{data[0].date}</div>
                    </div>
                </div>
                
            </div>
            <div className={styled.UnderText}>
                <img src={data[1].BGImg} alt="foodImg"/>
                <span className={styled.tagS}>{data[1].tag}</span>
                <p>{data[1].title}</p>
                <div className={styled.AuthorBlack}>
                    <div className={styled.AuthorName}>{data[1].profileName}</div>
                    <div>{data[1].date}</div>
                </div>
            </div>
            <div className={styled.LastColumnBlock}>
            {data.slice(2,5).map(key =>(
                <div className={styled.LastColumnBlockRow} key={key.id}>
                    <div className={styled.LastBlogTetx}>
                        <p>{key.title}</p>
                        <div className={styled.LastAuthorBlack}>
                            <div className={styled.LastAuthorName}>{key.profileName}</div>
                            <div>{key.date}</div>
                        </div>
                    </div>
                    <img src={key.BGImg} alt="foodImg"/>
                </div>    
            ))
            }
            </div>
        </div>
        </>
    )
}

export default BlogPosts