"use strict";
var DocType;
(function (DocType) {
    DocType[DocType["passport"] = 0] = "passport";
    DocType[DocType["IDcard"] = 1] = "IDcard";
    DocType[DocType["driverlicense"] = 2] = "driverlicense";
})(DocType || (DocType = {}));
var BodyType;
(function (BodyType) {
    BodyType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    BodyType["CONVERTIBLE"] = "\u041A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["ECONOMY"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["STANDARD"] = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442";
    CarClass["SPORTS"] = "\u0421\u043F\u043E\u0440\u0442";
})(CarClass || (CarClass = {}));
///Создайте класс, реализующий интерфейс Транспортное средство.
class Vehicle_class {
    constructor(carMake, carModel, carYear, carVin, carRegisNumber, carOwner) {
        this._make = carMake;
        this._model = carModel;
        this._year = carYear;
        this._vin = carVin;
        this._regisNumber = carRegisNumber;
        this._owner = carOwner;
    }
    set make(carmake) {
        this._make = carmake;
    }
    set model(carmodel) {
        this._model = carmodel;
    }
    set year(caryear) {
        this._year = caryear;
    }
    set vin(carvin) {
        this._vin = carvin;
    }
    set regisNumber(regisNumber) {
        this._regisNumber = regisNumber;
    }
    set owner(carowner) {
        this._owner = carowner;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get vin() {
        return this._vin;
    }
    get regisNumber() {
        return this._regisNumber;
    }
    get owner() {
        return this._owner;
    }
    displayVehicle() {
        console.log(`Марка: ${this.make}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.regisNumber}`);
    }
}
///Создайте класс, реализующий интерфейс Владелец.
class VehicleOwner {
    constructor(lastName, firstName, middleName, birthDate, docType, docSeries, docNumber) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._docType = docType;
        this._docSeries = docSeries;
        this._docNumber = docNumber;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    set middleName(middleName) {
        this._middleName = middleName;
    }
    set birthDate(birthDate) {
        this._birthDate = birthDate;
    }
    set docType(docType) {
        this._docType = docType;
    }
    set docSeries(docSeries) {
        this._docSeries = docSeries;
    }
    set docNumber(docNumber) {
        this._docNumber = docNumber;
    }
    get lastName() {
        return this._lastName;
    }
    get firstName() {
        return this._firstName;
    }
    get middleName() {
        return this._middleName;
    }
    get birthDate() {
        return this._birthDate;
    }
    get docType() {
        return this._docType;
    }
    get docSeries() {
        return this._docSeries;
    }
    get docNumber() {
        return this._docNumber;
    }
    displayOwner() {
        console.log(`Имя: ${this.lastName}`);
        console.log(`Фамилия: ${this.firstName}`);
        console.log(`Отчество: ${this.middleName}`);
        console.log(`Дата рождения: ${this.birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this.docType}`);
        console.log(`Серия документа: ${this.docSeries}`);
        console.log(`Номер документа: ${this.docNumber}`);
    }
}
const owner = new VehicleOwner("Quoc", "Tran", "Van", new Date(2002, 4, 19), DocType.passport, "123456", "567890");
const car = new Vehicle_class("Toyota", "Camry", 2025, "74A6868", "A123BC", owner);
owner.displayOwner();
console.log("-------------------------------");
car.displayVehicle();
class Motorcar {
    constructor(carMake, carModel, carYear, carVin, carRegisNumber, carOwner, bodyType, carClass) {
        this.make = carMake;
        this.model = carModel;
        this.year = carYear;
        this.vin = carVin;
        this.regisNumber = carRegisNumber;
        this.owner = carOwner;
        this.bodyType = bodyType;
        this.carClass = carClass;
    }
    displayVehicle() {
        console.log(`Марка: ${this.make}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.regisNumber}`);
        console.log(`Тип кузова: ${this.bodyType}`);
        console.log(`Класс автомобиля: ${this.carClass}`);
    }
}
class Motorbike {
    constructor(make, model, year, vin, regisNumber, frameType, isSport) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._regisNumber = regisNumber;
        this._frameType = frameType;
        this._isSport = isSport;
    }
    displayVehicle() {
        console.log(`Мотоцикл: ${this._make} ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._regisNumber}`);
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Спортивный: ${this._isSport}`);
    }
}
const my_car = new Motorcar("Toyota", "Camry", 2025, "74A6868", "A123BC", owner, BodyType.SEDAN, CarClass.STANDARD);
const bike = new Motorbike("Yamaha", "YZF-R1", 2023, "1YVHZ8CBX5M123456", "B456CD", "Спортивная", true);
console.log("-------------------------------");
my_car.displayVehicle();
console.log("-------------------------------");
bike.displayVehicle();
