import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={classes.Footer}>
			<span>
				© 2020 <span className={classes.Brand}>BrownSkin Beauty</span>
			</span>
		</footer>
	);
};

export default Footer;
