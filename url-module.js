console.log("====== url-module.js =======");
// require('./url-module');

const { log } = require("console");
const url = require("url");

const urlString =
  "https://us02web.zoom.us/j/8748449745?pwd=IQelRYADLrADpEUMwoI4JdwalXEyID.1&omn=82184057048";

const urlObject = url.parse(urlString, true);
console.table(urlObject);
console.log(`Protocol: ${urlObject.protocol}`);
console.log(`Host name: ${urlObject.hostname}`);
console.log(`Path name: ${urlObject.pathname}`);
console.log(
  `Query parameter: pwd=${urlObject.query.pwd}&omn=${urlObject.query.omn}`
);

// console.log("------ using url.format() ----");
// const formatUr1 = url.format({
//   protocol: "https",
//   hostname: "/us02web.zoom.us",
//   pathname: "j/8748449745",
//   query: {
//     pwd: "IQelRYADLrADpEUMwoI4JdwalXEyID.1",
//     omn: "82184057048",
//   },
// });
// console.log("URL : " + formatUr1);
