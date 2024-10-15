import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import HowItWorks from "./Components/HowItWorks";
import NavBar from "./Components/NavBar";
import WhyClubarant from "./Components/WhyClubarant";

function App() {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode((prevMode) => !prevMode);
  };

  return (
    <div className="App">
      <NavBar toggleNightMode={toggleNightMode} nightMode={nightMode} />
      <WhyClubarant nightMode={nightMode} />
      <Features nightMode={nightMode} />
      <HowItWorks nightMode={nightMode} />
      <Contact nightMode={nightMode} />
      <Footer />
    </div>
  );
}

export default App;
