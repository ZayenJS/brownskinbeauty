import React, { Component, Fragment } from "react";
import Layout from "./HOC/Layout/Layout";
import { Route } from "react-router-dom";

import Headline from "./components/Navigation/Header/HeadLine/Headline";
import Presentation from "./components/Presentation/Presentation";
import Services from "./components/Services/Services";
import Partners from "./components/Partners/Partners";
import Contact from "./components/Contact/Contact";

import Header from "./components/Navigation/Header/Header";

import Footer from "./components/Navigation/Footer/Footer";

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
