// interface A {
//   name: string;
//   age: number;
// }

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

//枚举类型(数字,字符串,异构,接口,const,反向映射)
// enum Color {
//   red = "red",
//   green = "green",
//   blue = "blue",
// }
// console.log(Color.red);
// console.log(Color.green);
// console.log(Color.blue);
// //异构
// enum Bool {
//   yes = 1,
//   no = "no",
// }
// console.log(Bool.yes);
// console.log(Bool.no);
// //接口
// interface A {
//   red: Bool.yes;
// }
// let obj: A = {
//   red: 2,
// };
// //const
// const enum Types {
//   success,
//   fail,
// }
// let code: number = 0;
// if (code === Types.success) {
// }
// //反向映射,不支持字符串
// enum Type {
//   success = 456,
// }
// let success: number = Type.success;
// let key = Type[success];
// console.log(`value: ${success},key: ${key}`);

//类型推论
// let string = "占";
// let a;
//类型别名
// type s = string;
// let str: s = "占 ";

// type s = string | number;
// let str: s = "占";
// let num: s = 123;

// type cb = () => string;
// const fn: cb = () => "占";

// type T = 'off' | 'on' | false | number
// let str: T = 5

//never类型
// type bbb = string & number;

// function error(message: string):never{
//     throw new Error(message)
// }
// function loop():never{
//     while(true){
//     }
// }
//用never类型检查代码是否出错
// interface A {
//   type: "保安";
// }
// interface B {
//   type: "草莓";
// }
// interface C {
//   type: "菜菜";
// }
// type All = A | B | C;
// function type(val: All) {
//   switch (val.type) {
//     case "保安":
//       break;
//     case "草莓":
//       break;
//     case "菜菜":
//       break;
//     default:
//       const check: never = val;
//       break;
//   }
// }
// symbol类型
// let s: symbol = Symbol("二蛋");
// let num: symbol = Symbol("二蛋");
// console.log(s === num); //结果为false,内存地址指针位置不同,所以是唯一值

// let obj = {
//   [num]: "value", //symbol
//   [s]: "草莓", //symbol
//   name: "占",
//   sex: "男",
// };
// for (let key in obj) {
//   console.log(key); // name sex
// }
// console.log(Object.keys(obj)); //['name', 'sex']
// console.log(Object.getOwnPropertyNames(obj)); //['name', 'sex']
// console.log(JSON.stringify(obj)); //{"name":"占","sex":"男"}
// // 如何拿到symbol
// console.log(Object.getOwnPropertySymbols(obj)); //[ Symbol(二蛋), Symbol(二蛋) ]
// console.log(Reflect.ownKeys(obj)); //[ 'name', 'sex', Symbol(二蛋), Symbol(二蛋) ]
// console.log(obj[num]);
//  迭代器iterator,不支持对象
// type mapKeys = string | number;
// let arr: Array<number> = [4, 5, 6];
// let it: Iterator<number> = arr[Symbol.iterator]();
// console.log(it.next()); //{ value: 4, done: false }
// console.log(it.next()); //{ value: 5, done: false }
// console.log(it.next()); //{ value: 6, done: false }
// console.log(it.next()); //{ value: undefined, done: true }
// let set: Set<number> = new Set([1, 2, 3]);
// let map: Map<mapKeys, mapKeys> = new Map();
// map.set("1", "王爷");
// map.set("2", "皇上");
// function gen(erg: any) {
//   let it: Iterator<any> = erg[Symbol.iterator]();
//   let next: any = { done: false };
//   while (!next.done) {
//     next = it.next();
//     if (!next.done) {
//       console.log(next);
//     }
//   }
// }
// gen(map);
//生成器,不支持对象
// for (let item of set) {
//   console.log(item);
// }

//泛型
// function add<T>(a: T, b: T): Array<T> {
//   return [a, b];
// }
// console.log(add(1, 2));
// console.log(add("1", "2"));
// function sub<T, U>(a: T, b: U): Array<T | U> {
//   let arr: Array<T | U> = [a, b];
//   return arr;
// }
// sub(1, false);

//泛型约束
// interface Len {
//   length: number;
// }
// function getLength<T extends Len>(arg: T) {
//   return arg.length;
// }
// console.log(getLength("12312412"));

//泛型对象
// function prop<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }
// let o = { a: 1, b: 2, c: 3 };
// console.log(prop(o, "a"));

//泛型类
// class Sub<T> {
//   attr: T[] = [];
//   add(a: T): T[] {
//     return [a];
//   }
// }
// let s = new Sub<number>();
// s.attr = [12, 123, 1234, 32, 12];
// s.add(1);
// console.log(s);
// let str = new Sub<string>();
// str.attr = ["1", "2", "3"];
// str.add("4");
// console.log(str);

// 对象混入
// interface Name {
//   name: string;
// }
// interface Age {
//   age: number;
// }
// interface Sex {
//   sex: number;
// }
// let a: Name = { name: "占" };
// let b: Age = { age: 20 };
// let c: Sex = { sex: 1 };
// let obj = Object.assign(a, b, c);

//类混入
// class A {
//   type: boolean;
//   changeType(): void {
//     this.type = !this.type;
//   }
// }
// class B {
//   name: string;
//   getName(): string {
//     return this.name;
//   }
// }
// class C implements A, B {
//   type: boolean = false;
//   name: string = "占";
//   changeType: () => void;
//   getName: () => string;
// }
// mixins(C, [A, B]);
// function mixins(curClas: any, itemCls: any[]) {
//   itemCls.forEach((item) => {
//     Object.getOwnPropertyNames(item.prtotype).forEach((name) => {
//       console.log(name);
//       curClas.prototype[name] = item.prototype[name];
//     });
//   });
// }
// let ccc = new C();
// console.log(ccc.type);
// ccc.changeType();
// console.log(ccc.type);

//装饰器Decorator
const watcher = (name: string): ClassDecorator => {
  return (target: Function) => {
    // target.prototype.getName = <T>(name: T): T => {
    //   return name;
    // };
    target.prototype.getNames = () => {
      return name;
    };
  };
};
const log: ParameterDecorator = (...args) => {
  console.log(args);
};

class A {
  name!: string;
  constructor() {}

  getName(name: string, @log age: number) {
    return "213";
  }
}
// @watcher
// class B {}
let a = new A();

// let b = new B();
// console.log((<any>a).getNames());
