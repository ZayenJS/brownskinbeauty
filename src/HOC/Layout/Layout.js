import React, { Fragment, Component } from "react";
import Header from "../../components/Navigation/Header/Header";
import Footer from "../../components/Navigation/Footer/Footer";

class Layout extends Component {
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
			<Fragment>
				<Header nav={this.state.links} />
				<main>{this.props.children}</main>
				<Footer />
			</Fragment>
		);
	}
}

export default Layout;
