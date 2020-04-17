import React from "react";

import "./FormField.scss";

const FormField = (props) => {
	const field = props.textarea ? (
		<textarea name={props.name}></textarea>
	) : (
		<input type={props.type} name={props.name} />
	);
	return (
		<label>
			{props.text}
			{field}
		</label>
	);
};

export default FormField;
