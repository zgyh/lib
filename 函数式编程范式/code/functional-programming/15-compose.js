//模拟 loadsh 中的 flowRight

// const _ = require('lodash');

const reverse = arr => arr.reverse(arr)
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()


// function compose (...args) {
//   return function (value) {
//     return args.reverse().reduce(function (acc, fn) {
//       return fn(acc)
//     }, value)
//   }
// }

const compose = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value)

const f = compose(toUpper, first, reverse)
console.log(f(['one', 'two', 'three'])); 