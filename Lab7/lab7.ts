//Вариант №1.
interface TransportVehicle {
    vin: string;
    brand: string;
    ownerLastName: string;
    ownerFirstName: string;
    ownerMiddleName: string;
    registrationNumber: string;
}

interface IStorage {
    getVehicles(): TransportVehicle[];
    sortByBrand(): TransportVehicle[];
    filterByOwnerLastName(lastName: string): TransportVehicle[];
}

class CStorage implements IStorage {
    private vehicles: TransportVehicle[] = [
        { vin: "VIN1", brand: "BMW", ownerLastName: "Иванов", ownerFirstName: "Иван", ownerMiddleName: "Иванович", registrationNumber: "А111АА" },
        { vin: "VIN2", brand: "Audi", ownerLastName: "Петров", ownerFirstName: "Петр", ownerMiddleName: "Петрович", registrationNumber: "Б222ББ" },
        { vin: "VIN3", brand: "Mercedes", ownerLastName: "Сидоров", ownerFirstName: "Сидор", ownerMiddleName: "Сидорович", registrationNumber: "В333ВВ" },
        { vin: "VIN4", brand: "bmw", ownerLastName: "Иванов", ownerFirstName: "Иван", ownerMiddleName: "Иванович", registrationNumber: "Г444ГГ" },
    ];

    getVehicles(): TransportVehicle[] {
        return this.vehicles;
    }

    // Задание 1
    sortByBrand(): TransportVehicle[] {
        return this.vehicles.sort((a, b) => a.brand.localeCompare(b.brand));
    }

    // Задание 2
    filterByOwnerLastName(lastName: string): TransportVehicle[] {
        const lowerLastName = lastName.toLowerCase();
        return this.vehicles.filter(vehicle => vehicle.ownerLastName.toLowerCase() === lowerLastName);
    }
}

class TransportVehicleClass {
    private vehicle: TransportVehicle;

    constructor(vehicle: TransportVehicle) {
        this.vehicle = vehicle;
    }

    // Задание 3
    getShortInfo(): string {
        const fullName = `${this.vehicle.ownerLastName} ${this.vehicle.ownerFirstName} ${this.vehicle.ownerMiddleName}`;
        return `VIN: ${this.vehicle.vin}, Владелец: ${fullName}, Номер: ${this.vehicle.registrationNumber}`;
    }
}



const my_storage = new CStorage();

const sortedVehicles = my_storage.sortByBrand();
console.log("Отсортированные транспортные средства:", sortedVehicles);

const filteredVehicles = my_storage.filterByOwnerLastName("иванов");
console.log("Транспортные средства с фамилией Иванов:", filteredVehicles);

const myVehicle: TransportVehicle = { vin: "VIN5", brand: "Toyota", ownerLastName: "Смирнов", ownerFirstName: "Алексей", ownerMiddleName: "Петрович", registrationNumber: "Е555ЕЕ" };

const vehicleClass = new TransportVehicleClass(myVehicle);
const shortInfo = vehicleClass.getShortInfo();
console.log("Краткая информация о транспортном средстве:", shortInfo);