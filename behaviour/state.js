class Light {
    constructor(light, time) {
        this.light = light
        this.time = time
    }
}

class RedLight extends Light{
    constructor() {
        super('red', 10000)
    }

    sign() {
        return 'STOP!!!'
    }
}

class YellowLight extends Light{
    constructor() {
        super('yellow', 3000)
    }

    sign() {
        return 'PREPARE'
    }
}

class GreenLight extends Light{
    constructor() {
        super('green', 15000)
    }

    sign() {
        return 'GO!'
    }
}

class TrafficLight {
    constructor(){
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ]
        this.current = this.states[0]
    }

    change() {
        const totalStates = this.states.length
        let index = this.states.findIndex(light => light === this.current)

        if (index + 1 < totalStates) {
            this.current = this.states[index + 1];
        } else {
            this.current = this.states[0];
        }
    }

    sign() {
        return this.current.sign()
    }
}

const traffic = new TrafficLight()

function road() {
    console.log(traffic.sign());
    setTimeout(()=> {
        traffic.change();
        road();
    }, traffic.current.time)
}
road();
