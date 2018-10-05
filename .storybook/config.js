import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);

function stories() { 
  req.keys().forEach(filename => req(filename));
}

configure(stories, module);
