import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./PlayGround.css";

function PlayGround({ options, onUpdateOptions }) {
  const [localOptions, setLocalOptions] = useState(options);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setLocalOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions };
      const propertyPath = name.split(".");
      let currentProperty = updatedOptions;

      for (let i = 0; i < propertyPath.length - 1; i++) {
        currentProperty = currentProperty[propertyPath[i]];
      }

      currentProperty[propertyPath[propertyPath.length - 1]] =
        type === "checkbox" ? checked : value;

      return updatedOptions;
    });
  };

  const handleModuleInputChange = (moduleKey, checked) => {
    setLocalOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions };
      updatedOptions.modules[moduleKey] = checked;
      return updatedOptions;
    });
    console.log(moduleKey + " - " + checked);
  };

  const handleStyleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setLocalOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions };
      const propertyPath = name.split(".");
      let currentProperty = updatedOptions;

      for (let i = 0; i < propertyPath.length - 1; i++) {
        currentProperty = currentProperty[propertyPath[i]];
      }

      currentProperty[propertyPath[propertyPath.length - 1]] =
        type === "checkbox" ? checked : value;

      return updatedOptions;
    });
  };

  const handleUpdateOptions = () => {
    onUpdateOptions(localOptions);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const labelsCode = `
  var labels = {
    resetTitle: "${localOptions.labels.resetTitle}",
    closeTitle: "${localOptions.labels.closeTitle}",
    menuTitle: "${localOptions.labels.menuTitle}",
    increaseText: "${localOptions.labels.increaseText}",
    decreaseText: "${localOptions.labels.decreaseText}",
    increaseSpacing: "${localOptions.labels.increaseSpacing}",
    decreaseSpacing: "${localOptions.labels.decreaseSpacing}",
    increaseLineHeight: "${localOptions.labels.increaseLineHeight}",
    decreaseLineHeight: "${localOptions.labels.decreaseLineHeight}",
    invertColors: "${localOptions.labels.invertColors}",
    grayHues: "${localOptions.labels.grayHues}",
    underlineLinks: "${localOptions.labels.underlineLinks}",
    bigCursor: "${localOptions.labels.bigCursor}",
    readingGuide: "${localOptions.labels.readingGuide}",
    disableAnimations: "${localOptions.labels.disableAnimations}",
    readableFont: "${localOptions.labels.readableFont}"
  };`;

  const optionsCode = `
  var Options = { labels: labels };`;

  const modulesCode = `
  Options.modules = {
    increaseText: ${localOptions.modules.increaseText},
    decreaseText: ${localOptions.modules.decreaseText},
    increaseSpacing: "${localOptions.modules.increaseSpacing}",
    decreaseSpacing: "${localOptions.modules.decreaseSpacing}",
    increaseLineHeight: "${localOptions.modules.increaseLineHeight}",
    decreaseLineHeight: "${localOptions.modules.decreaseLineHeight}",
    invertColors: ${localOptions.modules.invertColors},
    grayHues: ${localOptions.modules.grayHues},
    underlineLinks: ${localOptions.modules.underlineLinks},
    bigCursor: ${localOptions.modules.bigCursor},
    readingGuide: ${localOptions.modules.readingGuide},
    disableAnimations: ${localOptions.modules.disableAnimations},
  };`;

  const styleCode = `
  Options.style = {
    mode: "${localOptions.style.mode}",
    icon: "${localOptions.style.icon}",
    shape: "${localOptions.style.shape}",
    position: {
      bottom: { size: ${localOptions.style.position.bottom.size} },
      left: { size: ${localOptions.style.position.left.size} },
      toRight: ${localOptions.style.position.toRight},
    },
  };  `;

  const exampleCode = `${labelsCode}
  ${optionsCode}
  ${modulesCode}
  ${styleCode}
  `;

  return (
    <div className="playground">
      <hr />
      <h1 className="playground-title">Accessibility Button Playground</h1>

      <div className="playground-form">
        <div className="labels">
          <h3 className="form-title">Labels</h3>
          <div className="row">
            <div className="col-md-4">
              {Object.keys(localOptions.labels)
                .slice(
                  0,
                  Math.ceil(Object.keys(localOptions.labels).length / 3)
                )
                .map((labelKey) => (
                  <div className="mb-3" key={labelKey}>
                    <label htmlFor={labelKey} className="form-label">
                      {labelKey}:
                    </label>
                    <input
                      type="text"
                      id={labelKey}
                      className="form-control w-75"
                      name={`labels.${labelKey}`}
                      value={localOptions.labels[labelKey]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
            </div>
            <div className="col-md-4">
              {Object.keys(localOptions.labels)
                .slice(
                  Math.ceil(Object.keys(localOptions.labels).length / 3),
                  2 * Math.ceil(Object.keys(localOptions.labels).length / 3)
                )
                .map((labelKey) => (
                  <div className="mb-3 mx-0" key={labelKey}>
                    <label htmlFor={labelKey} className="form-label">
                      {labelKey}:
                    </label>
                    <input
                      type="text"
                      id={labelKey}
                      className="form-control w-75"
                      name={`labels.${labelKey}`}
                      value={localOptions.labels[labelKey]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
            </div>
            <div className="col-md-4">
              {Object.keys(localOptions.labels)
                .slice(
                  2 * Math.ceil(Object.keys(localOptions.labels).length / 3)
                )
                .map((labelKey) => (
                  <div className="mb-3 mx-0" key={labelKey}>
                    <label htmlFor={labelKey} className="form-label">
                      {labelKey}:
                    </label>
                    <input
                      type="text"
                      id={labelKey}
                      className="form-control w-75"
                      name={`labels.${labelKey}`}
                      value={localOptions.labels[labelKey]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="modules">
          <h3 className="form-title">Modules</h3>
          <div className="row">
            <div className="col-md-6">
              {Object.keys(localOptions.modules).map((moduleKey) => (
                <div className="form-check mb-3" key={moduleKey}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={moduleKey}
                    name={`labels.${moduleKey}`}
                    checked={localOptions.modules[moduleKey]}
                    onChange={(e) =>
                      handleModuleInputChange(moduleKey, e.target.checked)
                    }
                  />
                  <label className="form-check-label mx-3" htmlFor={moduleKey}>
                    {moduleKey}:
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="style">
          <h3 className="form-title">Style</h3>
          <div className="mb-3">
            <label htmlFor="mode" className="form-label">
              Mode:
            </label>
            <select
              id="mode"
              className="form-select"
              name="style.mode"
              value={localOptions.style.mode}
              onChange={handleStyleInputChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="icon" className="form-label">
              Icon:
            </label>
            <select
              id="icon"
              className="form-select"
              name="style.icon"
              value={localOptions.style.icon}
              onChange={handleStyleInputChange}
            >
              <option value="access">Access</option>
              <option value="wheelchair">Wheelchair</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="shape" className="form-label">
              Shape:
            </label>
            <select
              id="shape"
              className="form-select"
              name="style.shape"
              value={localOptions.style.shape}
              onChange={handleStyleInputChange}
            >
              <option value="circle">Circle</option>
              <option value="rectangle">Rectangle</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="bottomSize" className="form-label">
              Bottom Size:
            </label>
            <input
              type="number"
              id="bottomSize"
              className="form-control"
              name="style.position.bottom.size"
              value={localOptions.style.position.bottom.size}
              onChange={handleStyleInputChange}
              min="0"
              max="500"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="leftSize" className="form-label">
              Side Size:
            </label>
            <input
              type="number"
              id="leftSize"
              className="form-control"
              name="style.position.left.size"
              value={localOptions.style.position.left.size}
              onChange={handleStyleInputChange}
              min="0"
              max="500"
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="toRight"
              name="style.position.toRight"
              checked={localOptions.style.position.toRight}
              onChange={handleStyleInputChange}
            />
            <label className="form-check-label" htmlFor="toRight">
              To Right
            </label>
          </div>
        </div>
      </div>

      <div className="playground-button">
        <button className="btn btn-primary" onClick={handleUpdateOptions}>
          Save Changes
        </button>
      </div>
      <div className="code-container" style={{ position: "relative" }}>
        <button
          className="btn btn-secondary copy-button-pg"
          onClick={() => copyToClipboard(exampleCode)}
          title="Copy to Clipboard"
        >
          <i className="fas fa-copy"></i>
        </button>
        <SyntaxHighlighter
          className="playground-code"
          language="javascript"
          style={nord}
        >
          {exampleCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default PlayGround;
