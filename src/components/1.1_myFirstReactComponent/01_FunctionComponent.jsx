// Exercise:
// 1. Create a React function component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

import PropTypes from "prop-types";

function FunctionComponent({ greetName = "Earth" }) {
  return (
    <div className="pb-20 text-center">
      <h1>Hello, {greetName}!</h1>
      <p>
        This React component is made by a function declaration, we call it a
        function component 🤓
      </p>
    </div>
  );
}

FunctionComponent.propTypes = {
  greetName: PropTypes.string,
};

// FunctionComponent.defaultProps = {
//   greetName: "Earth",
// };

export default FunctionComponent;
