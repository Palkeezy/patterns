class SimpleMembership {
   constructor(name) {
       this.name = name
       this.cost = 50
   }
}

class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 300
    }
}

class MemberFactory {
    static list = {
        standard: StandardMembership,
        simple: SimpleMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }

        return member;
    }
}

const factory = new MemberFactory();

const members = [
    factory.create('vasa', 'qqqq'),
    factory.create('petro','premium')
]

members.forEach((m)=>{
    m.define()
})
