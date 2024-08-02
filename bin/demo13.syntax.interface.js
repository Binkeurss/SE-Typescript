/**
 * * Interface - define object type
 */
var p = {
    id: 1,
    name: 'IP15',
    price: 999.25
};
console.log(p, typeof p);
var printPoint = function (point) {
    if (point.x)
        console.log('x = ', point.x);
    if (point.y)
        console.log('y = ', point.y);
    if (point.z)
        console.log('z = ', point.z);
};
var my_point = {
    y: 200,
    z: 300,
    x: 100
};
printPoint(my_point);
console.log('------------------------');
printPoint({ y: 55, x: 88 });
console.log('------------------------');
printPoint({ z: 55, x: 88 });
console.log('------------------------');
printPoint({ z: 55, y: 88 });
//# sourceMappingURL=demo13.syntax.interface.js.map