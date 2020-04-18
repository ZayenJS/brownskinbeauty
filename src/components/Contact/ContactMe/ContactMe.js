import React from "react";

import Map from "../../UI/Map/Map";
import Logo from "../../UI/Logo/Logo";
import Button from "../../UI/Button/Button";

import classes from "./ContactMe.module.scss";

const ContactMe = () => {
	return (
		<article className={classes.ContactMe}>
			<Map
				src={
					"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.5548340781424!2d2.3807895158186634!3d48.65663082284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5df1d2683df6b%3A0x891bc3e3f712f5fd!2s15%20Rue%20de%20la%20Mare%20aux%20Moines%2C%2091350%20Grigny!5e0!3m2!1sfr!2sfr!4v1578704825575!5m2!1sfr!2sfr"
				}
				title={"Mon lieu de travail"}
			/>
			<div className={classes.BsbContact}>
				<p>Mme Olivia PAUL</p>
				<address>
					15 rue de la mare aux moines, <br />
					91350 GRIGNY
				</address>
				<Button
					linkto={"tel:+33646359024"}
					text={"Appeler"}
					id={classes.Call}
				/>
				<p id={classes.Tel}>+33 (0)6 46 35 90 24</p>
				<Logo />
			</div>
		</article>
	);
};

export default ContactMe;
