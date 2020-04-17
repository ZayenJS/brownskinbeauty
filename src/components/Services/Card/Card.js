import React from "react";
import List from "./List/List";

import classes from "./Card.module.scss";

const Card = (props) => {
	return (
		<article className={classes.Card}>
			<h2>{props.card.title}</h2>
			<List content={props.card.content} />
		</article>
	);
};

export default Card;
