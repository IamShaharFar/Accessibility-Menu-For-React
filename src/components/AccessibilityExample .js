import React, { useState } from "react";
import { Light, Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Animations.css";

const AccessibilityExample = () => {
  const howToUse = `
  import { AccessibilityProvider } from "./accessibility/AccessibilityProvider";
  import AccessibilityButton from "./accessibility/AccessibilityButton";

    <AccessibilityProvider>
      <div className="App">
        <AccessibilityButton />
        {your components}
      </div>
    </AccessibilityProvider>
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
    disableAnimations: 'disable animations (in my language)'
};
var options = { labels: labels };
<AccessibilityButton options={options}/>
  `;

  const disableFeatures = `
  options.modules = {
    increaseText: true/false,
    decreaseText: true/false,
    invertColors: true/false,
    grayHues: true/false,
    underlineLinks: true/false,
    bigCursor: true/false,
    readingGuide: true/false,
    disableAnimations: true/false
};
  `;

  const positioning = `
  options.style = {
    position: {
      bottom: { size: 50 },
      left: { size: 0 },
      toRight: false
    },
  };
  `;

  const styling = `
  options.style = {
    mode: "", //dark
    icon: "", //wheelchair
    shape: "", //rectangle
  };
  `;

  return (
    <div className="example-page">
      <div className="header">
        <div className="header-top">
          <i className="fas fa-universal-access fa-2xl"></i>
          <h1 className="header-text">Adaptive Accessibility Menu</h1>
        </div>
        <h3 className="header-bottom">
          add accessibility toolbar to every website with one line of code
        </h3>
      </div>
      <div className="white-div features">
        <h5>FEATURES</h5>
        <div className="feature">
          <div className="feature-i">
            <i className="fa-solid fa-magnifying-glass-plus fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>manipulate text size</h6>
            <span>
              Increase Or Decrease Text Size. Works With Em / Rem / Px Or Any
              Type Of Font-Size Units
            </span>
          </div>
        </div>
        <hr />
        <div className="feature">
          <div className="feature-i">
            <i className="fa-solid fa-palette fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>invert colors</h6>
            <span>
              Toggles The Document's Body Background Color From Black To White
              And The Default Text Color From White To Black And Vice Versa
            </span>
          </div>
        </div>
        <hr />
        <div className="feature">
          <div className="feature-i">
            <i class="fa-solid fa-circle-half-stroke fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>gray hues</h6>
            <span>Turns The Site To Gray Hues Only - Images Included</span>
          </div>
        </div>
        <hr />
        <div className="feature">
          <div className="feature-i">
            <i className="fa-solid fa-underline fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>underline links</h6>
            <span>Mark Links With Underline</span>
          </div>
        </div>
        <hr />
        <div className="feature">
          <div className="feature-i">
            <i className="fa-solid fa-grip-lines fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>reading guide</h6>
            <span>
              Add A Horizontal Line That Binds To The Mouse Or Touch Position
            </span>
          </div>
        </div>
        <hr />
        <div className="feature">
          <div className="feature-i">
            <i className="fa-solid fa-arrow-pointer fa-2xl options-i"></i>
          </div>
          <div className="feature-text">
            <h6>big cursor</h6>
            <span>Replacing The Default Mouse Cursor With A Bigger One</span>
          </div>
        </div>
      </div>
      <div className="white-div how-to-use">
        <h6>EASY TO USE!</h6>
        <SyntaxHighlighter language="javascript" style={vs}>
          {howToUse}
        </SyntaxHighlighter>
      </div>
      <div className="white-div limitatios">
        <h6>LIMITATIONS AND KNOWN ISSUES</h6>
        <span>Works with html5 browsers only (no IE8 and below)</span>
      </div>
      <div className="white-div multi-language">
        <h6>MULTI LANGUAGE EXAMPLE</h6>
        <SyntaxHighlighter language="javascript" style={vs}>
          {multiLanguage}
        </SyntaxHighlighter>
      </div>
      <div className="white-div disable-features">
        <h6>DISABLE FEATURES EXAMPLE</h6>
        <SyntaxHighlighter language="javascript" style={vs}>
          {disableFeatures}
        </SyntaxHighlighter>
      </div>
      <div className="white-div open-source">
        <h6>FREE TO USE</h6>
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
              Fell Free To Star <i className="fa-solid fa-star"></i> This
              Repository If It Helped You.
            </span>
            <br />
            <span>
              Shout-out for
              <a
                href="https://github.com/ranbuch/accessibility"
                className="text-success"
              >
                {" "}
                This project{" "}
              </a>
              which my project is based on.
            </span>
          </div>
        </div>
      </div>
      <div className="white-div positioning">
        <h6>POSITIONING</h6>
        <span>
          You can position the accessibility icon in any place on the screen.
          The default position is middle left:
        </span>
        <SyntaxHighlighter language="javascript" style={vs}>
          {positioning}
        </SyntaxHighlighter>
      </div>
      <div className="white-div styling">
        <h6>STYLING</h6>
        <span>you can customize the menu and the button as you want</span>
        <SyntaxHighlighter language="javascript" style={vs}>
          {styling}
        </SyntaxHighlighter>
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
