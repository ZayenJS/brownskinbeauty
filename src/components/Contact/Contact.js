import React, { Component } from "react";

import ContactForm from "./ContactForm/ContactForm";
import ContactMe from "./ContactMe/ContactMe";

import classes from "./Contact.module.scss";
class Contact extends Component {
	state = {
		lastName: "",
		firstName: "",
		email: "",
		message: "",
	};

	onChangeHandler = (e) => {
		console.log(e);
	};
	render() {
		return (
			<section id="contact" className={classes.Contact}>
				<div className={classes.FormContainer}>
					<h2>Nous contacter</h2>
					<ContactForm change={this.onChangeHandler} />
				</div>
				<ContactMe />
			</section>
		);
	}
}

export default Contact;
