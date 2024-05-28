// Exercise: Create a React class component

import { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent extends Component {
  render() {
    const { greetName = "Earth" } = this.props;
    return (
      <div className="pb-20 text-center">
        <h1>Hello, {greetName}!</h1>
        <p>
          This React component is made by a class, we call it a class component
          🤓
        </p>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  greetName: PropTypes.string,
};

// ClassComponent.defaultProps = {
//   greetName: "Earth",
// };

export default ClassComponent;
