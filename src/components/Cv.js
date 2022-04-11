import React from "react";
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
					<img
						id="profilePicture"
						src={anonymousProfile}
						alt="profilePicture"
					></img>
					<ConTact />
					<Skill />
				</div>
				<div id="rightSide">
					<Introduction />
					<Summary />
					<Education />
					<Experience />
				</div>
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
						<p>1234 Main Street, Anytown, Country</p>
					</div>
				</div>
				<div id="phone" className="contactInfo">
					<img className="contactIcon" alt="phone" src={phoneLogo}></img>
					<div>
						<h3>Phone</h3>
						<p>1234567890</p>
					</div>
				</div>
				<div id="email" className="contactInfo">
					<img className="contactIcon" alt="email" src={emailLogo}></img>
					<div>
						<h3>Email</h3>
						<p>sample123456@gmail.com</p>
					</div>
				</div>
				<div id="web" className="contactInfo">
					<img className="contactIcon" alt="web" src={webLogo}></img>
					<div>
						<h3>Website</h3>
						<p>sampleURL.dev</p>
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
				<h2>Skill</h2>
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

class Introduction extends React.Component {
	render() {
		return (
			<div id="introduction">
				<h1>John Dee</h1>
				<h2>Font-End Web Developer</h2>
			</div>
		);
	}
}

class Summary extends React.Component {
	render() {
		return (
			<div id="summary">
				<h2>SUMMARY</h2>
				<p>
					Chocolate cake chocolate sugar plum biscuit carrot cake sesame snaps
					ice cream. Bear claw pudding chocolate bar soufflé wafer pie
					croissant. Bear claw chocolate cake danish gingerbread sweet roll
					dragée bonbon. Sweet roll pudding donut pudding shortbread.
				</p>
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
