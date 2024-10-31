"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // Spread Operator
    // Rest Operator
    // Destructuring
    // Spread Operator
    var team1 = ["vini", "mbappe", "rodrygo"];
    var team2 = ["ronaldo", "bale", "benzema"];
    //   const fullTeam = [team1, ...team2];
    team1.push.apply(team1, team2);
    var midfielder = {
        cmf: "Kross",
        dmf: "Tchuamani",
        amf: "bellingham",
    };
    var defender = {
        cb: "rudiger",
        cd: "alaba",
        rb: "carvajal",
    };
    var fullTeam = __assign(__assign({}, midfielder), defender);
    //   Rest Operator
    var greetFriends = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) {
            console.log("Hi ".concat(friend));
        });
    };
    greetFriends("kaka", "zidane", "henry", "vieira");
}
