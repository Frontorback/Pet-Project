import React, { useEffect, useState } from "react";
import secondStyle from "./secondStyle.module.scss";
import freshnesecom from "../../img/Freshnesecom.svg";
import arrow from "../../img/Arrow.svg";
import search from "../../img/search.svg";
import pofile from "../../img/pofile.svg";
import basket from "../../img/basket.svg";
import burgerImg from "../../img/burger.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeDetail } from "../../Redux/ProductSlice";
import { RootState } from "../../Redux/store";
import { useNavigate } from "react-router-dom";
import { clearFilters, searchFilter } from "../../Redux/FiltersSlice";
import { MenuAPI, Products } from "../../API/api";
import Burger from "./BurgerMenu/Burger";
const SecondHeader = () => {
  const [state, setState] = useState({
    message: "",
    isHelp: false
  });
  const [categ, setCateg] = useState({
    isChoosing: false,
    setCategorie: "All categories",
  });

  const SearchCateg =
    categ.setCategorie !== "All categories"
      ? Products.slice().filter((k) => k.productType === categ.setCategorie)
      : Products;

  const dispatch = useDispatch();

  const inCart = useSelector((state: RootState) => state.products.order);
  let navigate = useNavigate();
  const SerchFnc = () => {
    dispatch(searchFilter(state.message));
    navigate("/Search");
  };
  const switchPage = () => {
    dispatch(closeDetail());
    dispatch(clearFilters());
  };
  useEffect(() =>{
    document.addEventListener('click', () => setCateg({ ...categ, isChoosing: false }));
    document.addEventListener('click', () => setState({ ...state, isHelp: false }));

})
const changeCateg = (e:any, title?:string) =>{
  e.stopPropagation();
  if(title){
    setCateg({...categ,isChoosing:false, setCategorie: title })
  }else{
    setCateg({ ...categ, isChoosing: !categ.isChoosing })
  }

}

const helpForSearch = (e:any,bool:boolean, mes:string) =>{
  e.stopPropagation();
  setState({...state, isHelp:bool, message:mes})

}
// const helpForSearchList = (e:any,bool:boolean, mes:string) =>{
//   helpForSearch(e, bool, mes)
//   SerchFnc()
// }

const [burger, setBurger] = useState<boolean>(false)

  return (
    <>
    <div className={secondStyle.secondHeader}>
      <Link className={secondStyle.Logo} to={"/"}>
        <img src={freshnesecom} alt="SecondHeader" />
      </Link>

        <img className={secondStyle.burger} src={burgerImg} alt="burger" onClick={() => setBurger(!burger)} />

      <div className={secondStyle.searchSection}>
        <div
          className={secondStyle.categories}
          onClick={(e) => changeCateg(e)}
        >
          {categ.setCategorie}
        </div>
        <div
          className={
            categ.isChoosing
              ? secondStyle.Showcategories
              : secondStyle.Hidecategories
          }
        >
          {MenuAPI.map(
            (key) =>
              categ.isChoosing && (
                <div
                  key={key.id}
                  onClick={(e) =>
                    changeCateg(e, key.title )
                  }
                >
                  {key.title}
                </div>
              )
          )}
          {categ.isChoosing && (
            <div
              onClick={() =>
                setCateg({ isChoosing: false, setCategorie: "All categories" })
              }
            >
              All categories
            </div>
          )}
        </div>

        <img
          className={
            categ.isChoosing
              ? `${secondStyle.arrowActive} ${secondStyle.arrow}`
              : secondStyle.arrow
          }
          onClick={() => setCateg({ ...categ, isChoosing: !categ.isChoosing })}
          src={arrow}
          alt="arrow"
        />
        <div className={secondStyle.border}></div>
        <form onSubmit={() => SerchFnc()}>
          <input
            placeholder="Search Products, categories ..."
            value={state.message}
            onChange={(e) => helpForSearch(e, true, e.target.value)}

          />
          <div className={secondStyle.SearchList}>
            {SearchCateg.map((key) =>
              key.title
                .toLocaleLowerCase()
                .includes(state.message.toLocaleLowerCase()) &&
              state.message.length > 0 &&
              state.isHelp &&
              state.message !== key.title ? (
                <div key={key.id} onClick={(e) => helpForSearch(e, false, key.title)}>
                  {key.title}
                </div>
              ) : null
            )}
          </div>
        </form>

        <img src={search} alt="search" onClick={() => SerchFnc()} />
      </div>

      <div className={secondStyle.profileBasket}>
        <img src={pofile} alt="pofile" />
        <Link to="/Cart" onClick={() => switchPage()}>
          <img className={secondStyle.basketImg} src={basket} alt="basket" />
          <span className={secondStyle.Baskect_count}>{inCart.length}</span>
        </Link>
      </div>
    </div>
     <Burger burger={burger} setBurger={setBurger}/>
     </>
  );
};
export default SecondHeader;
