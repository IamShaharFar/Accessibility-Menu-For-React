import React, { useState, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityProvider";
import "./Accesability.css";

function AccessibilityButton({ options }) {
  const accessibilityInstance = useContext(AccessibilityContext);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const increaseText = () => {
    accessibilityInstance.menuInterface.increaseText();
  };

  const decreaseText = () => {
    accessibilityInstance.menuInterface.decreaseText();
  };

  const increaseTextSpacing = () => {
    accessibilityInstance.menuInterface.increaseTextSpacing();
  };

  const decreaseTextSpacing = () => {
    accessibilityInstance.menuInterface.decreaseTextSpacing();
  };
  const bigCursor = () => {
    accessibilityInstance.menuInterface.bigCursor();
  };

  const invertColors = () => {
    accessibilityInstance.menuInterface.invertColors();
  };

  const grayHues = () => {
    accessibilityInstance.menuInterface.grayHues();
  };

  const underlineLinks = () => {
    accessibilityInstance.menuInterface.underlineLinks();
  };

  const readingGuide = () => {
    accessibilityInstance.menuInterface.readingGuide();
  };

  const disableAnimations = () => {
    accessibilityInstance.menuInterface.disableAnimations();
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

  const divStyle = {
    bottom: `${
      options.style.position.bottom.size == null
        ? 50
        : options.style.position.bottom.size
    }px`,
    ...(options.style.position.toRight
      ? {
          right: `${
            options.style.position.left.size == null
              ? "20px"
              : options.style.position.left.size + "px"
          }`,
        }
      : {
          left: `${
            options.style.position.left.size == null
              ? "20px"
              : options.style.position.left.size + "px"
          }`,
        }),
  };

  return (
    <div className={`accessibility-menu`} style={divStyle}>
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
          style={divStyle}
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
              <button className="btn btn-primary" onClick={invertColors}>
                <i className="fa-solid fa-palette options-i"></i>
                {options.labels.invertColors != null
                  ? options.labels.invertColors
                  : "הפוך צבעים"}
              </button>
            )}
            {(options.modules.bigCursor == null ||
              options.modules.bigCursor === true) && (
              <button className="btn btn-primary" onClick={bigCursor}>
                <i className="fa-solid fa-arrow-pointer fa-2xl options-i"></i>
                {options.labels.bigCursor != null
                  ? options.labels.bigCursor
                  : "סמן גדול"}
              </button>
            )}
            {(options.modules.grayHues == null ||
              options.modules.grayHues === true) && (
              <button className="btn btn-primary" onClick={grayHues}>
                <i className="fa-solid fa-circle-half-stroke options-i"></i>
                {options.labels.grayHues != null
                  ? options.labels.grayHues
                  : "גווני אפור"}
              </button>
            )}
            {(options.modules.underlineLinks == null ||
              options.modules.underlineLinks === true) && (
              <button className="btn btn-primary" onClick={underlineLinks}>
                <i className="fa-solid fa-underline options-i"></i>
                {options.labels.underlineLinks != null
                  ? options.labels.underlineLinks
                  : "קו תחתון לקישורים"}
              </button>
            )}
            {(options.modules.readingGuide == null ||
              options.modules.readingGuide === true) && (
              <button className="btn btn-primary" onClick={readingGuide}>
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
          </div>
        </div>
      )}
    </div>
  );
}

export default AccessibilityButton;
