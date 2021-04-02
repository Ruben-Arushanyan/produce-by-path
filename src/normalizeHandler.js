/**
 * Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

const {
  isFunction,
  isObject,
  isSubset,
} = require('./utils')

const {
    DEFAULT_HANDLER,
} = require('./defaultHandler')


const normalizeHandler = (handler) => {
    // if handler is not object throw a TypeError exception
    if (!isObject(handler)) {
        throw new TypeError('Cannot create ProduceByPath with a non-object as handler')
    }

    // if the handler has wrong keyed trap throw a TypeError exception
    const handler_keys = Object.keys(handler)
    const default_handler_keys = Object.keys(DEFAULT_HANDLER)
    if (!isSubset(default_handler_keys, handler_keys)) {
        throw new TypeError(`Handler must be have only this traps (${default_handler_keys.join(', ')})`)
    }

    // if trap is not function throw a TypeError exception
    const traps = Object.entries(handler)
    traps.forEach(([key, value]) => {
        if (!isFunction(value)) {
            throw TypeError(`[[${key}]] trap is not a function`)
        }
    })

    return {
        ...DEFAULT_HANDLER,
        ...handler,
    }
}


module.exports = {
    normalizeHandler,
}