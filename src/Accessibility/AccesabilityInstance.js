// accessibilityInstance.js
import { Accessibility } from "accessibility/dist/main";

var options = {
  icon: {
    position: {
      bottom: { size: -400, units: "px" },

      right: { size: -400, units: "px" },

      type: "fixed",
    },
  },
};

const accessibilityInstance = new Accessibility(options);

export default accessibilityInstance;
