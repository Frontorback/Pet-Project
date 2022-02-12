import React, { useEffect, useState } from "react";
import styled from "./ProductDetail.module.scss"
import bigGoldStar from "../../img/bigGoldStar.svg"
import whiteStarS from "../../img/whiteStarS.svg"
import DownBlackArrow from "../../img/DownBlackArrow.svg"
import WhitePlus from "../../img/WhitePlus.svg"
import redHeart from "../../img/redHeart.svg"
import Compare from "../../img/Compare.svg"
import ProductDescripton from "./ProductDescripton";
import { Products } from "../../API/api";
import HeadLine from "../../HomePage/HeadLine/HeadLine";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeDetail } from "../../Redux/ProductSlice";
import { RootState } from "../../Redux/store";

const ProductDetail = () => {
    const [switchBtn, setSwitchBtn] = useState<number>(0);
    const [count, setCount] = useState<number | string>("");

    const sliceId = useSelector( (state:RootState) => state.products.id)
    const sliceLink = useSelector( (state:RootState) => state.products.link)
    
    const requiredProduct = Products.slice().filter(k => k.id === sliceId )
    const RelatedProducts = Products.slice().filter(t => t.productType === requiredProduct[0].productType)
    

    const Rating1 = new Array(requiredProduct[0].rating).fill(0);
    const Rating2 = new Array(5 - requiredProduct[0].rating).fill(1);
    const ResulRating = Rating1.concat(Rating2)

    const dispatch = useDispatch();

    

    const TestValue = (e:string) =>{
        if(Number.isInteger(+e) && e.length < 2 ){
            setCount(e)
        }    
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <>
        <div className={styled.HeaderLink}>
            <a href="/" onClick={() => dispatch(removeDetail())}> HomePage</a>
            <span>/</span>
            {sliceLink &&
                <>
                <a href={`/${requiredProduct[0].link}`} onClick={() => dispatch(removeDetail())}>{sliceLink}</a>
                <span>/</span> 
                </>
            }
            <div className={styled.HeaderLink__Product}> {requiredProduct[0].title}</div>
        </div>
        
        <div className={styled.ProductDetail}>
            <div className={styled.ProductDetail__Images}>
                <img src={requiredProduct[0].image} alt="Product" />
                    <div className={styled.imgTitle}>
                    {requiredProduct[0].oldPrice ? 
                    <span className={styled.Discount}>
                        -{Math.ceil(100 - (requiredProduct[0].price * 100 ) / requiredProduct[0].oldPrice)}%
                        </span> : 
                        null}
                        <span>Free shipping</span>
                    </div>
                
                <img src={requiredProduct[0].image} alt="Product"/>
                <img src={requiredProduct[0].image} alt="Product"/>
            </div>
            <div className={styled.ProductDetail__Information}>
                <h1 className={styled.Information_title}>{requiredProduct[0].title}</h1>
                <div className={styled.Information_rating}>
                    {ResulRating.map((key, idx) =>(
                        <img key={idx} className={styled.ratingStars} src={key === 0 ? bigGoldStar : whiteStarS} alt="rating"/>
                    ))
                    }
                    <span>1 customers review</span>
                </div>
                <p className={styled.Information_BigDescription}>
                     Carrots from Tomissy Farm are one of the best on the market.
                     Tomisso and his family are giving a full love to his Bio products.
                     Tomisso’s carrots are growing on the fields naturally.</p>
                <div className={styled.ProductSettings}>
                    <div className={styled.productFrom}>
                        <div className={styled.productFrom__First}>
                            <div>SKU:</div>
                            <div>Category:</div>
                            <div>Stock:</div>
                            <div>Farm</div>
                        </div>
                        <div className={styled.productFrom__Second}>
                            <div>76645</div>
                            <span>{requiredProduct[0].categories}</span>
                            <span className={styled.Second_span}>In Stock</span>
                            <div>{requiredProduct[0].brand}</div>
                        </div>
                    </div>
                    <div className={styled.productFrom}>
                        <div className={styled.productFrom__First}>
                            <div>Freshness:</div>
                            <div>Buy by:</div>
                            <div>Delivery:</div>
                            <div>Delivery area</div>
                        </div>
                        <div className={styled.productFrom__Second}>
                            <div>1 days old</div>
                            <div>pcs, kgs, box, pack</div>
                            <div>in 2 days</div>
                            <div>{requiredProduct[0].delivery}</div>
                        </div>
                    </div>
                </div>
                <div className={styled.productFrom__AddToCart}>
                    <div className={styled.priceColumn}>
                        <div className={styled.price}>{requiredProduct[0].price}</div>
                        {requiredProduct[0].oldPrice ? <div className={styled.OldPrice}>{requiredProduct[0].oldPrice}</div> : null}
                    </div>
                    <div className={styled.AddToCart_CountAndBtn}>
                        <div className={styled.ChooseCount}>
                            <input
                             type="text"  
                             onChange={(e) => TestValue(e.target.value)} 
                             value={count} 
                             placeholder="0"
                            />
                            <span className={styled.ChooseCount_border}></span>
                            <span className={styled.ChooseCount_options}>
                                Pcs
                                <img src={DownBlackArrow} alt="DownBlackArrow"/>
                            </span>
                        </div>
                        <button className={styled.AddToCart_Btn} onClick={() => dispatch(addToCart(requiredProduct[0].id))}>
                            <img src={WhitePlus} alt="WhitePlus"/>
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className={styled.productFrom__WishList}>
                    <button>
                        <img src={redHeart} alt="redHeart"/>
                        Add to my wish list
                    </button>
                    <button>
                        <img src={Compare} alt="Compare"/>
                        Compare
                    </button>
                </div >
                <div className={styled.productFrom__DescriptionAndQA}>
                        <div className={styled.DescriptionAndQA_Item} onClick={() => setSwitchBtn(0)}>Description</div>
                        <div className={styled.DescriptionAndQA_Item} onClick={() => setSwitchBtn(1)}>Reviews
                            <span>999</span>
                        </div>
    
                        <div className={styled.DescriptionAndQA_Item} onClick={() => setSwitchBtn(2)}>Questions
                            <span>999</span>
                        </div>
                </div>
                <div className={styled.productFrom__Border}>
                    <div className={switchBtn === 0 ? `${styled.BorderActive} ${styled.Border}` : styled.Border}></div>
                    <div className={switchBtn === 1 ? `${styled.BorderActive} ${styled.Border}` : styled.Border}></div>
                    <div className={switchBtn === 2 ? `${styled.BorderActive} ${styled.Border}` : styled.Border}></div>
                </div>
                {switchBtn === 0 ? <ProductDescripton /> : null}
            </div>
        
        </div>
        <HeadLine Products={RelatedProducts} Title="Related products" BtnTxt="More products"/>
    </>
    )
}


export default ProductDetail