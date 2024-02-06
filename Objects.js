
//Factory Function 

function userDetails(Name, Age, Role) {
    return {
        Name: Name,
        Age: Age,
        getDetails: function () {
            return `Name :- ${Name} is ${Age} Years Old.`;
        }
    }
}
const person1 = userDetails("Amandeep singh", 22);
console.log(person1.getDetails());
console.log(person1.constructor);



// Constructor function

function Person(name, age) {
    this.name = name,
        this.age = age,
        this.role = function () {
            return `${name} is a Frontend Developer.`
        }
}

const person = new Person("Amandeep", 22);
console.log(person.name + " " + person.age);
console.log(person.constructor);



// Functions are Objects

const Person_1 = new Function('name', 'age', ` this.name = name,
this.age = age,
this.role = function () {
    console.log("Done");
}`)

const person_2 = new Person_1("Amandeep Singh", 22);
console.log(person_2);
person_2.role();