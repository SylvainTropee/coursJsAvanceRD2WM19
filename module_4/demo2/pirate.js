var Pirate = /** @class */ (function () {
    function Pirate(name, hasWoodenLeg, beardColor, _boat) {
        this._boat = _boat;
        this._name = name;
        this._hasWoodenLeg = hasWoodenLeg;
        this._beardColor = beardColor;
    }
    Object.defineProperty(Pirate.prototype, "boat", {
        get: function () {
            return this._boat;
        },
        set: function (value) {
            this._boat = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pirate.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pirate.prototype, "hasWoodenLeg", {
        get: function () {
            return this._hasWoodenLeg;
        },
        set: function (value) {
            this._hasWoodenLeg = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pirate.prototype, "beardColor", {
        get: function () {
            return this._beardColor;
        },
        set: function (value) {
            this._beardColor = value;
        },
        enumerable: false,
        configurable: true
    });
    return Pirate;
}());
var jack = new Pirate("Jack Sparrow", false, "black", "Black Pearl");
var sailormoon = {
    nbRayureMariniere: 12,
    bottle: { color: "verte", degree: 50 },
    boardTheShip: function (name) {
        console.log("hello");
    }
};
