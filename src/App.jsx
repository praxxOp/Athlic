import React, { useEffect } from "react";
import Frames from "./Components/Frames/Frames";
import About from "./Components/About/About";
import { ReactLenis, useLenis } from "lenis/react";
const App = () => {
  const lenis = new useLenis()
  return (
    <>
      <ReactLenis root options={{
        lerp: 0.1,
        smoothWheel: true
      }}>
        <Frames />
        <About />
      </ReactLenis>
    </>
  );
};

export default App;
