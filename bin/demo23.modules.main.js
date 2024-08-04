"use strict";
/**
 * * define main function for module with libs
 */
Object.defineProperty(exports, "__esModule", { value: true });
// import * from './demo23.modules.libs'
var demo23_modules_libs_1 = require("./demo23.modules.libs");
(0, demo23_modules_libs_1.default)();
console.log("PI = ".concat(demo23_modules_libs_1.PI));
console.log("Double value of 4 = ".concat((0, demo23_modules_libs_1.double)(4)));
var shape = new demo23_modules_libs_1.Shape('Green');
console.log(shape.color);
//# sourceMappingURL=demo23.modules.main.js.map