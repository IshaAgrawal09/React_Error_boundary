import "./App.css";
import {ErrorBoundary} from 'react-error-boundary'
import Test from "./Test";

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("getError", error, errorInfo);
  };
  const Fallback = () => {
    return <p>Something went wrong!</p>;
  };
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Test />
      </ErrorBoundary>
    </div>
  );
}

export default App;
