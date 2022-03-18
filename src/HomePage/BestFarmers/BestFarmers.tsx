import React from "react";
import { Products } from "../../API/api";
import Card from "../../Components/ViewType/Card";
import MenuList from "../../Components/Home/MenuList";
import styled from "../CategoryMenu/ProductsArea.module.scss";

const BestFarmers = () =>{
    let FarmerFilter = Products.slice().filter(e => e.brand === "from Farmer").sort((a, b) =>{
        return a.rating - b.rating
    })
    return (
        <div className={styled.ProductsArea}>
            <MenuList title="Best from Farmers" BtnTxt="products" Best={FarmerFilter} isProduct={true}/>
            <h2 className={styled.ProductsArea__Title}>Best from Farmers</h2>
            <div className={styled.Cards}>
                { FarmerFilter.slice(0,3).map(key =>(
                            <Card
                            key={key.id.toString()}
                            image={key.image}
                            ProductTitle={key.title}
                            Description={key.productDescription}
                            Price={key.price}
                            OldPrice={key.oldPrice}
                            ID={key.id}                        
                            />
                    ))
                }
            </div>
        </div>
    )
}

export default BestFarmers