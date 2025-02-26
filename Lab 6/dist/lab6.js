"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function freezePrototype(constructor) {
    Object.freeze(constructor.prototype);
}
let FAutomobile = class FAutomobile {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `${this.make} ${this.model}`;
    }
};
FAutomobile = __decorate([
    freezePrototype
], FAutomobile);
try {
    FAutomobile.prototype.newProperty = "test";
}
catch (e) {
    console.log("Cannot modify prototype");
}
const my_car = new FAutomobile("Toyota", "Camry");
console.log(my_car.getInfo());
function uppercaseOutput(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        return result.toUpperCase();
    };
    return descriptor;
}
class Automobile {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `${this.make} ${this.model}`;
    }
}
__decorate([
    uppercaseOutput
], Automobile.prototype, "getInfo", null);
const myCar = new Automobile("Toyota", "Camry");
console.log(myCar.getInfo());
