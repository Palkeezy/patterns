const car = {
    wheels: 4,

    init() {
        console.log(`У мене є ${this.wheels} колеса, і мій власник ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Vitalii'
    }
})

carWithOwner.init()
