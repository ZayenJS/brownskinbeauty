import React from "react";
import classes from "./Header.module.scss";
import Toolbar from "../Toolbar/Toolbar";
import Headline from "./HeadLine/Headline";

const Header = (props) => {
	return (
		<header className={classes.Header}>
			<Toolbar nav={props.nav} />
			<Headline />
		</header>
	);
};

export default Header;
