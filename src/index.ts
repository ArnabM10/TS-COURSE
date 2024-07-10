//Basic types
let id: number = 5;
let company: string = "ABC";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, true, "Hello"];

// tuple
let person: [number, string, boolean] = [1, "Arnab", true];

//tuple array
let employee: [number, string][];

employee = [
  [1, "A"],
  [1, "B"],
  [1, "C"],
];

//Union

let pid: string | number;
pid = "22";

// enums

enum direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(direction1.Left);

enum direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
}

console.log(direction2.Left);

// objects

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

//Type Assertion

let cid: any = 1;
//let customerId =  <number>cid

let customerId = cid as number;

//Functions

function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

function log(message: string | number): void {
  console.log(message);
}

//Interfaces

interface UserInterFace {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterFace = {
  id: 1,
  name: "Arnab",
};

// user1.id = 5 this one will be throw an error because we have intiliazed the id as 'readonly'
/*

interface Point = number | string
const p1 : Point  = 1

We can not use user interface in Union

if  we want to make a optional property the property format will be :
 age ? :  24

*/

//Functional Interface

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

const sub: MathFunc = (x: number, y: number): number => x - y;

// classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name}  is now registered`;
  }
}

const brad = new Person(1, "Brad Manna");

//SubClasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Bellingham", "Developer");

//generics

// <T>basically it indiactes Placeholder type
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let StrArray = getArray<string>(["a", "B", "C"]);

/// generics example 1
interface IPost {
  title: string;
  id: number;
  description: string;
}

interface Iuser {
  id: number;
  name: string;
  age: number;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

const fetchUserData = async (path: string): Promise<Iuser[]> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

// to avoid repeatation
const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

(async () => {
  // const post = await fetchPostData('/posts');
  const posts = await fetchData<IPost[]>("/users");
})();

// structral typing or Duck Typing
interface ICreadential {
  username: string;
  password: string;
  isAdmin?: boolean;
}

const login = (credentials: ICreadential): boolean => {
  console.log(credentials);
  return true;
};

const Users: ICreadential = {
  username: "arnab",
  password: "secret",
  isAdmin: true,
};

login(Users);

interface IAuth {
  username: string;
  password: string;
  login(username: string, password: string): boolean;
}

const auth: IAuth = {
  username: "arnab",
  password: "secret",
  login(username: string, password: string) {
    return true;
  },
};

let num = 1;
