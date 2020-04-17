import React from "react";

import ListItem from "./ListItem/ListItem";

import classes from "./List.module.scss";

const List = (props) => (
	<ul className={classes.List}>
		{props.content.map((content, i) => (
			<ListItem key={i} text={content} />
		))}
	</ul>
);

export default List;
