import React from "react";
import classes from "./NavigationItem.module.scss";

import { Link } from "react-router-dom";

const NavigationItem = (props) => {
	return (
		<li className={classes.NavigationItem}>
			<Link to={"/" + props.linkto.toLowerCase()}>{props.label}</Link>
			{/* <a href={props.linkto}>{props.label}</a> */}
		</li>
	);
};

export default NavigationItem;
