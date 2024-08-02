/**
 * * Interface type
 */

//? Type by Interface
let str_hello = 'Hello World!';
console.log(`str_hello = ${str_hello} - type: ${typeof str_hello}`);

let n_value = 1.1;
console.log(`n_value = ${n_value} - type: ${typeof n_value}`);

//? Define object
const user = {
  id: 1,
  name: 'Petter',
}

console.log(`user = ${user} - type: ${typeof user}`);
console.log(user);

//? Define Producct type
interface User {
  id : number,
  name: string
}

//? Define variable u as User type
const u : User = {
  id: 1,
  name: 'Maray'
}

console.log(`user = ${u} - type: ${typeof u}`);
console.log(u);