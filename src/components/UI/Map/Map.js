import React from "react";

import classes from "./Map.module.scss";

const Map = (props) => (
	<iframe
		title={props.title}
		src={props.src}
		allowFullScreen=""
		className={classes.Map}></iframe>
);

export default Map;
