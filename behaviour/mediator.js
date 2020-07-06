class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach((key) => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            });
        }
    }
}

const Vitalii = new User('Vitalii');
const Yura = new User('Yura');
const Vasa = new User('Vasa');

const room = new ChatRoom();

room.register(Vitalii)
room.register(Yura)
room.register(Vasa)

Vitalii.send('Hi', Yura)
Yura.send('QQ', Vitalii)
Vasa.send('What`s up')
