import React from "react";

import classes from "./BrandCard.module.scss";

const BrandCard = (props) => (
	<img className={classes.BrandCard} src={props.image} alt={props.alt} />
);

export default BrandCard;
