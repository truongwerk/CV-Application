import React from "react";
import "../styles/input.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const InputFile = styled("input")({
	display: "none",
});

class Input extends React.Component {
	inputChange = (e) => {
		const selector = e.target.id.replace("input", "").toLowerCase();
		this.props.parentCallback(e.target.value, selector);
	};
	inputProfile = (e) => {
		const selector = e.target.id.replace("input", "").toLowerCase();
		this.props.parentCallback(URL.createObjectURL(e.target.files[0]), selector);
	};

	render() {
		return (
			<div id="inputForm">
				<div id="basicInput">
					<h2>Information</h2>
					<TextField
						label="Name"
						fullWidth
						onChange={this.inputChange}
						id="inputName"
						className="longInput"
					/>
					<label htmlFor="inputProfile">
						<InputFile accept="image/*" id="inputProfile" type="file" onChange={this.inputProfile} />
						<Button variant="outlined" component="span" endIcon={<PhotoCamera />}>
							Upload Profile Picture
						</Button>
					</label>
					<TextField
						label="Position"
						fullWidth
						onChange={this.inputChange}
						id="inputPosition"
						className="longInput"
					/>
					<TextField
						label="Description"
						fullWidth
						onChange={this.inputChange}
						multiline
						rows={4}
						id="inputDescription"
						className="longInput"
					/>
					<h2>Contact</h2>
					<TextField
						label="Address"
						fullWidth
						onChange={this.inputChange}
						id="inputAddress"
						className="longInput"
					/>
					<TextField
						label="Phone"
						fullWidth
						onChange={this.inputChange}
						id="inputPhone"
						className="longInput"
					/>
					<TextField
						label="Email"
						fullWidth
						onChange={this.inputChange}
						id="inputEmail"
						className="longInput"
					/>
					<TextField
						label="Website"
						fullWidth
						onChange={this.inputChange}
						id="inputWebsite"
						className="longInput"
					/>
				</div>
			</div>
		);
	}
}

export default Input;
