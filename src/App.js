import React, { Component } from "react";
import Layout from "./HOC/Layout/Layout";

import Presentation from "./components/Presentation/Presentation";
import Services from "./components/Services/Services";
import Partners from "./components/Partners/Partners";
import Contact from "./components/Contact/Contact";

class App extends Component {
	render() {
		return (
			<Layout>
				<Presentation />
				<Services />
				<Partners />
				<Contact />
			</Layout>
		);
	}
}

export default App;
