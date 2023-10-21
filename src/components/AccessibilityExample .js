import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Animations.css";
import { useEffect } from "react";

const AccessibilityExample = () => {

  const howToUse = `
  npm i accessibility-react

  import { AccessibilityProvider, AccessibilityButton } from "accessibility-react/dist/index"

  <div className="App">
    {your components}
    <AccessibilityProvider>
      <AccessibilityButton />
    </AccessibilityProvider>
  </div>
  `;

  const multiLanguage = `
  var labels = {
    resetTitle: 'reset (in my language)',
    closeTitle: 'close (in my language)',
    menuTitle: 'title (in my language)',
    increaseText: 'increase text size (in my language)',
    decreaseText: 'decrease text size (in my language)',
    invertColors: 'invert colors (in my language)',
    grayHues: 'gray hues (in my language)',
    underlineLinks: 'underline links (in my language)',
    bigCursor: 'big cursor (in my language)',
    readingGuide: 'reading guide (in my language)',
    disableAnimations: 'disable animations (in my language)',
    readableFont: 'readable font (in my language)'
};
var Options = { labels: labels };
<AccessibilityButton Options={options}/>
  `;

  const disableFeatures = `
  Options.modules = {
    increaseText: true/false,
    decreaseText: true/false,
    invertColors: true/false,
    grayHues: true/false,
    underlineLinks: true/false,
    bigCursor: true/false,
    readingGuide: true/false,
    disableAnimations: true/false,
    readableFont: true/false
};
  `;

  const positioning = `
  Options.style = {
    position: {
      bottom: { size: 50 },
      left: { size: 0 },
      toRight: false
    },
  };
  `;

  const styling = `
  Options.style = {
    mode: "", // dark / light
    icon: "", // wheelchair / access
    shape: "", // rectangle / circle
  };
  `;

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="example-page">
      <div className="header">
        <div className="header-top">
          <i className="fas fa-universal-access fa-2xl"></i>
          <h1 className="header-text">Adaptive Accessibility Menu</h1>
        </div>
        <h3 className="header-bottom">
          Enhance website accessibility instantly with one-line integration
        </h3>
      </div>
      <div className="white-div features">
        <h5>Key Features</h5>
        <div className="feature">
          <div className="feature-i">
            <i className="fa-solid fa-magnifying-glass-plus fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>Text Resize</h6>
            <span>
              Easily adjust text size with support for various font-size units.
            </span>
          </div>
        </div>
        <hr />
        <div className="feature">
          <div className="feature-i">
            <i className="fa-solid fa-palette fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>Color Inversion</h6>
            <span>
              Toggle background and text colors for improved visibility.
            </span>
          </div>
        </div>
        <hr />
        <div className="feature">
          <div className="feature-i">
            <i className="fa-solid fa-circle-half-stroke fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>Gray Hues</h6>
            <span>
              Simplify the site's color palette to grayscale for reduced
              distraction.
            </span>
          </div>
        </div>
        <hr />
        <div className="feature">
          <div className="feature-i">
            <i className="fa-solid fa-underline fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>Link Underlining</h6>
            <span>Enhance link visibility with underlined text.</span>
          </div>
        </div>
        <hr />
        <div className="feature">
          <div className="feature-i">
            <i className="fa-solid fa-grip-lines fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>Reading Guide</h6>
            <span>
              Implement a horizontal guide line for better reading focus.
            </span>
          </div>
        </div>
        <hr />
        <div className="feature">
          <div className="feature-i">
            <i className="fa-solid fa-arrow-pointer fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>Big Cursor</h6>
            <span>Opt for a larger mouse cursor for improved navigation.</span>
          </div>
        </div>
      </div>

      <div className="white-div how-to-use">
        <h6>EASY TO USE!</h6>
        <div className="code-container" style={{ position: "relative" }}>
          <button
            className="btn btn-light copy-button"
            onClick={() => copyToClipboard(howToUse)}
            title="Copy to Clipboard"
          >
            <i className="fas fa-copy"></i>
          </button>
          <SyntaxHighlighter language="javascript" style={vs}>
            {howToUse}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="white-div limitations">
        <h6>LIMITATIONS AND KNOWN ISSUES</h6>
        <span>
          Compatible with modern HTML5 browsers only (not supported in IE8 and
          earlier).
        </span>
      </div>
      <div className="white-div multi-language">
        <h6>MULTI LANGUAGE EXAMPLE</h6>
        <div className="code-container" style={{ position: "relative" }}>
          <button
            className="btn btn-light copy-button"
            onClick={() => copyToClipboard(multiLanguage)}
            title="Copy to Clipboard"
          >
            <i className="fas fa-copy"></i>
          </button>
          <SyntaxHighlighter language="javascript" style={vs}>
            {multiLanguage}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="white-div disable-features">
        <h6>DISABLE FEATURES EXAMPLE</h6>
        <div className="code-container" style={{ position: "relative" }}>
          <button
            className="btn btn-light copy-button"
            onClick={() => copyToClipboard(disableFeatures)}
            title="Copy to Clipboard"
          >
            <i className="fas fa-copy"></i>
          </button>
          <SyntaxHighlighter language="javascript" style={vs}>
            {disableFeatures}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="white-div open-source">
        <h5>Open Source</h5>
        <div className="free-2-use-div">
          <a href="https://github.com/IamShaharFar/Accessibility-Menu-For-React">
            <i className="fa-brands fa-github fa-2xl mr-3 text-success"></i>
          </a>
          <div>
            <a href="https://github.com/IamShaharFar/Accessibility-Menu-For-React">
              <h6 className="free-2-use-text text-success">
                GitHub Repository
              </h6>
            </a>
            <br />
            <span>
              Please consider giving this repository a star{" "}
              <i className="fa-solid fa-star"></i> if you've found it helpful.
            </span>
            <br />
            <span>
              Special thanks to the
              <a
                href="https://github.com/ranbuch/accessibility"
                className="text-success"
              >
                {" "}
                original project{" "}
              </a>
              on which this project is based.
            </span>
          </div>
        </div>
      </div>
      <div className="white-div positioning">
        <h6>POSITIONING</h6>
        <span>
          You have the flexibility to position the accessibility icon anywhere
          on the screen. By default, it appears in the bottom left of the
          screen:
        </span>
        <div className="code-container" style={{ position: "relative" }}>
          <button
            className="btn btn-light copy-button"
            onClick={() => copyToClipboard(positioning)}
            title="Copy to Clipboard"
          >
            <i className="fas fa-copy"></i>
          </button>
          <SyntaxHighlighter language="javascript" style={vs}>
            {positioning}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="white-div styling">
        <h6>STYLING</h6>
        <span>
          You have the freedom to customize both the menu and the button to suit
          your preferences.
        </span>
        <div className="code-container" style={{ position: "relative" }}>
          <button
            className="btn btn-light copy-button"
            onClick={() => copyToClipboard(styling)}
            title="Copy to Clipboard"
          >
            <i className="fas fa-copy"></i>
          </button>
          <SyntaxHighlighter language="javascript" style={vs}>
            {styling}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="white-div pause-animation">
        <h6>PAUSE ANIMATIONS</h6>
        <div className="animations">
          <div className="icon-container">
            <div className="moving-icon"></div>
          </div>
          <div className="bounce-circle-container">
            <div className="bounce-circle"></div>
          </div>
          <div className="rotate-square-container">
            <div className="rotate-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityExample;
