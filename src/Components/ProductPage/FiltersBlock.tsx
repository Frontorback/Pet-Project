import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IProducts } from "../../API/api";
import { addBrandsFilters, addCategoriesFilters, addMaxPriceFilters, addMinPriceFilters, addRatingFilters, clearFilters, selectAllFilters } from "../../Redux/FiltersSlice";
import Rating from "./FilterItems/Rating";
import styled from "./FiltersBlock.module.scss"

const FiltersBlock: FC<IFiltersBlock> = ({ ProductsArr }) =>{
    const dispatch = useDispatch();

    const [price, setPrice] = useState({
        minPrice: 0,
        maxPrice: 0
    })
    const [selectedFilters, setSelectedFilters] = useState<string[]>([])
    const [brandsFilter, setBrandsFilter] = useState<string[]>([])
    const [categoriesFilter, setCategoriesFilter] = useState<string>("")
    const [ratingFilter, setRatingFilter] = useState<number[]>([])
    
    let categ: string[] =[];
    let brand: string[] =[];

    ProductsArr.map(key =>(
        categ.push(key.categories) &&
        brand.push(key.brand)

    ));

    const CategorArr = categ.filter((el:string, id:number) => categ.indexOf(el) === id);
    const BrandArr = brand.filter((el:string, id:number) => brand.indexOf(el) === id); 
        
    const CategoriesChecked = ( key:string ) =>{
        if(categoriesFilter !== key){
            setSelectedFilters(selectedFilters.filter(item => item !== categoriesFilter));
            setCategoriesFilter(key)
            setSelectedFilters(el => [...el, key])
        }    
    }

    const BrandsChecked = (e:boolean, key:string) =>{
        if(e){
            setSelectedFilters(el => [...el, key])
            setBrandsFilter(el => [...el, key])
        }else{
            setSelectedFilters(selectedFilters.filter(item => item !== key));
            setBrandsFilter(brandsFilter.filter(item => item !== key));
        }
    }
    

    const RatingChecked = (e:boolean, key:number) =>{
        if(e){
            setRatingFilter(el => [...el, key])
            setSelectedFilters(el => [...el, `rating: ${key}`])
        }else{
            setRatingFilter(ratingFilter.filter(item => item !== key))
            setSelectedFilters(selectedFilters.filter(item => item !== `rating: ${key}`));
        }
    }
    const MinPriceChecked = (e:number) =>{
        if(price.minPrice !== e){
            setSelectedFilters(selectedFilters.filter(item => item !== `min Price: ${price.minPrice}`));
            setPrice({...price, minPrice:e})
            setSelectedFilters(el => [...el, `min Price: ${e}`])
        }
    }
    const MaxPriceChecked = (e:number) =>{
        if(price.maxPrice !== e){
            setSelectedFilters(selectedFilters.filter(item => item !== `max Price: ${price.maxPrice}`));
            setPrice({...price, maxPrice:e})
            setSelectedFilters(el => [...el, `max Price: ${e}`])
        }
    }
    const ApplyFilters = () =>{     
        dispatch(clearFilters())
        dispatch(addCategoriesFilters({categoriesFilter}))
        dispatch(addBrandsFilters({brandsFilter}))
        dispatch(addRatingFilters({ratingFilter}))
        dispatch(addMinPriceFilters(price.minPrice))
        dispatch(addMaxPriceFilters(price.maxPrice))
        dispatch(selectAllFilters({selectedFilters}))
    }
    const ResetFilters = () =>{
        dispatch(clearFilters())
        setSelectedFilters([])
        setCategoriesFilter("")
        setBrandsFilter([])
        setRatingFilter([])
        setPrice({minPrice:0, maxPrice: 0})
    }
    useEffect(()=>{
        ResetFilters()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const counts = categ.reduce((obj:any, cur:any) =>{
        if( !obj[cur] ) {
            obj[cur] = 0;
        }
        obj[cur]++;
        return obj;
    }, {});

    return (
        
        <div className={styled.Categories}>
            
            <h1>Categories</h1>
            {CategorArr.map((key) => (
                <div className={styled.CategoriesRow} key={CategorArr.indexOf(key)}>
                    <button
                     className={
                        selectedFilters.includes(key) ?
                        `${styled.CategoriesItemActive} ${styled.CategoriesItem} ` :
                        styled.CategoriesItem
                        }
                     onClick={() => CategoriesChecked(key)}
                     >{key}</button>
                    <div className={styled.CategoriesCount}>{counts[key]}</div>
                </div>
            ))    
            } 
            
            <h2>Brands</h2>
            {BrandArr.map((key, idx) => (
                <div className={styled.BrandsRow} key={idx}>
                        <input
                         className={styled.inputBox}
                         type="checkbox" id={`box${idx}`}
                         onChange={(e) => BrandsChecked(e.target.checked, key) }
                         checked={brandsFilter.includes(key)}                        
                        />
                        <label className={styled.labelBox} htmlFor={`box${idx}`} >{key}</label>
                </div>
            ))               
            }
            <h3>Rating</h3>
            {[5,4,3,2,1].map(s =>(
                <Rating key={s} Rating={s} isRatingChecked={RatingChecked} checked={ratingFilter.includes(s)}/>
            ))}

            <h4>Price</h4>
            <div className={styled.slideContainer}>
                <input
                type="range"
                min="0"
                max="100"
                value={price.maxPrice}
                onChange={(e) => setPrice({...price, maxPrice:+e.target.value})}
                className={styled.slider}
                id="myRange"
                />
            </div>
            <div className={styled.PriceSlide}>
                <div className={styled.PriceMinMax}>
                    <div className={styled.PriceTitle}>Min</div>
                    <input
                     type="number"
                     value={price.minPrice}
                     onChange={(e) => MinPriceChecked(+e.target.value)} 
                     placeholder="0" 
                     className={styled.PriceCount} />
                </div>
                <div className={styled.BetweenPrice}>-</div>
                <div className={styled.PriceMinMax}>
                    <div className={styled.PriceTitle}>Max</div>
                    <input 
                     type="number" 
                     value={price.maxPrice} 
                     onChange={(e) => MaxPriceChecked(+e.target.value)} 
                     placeholder="0" 
                     className={styled.PriceCount} />
                </div>
            </div>

            <div className={styled.BtnContainer}>
                <button className={styled.ApplyBtn} onClick={() => ApplyFilters()}>Apply</button>
                <button className={styled.ResetBtn} onClick={() => ResetFilters()}>Reset</button>
            </div>
        </div>
    )
}

interface IFiltersBlock {
    ProductsArr: IProducts[],
}
export default FiltersBlock