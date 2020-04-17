import React from "react";

import classes from "./ListItem.module.scss";

const ListItem = (props) => {
	return (
		<li className={classes.ListItem}>
			<img src={props.image} alt={props.alt} />
			<p>{props.text}</p>
		</li>
	);
};

export default ListItem;
