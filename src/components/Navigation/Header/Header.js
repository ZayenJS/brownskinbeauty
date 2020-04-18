import React, { Component } from "react";
import Slide from "react-reveal/Slide";

import classes from "./Header.module.scss";
import Toolbar from "../Toolbar/Toolbar";
import Headline from "./HeadLine/Headline";

class Header extends Component {
	state = {
		links: {
			"#home": "Accueil",
			"#presentation": "Présentation",
			"#services": "Services",
			"#partners": "Partenaires",
			"#contact": "Contact",
		},
	};

	render() {
		return (
			<Slide top delay={500} duration={1250}>
				<header className={classes.Header}>
					<Toolbar nav={this.state.links} />
					<Headline />
				</header>
			</Slide>
		);
	}
}

export default Header;
