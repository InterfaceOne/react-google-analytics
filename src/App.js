import "./App.css";
import ReactGa from "react-ga";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    ReactGa.initialize("UA-203769934-1");
    ReactGa.pageview(window.location.pathname);
  }, []);
  const handleClick = () => {
    ReactGa.event({
      category: "Button",
      action: "Dog Button clicked",
    });
  };
  const handleClick2 = () => {
    ReactGa.event({
      category: "Button",
      action: "Cat Button clicked",
    });
  };
  return (
    <div className="App">
      <button onClick={() => handleClick()}>Dog</button>
      <button onClick={() => handleClick2()}>Cat</button>
    </div>
  );
}

export default App;
