"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Basic types
let id = 5;
let company = "ABC";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// tuple
let person = [1, "Arnab", true];
//tuple array
let employee;
employee = [
    [1, "A"],
    [1, "B"],
    [1, "C"],
];
//Union
let pid;
pid = "22";
// enums
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 1] = "Up";
    direction1[direction1["Down"] = 2] = "Down";
    direction1[direction1["Left"] = 3] = "Left";
    direction1[direction1["Right"] = 4] = "Right";
})(direction1 || (direction1 = {}));
console.log(direction1.Left);
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["Down"] = "Down";
    direction2["Left"] = "Left";
})(direction2 || (direction2 = {}));
console.log(direction2.Left);
const user = {
    id: 1,
    name: "John",
};
//Type Assertion
let cid = 1;
//let customerId =  <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Arnab",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Bellingham", "Developer");
//generics
// <T>basically it indiactes Placeholder type
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let StrArray = getArray(["a", "B", "C"]);
const fetchPostData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://example.com/${path}`);
    return response.json();
});
const fetchUserData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://example.com/${path}`);
    return response.json();
});
// to avoid repeatation
const fetchData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://example.com/${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    // const post = await fetchPostData('/posts');
    const posts = yield fetchData('/users');
}))();
const login = (credentials) => {
    console.log(credentials);
    return true;
};
const Users = {
    username: 'arnab',
    password: 'secret',
    isAdmin: true,
};
login(Users);
const auth = {
    username: 'arnab',
    password: 'secret',
    login(username, password) {
        return true;
    }
};
let num = 1;
