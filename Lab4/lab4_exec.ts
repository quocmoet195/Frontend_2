import {Transport} from "./lab4.js";
import DocType=Transport.DocType;
import BodyType=Transport.BodyType;
import CarClass=Transport.CarClass;
import Owner=Transport.Owner;
import IVehicle=Transport.IVehicle;
import Vehicle=Transport.Vehicle;
import VehicleOwner=Transport.VehicleOwner;
import Car=Transport.Car;
import Motorcar=Transport.Motorcar;
import IMotorbike=Transport.IMotorbike;
import Motorbike=Transport.Motorbike;
import VehicleStorage=Transport.VehicleStorage;
import VehicleStorageImpl=Transport.VehicleStorageImpl;

const owner = new VehicleOwner(
    "Quoc",
    "Tran",
    "Van",
    new Date(2002, 4, 19),
    DocType.passport,
    "123456",
    "567890"
);

const bike = new Motorbike(
    "Yamaha",
    "YZF-R1",
    2023,
    "1YVHZ8CBX5M123456",
    "B456CD",
    owner,
    "Спортивная",
    true
);


console.log("-------------------------------");
bike.displayVehicle();

const vehicleStorage = new VehicleStorageImpl<Vehicle>();

const car_toyota = new Vehicle("Toyota", "Camry", 2022, "1HGCM82633A123456", "A123BC", owner);
const car_honda = new Vehicle("Honda", "Civic", 2023, "1HGCM82633A654321", "B456CD", owner);

vehicleStorage.addVehicle(car_toyota);
vehicleStorage.addVehicle(car_honda);

const allVehicles = vehicleStorage.getAllVehicles();
console.log("-------------------------------");
console.log("Все автомобили в хранилище:");
allVehicles.forEach(vehicle => vehicle.displayVehicle());
