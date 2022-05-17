import React from "react";

class Form extends React.Component {
    constructor() {
      super();
      this.state = {
        userInput: "",
        result: "",
        func: "",
        input: [],
      };
    }
    selec = (event) => {
      this.setState({
        func: event.target.value,
      });
    };
    case = (event) => {
      event.preventDefault();
      switch (this.state.func) {
        case "sum":
          this.setState({
            result: this.state.input.reduce((a, b) => a + b),
          });
  
          for (const num in numbers) {
            if (Number(numbers[num]) > max) {
              max = Number(numbers[num]);
              mode = [num];
            } else if (Number(numbers[num]) === max) {
              mode.push(num);
            }
          }
          this.setState({
            result: mode.join(),
          });
          break;
          default:
          this.setState({
            result: "Invalid input.",
          });
      }
    };
    refreshPG = (event) => {
        let value = event.target.value;
        this.setState({
        userInput: value,
        input: value.split(",").map((item) => Number(item)),
      });
    };
  
    render() {
      return ( <>
        <form>
          <input id="values" name="values" type="text" onChange={this.refreshPG} />
          <select
            id="operation"
            name="operation"
            onChange={this.selec}
          >

          </select>
          <button type="submit" onClick={this.case} />
        </form>
        <div>
          <p>{this.state.input.join()}</p>
          <p>{this.state.result}</p>
        </div>
      </>
    );
  }
  }
  export default Form;