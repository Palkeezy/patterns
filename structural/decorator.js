class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAws = true
    server.awsInfo = () => {
        return server.url
    }
    return server
}

function azure(server) {
    server.isAzure = true
    server.port +=500
    return server;
}

const awsServer = aws(new Server('12.42.123.43', 88));
console.log(awsServer.awsInfo());
console.log(awsServer.isAws);

const azureServer = azure(new Server('12.33.31.33', 12))
console.log(azureServer.isAzure);
console.log(azureServer.url);
