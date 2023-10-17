# Accessibility-react

A React library that helps developers build accessible web applications. It provides a set of utilities designed to help you build React applications that meet accessibility standards.

![npm](https://img.shields.io/npm/v/accessibility-react)

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Example](#example)
- [Support](#support)

## Demo

To see a demo of the project, please visit the following link:

[https://accessibility-menu-react.onrender.com/]

This demo will show you how to use the project to make your website more accessible. You will be able to see how to use the project to add alt text to images, create transcripts for videos, and improve the overall usability of your website for people with disabilities.


## Installation

```npm install accessibility-react```

or

```yarn add accessibility-react```

## Usage

You can include the `AccessibilityProvider` and `AccessibilityButton` in your component like this:

```jsx
import { AccessibilityProvider, AccessibilityButton } from "accessibility-react/dist/index"

<div className="App">
  {/* your components */}
  <AccessibilityProvider>
   <AccessibilityButton Options={initOptions}/>
  </AccessibilityProvider>
</div>
```

## Options

'initOptions' is an object to customize the appearance and functionality of the AccessibilityButton. More information and additional options will be added in future releases.

## Example

Here is an example on how to use the accessibility-react library:

```jsx
// Import the necessary components
import { AccessibilityProvider, AccessibilityButton } from "accessibility-react"

// Define your options
const initOptions = {
   // your options here
}

function App() {
  return (
    <div className="App">
       {/* your components */}
      <AccessibilityProvider>
       <AccessibilityButton Options={initOptions}/>
      </AccessibilityProvider>
    </div>
  )
}

export default App
```

## Support

If you encounter any problems or have questions, please file an issue through the GitHub issue tracker.

## Contributions

Contributions are welcome! If you'd like to contribute, feel free to send a pull request. Please follow current coding style.
This project follows semantic versioning for publishing new versions.
