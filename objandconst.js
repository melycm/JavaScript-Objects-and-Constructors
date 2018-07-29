function Person(name, email, phone) { 
    this.name = name; 
    this.email = email; 
    this.phone = phone; 
} 

Person.prototype.greet = function(other) { 
    console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
};
// prints the greetings from one to other
var sonny = new Person ('Sonny', 'sonny@hotmail.com', '483-485-4948');
var jordan = new Person ('Jordan', 'jordan@aol.com', '495-586-3456');

sonny.greet(jordan);
jordan.greet(sonny);

// prints email and phone from sonny
var myArray = [sonny, jordan];

console.log(myArray[0].email);
console.log(myArray[0].phone);

//prints contact info from jordan 
console.log(myArray[1]);
