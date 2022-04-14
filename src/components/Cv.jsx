import React from "react";
import PropTypes from "prop-types";

import "../styles/cv.css";
import anonymousProfile from "../assets/anonymous.jpg";
import addressLogo from "../assets/addressLogo.svg";
import phoneLogo from "../assets/phoneLogo.svg";
import emailLogo from "../assets/emailLogo.svg";
import webLogo from "../assets/webLogo.svg";

class CvDemo extends React.Component {
	render() {
		return (
			<div id="cvDemo">
				<div id="leftSide">
					<Profile src={this.props.cvData.profile} />
					<Contact
						address={this.props.cvData.address}
						phone={this.props.cvData.phone}
						email={this.props.cvData.email}
						website={this.props.cvData.website}
					/>
					<Skill skill={this.props.cvData.skill} />
				</div>
				<div id="rightSide">
					<Introduction
						name={this.props.cvData.name}
						position={this.props.cvData.position}
					/>
					<Summary description={this.props.cvData.description} />
					<Education education={this.props.cvData.education} />
					<Experience experience={this.props.cvData.experience} />
				</div>
			</div>
		);
	}
}
CvDemo.propTypes = { cvData: PropTypes.object };

class Introduction extends React.Component {
	render() {
		return (
			<div id="introduction">
				<h1>{this.props.name || "Name"}</h1>
				<h2>{this.props.position || "Position"}</h2>
			</div>
		);
	}
}
Introduction.propTypes = {
	name: PropTypes.string,
	position: PropTypes.string,
};

class Profile extends React.Component {
	render() {
		return (
			<img
				id="profilePicture"
				src={this.props.src || anonymousProfile}
				alt="profilePicture"
			></img>
		);
	}
}
Profile.propTypes = {
	src: PropTypes.string,
};

class Summary extends React.Component {
	render() {
		return (
			<div id="summary">
				<h2>DESCRIPTION</h2>
				<p>
					{this.props.description ||
						"Cupcake shortbread cake danish chocolate chocolate cake chocolate bar. Powder carrot cake tiramisu marzipan donut cotton candy toffee chocolate. Chupa chups powder tiramisu macaroon danish caramels gummi bears."}
				</p>
			</div>
		);
	}
}
Summary.propTypes = {
	description: PropTypes.string,
};

class Contact extends React.Component {
	render() {
		return (
			<div id="contact">
				<h2>CONTACT</h2>
				<div id="address" className="contactInfo">
					<img className="contactIcon" alt="address" src={addressLogo}></img>
					<div>
						<h3>Address</h3>
						<p>{this.props.address || "A Street, B Town, C Country"}</p>
					</div>
				</div>
				<div id="phone" className="contactInfo">
					<img className="contactIcon" alt="phone" src={phoneLogo}></img>
					<div>
						<h3>Phone</h3>
						<p>{this.props.phone || "123456789"}</p>
					</div>
				</div>
				<div id="email" className="contactInfo">
					<img className="contactIcon" alt="email" src={emailLogo}></img>
					<div>
						<h3>Email</h3>
						<p>{this.props.email || "abc@gmail.com"}</p>
					</div>
				</div>
				<div id="web" className="contactInfo">
					<img className="contactIcon" alt="web" src={webLogo}></img>
					<div>
						<h3>Website</h3>
						<p>{this.props.website || "abc.com"}</p>
					</div>
				</div>
			</div>
		);
	}
}
Contact.propTypes = {
	address: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	website: PropTypes.string,
};

class Skill extends React.Component {
	render() {
		let skillList = ["HTML", "CSS", "Javascript", "React"];
		if (this.props.skill.length !== 0) {
			skillList = this.props.skill;
		}
		return (
			<div id="skill">
				<h2>Skills</h2>
				<ul>
					{skillList.map((element, index) => {
						return <li key={index}>{element}</li>;
					})}
				</ul>
			</div>
		);
	}
}
Skill.propTypes = { skill: PropTypes.arrayOf(PropTypes.string) };

class Education extends React.Component {
	render() {
		let schoolList = [
			{ name: "School A", major: "Math", year: "2015 - 2016" },
			{ name: "School B", major: "English", year: "2016 - 2017" },
		];
		if (this.props.education.length !== 0) {
			schoolList = this.props.education;
		}
		return (
			<div id="education">
				<h2>EDUCATION</h2>
				{schoolList.map((element, index) => {
					return <School key={index} school={element} />;
				})}
			</div>
		);
	}
}
Education.propTypes = {
	education: PropTypes.arrayOf(PropTypes.object),
};

class School extends React.Component {
	render() {
		return (
			<div className="school">
				<p className="year">{this.props.school.year}</p>
				<div>
					<p className="schoolName">{this.props.school.name}</p>
					<p className="major">{this.props.school.major}</p>
				</div>
			</div>
		);
	}
}
School.propTypes = {
	school: PropTypes.objectOf(PropTypes.string),
};

class Experience extends React.Component {
	render() {
		let companyList = [
			{ name: "Company A", position: "Font-End", year: "2017 - 2018" },
			{ name: "Company B", position: "Back-End", year: "2018 - Present" },
		];
		if (this.props.experience.length !== 0) {
			companyList = this.props.experience;
		}
		return (
			<div id="experience">
				<h2>EXPERIENCE</h2>
				{companyList.map((element, index) => {
					return <Company key={index} company={element} />;
				})}
			</div>
		);
	}
}
Experience.propTypes = {
	experience: PropTypes.arrayOf(PropTypes.object),
};

class Company extends React.Component {
	render() {
		return (
			<div className="school">
				<p className="year">{this.props.company.year}</p>
				<div>
					<p className="schoolName">{this.props.company.name}</p>
					<p className="major">{this.props.company.position}</p>
				</div>
			</div>
		);
	}
}
Company.propTypes = {
	company: PropTypes.objectOf(PropTypes.string),
};
export default CvDemo;
