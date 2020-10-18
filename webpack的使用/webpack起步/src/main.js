////webpack ./src/main.js --output-filename ./dist/bundle.js --output-path . --mode development  (打包)

////1.使用commonjs的模块化规范
const {add,num} = require('./mathUtils.js');
console.log(add(2,42));
console.log(num(2,11))


////使用ES6的模块化规范
import {name,age,height} from "./info.js";
console.log(name);
console.log(age);
console.log(height);
console.log('打包成功')

