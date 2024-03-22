// Javascript Array reduce 高级用法
// 使用函数组合实现管道

//函数pipe的释义： 调用 pipe(fn1, fn2)给 pipe 传入多个参数,每一个参数都是一个函数, pipe将返回一个新函数
//这个新函数需要一个参数既的初始值。在这个新函数的中调用 array.reduce((acc, fn), initValue) array即是pipe的参数列表的数组。
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// 等同于如上代码
// function pipe(...functions) {
//     return function init(initialValue) {
//         return functions.reduce((acc, fn) => {
//             console.log(fn.name);
//             return fn(acc);
//         }, initialValue);
//     };
// }

// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
// const multiply9 = pipe(triple, triple);
// const multiply16 = pipe(quadruple, quadruple);
// const multiply24 = pipe(double, triple, quadruple);

// Usage
console.log(multiply6(6)); // 36
// multiply9(9); // 81
// multiply16(16); // 256
// multiply24(10); // 240