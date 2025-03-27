console.log("====== os-module.js =======");
require("./os-module");

console.log(`os hostname: ${os.hostname()}`);
console.log(`os architecture: ${os.arch}`);
console.log(`temp directory : ${os.tmpdir()}`);
console.log(`os release  : ${os.release()}`);
console.log(`os cpu  : ${os.cpus()}`);
// console.log(`os User Info  : ${os.userInfo()}`);
