import React from "react";

class Input extends React.Component {
	inputChange = (e) => {
		this.props.parentCallback(e.target.value);
	};
	render() {
		return (
			<div>
				<input onChange={this.inputChange}></input>
			</div>
		);
	}
}

export default Input;
