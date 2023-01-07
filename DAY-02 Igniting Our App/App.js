/*
HMR-Hot module replacement
File watcher algorithm - C++
BUNDLING
MINIFY
Cleaning our Code
Dev add Production Build
Super Fast build algorithm
Image Optimization
Caching while development
Compatible with older version of browser
HTTPS on dev build
port number
we should .parcel-cache in .gitignore
Consistent hashing algorithm
Zero Config
Transitive Dependencies
*/

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    name: "Ram",
    style: {
      backgroundColor: "red",
    },
  },
  "Heading 1"
);
const heading2 = React.createElement("h2", {}, "Heading 2");
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(container);
