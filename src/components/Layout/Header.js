import React from "react";
import { Link } from "react-router-dom";

// import mealsImage from "../../assets/photo1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1><Link to="/">ReactMaterials</Link></h1>
        <HeaderCartButton onShow={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        {/* <img src={mealsImage} alt="A table full of delicious food!" /> */}
      </div>
    </React.Fragment>
  );
};

export default Header;
