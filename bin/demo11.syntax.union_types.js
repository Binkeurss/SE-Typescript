/**
 * * Union types
 */
var printObj = function (obj) {
    if (typeof obj === 'string') {
        console.log('To UpperCase obj: ', obj.toUpperCase());
    }
    else {
        console.log('printObj: ', obj);
    }
};
printObj(100);
printObj('Hello world!!!');
//? compare Array[string] with String
var getName = function (name) {
    if (Array.isArray(name)) {
        console.log("Name is array string: ".concat(name));
    }
    else {
        console.log("Name is string: ".concat(name));
    }
};
getName(['hello', 'World', 'Petter', 'Marry']);
getName('Binkeurs');
//# sourceMappingURL=demo11.syntax.union_types.js.map