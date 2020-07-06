class oldCalculator {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return t1 + t2;
            case 'sub' :
                return t1 - t2;
            default:
                return NaN
        }
    }
}

class newCalc {
    add(t1, t2) {
        return t1 + t2
    }

    sub(t1, t2){
        return t1 - t2;
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new newCalc()
    }

    operations(t1, t2, operations) {
        switch (operations) {
            case 'add':
                return this.calc.add(t1, t2)
            case 'sub':
                return this.calc.sub(t1, t2)
            default:
                return NaN;
        }
    }
}

const oldCalc = new oldCalculator();
console.log(oldCalc.operations(10, 30, "add"));

const newCalculator = new newCalc()
console.log(newCalculator.add(10, 30));

const adapterCalc = new CalcAdapter()
console.log(adapterCalc.operations(10, 30, 'add'));
