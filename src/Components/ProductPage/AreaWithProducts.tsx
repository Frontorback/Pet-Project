import React, { FC, useState } from "react";
import GridListView from "../ViewType/GridListView";
import styled from "./AreaWithProducts.module.scss"
import CloseFilter from "../../img/CloseFilter.svg"
import FiltersBlock from "./FiltersBlock";
import { IProducts } from "../../API/api";
import { useDispatch, useSelector } from "react-redux";
import Card from "../ViewType/Card";
import { removeFilter } from "../../Redux/FiltersSlice";
import CardList from "../ViewType/CardList";
import { RootState } from "../../Redux/store";
import DownWhiteArrow from "../../img/DownWhiteArrow.svg"
import ProductDetail from "../ProductDetail/ProductDetail";

interface IAreaWithProducts {
    FilterProducts: IProducts[],
    link:string
}

const AreaWithProducts:FC<IAreaWithProducts> = ({FilterProducts, link}) =>{

    const [listOrRow, setListOrRow] = useState(false)
    const [pages, setPages] = useState<number>(listOrRow ? 2 : 2 )
    const [showMore, setShowMore] = useState<boolean>(false)

    const dispatch = useDispatch();

    const PagesCount = FilterProducts.length / 2

    let PagesArr: number[] = [];
    for (let i=1; i <= PagesCount; i++){
        PagesArr.push(i)
    }

    const nameItems:any = useSelector( (state:RootState) => state.filters.filterr)
    const selectedFilters = useSelector( (state:RootState) => state.filters.allFilters)
    const sliceCheck = useSelector( (state:RootState) => state.products.isActive)

    let FilterByChoose = FilterProducts
     if(nameItems.length > 0){
        if(!!nameItems[0].categories){
            FilterByChoose = FilterByChoose.filter(k => k.categories === nameItems[0].categories)
            
        }
        if(!!nameItems[1].brand[0]){
            FilterByChoose = FilterByChoose.filter((k) => nameItems[1].brand.some((s:string) => k.brand.includes(s)))
        }
        if(!!nameItems[2].rating[0]){
            FilterByChoose = FilterByChoose.filter((k) => nameItems[2].rating.some((s:number) => k.rating === s))
        }
        if(!!nameItems[3].minPrice){
            FilterByChoose = FilterByChoose.filter(k => k.price >= nameItems[3].minPrice)
        }
        if(!!nameItems[4].maxPrice){
            FilterByChoose = FilterByChoose.filter(k => k.price <= nameItems[4].maxPrice)
        }
    }

    const ProductView = (bol:boolean) =>{
        setListOrRow(bol)
    }
    const ShowMoreProducts = (bol:boolean) =>{
        setShowMore(true)
        setPages(pages + 2)
    }
    const changePage = (num:number) =>{
        setShowMore(false)
        setPages(num)
    }

    return(
        <>
        {sliceCheck ?
             <ProductDetail /> :
        <div >
                <div className={styled.Direction}><a href="/">HomePage / </a>{link}</div>
                
                <GridListView title={link} ProductsCount={ FilterProducts.length } ProductView={ProductView} listOrRow={listOrRow}/>
                <div className={styled.FiltersOnTop}>
                    <div className={styled.AppliedFilters}>Applied filtres:
                    {nameItems.length > 0 && selectedFilters.map((key, idx) =>(
                        <div key={idx} className={styled.SelectedFilter} onClick={() => dispatch(removeFilter({key}))}>
                        {key}
                        <img src={CloseFilter} alt="CloseFilter"/>
                        </div>
                    ))}
                    </div>
                    
                </div>
                <div className={styled.ProductPage}>
                    <FiltersBlock ProductsArr={FilterProducts} />
                    
                    <div className={styled.ProductItems}>
                        {
                        FilterByChoose.slice(showMore ? 0 : pages - 2 , pages).map(key =>(
                            listOrRow ?
                            <Card 
                            key={key.id.toString()}
                            image={key.image}
                            ProductTitle={key.title}
                            Description={key.productDescription}
                            Price={key.price}
                            OldPrice={key.oldPrice}
                            ID={key.id}
                            link={key.productType}
                            />
                            :
                            <CardList
                            key={key.id.toString()}
                            image={key.image}
                            ProductTitle={key.title}
                            Description={key.productDescription}
                            Price={key.price}
                            OldPrice={key.oldPrice}
                            Brand={key.brand}
                            Delivery={key.delivery}
                            Rating={key.rating}
                            ID={key.id}
                            link={key.productType}
                            />
                        ))}
                    </div>
                    
                </div>
                <div className={styled.Pages}>
                    Page:
                    {PagesArr.map( p =>(
                    <span 
                     key={p} 
                     className={
                         pages === (p*2) ? 
                         styled.currentPage : 
                         styled.numPage
                        } 
                     onClick={() => changePage(p*2)}
                    >{p}</span>
                    ))}
                    
                    <button 
                     className={
                         pages > FilterProducts.length ?
                         styled.HideMoreBtn  :
                         styled.ShowMoreBtn
                        } 
                     onClick={() => ShowMoreProducts(true)}
                     >
                    Show more products
                        <img src={DownWhiteArrow} alt="DownWhiteArrow"/>
                    </button>
                </div>
            
        </div>
        }
        </>
    )
}

export default AreaWithProducts