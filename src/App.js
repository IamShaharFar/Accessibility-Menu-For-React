import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import AccessibilityExample from "./components/AccessibilityExample ";
import PlayGround from "./components/PlayGround";
import Footer from "./components/Footer";
import {Accessibility} from "accessibility-react/dist/index"

function App() {
  const initOptions = {
    labels: {
      resetTitle: "Reset",
      closeTitle: "Close",
      menuTitle: "Accessibility Menu",
      increaseText: "Increase Text Size",
      decreaseText: "Decrease Text Size",
      increaseSpacing: "Increase Text Spacing",
      decreaseSpacing: "Decrease Text Spacing",
      increaseLineHeight: "Increase Line Height",
      decreaseLineHeight: "Decrease Line Height",
      invertColors: "Invert Colors",
      grayHues: "Gray Hues",
      underlineLinks: "Underline Links",
      bigCursor: "Big Cursor",
      readingGuide: "Reading Guide",
      disableAnimations: "Disable Animations",
      readableFont: "Readable Font",
    },
    modules: {
      increaseText: true,
      decreaseText: true,
      increaseSpacing: true,
      decreaseSpacing: true,
      increaseLineHeight: true,
      decreaseLineHeight: true,
      invertColors: true,
      grayHues: true,
      underlineLinks: true,
      bigCursor: true,
      readingGuide: true,
      disableAnimations: true,
      readableFont: true,
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

  useEffect(() => {
  }, [options]);

  const handleOptionsChange = (newOptions) => {
    setOptions(newOptions);
  };

  const handleFont = () => {
    const newFontFamily = "Arial";

    const textElements = Array.from(document.querySelectorAll("*")).filter(
      (element) => {
        return element.tagName.toLowerCase() !== "i";
      }
    );
    textElements.forEach((element) => {
      element.style.fontFamily = newFontFamily;
    });
  };

  const resetFont = () => {
    const textElements = document.querySelectorAll("*");
    textElements.forEach((element) => {
      element.style.fontFamily = "";
    });
  };

  return (
    <div className="App">
      <AccessibilityExample />
      <PlayGround options={options} onUpdateOptions={handleOptionsChange} />
      <Footer />
      <Accessibility Options={options} key={JSON.stringify(options)}/>
    </div>
  );
}

export default App;
