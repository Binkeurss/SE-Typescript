/**
 * * never - is return type of Exception function (return or not return)
 * Hàm ném ra ngoại lệ (exception) và dừng chương trình.
   Hàm có vòng lặp vô hạn hoặc các hành vi khác mà không bao giờ kết thúc.
 */
var show_error = function (message) {
    throw new Error(message);
};
var calculate = function () {
    try {
        show_error('Something is failed!');
    }
    catch (err) {
        console.log(err);
    }
};
calculate();
//# sourceMappingURL=demo07.syntax.never_types.js.map