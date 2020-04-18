import React from "react";

import Brand from "../../UI/Brand/Brand";
import Hamburger from "../../UI/Hamburger/Hamburger";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./Toolbar.module.scss";

const Toolbar = (props) => {
	return (
		<nav className={classes.Toolbar} id="home">
			<Brand />
			<Hamburger />
			<NavigationItems links={props.nav} />
		</nav>
	);
};

export default Toolbar;
