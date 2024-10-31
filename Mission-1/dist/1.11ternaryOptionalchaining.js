"use strict";
//  nullish coalescing operator
// null | undefined er upor kuno result nirvor korle;
var age = 15;
var isAuthenticated = "undefined";
var result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
console.log({ result1: result1 });
