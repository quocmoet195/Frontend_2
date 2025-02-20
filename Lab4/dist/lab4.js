export var Data;
(function (Data) {
    let Personnel;
    (function (Personnel) {
        class Employee {
            constructor(name) {
                this.name = name;
            }
        }
        Personnel.Employee = Employee;
    })(Personnel = Data.Personnel || (Data.Personnel = {}));
})(Data || (Data = {}));
console.log("test lab 4");
