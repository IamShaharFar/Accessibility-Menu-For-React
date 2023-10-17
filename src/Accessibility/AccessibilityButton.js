import React, { useState, useContext, useEffect } from "react";
import { AccessibilityContext } from "./AccessibilityProvider";

export function AccessibilityButton({ Options }) {
  const initAccessState = {
    invertColors: false,
    bigCursor: false,
    grayHues: false,
    underlineLinks: false,
    readingGuide: false,
    disableAnimations: false,
    readableFont: false,
  };
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
      readableFont: "Readable Font",
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

  const [accessState, setAccessState] = useState(initAccessState);
  const [options, setOptions] = useState(Options || initOptions);
  const accessibilityInstance = useContext(AccessibilityContext);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    Object.keys(initOptions).forEach((key) => {
      if (options[key] === null) {
        setOptions({ ...options, [key]: initOptions[key] });
      }
    });

    const accessStateFromStorage = JSON.parse(
      localStorage.getItem("_accessState")
    );
    if (accessStateFromStorage && accessStateFromStorage.readableFont == null) {
      accessStateFromStorage.readableFont = false;
      localStorage.setItem(
        "_accessState",
        JSON.stringify(accessStateFromStorage)
      );
    } else if (accessStateFromStorage && accessStateFromStorage.readableFont) {
      const newFontFamily = "Arial";
      const textElements = Array.from(document.querySelectorAll("*")).filter(
        (element) => {
          return element.tagName.toLowerCase() !== "i";
        }
      );
      textElements.forEach((element) => {
        element.style.fontFamily = newFontFamily;
      });
    }
    setAccessState(accessStateFromStorage);
  }, [options]);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const increaseText = () => {
    accessibilityInstance.menuInterface.increaseText();
  };

  const decreaseText = () => {
    accessibilityInstance.menuInterface.decreaseText();
  };

  const bigCursor = () => {
    accessibilityInstance.menuInterface.bigCursor();
    setAccessState((prevState) => ({
      ...prevState,
      bigCursor: !prevState.bigCursor,
    }));
  };

  const invertColors = () => {
    accessibilityInstance.menuInterface.invertColors();
    setAccessState((prevState) => ({
      ...prevState,
      invertColors: !prevState.invertColors,
    }));
  };

  const grayHues = () => {
    accessibilityInstance.menuInterface.grayHues();
    setAccessState((prevState) => ({
      ...prevState,
      grayHues: !prevState.grayHues,
    }));
  };

  const underlineLinks = () => {
    accessibilityInstance.menuInterface.underlineLinks();
    setAccessState((prevState) => ({
      ...prevState,
      underlineLinks: !prevState.underlineLinks,
    }));
  };

  const readingGuide = () => {
    accessibilityInstance.menuInterface.readingGuide();
    setAccessState((prevState) => ({
      ...prevState,
      readingGuide: !prevState.readingGuide,
    }));
  };

  const disableAnimations = () => {
    accessibilityInstance.menuInterface.disableAnimations();
  };

  const readableFont = () => {
    const newFontFamily = "Arial";
    const textElements = Array.from(document.querySelectorAll("*")).filter(
      (element) => {
        return element.tagName.toLowerCase() !== "i";
      }
    );

    if (!accessState.readableFont) {
      textElements.forEach((element) => {
        element.style.fontFamily = newFontFamily;
      });
    } else {
      textElements.forEach((element) => {
        element.style.fontFamily = "";
      });
    }

    const updatedAccessState = {
      ...accessState,
      readableFont: !accessState.readableFont,
    };

    setAccessState(updatedAccessState);
    localStorage.setItem("_accessState", JSON.stringify(updatedAccessState));
    console.log("readable" + accessState.readableFont);
  };
  function removeAccessState() {
    localStorage.setItem(
      "_accessState",
      JSON.stringify({
        textSize: 0,
        textSpace: 0,
        lineHeight: 0,
        invertColors: false,
        grayHues: false,
        underlineLinks: false,
        bigCursor: false,
        readingGuide: false,
      })
    );
    window.location.reload();
  }

  const sizeBottom =
    options?.style?.position?.bottom?.size == null
      ? 50
      : options?.style?.position?.bottom?.size;

  const side = options.style.position.toRight ? "right" : "left";

  const cssStyle = `
  .accessibility-menu {
    bottom: ${sizeBottom}px;
    ${side}: ${options.style.position.left.size}px;
    position: fixed;
    z-index: 1000;
  }
  
  .accessibility-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .rectangle{
    border-radius: 0px !important;
  }
  
  .accessibility-options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    padding-left: 5px;
    padding-right: 5px;
    border: #007bff 2px solid;
    border-radius: 25px;
    bottom: ${sizeBottom}px;
    ${side}: ${options.style.position.left.size}px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }
  
  .dark{
    background-color: #555555 !important; 
    color: #fff !important;
  }
  
  .exit-reset-buttons{
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }
  
  .button-container button i {
    transition: transform 0.3s ease;
  }
  
  .button-container button:hover i {
    transform: rotate(180deg);
  }
  
  .button-container button:not(:hover) i {
    transform: rotate(0deg);
  }
  
  .accessibility-options-title{
    margin-top: -20px;
    width: 100%;
    text-align: center;
    font-weight: 700;
  }
  
  .accessibility-options.open {
    display: block;
  }
  
  .accessibility-options button {
    margin: 5px;
  
  }
  
  .accessibility-options-buttons{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  
  .options-i{
    margin-right: 10px;
  }
  `;

  return (
    <div className={`accessibility-menu`}>
      <style>{cssStyle}</style>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <button
        className={`accessibility-button ${
          options.style.shape == "rectangle" ? "rectangle" : ""
        } `}
        onClick={toggleMenu}
      >
        {options.style.icon == "wheelchair" ? (
          <i class="fa-solid fa-wheelchair"></i>
        ) : (
          <i className="fas fa-universal-access"></i>
        )}
      </button>
      {menuVisible && (
        <div
          className={`accessibility-options ${menuVisible ? "visible" : ""} ${
            options.style.mode == "dark" ? "dark" : ""
          }`}
        >
          <div className="exit-reset-buttons">
            <div className="button-container">
              <button
                title={
                  options.labels.resetTitle != null
                    ? options.labels.resetTitle
                    : "שחזור לברירת מחדל"
                }
                className="btn btn-success"
                onClick={removeAccessState}
              >
                <i className="fa-solid fa-rotate-right"></i>
              </button>
            </div>
            <div className="button-container">
              <button
                title={
                  options.labels.closeTitle != null
                    ? options.labels.closeTitle
                    : "סגור"
                }
                className="btn btn-danger"
                onClick={toggleMenu}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <h3 className="accessibility-options-title">
            {options.labels.menuTitle != null
              ? options.labels.menuTitle
              : "תפריט נגישות"}
          </h3>
          <div className="accessibility-options-buttons">
            {(options.modules.increaseText == null ||
              options.modules.increaseText === true) && (
              <button className="btn btn-primary" onClick={increaseText}>
                <i className="fa-solid fa-magnifying-glass-plus fa-lg options-i"></i>
                {options.labels.increaseText != null
                  ? options.labels.increaseText
                  : "הגדל גודל טקסט"}
              </button>
            )}
            {(options.modules.decreaseText == null ||
              options.modules.decreaseText === true) && (
              <button className="btn btn-primary" onClick={decreaseText}>
                <i className="fa-solid fa-magnifying-glass-minus options-i"></i>
                {options.labels.decreaseText != null
                  ? options.labels.decreaseText
                  : "הפחת גודל טקסט"}
              </button>
            )}
            {(options.modules.invertColors == null ||
              options.modules.invertColors === true) && (
              <button
                className={`btn ${
                  accessState.invertColors == true
                    ? "btn-info active"
                    : "btn-primary"
                }`}
                onClick={invertColors}
              >
                <i className="fa-solid fa-palette options-i"></i>
                {options.labels.invertColors != null
                  ? options.labels.invertColors
                  : "הפוך צבעים"}
              </button>
            )}
            {(options.modules.bigCursor == null ||
              options.modules.bigCursor === true) && (
              <button
                className={`btn ${
                  accessState.bigCursor == true
                    ? "btn-info active"
                    : "btn-primary"
                }`}
                onClick={bigCursor}
              >
                <i className="fa-solid fa-arrow-pointer fa-2xl options-i"></i>
                {options.labels.bigCursor != null
                  ? options.labels.bigCursor
                  : "סמן גדול"}
              </button>
            )}
            {(options.modules.grayHues == null ||
              options.modules.grayHues === true) && (
              <button
                className={`btn ${
                  accessState.grayHues == true
                    ? "btn-info active"
                    : "btn-primary"
                }`}
                onClick={grayHues}
              >
                <i className="fa-solid fa-circle-half-stroke options-i"></i>
                {options.labels.grayHues != null
                  ? options.labels.grayHues
                  : "גווני אפור"}
              </button>
            )}
            {(options.modules.underlineLinks == null ||
              options.modules.underlineLinks === true) && (
              <button
                className={`btn ${
                  accessState.underlineLinks == true
                    ? "btn-info active"
                    : "btn-primary"
                }`}
                onClick={underlineLinks}
              >
                <i className="fa-solid fa-underline options-i"></i>
                {options.labels.underlineLinks != null
                  ? options.labels.underlineLinks
                  : "קו תחתון לקישורים"}
              </button>
            )}
            {(options.modules.readingGuide == null ||
              options.modules.readingGuide === true) && (
              <button
                className={`btn ${
                  accessState.readingGuide == true
                    ? "btn-info active"
                    : "btn-primary"
                }`}
                onClick={readingGuide}
              >
                <i className="fa-solid fa-grip-lines options-i"></i>
                {options.labels.readingGuide != null
                  ? options.labels.readingGuide
                  : "קו קריאה"}
              </button>
            )}
            {(options.modules.disableAnimations == null ||
              options.modules.disableAnimations === true) && (
              <button className="btn btn-primary" onClick={disableAnimations}>
                <i className="fa-solid fa-pause options-i"></i>
                {options.labels.disableAnimations != null
                  ? options.labels.disableAnimations
                  : "בטל הנפשות"}
              </button>
            )}
            {(options.modules.readableFont == null ||
              options.modules.readableFont === true) && (
              <button
                className={`btn ${
                  accessState.readableFont ? "btn-info active" : "btn-primary"
                }`}
                onClick={readableFont}
              >
                <i class="fa-solid fa-font options-i"></i>
                {options.labels.readableFont != null
                  ? options.labels.readableFont
                  : "Readable Font"}
              </button>
            )}
          </div>
        </div>
      )}
      <script
        src="https://kit.fontawesome.com/199ad8a260.js"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}
