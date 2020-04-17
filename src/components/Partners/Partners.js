import React, { Component } from "react";

import BrandCard from "./BrandCard/BrandCard";

import glennys from "../../assests/images/glennys-cosmetics.jpg";
import elikya from "../../assests/images/elikya-beauty.jpg";

import classes from "./Partners.module.scss";

class Partners extends Component {
	state = {
		cards: [
			{
				image: glennys,
				alt: "Glenny's Cosmetics",
			},
			{
				image: elikya,
				alt: "Elikya Beauty",
			},
		],
	};
	render() {
		return (
			<section id="partners" className={classes.Partners}>
				<h2>Ils nous font confiance</h2>
				<div className={classes.Brands}>
					{this.state.cards.map((card, i) => (
						<BrandCard key={i} image={card.image} alt={card.alt} />
					))}
				</div>
			</section>
		);
	}
}

export default Partners;
