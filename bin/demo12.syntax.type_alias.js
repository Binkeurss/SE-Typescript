var printCoord = function (point) {
    console.log("X = ".concat(point.x));
    console.log("Y = ".concat(point.y));
    if (point.z !== undefined) {
        console.log("Z = ".concat(point.z));
    }
};
printCoord({ x: 10, y: 20, z: 30 });
console.log('------------------');
printCoord({ y: 40, x: 100 });
//# sourceMappingURL=demo12.syntax.type_alias.js.map