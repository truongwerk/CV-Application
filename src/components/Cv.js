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
					<h1>leftSide</h1>
					<img src={anonymousProfile} alt="profilePicture"></img>
					<ConTact />
					<Skill />
				</div>
				<div id="rightSide">
					<h2>rightSide</h2>
				</div>
			</div>
		);
	}
}

class ConTact extends React.Component {
	render() {
		return (
			<div id="contact">
				<h2>ConTact</h2>
				<div id="address">
					<img className="contactIcon" alt="address" src={addressLogo}></img>
					<div className="contactInfo">
						<h3>Address</h3>
						<p>1234 Main Street, Anytown, Country</p>
					</div>
				</div>
				<div id="phone">
					<img className="contactIcon" alt="phone" src={phoneLogo}></img>
					<div className="contactInfo">
						<h3>Phone</h3>
						<p>1234567890</p>
					</div>
				</div>
				<div id="email">
					<img className="contactIcon" alt="email" src={emailLogo}></img>
					<div className="contactInfo">
						<h3>Email</h3>
						<p>sample123456@gmail.com</p>
					</div>
				</div>
				<div id="web">
					<img className="contactIcon" alt="web" src={webLogo}></img>
					<div className="contactInfo">
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

export default CvDemo;
