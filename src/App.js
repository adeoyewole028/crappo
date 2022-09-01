import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Why from "./components/why/Why";

function App() {
  return (
    <div className="App background-color px-10">
      <Header />
      <Why />
    </div>
  );
}

export default App;
