import React from "react";
import { Products } from "../../API/api";
import Card from "../../Components/ViewType/Card";
import MenuList from "../../Components/Home/MenuList";
import styled from "../CategoryMenu/ProductsArea.module.scss";

const BestSelling = () => {
  let SortProducts = Products.slice()
    .sort((a, b) => {
      return b.sales - a.sales;
    })
    

  return (
    <div className={styled.ProductsArea}>
      <MenuList title="Best selling products" BtnTxt="products" Best={SortProducts} isProduct={true}/>
      <div className={styled.Cards}>
        {SortProducts.slice(0, 3).map((key) => (
          <Card
            key={key.id.toString()}
            image={key.image}
            ProductTitle={key.title}
            Description={key.productDescription}
            Price={key.price}
            OldPrice={key.oldPrice}
            ID={key.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
