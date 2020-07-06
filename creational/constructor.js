// function Server(name, ip) {
//     this.name = name;
//     this.ip = ip
// }
//
// Server.prototype.getUrl = function () {
//     return `https://${this.ip}:80`
// }
//
// const server = new Server('Yahoo', '66.32.2.11.3')
//
// console.log(server.getUrl());

class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const server = new Server('Yahoo', '66.32.2.11.3')

console.log(server.getUrl());

