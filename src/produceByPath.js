/**
 * Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

const {
  isSymbol,
} = require('./utils')

const {
    normalizeHandler,
} = require('./normalizeHandler')


const getProxyTarget = (handler, path) => {
    const {
        call,
        toPrimitive,
    } = handler

    const target = (...args) => call(path, args)

	Object.defineProperties(target, {
		[Symbol.toPrimitive]: {
			value: (hint) => toPrimitive(path, hint),
			enumerable: false,
		},
		toString: {
			value: () => target[Symbol.toPrimitive]('string'),
			enumerable: false
		},
		valueOf: {
			value: () => target[Symbol.toPrimitive]('number'),
			enumerable: false,
		}
	})

    return Object.freeze(target)
}


const createProducer = (handler, path) => {
    const target = getProxyTarget(handler, path)

    return new Proxy(target, {
        get(target, prop) {
            if (isSymbol(prop) || ['toString', 'valueOf'].includes(prop)) {
                return target[prop]
            }
            return createProducer(handler, [...path, prop])
        }
    })
}

function ProduceByPath(handler) {
    handler = normalizeHandler(handler)
    return createProducer(handler, [])
}

module.exports = ProduceByPath
