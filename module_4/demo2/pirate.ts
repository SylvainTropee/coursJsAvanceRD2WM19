class Pirate {

    private _name: string
    private _hasWoodenLeg: boolean
    private _beardColor: string

    constructor(
        name: string,
        hasWoodenLeg: boolean,
        beardColor: string,
        private _boat: string
    ) {
        this._name = name;
        this._hasWoodenLeg = hasWoodenLeg;
        this._beardColor = beardColor;
    }

    get boat(): string {
        return this._boat;
    }

    set boat(value: string) {
        this._boat = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get hasWoodenLeg(): boolean {
        return this._hasWoodenLeg;
    }

    set hasWoodenLeg(value: boolean) {
        this._hasWoodenLeg = value;
    }

    get beardColor(): string {
        return this._beardColor;
    }

    set beardColor(value: string) {
        this._beardColor = value;
    }
}


let jack: Pirate = new Pirate("Jack Sparrow", false, "black", "Black Pearl");

interface sailor {

    nbRayureMariniere: number;

    bottle: {
        color: string
        degree: number
    }

    boardTheShip(name: string): void | string;
}

let sailormoon: sailor = {
    nbRayureMariniere: 12,
    bottle:
        {color: "verte", degree: 50},
    boardTheShip(name: string): void | string {
        console.log("hello");
    }
}








