import react from "react";

class Checkout extends React.Component{
    constructor() {
        super();
        this.state= {
            valid: false,
            firstName: "",
            lastName: "",
            email: "",
            zip: 0,
        };
    }

    handleSubmission = (event) => {
        event.preventDefault();
        const { value } = event.target
        console.log(value);
        if (this.state.valid) {
            alert("You have adopted birds. Thank You!");
        } else {
            alert("no")
        }
    }
    handleFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    };
    handleLastName = (event) => {
        this.setState({ lastName: event.target.value });
    }
    handleEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    handleZip = (event) => {
        this.setState({ zip: event.target.value })
    }

    finalFormCheck = () => {
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.zip) {
            this.setState({ valid: true })
        } else {
            this.setState({ valid: false })
        }
    }

    render () {
        return (
            <div className="Checkout">
                <form onSubmit={this.handleSubmission}>
                
                </form>
            </div>

        )
    }
}