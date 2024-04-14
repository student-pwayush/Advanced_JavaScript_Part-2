class Calculator {
    constructor(value) {
        this.result = value;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value !== 0) {
            this.result /= value;
            return this;
        } else {
            throw new Error("Cannot divide by zero");
        }
    }
}

const calc = new Calculator(10);

const result = calc.add(3).subtract(6).multiply(7).divide(1).result;
console.log("Result:", result);