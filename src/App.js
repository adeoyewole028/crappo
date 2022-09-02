import "./App.css";
import Header from "./components/header/Header";
import Why from "./components/why/Why";
import Earn from "./components/BG/Earn";
import Cryptocurrency from "./components/cryptocurrencies/Cryptocurrency";
import Features from "./components/features/Features";

function App() {
  return (
    <div className="App background-color relative">
      <Header />
      <Why />
      <Earn />      
      <Cryptocurrency />
      <Features />
    </div>
  );
}

export default App;
