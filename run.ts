import Calculator from "./Calculator";
import {Subtract, Sum} from "./Operation";

let calculator = new Calculator();

calculator.register("+", new Sum());
calculator.register("-", new Subtract());

// let operatorName = process.argv[2];
// let numberA = process.argv[3];
// let numberB = process.argv[4];

let result = calculator.calculate(process.argv[2], parseInt(process.argv[3]), parseInt(process.argv[4]) );

console.log(result);
