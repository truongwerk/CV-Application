import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import deleteIcon from "../assets/deleteIcon.svg";

import "../styles/input.css";

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

	inputSkill = (value) => {
		this.props.parentCallback(value, "skill");
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
						<InputFile
							accept="image/*"
							id="inputProfile"
							type="file"
							onChange={this.inputProfile}
						/>
						<Button
							variant="outlined"
							component="span"
							endIcon={<PhotoCamera />}
							id="profileLabel"
						>
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
						rows={3}
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
				<SkillInput inputCallback={this.inputSkill} />
				<EducationInput />
			</div>
		);
	}
}
Input.propTypes = {
	parentCallback: PropTypes.func,
};

class SkillInput extends React.Component {
	constructor() {
		super();
		this.state = {
			inputSkill: [],
		};
	}

	addSkill = () => {
		this.setState({ inputSkill: this.state.inputSkill.concat("") });
		this.updateCv();
	};

	deleteSkill = (i) => {
		this.setState((state) => {
			const inputSkill = state.inputSkill.filter((item, index) => index !== i);
			return { inputSkill };
		});

		this.updateCv();
	};

	changeSkill = (index, value) => {
		this.setState((state) => {
			const inputSkill = state.inputSkill.map((item, j) => {
				if (j === index) {
					return value;
				} else {
					return item;
				}
			});
			return {
				inputSkill,
			};
		});

		this.updateCv();
	};

	updateCv = () => {
		setTimeout(() => {
			this.props.inputCallback(this.state.inputSkill);
		}, 1);
	};

	render() {
		return (
			<div id="skillInput">
				<h2>Skill</h2>
				{this.state.inputSkill.map((element, index) => {
					return (
						<div key={index} className="skills">
							<TextField
								id="outlined-basic"
								label={`Skill ${index + 1}`}
								variant="outlined"
								value={element}
								onChange={(e) => this.changeSkill(index, e.target.value)}
							/>
							<img
								src={deleteIcon}
								alt="deleteIcon"
								className="deleteIcon"
								data-skill={index}
								onClick={() => this.deleteSkill(index)}
							/>
						</div>
					);
				})}
				<IconButton
					aria-label="addCircleIcon"
					size="large"
					id="addSkill"
					onClick={this.addSkill}
				>
					<AddCircleIcon fontSize="inherit" />
				</IconButton>
			</div>
		);
	}
}
SkillInput.propTypes = {
	inputCallback: PropTypes.func,
};

class EducationInput extends React.Component {
	constructor() {
		super();
		this.state = {
			inputSchool: [],
		};
	}
	render() {
		return (
			<div id="educationInput">
				<h2>Education</h2>
				<IconButton aria-label="addCircleIcon" size="large" id="addSchool">
					<AddCircleIcon fontSize="inherit" />
				</IconButton>
			</div>
		);
	}
}

export default Input;
