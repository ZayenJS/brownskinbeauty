import React, { Component } from "react";

import List from "./List/List";
import classes from "./Presentation.module.scss";

import image1 from "../../assets/images/makeup-1.jpg";
import image2 from "../../assets/images/makeup-2.jpg";
import image3 from "../../assets/images/makeup-3.jpg";

class Presentation extends Component {
	state = {
		presentationData: [
			{
				id: 1,
				text: `Pour lancer votre propre marque de cosmétique correspondant à vos besoins et valeurs`,
				image: image1,
				alt: "cosmétiques",
				duration: 1000,
				delay: 250,
			},
			{
				id: 2,
				text: `Optimiser la création et le développement de vos produits`,
				image: image2,
				alt: "maquillage",
				duration: 1000,
				delay: 0,
			},
			{
				id: 3,
				text: `Résoudre les problèmes de formulation, de réglementaire ou encore de fabrications produit`,
				image: image3,
				alt: "processus de fabrication cosmétique",
				duration: 1000,
				delay: 250,
			},
		],
	};
	render() {
		return (
			<section className={classes.Presentation} id="presentation">
				<h2>Qui sommes-nous?</h2>
				<h3>BrownSkin Beauty souhaite accompagner ses clients</h3>
				<p className={classes.SubTitle}>
					particuliers ou professionnels en apportant une expertise cosmétique
					pour les peaux noires, mates et métissées.
				</p>
				<List items={this.state.presentationData} />
				<p className={classes.Ceo}>
					<em>
						Olivia PAUL : Ingénieure chimiste formée à l’ESCOM, spécialisée dans
						le domaine de la cosmétique depuis plus de 10 ans et plus
						particulièrement dans la formulation des produits pour les peaux
						noires, mates et métissées.
					</em>
				</p>
			</section>
		);
	}
}

export default Presentation;
