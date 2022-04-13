import React from "react";
import "../styles/cv.css";
import anonymousProfile from "../assets/anonymous.jpg";
import addressLogo from "../assets/addressLogo.svg";
import phoneLogo from "../assets/phoneLogo.svg";
import emailLogo from "../assets/emailLogo.svg";
import webLogo from "../assets/webLogo.svg";
import { Abc } from "@mui/icons-material";

class CvDemo extends React.Component {
	render() {
		return (
			<div id="cvDemo">
				<div id="leftSide">
					<Profile src={this.props.cvData.profile} />
					<ConTact
						address={this.props.cvData.address}
						phone={this.props.cvData.phone}
						email={this.props.cvData.email}
						website={this.props.cvData.website}
					/>
					<Skill />
				</div>
				<div id="rightSide">
					<Introduction
						name={this.props.cvData.name}
						position={this.props.cvData.position}
					/>
					<Summary description={this.props.cvData.description} />
					<Education />
					<Experience />
				</div>
			</div>
		);
	}
}

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

class ConTact extends React.Component {
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

class Skill extends React.Component {
	render() {
		return (
			<div id="skill">
				<h2>Skills</h2>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>React</li>
				</ul>
			</div>
		);
	}
}

class Education extends React.Component {
	render() {
		return (
			<div id="education">
				<h2>EDUCATION</h2>
				<School />
				<School />
			</div>
		);
	}
}

class Experience extends React.Component {
	render() {
		return (
			<div id="experience">
				<h2>EXPERIENCE</h2>
				<Company />
				<Company />
			</div>
		);
	}
}

class School extends React.Component {
	render() {
		return (
			<div className="school">
				<p className="year">2015 - 2016</p>
				<div>
					<p className="schoolName">School A</p>
					<p className="major">Math</p>
				</div>
			</div>
		);
	}
}

class Company extends React.Component {
	render() {
		return (
			<div className="school">
				<p className="year">2017 - 2019</p>
				<div>
					<p className="schoolName">Company A</p>
					<p className="major">Font - End</p>
				</div>
			</div>
		);
	}
}

export default CvDemo;
