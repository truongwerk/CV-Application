import React from "react";
import Input from "./components/Input";
import CvDemo from "./components/Cv";
import "./styles/app.css";
class App extends React.Component {
	constructor() {
		super();

		this.state = { name: "" };
	}

	handleInputCallback = (childData) => {
		this.setState({ name: childData });
	};

	checkName = (name) => {
		if (name === "truong") {
			return <h2>Xin</h2>;
		}
	};
	render() {
		const { name } = this.state;
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
				<Input parentCallback={this.handleInputCallback} />
				<p>{name}</p>
				{this.checkName(name)}
				<div id="cvWrapper">
					<CvDemo />
				</div>
			</div>
		);
	}
}

export default App;
