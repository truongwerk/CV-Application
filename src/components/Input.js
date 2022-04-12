import React from "react";
import "../styles/input.css";
import TextField from "@mui/material/TextField";

class Input extends React.Component {
	inputChange = (e) => {
		this.props.parentCallback(e.target.value);
	};
	render() {
		return (
			<div id="inputForm">
				<div id="basicInput">
					<h2>Basic information</h2>
					<TextField label="Name" onChange={this.inputChange} id="inputName" />
					<TextField label="Position"  id="inputName" />
				</div>
			</div>
		);
	}
}

export default Input;
