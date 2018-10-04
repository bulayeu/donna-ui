import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);

setOptions({
  name: "💋 Donna UI",
  addonPanelInRight: true,
  url: "https://github.com/bulayeu/donna-ui"
});

function stories() { 
  req.keys().forEach(filename => req(filename));
}

configure(stories, module);
