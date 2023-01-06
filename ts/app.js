"use strict";
// interface A {
//   name: string;
//   age: number;
// }
exports.__esModule = true;
// let obj: A = {
//   name: "zz",
//   age: 19,
// };
// console.log(obj);
// let any: any = {};
// let B: unknown = "123123123";
// let A: unknown = { b: 456 };
// B = A;
// any = B;
// let str: string = "123123";
//unkonw类型不能给别的类型赋值(除unknow,any外)
// interface Person {
//   readonly name: string;
//   age?: number;
//   cb(): number;
//   [propName: string]: any;
// }
// let p: Person = {
//   name: "张三",
//   abc: 123,
//   cb: (): number => {
//     return 123;
//   },
// };
// interface A {
//   name: string;
// }
// interface B extends A {
//   age: number;
// }
// let p: B = {
//   name: "John",
//   age: 123,
// };
// let arr: number[] = [1, 2, 3, 4];
// let arr2: string[] = ["1", "asd"];
// let arr3: boolean[] = [true, false];
// let arr4: any[] = [true, false, 1, "1", [], {}];
// let arr: Array<number> = [1,2,3,4];
// let arr2: Array<string> = ['1', 'asd']
// let arr3: Array<boolean> = [true, false]
// let arr: number[][][] = [[[]], [[]], [[]]];
// let arr: Array<Array<number | string>> = [
//   [1, 2, 3, "asd"],
//   [4, 5, 6],
// ];
// function Arr(...args: any): void {
//   console.log(arguments);
//   let arr: IArguments = arguments;
// }
// Arr(4, 5, "0");
// interface ArrNumber {
//   [index: number]: string;
// }
// let arr: ArrNumber = ["1", "2", "3"];
// const fn = function (name: string, age?: number): string {
//   return name + age;
// };
// let a = fn("张三",18);
// console.log(a);
// interface User {
//   name: string;
//   age: number;
// }
// const fn = function (user: User): User {
//   return user;
// };
// let a = {
//   name: "张三",
//   age: 18,
// };
// console.log(a);
//函数重载
// function fn(params: number): void;
// function fn(params: string, params2: number): void;
// function fn(params: any, params2?: any) {
//   console.log(params, params2);
// }
// fn("1", 1);
// let phone: number | string = 1124124123
// 联合类型
// let fn = function (type: number | boolean): boolean {
//   return !!type;
// };
// let result = fn(1);
// console.log(result);
//交叉类型
// interface People {
//   name: string;
//   age: number;
// }
// interface Man {
//   sex: number;
// }
// const xiaozhan = (man: People & Man): void => {
//   console.log(man);
// };
// xiaozhan({
//   name: "Xiaozhan",
//   age: 19,
//   sex: 1,
// });
//类型断言
// let fn = function (num: number | string): void {
//   console.log((num as string).length);
// };
// fn("123455");
// fn(123456);
// interface A {
//   run: string;
// }
// interface B {
//   build: string;
// }
// let fn = (type: A | B): void => {
//   //(type as A) 也可写成  (<A>type)
//   console.log((type as A).run);
// };
// fn({
//   build: "123",
// });
// fn({
//   run: "456",
// });
// const fn = (type: any): boolean => {
//   return type as boolean;
// };
// let bbb = fn(1);
// console.log(bbb);结果为1,不是boolean类型
// class Person {
//   // 公有变量,都能访问
//   public name: string;
//   // 私有变量,只能在内部访问
//   private age: number;
//   // 内部和子类能访问
//   protected sub: boolean;
//   // 静态属性,外部可以直接访问
//   static aaa = "123124";
//   constructor(name: string, age: number, sub: boolean) {
//     this.name = name;
//     this.age = age;
//     this.sub = sub;
//     //调用不了静态函数this,run()
//   }
//   // 静态函数,可以访问静态属性,不能访问内部属性
//   // 静态函数可以相互调用
//   static run() {
//     console.log(this.aaa);
//     console.log(this.dev());
//     return "789";
//   }
//   static dev() {
//     return "dev";
//   }
// }
// //Person子类
// class Man extends Person {
//   constructor() {
//     super("占", 20, false);
//   }
// }
// let p = new Person("占", 20, false);
// // console.log(p.name); //结果为'占'
// // console.log(Person.aaa); //结果为'123124'
// console.log(Person.run());
// 接口约束类
// interface Person {
//   run(type: boolean): boolean;
// }
// interface H {
//   set(): void;
// }
// class A {
//   params: string;
//   constructor(params) {
//     this.params = params;
//   }
// }
// class Man extends A implements Person, H {
//   run(type: boolean): boolean {
//     return type;
//   }
//   set() {}
// }
//抽象类,不可实例化
// abstract class A {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   setName(name: string) {
//     this.name = name;
//   }
//   //抽象函数,不可实现
//   abstract getName(): string;
// }
// class B extends A {
//   constructor() {
//     super("占");
//   }
//   getName(): string {
//     return this.name;
//   }
// }
// let b = new B();
// b.setName("占2");
// console.log(b.getName());
//元组:被约束的数组
// let arr: [string, number] = ["占", 19];
// arr.push(12, "12121");
// console.log(arr); //结果为['占', 19, 12, '12121']
// let excel: [string, string, number][] = [["title", "name", 1]];
//枚举类型(数字,字符串,异构,接口,const)
var Color;
(function (Color) {
    Color["red"] = "red";
    Color["green"] = "green";
    Color["blue"] = "blue";
})(Color || (Color = {}));
console.log(Color.red);
console.log(Color.green);
console.log(Color.blue);
//异构
var Bool;
(function (Bool) {
    Bool[Bool["yes"] = 1] = "yes";
    Bool["no"] = "no";
})(Bool || (Bool = {}));
console.log(Bool.yes);
console.log(Bool.no);
var obj = {
    red: 2
};
var code = 0;
if (code === 0 /* Types.success */) {
}
