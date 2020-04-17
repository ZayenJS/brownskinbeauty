import React, { Component } from "react";

import ContactForm from "./ContactForm/ContactForm";

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
				<div class="contact">
					<iframe
						title="Mon lieu de travail"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.5548340781424!2d2.3807895158186634!3d48.65663082284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5df1d2683df6b%3A0x891bc3e3f712f5fd!2s15%20Rue%20de%20la%20Mare%20aux%20Moines%2C%2091350%20Grigny!5e0!3m2!1sfr!2sfr!4v1578704825575!5m2!1sfr!2sfr"
						allowfullscreen=""
						class="map"></iframe>
					<div class="brownskin-contact">
						<p>Mme Olivia PAUL</p>
						<address>
							15 rue de la mare aux moines, <br />
							91350 GRIGNY
						</address>
						<a href="tel:+33646359024" class="btn" id="call">
							Appeler
						</a>
						<p id="tel">+33 (0)6 46 35 90 24</p>
						<img src="../../assests/images/logo-brand.png" alt="logo" />
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
