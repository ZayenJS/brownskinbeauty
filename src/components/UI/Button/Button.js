import React, { Fragment } from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
	const cssClasses = props.inverse ? classes.Inverse : classes.Button;
	let button = props.linkto ? (
		<a href={props.linkto} className={cssClasses} id={props.id}>
			{props.text}
		</a>
	) : (
		<button className={cssClasses} id={props.id}>
			{props.text}
		</button>
	);

	return <Fragment>{button}</Fragment>;
};

export default Button;
