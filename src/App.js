import "./App.css";
import Header from "./components/header/Header";
import Why from "./components/why/Why";
import Earn from "./components/BG/Earn";
import Cryptocurrency from "./components/cryptocurrencies/Cryptocurrency";
import Features from "./components/features/Features";
import Mining from "./components/mining/Mining";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App background-color relative">
      <Header />
      <Why />
      <Earn />
      <Cryptocurrency />
      <Features />
      <Mining />
      <Footer />
    </div>
  );
}

export default App;
