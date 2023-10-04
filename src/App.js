import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { AccessibilityProvider } from "./accessibility/AccessibilityProvider";
import AccessibilityButton from "./accessibility/AccessibilityButton";
import AccessibilityExample from "./components/AccessibilityExample ";
import PlayGround from "./components/PlayGround";
import Footer from "./components/Footer";

function App() {
  const initOptions = {
    labels: {
      resetTitle: "Reset",
      closeTitle: "Close",
      menuTitle: "Accessibility Menu",
      increaseText: "Increase Text Size",
      decreaseText: "Decrease Text Size",
      invertColors: "Invert Colors",
      grayHues: "Gray Hues",
      underlineLinks: "Underline Links",
      bigCursor: "Big Cursor",
      readingGuide: "Reading Guide",
      disableAnimations: "Disable Animations",
    },
    modules: {
      increaseText: true,
      decreaseText: true,
      invertColors: true,
      grayHues: true,
      underlineLinks: true,
      bigCursor: true,
      readingGuide: true,
      disableAnimations: true,
    },
    style: {
      mode: "light", 
      icon: "access", 
      shape: "circle", 
      position: {
        bottom: { size: 50 },
        left: { size: 20 },
        toRight: true,
      },
    },
  };

  const [options, setOptions] = useState(initOptions);

  const handleOptionsChange = (newOptions) => {
    setOptions(newOptions);
  };

  return (
    <AccessibilityProvider>
      <div className="App">
        {options == null ? (
          <p>Loading...</p>
        ) : (
          <AccessibilityButton Options={options} />
          // <></>
        )}
        <AccessibilityExample />
        <PlayGround options={options} onUpdateOptions={handleOptionsChange}/>
        <Footer />
      </div>
    </AccessibilityProvider>
  );
}

export default App;
