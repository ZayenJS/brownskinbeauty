import React from "react";

import ListItem from "./ListItem/ListItem";
import classes from "./List.module.scss";

const List = (props) => (
	<ul className={classes.List}>
		{props.items.map((item) => (
			<ListItem
				key={item.id}
				image={item.image}
				alt={item.alt}
				text={item.text}
			/>
		))}
	</ul>
);

export default List;
