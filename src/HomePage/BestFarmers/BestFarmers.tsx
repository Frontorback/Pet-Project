import React from "react";
import { Products } from "../../API/api";
import Card from "../../Components/ViewType/Card";
import MenuList from "../../Components/Home/MenuList";
import styled from "../CategoryMenu/ProductsArea.module.scss";
import CardList from "../../Components/ViewType/CardList";

const BestFarmers = () =>{
    let FarmerFilter = Products.slice().filter(e => e.brand === "from Farmer").sort((a, b) =>{
        return a.rating - b.rating
    })
    return (
        <div className={styled.ProductsArea}>
            <MenuList title="Best from Farmers" BtnTxt="products" Best={FarmerFilter} isProduct={true}/>
            <div className={styled.Cards}>
                {
                    FarmerFilter.slice(0,3).map(key =>(
                        document.body.clientWidth > 1360 || document.body.clientWidth < 1140 ?
                            <Card
                            key={key.id.toString()}
                            image={key.image}
                            ProductTitle={key.title}
                            Description={key.productDescription}
                            Price={key.price}
                            OldPrice={key.oldPrice}
                            ID={key.id}                        
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
                    ))
                }
            </div>
        </div>
    )
}

export default BestFarmers