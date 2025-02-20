export declare namespace Transport {
    enum DocType {
        passport = 0,
        IDcard = 1,
        driverlicense = 2
    }
    enum BodyType {
        SEDAN = "\u0421\u0435\u0434\u0430\u043D",
        HATCHBACK = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
        CONVERTIBLE = "\u041A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442"
    }
    enum CarClass {
        ECONOMY = "\u042D\u043A\u043E\u043D\u043E\u043C",
        STANDARD = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
        SPORTS = "\u0421\u043F\u043E\u0440\u0442"
    }
    interface Owner {
        firstName: string;
        lastName: string;
        middleName: string;
        birthDate: Date;
        docType: DocType;
        docSeries: string;
        docNumber: string;
        displayOwner(): void;
    }
    interface IVehicle {
        make: string;
        model: string;
        year: number;
        vin: string;
        regisNumber: string;
        owner: Owner;
        displayVehicle(): void;
    }
    class Vehicle implements IVehicle {
        private _make;
        private _model;
        private _year;
        private _vin;
        private _regisNumber;
        private _owner;
        constructor(carMake: string, carModel: string, carYear: number, carVin: string, carRegisNumber: string, carOwner: Owner);
        set make(carmake: string);
        set model(carmodel: string);
        set year(caryear: number);
        set vin(carvin: string);
        set regisNumber(regisNumber: string);
        set owner(carowner: Owner);
        get make(): string;
        get model(): string;
        get year(): number;
        get vin(): string;
        get regisNumber(): string;
        get owner(): Owner;
        displayVehicle(): void;
    }
    class VehicleOwner implements Owner {
        private _lastName;
        private _firstName;
        private _middleName;
        private _birthDate;
        private _docType;
        private _docSeries;
        private _docNumber;
        constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, docType: DocType, docSeries: string, docNumber: string);
        set lastName(lastName: string);
        set firstName(firstName: string);
        set middleName(middleName: string);
        set birthDate(birthDate: Date);
        set docType(docType: DocType);
        set docSeries(docSeries: string);
        set docNumber(docNumber: string);
        get lastName(): string;
        get firstName(): string;
        get middleName(): string;
        get birthDate(): Date;
        get docType(): DocType;
        get docSeries(): string;
        get docNumber(): string;
        displayOwner(): void;
    }
    interface Car extends IVehicle {
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
        constructor(carMake: string, carModel: string, carYear: number, carVin: string, carRegisNumber: string, carOwner: Owner, bodyType: BodyType, carClass: CarClass);
        displayVehicle(): void;
    }
    interface IMotorbike extends IVehicle {
        frameType: string;
        isSport: boolean;
    }
    class Motorbike implements IMotorbike {
        private _make;
        private _model;
        private _year;
        private _vin;
        private _regisNumber;
        private _owner;
        private _frameType;
        private _isSport;
        constructor(make: string, model: string, year: number, vin: string, regisNumber: string, owner: Owner, frameType: string, isSport: boolean);
        get make(): string;
        get model(): string;
        get year(): number;
        get vin(): string;
        get regisNumber(): string;
        get owner(): Owner;
        get frameType(): string;
        get isSport(): boolean;
        displayVehicle(): void;
    }
    interface VehicleStorage<T extends IVehicle> {
        creationDate: Date;
        vehicles: T[];
        getAllVehicles(): T[];
    }
    class VehicleStorageImpl<T extends IVehicle> implements VehicleStorage<T> {
        creationDate: Date;
        vehicles: T[];
        constructor();
        addVehicle(vehicle: T): void;
        getAllVehicles(): T[];
    }
}
