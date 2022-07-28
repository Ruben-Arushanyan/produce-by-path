/**
* Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
* 
*/

const ProduceByPath = require('../.packed')

/* producer instances */
const instance1 = new ProduceByPath({
    call: (path, args) => ({
        path,
        args,
    }),
    toPrimitive: (path, hint) => path.join('-')
})



/* start testing */
test('Main Cases Test', () => {

    expect(String(instance1.I.love.you))
	.toBe('I-love-you')

    expect(instance1.I.love.you(1, 2, 3))
	.toEqual({
		path: ['I', 'love', 'you'],
		args: [1, 2, 3],
	})
})


test('Risky Cases Test', () => {
    expect(String(instance1)).toBe('')
    
    expect(instance1()).toEqual({
        path: [],
        args: [],
    })

    expect(instance1('arg1', 'arg2')).toEqual({
        path: [],
        args: ['arg1', 'arg2'],
    })
    
})
/* end testing */
