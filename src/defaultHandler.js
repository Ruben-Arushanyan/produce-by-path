/**
 * Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

const DEFAULT_HANDLER = {
    call: (path, args) => { 
        return {
            path,
            args,
        }
    },
    toPrimitive: (path, hint) => {
        return path.join('/')
    }
}


module.exports = {
    DEFAULT_HANDLER,
}