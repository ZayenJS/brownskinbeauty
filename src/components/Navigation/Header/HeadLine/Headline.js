import React from "react";
import Button from "../../../UI/Button/Button";

import classes from "./Headline.module.scss";

const Headline = () => {
	return (
		<article className={classes.Headline}>
			<div className={classes.Cta}>
				<p>Formulez vos envies...</p>
				<div className={classes.BtnContainer}>
					<Button inverse linkto="#presentation" text="En savoir plus" />
				</div>
			</div>
		</article>
	);
};

export default Headline;
