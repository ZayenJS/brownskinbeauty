import React from "react";

import LogoImg from "../../../assets/images/logo-brand.png";
import classes from "./Logo.module.scss";

const Logo = () => <img src={LogoImg} alt="logo" className={classes.Logo} />;

export default Logo;
