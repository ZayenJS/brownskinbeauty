import React from "react";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		{Object.keys(props.links).map((linkKey, i) =>
			[...Array(props.links[linkKey])].map((linkValue, i2) => (
				<NavigationItem key={i + i2} linkto={linkKey} label={linkValue} />
			)),
		)}
	</ul>
);

export default NavigationItems;
