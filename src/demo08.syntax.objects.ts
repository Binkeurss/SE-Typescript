/**
 * * Object type
 */

let obj: object | null = {
  id: 1,
  name: "Product",
  price: 100.99,
};

console.log(obj, typeof obj);

obj = null;
console.log(obj, typeof obj);

obj = { value: 100 };
console.log(obj, typeof obj);
