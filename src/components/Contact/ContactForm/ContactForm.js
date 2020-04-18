import React from "react";

import FormField from "./FormField/FormField";
import Button from "../../UI/Button/Button";
import classes from "./ContactFrom.module.scss";

const ContactForm = () => {
	return (
		<form
			action="https://formspree.io/xnqpjngo"
			method="POST"
			className={classes.ContactForm}
			id="contact-form">
			<FormField type="text" name="Nom" text="Nom : " />
			<FormField type="text" name="Prénom" text="Prénom : " />
			<FormField type="email" name="Répondre à" text="Email : " />
			<FormField textarea name="Message" text="Message : " />
			<Button text="Envoyer" />

			<p id="form-status"></p>
		</form>
	);
};

export default ContactForm;
