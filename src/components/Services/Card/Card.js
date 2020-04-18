import React from "react";
import Fade from "react-reveal/Fade";

import List from "./List/List";

import classes from "./Card.module.scss";

const Card = (props) => {
	return (
		<Fade delay={props.card.delay} duration={props.card.duration}>
			<article className={classes.Card}>
				<h2>{props.card.title}</h2>
				<List content={props.card.content} />
			</article>
		</Fade>
	);
};

export default Card;
