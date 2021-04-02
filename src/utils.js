/**
* Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
* 
*/

const isFunction = (x) => typeof x === 'function'
const isSymbol = (x) => typeof x === 'symbol'
const isObject = (x) => (typeof x === 'object') && (x !== null)
const isSubset = (setArr, subsetArr) => subsetArr.every(val => setArr.includes(val))


module.exports = {
  isFunction,
  isSymbol,
  isObject,
  isSubset,
}

