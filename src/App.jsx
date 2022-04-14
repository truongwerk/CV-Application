import React from "react";
import Input from "./components/Input";
import CvDemo from "./components/Cv";
import "./styles/app.css";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			name: '',
			profile: "",
			position: "",
			description: "",
			address: "",
			phone: "",
			email: "",
			website: "",
			skill: [],
		};
	}

	handleInputCallback = (childData, selector) => {
		this.setState({ [selector]: childData });
		// setTimeout(() => {
		// 	console.log(this.state);
		// }, 0);
	};

	render() {
		const cvData = this.state;
		return (
			<div id="App">
				<header>
					<h1>CV Application</h1>
					<p>
						© 2022 Create by{" "}
						<a
							href="https://github.com/truongwerk"
							target="_blank"
							rel="noreferrer noopener"
						>
							Tong Quang Truong
						</a>
					</p>
				</header>
				<div id="content">
					<Input parentCallback={this.handleInputCallback} />
					<div id="cvWrapper">
						<CvDemo cvData={cvData} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
