import React from "react";
import Fade from "react-reveal/Fade";

import classes from "./ListItem.module.scss";

const ListItem = (props) => {
	return (
		<Fade duration={props.item.duration} delay={props.item.delay}>
			<li className={classes.ListItem}>
				<img src={props.image} alt={props.alt} />
				<p>{props.text}</p>
			</li>
		</Fade>
	);
};

export default ListItem;
