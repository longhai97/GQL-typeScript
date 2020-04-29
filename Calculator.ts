import Operator from "./Operator";

declare type OperatorList = {
    [operatorName: string]: Operator
}

export default class Calculator {
    private calculator: OperatorList = {};

    register( operatorName:string, Operator:Operator) {
        this.calculator[operatorName] = Operator;
        return this;
    }

    calculate(operatorName:string, a:number, b:number) {
        if (!this.calculator[operatorName])
            throw new Error(`Operator ${operatorName} don't exist`);

        return this.calculator[operatorName].calculate(a,b);
    }
}