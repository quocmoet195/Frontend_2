enum DocType {
    passport, IDcard, driverlicense
}

enum BodyType {
    SEDAN = "Седан",
    HATCHBACK = "Хэтчбек",
    CONVERTIBLE = "Кабриолет"
}

enum CarClass {
    ECONOMY = "Эконом",
    STANDARD = "Стандарт",
    SPORTS = "Спорт"
}

interface Owner {
    firstName: string,
    lastName: string,
    middleName: string,
    birthDate: Date,
    docType: DocType,
    docSeries: string,
    docNumber: string,
    displayOwner(): void
}

interface Vehicle {
    make: string;
    model: string;
    year: number;
    vin: string;
    regisNumber: string;
    owner: Owner;
    displayVehicle(): void;
}
///Создайте класс, реализующий интерфейс Транспортное средство.
class Vehicle_class implements Vehicle {
    private _make: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _regisNumber: string;
    private _owner: Owner;
    constructor(carMake: string, carModel: string, carYear: number, carVin: string, carRegisNumber: string, carOwner: Owner) {
        this._make = carMake;
        this._model = carModel;
        this._year = carYear;
        this._vin = carVin;
        this._regisNumber = carRegisNumber;
        this._owner = carOwner;
    }

    set make(carmake: string) {
        this._make = carmake;
    }
    set model(carmodel: string) {
        this._model = carmodel;
    }
    set year(caryear: number) {
        this._year = caryear;
    }
    set vin(carvin: string) {
        this._vin = carvin;
    }
    set regisNumber(regisNumber: string) {
        this._regisNumber = regisNumber;
    }
    set owner(carowner: Owner) {
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
    displayVehicle(): void {
        console.log(`Марка: ${this.make}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.regisNumber}`);
    }
}

///Создайте класс, реализующий интерфейс Владелец.
class VehicleOwner implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _docType: DocType;
    private _docSeries: string;
    private _docNumber: string;

    constructor(lastName: string, firstName: string, middleName: string, birthDate: Date,
        docType: DocType, docSeries: string, docNumber: string
    ) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._docType = docType;
        this._docSeries = docSeries;
        this._docNumber = docNumber;
    }
    set lastName(lastName: string) {
        this._lastName = lastName;
    }
    set firstName(firstName: string) {
        this._firstName = firstName;
    }
    set middleName(middleName: string) {
        this._middleName = middleName;
    }
    set birthDate(birthDate: Date) {
        this._birthDate = birthDate;
    }
    set docType(docType: DocType) {
        this._docType = docType;
    }
    set docSeries(docSeries: string) {
        this._docSeries = docSeries;
    }
    set docNumber(docNumber: string) {
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

    displayOwner(): void {
        console.log(`Имя: ${this.lastName}`);
        console.log(`Фамилия: ${this.firstName}`);
        console.log(`Отчество: ${this.middleName}`);
        console.log(`Дата рождения: ${this.birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this.docType}`);
        console.log(`Серия документа: ${this.docSeries}`);
        console.log(`Номер документа: ${this.docNumber}`);
    }
}

const owner = new VehicleOwner(
    "Quoc",
    "Tran",
    "Van",
    new Date(2002, 4, 19),
    DocType.passport,
    "123456",
    "567890"
);

const car = new Vehicle_class(
    "Toyota",
    "Camry",
    2025,
    "74A6868",
    "A123BC",
    owner
);

owner.displayOwner();
console.log("-------------------------------");
car.displayVehicle();

interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}

class Motorcar implements Car {
    make: string;
    model: string;
    year: number;
    vin: string;
    regisNumber: string;
    owner: Owner;
    bodyType: BodyType;
    carClass: CarClass;

    constructor(
        carMake: string,
        carModel: string,
        carYear: number,
        carVin: string,
        carRegisNumber: string,
        carOwner: Owner,
        bodyType: BodyType,
        carClass: CarClass
    ) {
        this.make = carMake;
        this.model = carModel;
        this.year = carYear;
        this.vin = carVin;
        this.regisNumber = carRegisNumber;
        this.owner = carOwner;
        this.bodyType = bodyType;
        this.carClass = carClass;
    }

    displayVehicle(): void {
        console.log(`Марка: ${this.make}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.regisNumber}`);
        console.log(`Тип кузова: ${this.bodyType}`);
        console.log(`Класс автомобиля: ${this.carClass}`);
    }
}


interface Motorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
}

class Motorbike implements Motorbike {
    private _make: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _regisNumber: string;
    private _frameType: string;
    private _isSport: boolean;

    constructor(
        make: string,
        model: string,
        year: number,
        vin: string,
        regisNumber: string,
        frameType: string,
        isSport: boolean
    ) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._regisNumber = regisNumber;
        this._frameType = frameType;
        this._isSport = isSport;
    }

    displayVehicle(): void {
        console.log(`Мотоцикл: ${this._make} ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._regisNumber}`);
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Спортивный: ${this._isSport}`);
    }
}

const my_car = new Motorcar(
    "Toyota",
    "Camry",
    2025,
    "74A6868",
    "A123BC",
    owner,
    BodyType.SEDAN,
    CarClass.STANDARD
);



const bike = new Motorbike(
    "Yamaha",
    "YZF-R1",
    2023,
    "1YVHZ8CBX5M123456",
    "B456CD",
    "Спортивная",
    true
);


console.log("-------------------------------");
my_car.displayVehicle();
console.log("-------------------------------");
bike.displayVehicle();