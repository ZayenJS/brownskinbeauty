import React, { Component } from "react";

import classes from "./Services.module.scss";

import Card from "./Card/Card";
import Zoom from "@react-reveal/Zoom";

class Services extends Component {
	state = {
		cards: [
			{
				title: "Création et développement",
				content: [
					"Élaboration du cahier des charges",
					"	Choix et validation des galéniques et actifs",
					"Formulation à façon",
					"Suivi des stabilités et compatibilités",
					"Reformulation et amélioration de produits existants",
				],
				delay: 200,
			},
			{
				title: "Réglementaire",
				content: [
					"Rédaction du DIP",
					"Notification électronique",
					"Lancement et gestion des différents tests (challenge test, innocuité, …)",
					"Rédaction de la liste INCI",
				],
				delay: 0,
			},
			{
				title: "Transposition industrielle",
				content: [
					"Participation à la rédaction du mode opératoire",
					"Supervision des 1ers lots industriels",
					"Fabrication et conditionnement de petits lots pilotes",
				],
				delay: 200,
			},
		],
	};
	render() {
		return (
			<section className={classes.Services} id="services">
				<h2>Nos services</h2>
				<p>
					Vous avez besoin d’aide dans le domaine de la cosmétique pour peaux
					noires, mates et métissés, BrownSkin Beauty suit chaque étape de la
					création de vos produits, du développement à la petite fabrication.
				</p>
				<div className={classes.CardContainer}>
					{this.state.cards.map((card, i) => (
						<Zoom delay={card.delay}>
							<Card key={i} card={card} />
						</Zoom>
					))}
				</div>
			</section>
		);
	}
}

export default Services;
