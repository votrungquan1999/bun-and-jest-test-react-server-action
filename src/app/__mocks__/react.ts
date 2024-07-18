/**
 * FIXME: this mocked module is a workaround for the issue described below.
 * ISSUE: missing cache() function in react module when run tests from Jest.
 *
 * ```js
 * // this is the same code that works in `next dev` but fails in `jest`.
 * import { cache } from "react";
 * cache(); // error: cache() is not a function
 * ```
 *
 * Note 2023/10/20 19:17: I tried this
 * ```js
 * import react from "react";
 * console.log(react);
 * // `next dev`: react.version is "18.3.0-experimental-09285d5a7-20230925"
 * // `jest`: react.version is "18.2.0"
 *
 * const r = require("react");
 * console.log(Object.is(r, react));
 * // `next dev`: false
 * // `jest`: true
 *
 * console.log(require.resolve("react"));
 * // `next dev`: "(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js"
 * // `jest`: it's "${path_to_project_root}/node_modules/react/index.js/node_modules/react/index.js"
 * ```
 */

const react = jest.requireActual("react");

const mockedReact = {
  ...react,
  cache: (fn: Function) => fn,
};

module.exports = { ...mockedReact };
