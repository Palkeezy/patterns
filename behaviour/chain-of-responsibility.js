class Sum {
    constructor(initialValue = 40) {
        this.sum = initialValue
    }

    add(value) {
        this.sum += value
        return this
    }
}

const sum1 = new Sum()
console.log(sum1.add(2).add(3).add(55).sum);
