import React from "react";
import Input from "./components/Input";
import CvDemo from "./components/Cv";
import ReactToPrint from "react-to-print";

import Button from "@mui/material/Button";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import "./styles/app.css";

class App extends React.Component {
	constructor() {
		super();
		this.printCV = React.createRef()
		this.state = {
			name: "",
			profile: "",
			position: "",
			description: "",
			address: "",
			phone: "",
			email: "",
			website: "",
			skill: [],
			education: [],
			experience: [],
		};
	}
	handleInputCallback = (childData, selector) => {
		this.setState({ [selector]: childData });
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
					<div id="inputForm">
						<Input parentCallback={this.handleInputCallback} />
						<ReactToPrint
							trigger={() => {
								return (
									<Button id="printBtn" fullWidth variant="outlined" endIcon={<SaveAsOutlinedIcon />}>
										Save CV as PDF
									</Button>
								);
							}}
							content={() => this.printCV.current}
						/>
					</div>
					<div id="cvWrapper"ref={this.printCV}>
						<CvDemo cvData={cvData}  />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
