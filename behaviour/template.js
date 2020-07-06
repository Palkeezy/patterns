class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities () {}

    work () {
        return  `${this.name} займається ${this.responsibilities()}`
    }

    getPaid () {
        return  `${this.name} отримує ${this.salary}`
    }
}

class Developer extends Employee{
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return  `створенням програм`
    }
}

class Tester extends Employee{
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return  `тестуванням програм`
    }
}

const dev = new Developer('Vitalii', 1000)

console.log(dev.getPaid())
console.log(dev.work())
