const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliSeconds = date.getMilliseconds();

console.log(`Current Date is : ${hours}:${minutes}:${seconds}:${milliSeconds}`);



//? loops in js


const obj = {
    Name: "Amandeep Singh",
    Age: 22,
    Role: "Frontend Developer"
};

for (const key in obj) {
    console.log(`${key}:${obj[key]}`);
}


const arr = ["BMW", 'Ferrari', "Mercedes", "Thar"];

for (const key of arr) {
    console.log(`Cars Name:- ${key}`);
}