/**
 * Basic Type
 */

let car = "Toyota";
let bike: string;
bike = "winner";
// number
let num: number = 10;

// boolean
let isLoading: boolean = false;

// undefined
// let body = undefined;

let footer: null;
// any có thể gán bất kỳ giá trị nào.
let person: any;
person = 10;
person = "20";

// Object

// let house = {

// }

let house: {
  address: string;
  color?: string;
} = {
  address: "",
};

house.address = "Danang";

// Array

let products: any[] = [];

products.push(1);

let names = ["Alex", "Ben"];
let addresses: string[] = [];
addresses.push("hai");

let numbers: number[] = [];
numbers = [1, 2, 3];

// Oject array

let people: {
  name: string;
  age: number;
}[] = [];

people.push({
  name: "Ducky",
  age: 23,
});

// Function

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

sum(1, 2);

const sub: (num1: number, num2: number) => number = (
  num1: number,
  num2: number
) => num1 - num2;

const handle = () => {
  console.log(123);
};

// Union

let price: string | number;
price = 10;
price = "Hai Muoi";

let body: { name: string } | { firstName: string } = {
  name: "Phuong",
};

enum Sizes {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

let size = Sizes.S;

// interface State {
//   name: string;
//   isLoading: boolean;
// }

// let state: State = {
//   name: "phuong",
//   isLoading: true,
// };

type State = {
  name: string;
  isLoading: boolean;
};

let state: State = {
  name: "phuong",
  isLoading: true,
};

type Name = {
  name: string;
};
type Age = {
  age: number;
};

// type Person = Name & Age;

const handleClick = <Type>(value: Type) => value;

let value = 100;
handleClick<string>("100");

// Class

class Person1 {
  name: string;
  age: number;
  readonly money: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  handle() {}
}

const alex = new Person1("Alex", 20);
alex.name;
