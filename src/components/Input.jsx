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
	inputMode = (value, mode) => {
		this.props.parentCallback(value, mode);
	};
	render() {
		return (
			<>
				<div id="basicInput">
					<h2>Information</h2>
					<TextField
						label="Name"
						fullWidth
						size="small"
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
							fullWidth
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
						size="small"
						onChange={this.inputChange}
						id="inputPosition"
						className="longInput"
					/>
					<TextField
						label="Description"
						fullWidth
						size="small"
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
						size="small"
						onChange={this.inputChange}
						id="inputAddress"
						className="longInput"
					/>
					<TextField
						label="Phone"
						fullWidth
						size="small"
						onChange={this.inputChange}
						id="inputPhone"
						className="longInput"
					/>
					<TextField
						label="Email"
						fullWidth
						size="small"
						onChange={this.inputChange}
						id="inputEmail"
						className="longInput"
					/>
					<TextField
						label="Website"
						fullWidth
						size="small"
						onChange={this.inputChange}
						id="inputWebsite"
						className="longInput"
					/>
				</div>
				<SkillInput inputCallback={this.inputMode} />
				<EducationInput inputCallback={this.inputMode} />
				<ExperienceInput inputCallback={this.inputMode} />
			</>
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
			this.props.inputCallback(this.state.inputSkill, "skill");
		});
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
								size="small"
								value={element}
								onChange={(e) => this.changeSkill(index, e.target.value)}
							/>
							<img
								src={deleteIcon}
								alt="deleteIcon"
								className="deleteIcon"
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
	addSchool = () => {
		this.setState({
			inputSchool: this.state.inputSchool.concat({
				name: "",
				major: "",
				year: "",
			}),
		});
		this.updateCv();
	};
	deleteSchool = (i) => {
		this.setState((state) => {
			const inputSchool = state.inputSchool.filter(
				(element, index) => index !== i
			);
			return { inputSchool };
		});
		this.updateCv();
	};
	changeSchool = (i, value, mode) => {
		this.setState((state) => {
			const inputSchool = state.inputSchool.map((element, index) => {
				if (index === i) {
					return { ...element, [mode]: value };
				} else {
					return element;
				}
			});
			return {
				inputSchool,
			};
		});
		this.updateCv();
	};
	updateCv = () => {
		setTimeout(() => {
			this.props.inputCallback(this.state.inputSchool, "education");
		});
	};

	render() {
		return (
			<div id="educationInput">
				<h2>Education</h2>
				{this.state.inputSchool.map((element, index) => {
					return (
						<div key={index} className="schoolInput">
							<TextField
								label={`School ${index + 1}`}
								fullWidth
								value={element.name}
								className="longInput"
								size="small"
								onChange={(e) => {
									this.changeSchool(index, e.target.value, "name");
								}}
							/>
							<TextField
								label={`Major ${index + 1}`}
								fullWidth
								value={element.major}
								className="longInput"
								size="small"
								onChange={(e) => {
									this.changeSchool(index, e.target.value, "major");
								}}
							/>
							<div>
								<TextField
									label={`Year ${index + 1}`}
									fullWidth
									value={element.year}
									className="shortInput"
									size="small"
									onChange={(e) => {
										this.changeSchool(index, e.target.value, "year");
									}}
								/>
								<img
									src={deleteIcon}
									alt="deleteIcon"
									className="deleteIcon"
									onClick={() => {
										this.deleteSchool(index);
									}}
								/>
							</div>
						</div>
					);
				})}
				<IconButton
					aria-label="addCircleIcon"
					size="large"
					id="addSchool"
					onClick={this.addSchool}
				>
					<AddCircleIcon fontSize="inherit" />
				</IconButton>
			</div>
		);
	}
}
EducationInput.propTypes = {
	inputCallback: PropTypes.func,
};

class ExperienceInput extends React.Component {
	constructor() {
		super();
		this.state = {
			inputCompany: [],
		};
	}
	addCompany = () => {
		this.setState({
			inputCompany: this.state.inputCompany.concat({
				name: "",
				position: "",
				year: "",
			}),
		});
		this.updateCv();
	};
	deleteCompany = (i) => {
		this.setState((state) => {
			const inputCompany = state.inputCompany.filter(
				(element, index) => index !== i
			);
			return { inputCompany };
		});
		this.updateCv();
	};
	changeCompany = (i, value, mode) => {
		this.setState((state) => {
			const inputCompany = state.inputCompany.map((element, index) => {
				if (index === i) {
					return { ...element, [mode]: value };
				} else {
					return element;
				}
			});
			return {
				inputCompany,
			};
		});
		this.updateCv();
	};
	updateCv = () => {
		setTimeout(() => {
			this.props.inputCallback(this.state.inputCompany, "experience");
		});
	};
	render() {
		return (
			<div id="experienceInput">
				<h2>Experience</h2>
				{this.state.inputCompany.map((element, index) => {
					return (
						<div key={index} className="schoolInput">
							<TextField
								label={`Company ${index + 1}`}
								fullWidth
								value={element.name}
								className="longInput"
								size="small"
								onChange={(e) => {
									this.changeCompany(index, e.target.value, "name");
								}}
							/>
							<TextField
								label={`Position ${index + 1}`}
								fullWidth
								value={element.position}
								className="longInput"
								size="small"
								onChange={(e) => {
									this.changeCompany(index, e.target.value, "position");
								}}
							/>
							<div>
								<TextField
									label={`Year ${index + 1}`}
									fullWidth
									value={element.year}
									className="shortInput"
									size="small"
									onChange={(e) => {
										this.changeCompany(index, e.target.value, "year");
									}}
								/>
								<img
									src={deleteIcon}
									alt="deleteIcon"
									className="deleteIcon"
									onClick={() => {
										this.deleteCompany(index);
									}}
								/>
							</div>
						</div>
					);
				})}
				<IconButton
					aria-label="addCircleIcon"
					size="large"
					id="addCompany"
					onClick={this.addCompany}
				>
					<AddCircleIcon fontSize="inherit" />
				</IconButton>
			</div>
		);
	}
}
ExperienceInput.propTypes = {
	inputCallback: PropTypes.func,
};

export default Input;
