//  ? BASIC ARRAY METHODS IN JAVASCRIPT

// *  Array Length Method.

const arr1 = [10, 20, 30, 40, 50];
const size = arr1.length;
console.log('Length of Array ', size);

// * JavaScript Array toString()

const arr = [10, 20, 30, 40, 50];
const string = arr1.toString();
console.log(string);

// * JavaScript Array at()

const array = [10, 20, 30, 40, 50];
const array1 = arr1.at(3);
console.log(array1);

// * JavasCript Array join()

const array2 = [10, 20, 30, 40, 50];
const join = array2.join(" * ");
console.log(join);


// *  JavaScript Array pop()

const num = [10, 20, 30, 40, 50];
const num1 = num.pop();
console.log(num);


// * JavaScript Array push()

const num2 = [10, 20, 30, 40, 50];
const num3 = num2.push(60);
console.log(num2);


// * JavaScript Array shift()

const fruits = ["Apple", "Banana", "Mango"];
fruits[2] = fruits.shift();
console.log(fruits);


// * JavaScript Array unshift()

const fruit = ["Apple", "Banana", "Mango"];
fruit.unshift("Orange")
console.log(fruit);

// * JavaScript Array concat()

const one = ["Apple", "Mango"];
const two = [10, 20, 30];

const three = one.concat(two);
console.log(three);
console.log(typeof (three));

// * JavaScript Array flat()

const myArr = [[10, 20], [30, 40, 50]];
const newArr = myArr.flat();
console.log('flat array', newArr);


// * JavaScript Array splice()

const arrayOne = [10, 20];
arrayOne.splice(2, 0, 30, 40);
console.log(arrayOne);


const ar = [10, 20];
ar.splice(1, 1);
console.log(ar);

// * JavaScript Array toSpliced()

const ar1 = [10, 20, 30];
const spliced = ar1.toSpliced(0, 1);
console.log(spliced);
console.log(ar1);


// * JavaScript Array slice()

const arr0 = [10, 20, 30, 40, 50, 'Banana', "Apple"];
const circus = arr0.slice(2, 6);
console.log(arr0.length);
console.log('Slice Method ', circus);
console.log(arr0);


const pose = [10, 20, 30];
const pose2 = pose.includes(40)
console.log(pose2);


// * JavaScript Array find() and findIndex() method


const ps = [10, 40, 50];
// const first = ps.findIndex(test);
const first = ps.find(test);

function test(value, index) {
    return value >= 18;
}

console.log(first);


// * JavaScript ForEach() Method

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];
// let sum = 0;
numbers.forEach(function (value) {
    // sum += value;// squared values
});

console.log(doubledNumbers);
// console.log(sum);


// * JavaScript flatMap() Method

const x = [10, 20, 30];
const y = x.flatMap(num => [num * 2, num * 3])
console.log("flatMap Array", y);
console.log(x);


// * JavaScript f;ilter() Method

const z = [10, 20, 30, 40, 50, 60];
const newz = z.filter(function (value) {
    return value % 3 === 0;
});
console.log(newz);


// * Javascript map() method

const users = [
    {
        name: "Amandeep Singh",
        age: 21
    },
    {
        name: "John Doe",
        age: 25
    },
    {
        name: "Alice Smith",
        age: 30
    },
    {
        name: "Bob Johnson",
        age: 28
    },
    {
        name: "Eva Brown",
        age: 22
    }
];

const usersList = users.map(user => `Name of User ${user.name} & Age is ${user.age}`)
console.log(usersList.join('\n'));


// * Javascript reduce() Method

const numb = [10, 20, 30, 40];

let sums = numb.reduce(function (total, value) {
    return total + ',' + value;
}, 0);

console.log(sums);

// * Javascript map() Method


let phone = [10, 20, 30, 40, 50];

let updatePhone = phone.map(function (index, value) {
    return index + value;
});

console.log(updatePhone);






















