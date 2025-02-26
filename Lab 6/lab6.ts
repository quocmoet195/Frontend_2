function freezePrototype<T extends { new(...args: any[]): {} }>(constructor: T) {
    Object.freeze(constructor.prototype);
}

@freezePrototype
class FAutomobile {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    getInfo(): string {
        return `${this.make} ${this.model}`;
    }
}

try {
    (FAutomobile.prototype as any).newProperty = "test";
} catch (e) {
    console.log("Cannot modify prototype");
}

const my_car = new FAutomobile("Toyota", "Camry");
console.log(my_car.getInfo());

function uppercaseOutput(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        return result.toUpperCase();
    };

    return descriptor;
}

class Automobile {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    @uppercaseOutput
    getInfo(): string {
        return `${this.make} ${this.model}`;
    }
}

const myCar = new Automobile("Toyota", "Camry");
console.log(myCar.getInfo()); 