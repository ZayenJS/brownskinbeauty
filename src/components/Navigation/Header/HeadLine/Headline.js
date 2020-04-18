import React from "react";
import Button from "../../../UI/Button/Button";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import classes from "./Headline.module.scss";

const Headline = () => {
	return (
		<article className={classes.Headline}>
			<div className={classes.Cta}>
				<div className={classes.Paragraph}>
					<Fade duration={1500} delay={1750}>
						<Zoom cascade duration={1000} delay={1750}>
							Formulez
						</Zoom>
						<Zoom cascade duration={1000} delay={1750}>
							vos
						</Zoom>
						<Zoom cascade duration={1000} delay={1750}>
							envies...
						</Zoom>
					</Fade>
				</div>
				<Fade left duration={1500} delay={1750}>
					<div className={classes.BtnContainer}>
						<Button inverse linkto="#presentation" text="En savoir plus" />
					</div>
				</Fade>
			</div>
		</article>
	);
};

export default Headline;
