import React, { useEffect } from "react";
import Frames from "./Components/Frames/Frames";
import About from "./Components/About/About";
import { ReactLenis, useLenis } from "lenis/react";
import PortfolioLink from "./Components/portfolioLink/PortfolioLink";
import Footer from "./Components/footer/Footer";
import "./App.css"
const App = () => {
  const lenis = new useLenis()
  return (
    <>
      <ReactLenis root options={{
        lerp: 0.1,
        smoothWheel: true
      }}>
        <Frames />
        <PortfolioLink/>
        <About />
        <Footer/>
      </ReactLenis>
    </>
  );
};

export default App;
