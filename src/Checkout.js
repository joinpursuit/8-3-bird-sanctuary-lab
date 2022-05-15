import React from "react";

export default class Checkout extends React.Component {
	constructor() {
		super();
		this.state = {
			valid: true,
		};
	}
	handleSubmission = (event) => {
		event.preventDefault();
		const { value } = event.target;
		console.log(value);
		//check for valid input (no empty fields)
		if (this.state.valid) {
			alert("You have adopted birds. Thank You!");
			//after this, clearcart()
		} else {
			alert("");
		}
	};
	render() {
		return (
			<div>
				<h2>Checkout</h2>
				<p className="hidden">No items to check out.</p>
				<form onSubmit={this.handleSubmission}>
					<label>
						{" "}
						First Name
						<br />
						<input type="text" placeholder="Alex" />
					</label>
					<label>
						Last Name
						<br />
						<input type="text" placeholder="Williams" />
					</label>
					<label>
						Email
						<br />
						<input type="text" placeholder="name@email.com" />
					</label>
					<label>
						Zip Code
						<br />
						<input type="number" placeholder="91210" />
					</label>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
