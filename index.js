// Scooter Constructor
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

// Driver Constructor
function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience; // years of experience
}

// PickupLocation Constructor
function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}
const scooter1 = new Scooter(2022, "red", "Honda");
console.log(scooter1); 
// Output: Scooter { year: 2022, color: 'red', model: 'Honda' }

const driver1 = new Driver("Alice", 30, 5);
console.log(driver1); 
// Output: Driver { name: 'Alice', age: 30, experience: 5 }

const location1 = new PickupLocation("123 Main St", "New York");
console.log(location1); 
// Output: PickupLocation { address: '123 Main St', city: 'New York' }
