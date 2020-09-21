"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejour = [];
        this._sejour.push(new Sejour('Barcelona', 120));
        this._sejour.push(new Sejour('Bali', 150));
        this._sejour.push(new Sejour('Milan', 200));
        this._sejour.push(new Sejour('Yerevan', 190));
    }
    SejourService.prototype.searchByName = function (city) {
        for (var _i = 0, _a = this._sejour; _i < _a.length; _i++) {
            var dest = _a[_i];
            if (dest.getNom() == city) {
                return dest;
            }
        }
    };
    return SejourService;
}());
var destinnation1 = new SejourService();
console.log(destinnation1.searchByName("Barcelona"));
console.log(destinnation1.searchByName("Montpellier"));
