class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complaint) {

    }

    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }

    get complaints() {
        return this.complaints
    }
}

class ProductComplaints extends Complaints{
    reply({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Complaints{
    reply({id, customer, details}) {
        return `Service: ${id}: ${customer} (${details})`
    }
}

class ComplainRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint

        if (type === 'service') {
            complaint = new ServiceComplaints()
        } else {
            complaint = new ProductComplaints()
        }

        return complaint.add({id, customer, details})
    }
}

const registry = new ComplainRegistry()
console.log(registry.register('Vitalii', 'service', 'dirty'))
console.log(registry.register('Vasa', 'product', 'dirty'))
const compl = new Complaints()
console.log(compl.complaints);
