/**
 * * never - is return type of Exception function (return or not return)
 * Hàm ném ra ngoại lệ (exception) và dừng chương trình.
   Hàm có vòng lặp vô hạn hoặc các hành vi khác mà không bao giờ kết thúc.
 */

const show_error = (message : string) : never => {
  throw new Error(message);
}

const calculate = () => {
  try {
    show_error('Something is failed!');
  } catch (err) {
    console.log(err);
  }
}

calculate();