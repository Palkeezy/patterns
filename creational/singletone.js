class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance
        }
        Database.instance = this
        Database.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const mongo = new Database('MongoDb')

console.log(mongo.getData())

const mysql = new Database('mySql')

console.log(mysql.getData())
