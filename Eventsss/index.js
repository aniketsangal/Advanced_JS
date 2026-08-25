import fs from "fs";
setTimeout(() => {
  console.log("setTimeout");
}, 3000);

fs.readFile("intro.txt", "utf-8", (err, data) => {
  console.log("file read completed");
})

setInterval(() => {
  console.log("set Interval after 5ms");
}, 500);

setImmediate(() => {
  console.log("set Immediate");
});