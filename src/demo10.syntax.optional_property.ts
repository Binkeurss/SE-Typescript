/**
 * * Optional properties
 */

// Optional parameters

// ? sau tên tham số. 
// Điều này cho phép gọi hàm với hoặc không truyền giá trị cho tham số đó.

const Calculate = (a : number, b? : number) : void => {
  console.log('A: ', a);
  if(b != undefined) {
    console.log('B: ', b);
  }
}

console.log('Calculate has A and B: ');
Calculate(10, 20);
console.log('Calculate has A: ')
Calculate(10);