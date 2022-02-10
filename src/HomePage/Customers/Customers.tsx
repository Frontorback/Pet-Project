import React, { useEffect, useState } from "react";
import { CustomersAPI } from "../../API/api";
import styled from "./Customers.module.scss";
import whiteArrow from "../../img/whiteArrow.svg";
import HeaderBlock from "../../Components/Home/HeaderBlock";

const Customers = () => {
  const [state, setState] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => state + 1);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [state]);

  if (state === CustomersAPI.length) {
    setState(1);
  } else if (state === 0) {
    setState(CustomersAPI.length - 1);
  }
  return (
    <div>
      <HeaderBlock title="Our customers says" BtnTxt="button" />
      <div className={styled.CustomersMainArea}>
        {CustomersAPI.map((key) => (
          <div className={key.id === state || key.id === state + 1 ? styled.CustomersItem : styled.CustomersHide}
              key={key.id}
          >
            <p>{key.text}</p>
            <div className={styled.CustomersName}>{key.name}</div>
            <img src={key.image} alt="ProfilePhoto" />
          </div>
        ))}
        <div className={styled.LeftBtn} onClick={() => setState(state - 1)}>
          <img src={whiteArrow} alt="whiteArrow" />
        </div>
        <div className={styled.RightBtn} onClick={() => setState(state + 1)}>
          <img src={whiteArrow} alt="whiteArrow" />
        </div>
      </div>
    </div>
  );
};

export default Customers;
