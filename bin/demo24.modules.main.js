"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * * define main function using namespace modules
 */
var demo24_modules_namespace_1 = require("./demo24.modules.namespace");
var fraction = new demo24_modules_namespace_1.MyLibs.Fraction(1, 2);
console.log(fraction.toString());
console.log("PI = ".concat(demo24_modules_namespace_1.MyLibs.PI));
console.log("Triple of 4 = ".concat(demo24_modules_namespace_1.MyLibs.triple(4)));
//# sourceMappingURL=demo24.modules.main.js.map