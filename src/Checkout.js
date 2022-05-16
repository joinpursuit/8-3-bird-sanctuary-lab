import React from "react";

export default class Checkout extends React.Component {
	constructor() {
		super();
		this.state = {
			valid: false,
			firstName: "",
			lastName: "",
			email: "",
			zip: 0,
		};
	}
	handleSubmission = (event) => {
		event.preventDefault();
		const { value } = event.target;
		console.log(value);
		if (this.state.valid) {
			alert("You have adopted birds. Thank you!");
			//after this, clearcart()
			this.setState({ firstName: "" });
			this.setState({ lastName: "" });
			this.setState({ email: "" });
			this.setState({ zip: 0 });
		} else {
			alert("no");
		}
	};
	handleFirstName = (event) => {
		this.setState({ firstName: event.target.value });
	};
	handleLastName = (event) => {
		this.setState({ lastName: event.target.value });
	};
	handleEmail = (event) => {
		this.setState({ email: event.target.value });
	};
	handleZip = (event) => {
		this.setState({ zip: event.target.value });
	};
	finalFormCheck = () => {
		//check for valid input (no empty fields)
		if (this.state.firstName && this.state.lastName && this.state.email && this.state.zip) {
			this.setState({ valid: true });
		} else this.setState({ valid: false });
	};
	render() {
		return (
			<div>
				<h2>Checkout</h2>
				<p className="hidden">No items to check out.</p>
				<form
					className="Checkout"
					onChange={this.finalFormCheck}
					onSubmit={this.handleSubmission}
				>
					<label>
						{" "}
						First Name
						<br />
						<input
							onChange={this.handleFirstName}
							type="text"
							placeholder="Alex"
							required="yes"
						/>
					</label>
					<label>
						Last Name
						<br />
						<input onChange={this.handleLastName} type="text" placeholder="Williams" />
					</label>
					<label>
						Email
						<br />
						<input
							onChange={this.handleEmail}
							type="text"
							placeholder="name@email.com"
						/>
					</label>
					<label>
						Zip Code
						<br />
						<input onChange={this.handleZip} type="number" placeholder="91210" />
					</label>
					<input type="submit" text="Submit" />
				</form>
			</div>
		);
	}
}
