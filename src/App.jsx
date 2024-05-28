import ClassComponent from "./components/1.1_myFirstReactComponent/03_ClassComponent";
import FunctionComponent from "./components/1.1_myFirstReactComponent/01_FunctionComponent";
import FunctionalComponent from "./components/1.1_myFirstReactComponent/02_FunctionalComponent";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <FunctionComponent />
      <FunctionalComponent greetName={"World"} />
      <ClassComponent greetName={"JSD7"} />
    </div>
  );
}

export default App;
