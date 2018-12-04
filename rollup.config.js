import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url";

const MODULE_NAME = "donna-ui";

export default {
  input: "./src/index.js",
  output: {
    file: `./dist/${MODULE_NAME}.js`,
    format: "umd",
    name: `${MODULE_NAME}`,
    sourcemap: false,
    external: ["React", "ReactDOM", "classnames", "prop-types"],
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
      'classnames': 'classnames',
      'prop-types': 'prop-types'
    }
  },

  plugins: [
    url(),
    postcss({
      plugins: [],
      minimize: true
    }),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers"]
    }),
    resolve(),
    commonjs()
  ],

  external: ["react", "react-dom"]
};
