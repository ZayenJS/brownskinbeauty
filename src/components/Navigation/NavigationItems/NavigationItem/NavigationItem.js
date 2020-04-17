import React from "react";
import classes from "./NavigationItem.module.scss";

const NavigationItem = (props) => {
	return (
		<li className={classes.NavigationItem}>
			<a href={props.linkto}>{props.label}</a>
		</li>
	);
};

export default NavigationItem;
