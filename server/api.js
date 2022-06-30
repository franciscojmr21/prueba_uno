const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json()) 

// Development
const database = new Sequelize("postgres://postgres:postgres@localhost:5432/sevilla")


// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()
    const Event = database.define("event", {
        title: DataTypes.STRING, 
        title2: DataTypes.STRING, 
        photo: DataTypes.STRING, 
        eventWeb: DataTypes.STRING, 
        ticketWeb: DataTypes.STRING, 
        prize: DataTypes.STRING, 
        date: DataTypes.STRING, 
        locationName: DataTypes.STRING, 
        locationURL: DataTypes.STRING,
    })
    await database.sync({ force: true })
    return {
        Event
    }
}

async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)


    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id }, include: [{model: models.Location}] })
        return res.json(result)
    })

    // HTTP GET api that returns all the cats in our actual database
    app.get("/events", async (req, res) => {
        const result = await models.Event.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                title: element.title,
                title2: element.title2,
                photo: element.photo,
                prize: element.prize,
                locationName: element.locationName,
                locationURL: element.locationURL,
                date: element.date,
                eventWeb: element.eventWeb,
                ticketWeb: element.ticketWeb,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    // HTTP POST api, that will push (and therefore create) a new element in
    // our actual database
    app.post("/events", async (req, res) => {
        const { body } = req
        await models.Event.create(body);
        return res.sendStatus(200)
    })
}

runMainApi()


export default app


///////////////////////////////////////////////////////////////////////////////////////////


// const database = new Sequelize("postgres://postgres:postgres@localhost:5432/sevilla")


// // Function that will initialize the connection to the database
// async function initializeDatabaseConnection() {
//     await database.authenticate()
//     const Event = database.define("event", {
//         title: DataTypes.STRING, 
//         title2: DataTypes.STRING, 
//         photo: DataTypes.STRING, 
//         eventWeb: DataTypes.STRING, 
//         ticketWeb: DataTypes.STRING, 
//         prize: DataTypes.STRING, 
//         date: DataTypes.STRING, 
//         locationName: DataTypes.STRING, 
//         locationURL: DataTypes.STRING,
//     })
//     await database.sync({ force: true })
//     return {
//         Event
//     }
// }
