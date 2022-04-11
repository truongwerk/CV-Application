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
			return <h2>Xin Chao Moi Nguoi</h2>;
		}
	};
	render() {
		const { name } = this.state;
		return (
			<div className="App">
				<h1>Hello truong</h1>
				<Input parentCallback={this.handleInputCallback} />
				<p>{name}</p>
				{this.checkName(name)}
				<CvDemo />
			</div>
		);
	}
}

export default App;
