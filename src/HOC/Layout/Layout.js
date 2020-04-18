import React, { Fragment, Component } from "react";
import Header from "../../components/Navigation/Header/Header";
import Footer from "../../components/Navigation/Footer/Footer";

class Layout extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<main>{this.props.children}</main>
				<Footer />
			</Fragment>
		);
	}
}

export default Layout;
