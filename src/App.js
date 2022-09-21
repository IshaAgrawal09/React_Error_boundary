import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Test from "./Test";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Test />
      </ErrorBoundary>
    </div>
  );
}

export default App;
