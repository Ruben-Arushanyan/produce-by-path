# Produce By Path

## Description
**`Produce By Path`** is a *design pattern*, which is used to dynamically produce values by using the path to which it is applied. This package helps us easily create and define producer instances.

## Installation

```bash
npm install produce-by-path
```

## Usage
```javascript
import ProduceByPath from "produce-by-path"
// CommonJS usage
// const ProduceByPath = require("produce-by-path")


// define producer instance to our liking :)
const instance = new ProduceByPath({
    call: (path, args) => {
        return ({
            path,
            args,
        })
    },
    toPrimitive: (path, hint) => {
        return path.join("--")
    }
})


//      Now we can apply the [[instance]] object with any properties
//      combination and call as a function and receive the desired
//      result as we defined in the [[call]] handler.
console.log( instance.I.love.you("arg1", "arg2") )  
//      {
//          path: ["I", "love", "you"],
//          args: ["arg1", "arg2"]
//      } 


//      We can also apply the [[instance]] object with any properties
//      combination and convert as a primitive value and receive
//      the desired result as we defined in [[toPrimitive]] handler.
console.log( String(instance.I.love.you) )
//      I--love--you

console.log( instance.I.love.you + '')
//      I--love--you

```


## API


### **`new ProduceByPath(handlers)`**
<br/>

- **`handlers`** \<Object> defines which operations will be intercepted and how to redefine intercepted operations. It can have the following fields:
    - **`call`** \<Function> defines `call` handler, takes the following arguments:
        - **`path`** \<String[ ]> Array of string, which contains a sequence of those properties on which the call operation was applied.
        - **`args`** \<Array> Array of arguments which was passed with the call operation.
    - **`toPrimitive`** \<Function> defines `toPrimitive` handler, takes the following arguments:
        - **`path`** \<String[ ]> Array of string, which contains a sequence of those properties on which the toPrimitive operation was applied.
        - **`hint`** \<String> can have the following values: `"number"`, `"string"`, `"default"` see details: [toPrimitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)



## Authors

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

## License
[MIT License](https://github.com/ruben-arushanyan/produce-by-path/blob/master/LICENSE)
