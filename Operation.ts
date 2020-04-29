import Operator from "./Operator";

export class Sum implements Operator {
    calculate(a: number, b: number): number {
        return a+b;
    }

}

export class Subtract implements Operator {
    calculate(a: number, b: number): number {
        return a - b;
    }
}
