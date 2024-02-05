//  ? BASIC ARRAY METHODS IN JAVASCRIPT

// *  Array Length Method.

const arr1 = [10, 20, 30, 40, 50, 60];
const size = arr1.length;
console.log('Length of Array ', size);

// * JavaScript Array toString()

const arr = [10, 20, 30, 40, 50];
const string = arr.toString();
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
//& it pop the last element from array.

const num = [10, 20, 30, 40, 50];
const num1 = num.pop();
console.log(num);


// * JavaScript Array push()
//& its add the element at last in the array.

const num2 = [10, 20, 30, 40, 50];
const num3 = num2.push(60);
console.log(num2);


// * JavaScript Array shift()
//& Its removes the first array element in the given array.

const fruits = ["Apple", "Banana", "Mango"];
fruits.shift();
console.log(fruits);


// * JavaScript Array unshift()
//& Its add the array element at first in given array.

const fruit = ["Apple", "Banana", "Mango"];
fruit.unshift("Orange")
console.log(fruit);

// * JavaScript Array concat()

const one = ["Apple", "Mango"];
const two = [10, 20, 30];

const three = one.concat(fruits);
console.log(three);
console.log(typeof (three));

// * JavaScript Array flat()

const myArr = [[10, 20], [30, 40, 50], [60, 70, 80, 90, 100]];
const newArr = myArr.flat();
console.log('flat array', newArr);


// * JavaScript Array splice()

const arrayOne = ['hi', 'there', 'i', 'am', 'Frontend', 'Developer'];
arrayOne.splice(6, 0, 'and', 'Backend', 'Developer');
console.log(arrayOne);


// * JavaScript Array toSpliced()
//& Its works like Slice() method but with  one difference is it doesn't change the original array.

const ar1 = ['Black', 'orange', 'red', 'pink'];
const spliced = ar1.toSpliced(0, 0, 'Lavender');
console.log(spliced);
console.log(ar1);


// * JavaScript Array slice()

const arr0 = [10, 20, 30, 40, 50, 'Banana', "Apple"];
const circus = arr0.slice(2, 6);
console.log(arr0.length);
console.log('Slice Method ', circus);
console.log(arr0);

// * includes method in js

const pose = [10, 20, 30];
const pose2 = pose.includes(40)
console.log(pose2);

//* indexOf() method in js

const index = pose.indexOf(20);
console.log(index);

//* lastIndexOf() method in js
const lastindex = pose.lastIndexOf(40);
console.log(lastindex);

// * JavaScript Array find() and findIndex() method

const colors = [20, 40, 60, 80, 100];
const passTest = colors.findIndex(test)

function test(value) {
    return value > 40
}
console.log(passTest);


// * JavaScript ForEach() Method

const element = [1, 2, 3, 4, 5];

element.forEach((item, index, array) => {
    array[index] = item * item;
});

console.log(element);



// * JavaScript flatMap() Method

const x = [10, 20, 30];
const y = x.flatMap(num => [num * 2, num * 3])
console.log("flatMap Array", y);
console.log(x);


// * JavaScript filter() Method

const z = [10, 20, 30, 40, 50, 60];
const newz = z.filter(function (value) {
    return value % 3 === 0;
});
console.log(newz);
console.log(z);


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

const usersList = users.map(user => `Name of User : ${user.name} , Age : ${user.age}`)
console.log(usersList.join('\n'));


// * Javascript reduce() Method

const numb = [10, 20, 30, 40];

let sums = numb.reduce(function (acc, curr) {
    return acc + curr;
}, 0);

console.log(sums);

//& 2nd example of reduce method in js

const phal = ['Banana', 'Lemon', 'Mango', 'Lemon', 'Apple', 'Banana', 'Apple', 'Lemon'];

const phalCount = phal.reduce((count, phal) => {
    count[phal] = (count[phal] || 0) + 1;
    return count;
}, {});

console.log(phalCount);

// * Javascript map() Method


let phone = [10, 20, 30, 40, 50];

let updatePhone = phone.map(function (index, value) {
    return index + value;
});

console.log(updatePhone);
