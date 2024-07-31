# TypeScript Basics Notes

This repository contains examples of TypeScript basic `types`, `enums`, `objects`, `type assertions`, `functions`, `interfaces`, `classes`, `subclasses`, `generics` and `structural typing or duck typing`. The examples provided cover a variety of fundamental TypeScript concepts and features.

## Table of Contents

- [Basic Types](#basic-types)
- [Tuples](#tuples)
- [Union Types](#union-types)
- [Enums](#enums)
- [Objects](#objects)
- [Type Assertion](#type-assertion)
- [Functions](#functions)
- [Interfaces](#interfaces)
- [Classes](#classes)
- [Subclasses](#subclasses)
- [Generics](#generics)
- [Structural Typing](#structural-typing)

## Basic Types
- Basic types in TypeScript include `number`, `string`, `boolean`, and `any`.  
- They define the type of a variable, ensuring it holds only a specific type of data.
```typescript
let id: number = 5;
let company: string = "ABC";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, true, "Hello"];
```

## Tuples
- Tuples are a typed array with a pre-defined length and types for each index.
- They allow you to store multiple values of different types in a single variable.
```typescript
// Tuple
let person: [number, string, boolean] = [1, "Arnab", true];

// Tuple array
let employee: [number, string][];

employee = [
  [1, "A"],
  [1, "B"],
  [1, "C"],
];
```

## Union Types
- Union types allow a variable to be of more than one type.
- They provide flexibility by allowing variables to hold multiple types of values.
```typescript
let pid: string | number;
pid = "22";
```
## Enums
- Enums are a way to define a set of named constants.
- They make it easier to document and use sets of related constants.
```typescript
// Enums
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
```
## Objects
- Objects in TypeScript can be defined using types.
- They define the shape of an object, ensuring that all required properties are present with the correct types.

```typescript
// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};
```

## Type Assertion
- Type assertion allows you to override the type inferred by TypeScript.
- They provide a way to tell the compiler about the type of a variable when you know more about it than TypeScript does.
```typescript
// Type Assertion
let cid: any = 1;
let customerId = cid as number;
```
## Functions
- Functions can have their argument types and return type specified.
- They ensure that functions are called with the correct number and types of arguments and that they return the expected type.
```typescript
// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

function log(message: string | number): void {
  console.log(message);
}
```
## Interfaces
- Interfaces define the structure that an object should follow.
- They provide a way to define contracts within your code, ensuring consistency and correctness.
```typescript
interface UserInterFace {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterFace = {
  id: 1,
  name: "Arnab",
};

// Functional Interface
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
```
## Classes
- Classes are used to create objects with properties and methods.
- They provide a blueprint for creating objects with predefined properties and methods, supporting object-oriented programming.
```typescript
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
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brad Manna");
```
## Subclasses
- Subclasses are classes that inherit properties and methods from another class.
- They enable code reuse and the creation of hierarchical relationships between classes
```typescript
// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Bellingham", "Developer");
```
## Generics
- Generics allow you to create reusable components that work with a variety of types.
- They provide a way to create flexible and reusable components.
```typescript
// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["a", "B", "C"]);

// Example with generics
interface IPost {
  title: string;
  id: number;
  description: string;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

const fetchUserData = async (path: string): Promise<IUser[]> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

(async () => {
  const posts = await fetchData<IPost[]>("/users");
})();
```
## Structural Typing
- Structural typing is a way of relating types based solely on their members.
- They allow the comparison of different types based on their structure rather than their explicit names or definitions.
```typescript
// Structural Typing or Duck Typing
interface ICredential {
  username: string;
  password: string;
  isAdmin?: boolean;
}

const login = (credentials: ICredential): boolean => {
  console.log(credentials);
  return true;
};

const user: ICredential = {
  username: "arnab",
  password: "secret",
  isAdmin: true,
};

login(user);

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
```
---

You can copy and paste this content into your `README.md` file in your GitHub repository.
