var message = "hello";
console.log(message);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("lap");
    };
    return Site;
}());
var obj = new Site();
obj.name();
