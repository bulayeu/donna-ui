import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url";

const MODULE_NAME = "donna-ui";

export default {
  input: "./src/index.js",
  moduleName: MODULE_NAME,
  sourcemap: false,
  targets: [
    {
      dest: `./dist/${MODULE_NAME}.js`,
      format: "umd"
    }
  ],

  plugins: [
    url(),
    // scss({
    //   output: `./dist/${MODULE_NAME}.css`,
    // }),
    postcss({
      plugins: []
    }),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers"]
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    resolve(),
    commonjs()
  ],

  external: ["react", "react-dom"],

  globals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
