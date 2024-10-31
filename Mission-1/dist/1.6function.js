"use strict";
function add(number1, number2) {
    return number1 + number2;
}
var addNumber = function (number1, number2) {
    return number1 + number2;
};
var poorUser = {
    name: "protap",
    balance: 10,
    addBalance: function (balance) {
        return "new balance is ".concat(balance + balance);
    },
};
var arr = [1, 2, 3, 4, 5, 6];
var newArr = arr.map(function (num) { return num * num; });
