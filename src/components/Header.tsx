import React from "react";
import "./../styles/header.css";
import { useCoinContext } from "../hooks/useCoinContext";
import { currencySymbols } from "./ListingCard";
type Props = {};

function Header({}: Props) {
  const menu = ["home", "list", "about", "exchange"];
  const { coins, currency, setCurrency } = useCoinContext();
  return (
    <div className="header__container">
      <div className="header__left_container">
        <div className="header__logo_container">
          <img className="header__logo_img" src="/logosvg.png" alt="" />
        </div>
      </div>
      <div className="header__menu_container">
        {menu.map((item, index) => {
          return (
            <p className="header__menu_item" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div className="header__right_container">
        <div className="header__dropdown_container">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="header__dropdown_"
            name="currency"
            id=""
          >
            {Object.keys(currencySymbols).map((item, index) => {
              return <option value={item}>{item.toLocaleUpperCase()}</option>;
            })}
          </select>
        </div>
        <div className="header__btn_container">
          <button className="header__signup_btn">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
