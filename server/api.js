const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

const database = new Sequelize("postgres://postgres:postgres@localhost:5432/sevilla")

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
        tipo: DataTypes.STRING,
    })
    const Service = database.define("service", {
        title1: DataTypes.STRING, 
        title2: DataTypes.STRING, 
        dir: DataTypes.STRING,
        hora: DataTypes.STRING,
        location: DataTypes.STRING
    })
    const Itinerary = database.define("itinerary", {
        title1: DataTypes.STRING, 
        title2: DataTypes.STRING,
        description: DataTypes.TEXT  
    })
    const PointsOfInterest = database.define("pointsOfInterest", {
        title: DataTypes.STRING, 
        photo: DataTypes.STRING, 
        description: DataTypes.TEXT 
    })

    PointsOfInterest.hasMany(Event)
    Event.belongsTo(PointsOfInterest)

    Itinerary.hasMany(PointsOfInterest)
    PointsOfInterest.belongsTo(Itinerary)
    
    await database.sync({ force: true })
    return {
        Event,
        Service,
        Itinerary,
        PointsOfInterest
    }
}


const pageContentObject = {
    about: {
        title: "Who are us?",
        description: ``
    },
}


async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id }, include: [{model: models.PointsOfInterest}]})
        return res.json(result)
    })

    app.get('/services/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Service.findOne({ where: { id }})
        return res.json(result)
    })

    app.get('/pointsOfInterest/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.PointsOfInterest.findOne({ where: { id }, include: [{model: models.Itinerary}]})
        return res.json(result)
    })

    app.get('/itineraries/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Itinerary.findOne({ where: { id }})
        return res.json(result)
    })

    app.get('/itinerariesPOI/:id', async (req, res) => {
        const filtered = []
        const id = +req.params.id
        const result = await models.Itinerary.findAll({where: {id}})
        for (const element of result) {
            filtered.push({
                title1: element.title1,
                title2: element.title2,
                description: element.description,
                id: element.id,
            })
        }

        const result4 = await models.PointsOfInterest.findAll({where: {itineraryId:id}})
        for (const element of result4) {
            filtered.push({
                title: element.title,
                photo: element.photo,
                id: element.id,
            })
        }
        
        return res.json(filtered)
    })

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

    app.get("/allHomePage", async (req, res) => {
        const result = await models.Event.findAll({where: { id:[1,2,3] }})
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
            
        const result2 = await models.Service.findAll({where: { id:[1,2,3,4,5] }})
        for (const element of result2) {
            filtered.push({
                title1: element.title1,
                title2: element.title2,
                dir: element.dir,
                hora: element.hora,
                location: element.location,
                id: element.id,
            })
        }

        const result3 = await models.Itinerary.findAll({where: { id:[1,2,3,4] }})
        for (const element of result3) {
            filtered.push({
                title1: element.title1,
                title2: element.title2,
                id: element.id,
            })
        }

        const result4 = await models.PointsOfInterest.findAll({where: { id:[1,2,3,4,5] }})
        for (const element of result4) {
            filtered.push({
                title: element.title,
                photo: element.photo,
                id: element.id,
            })
        }
        
        return res.json(filtered)
    })

    app.get("/hospital", async (req, res) => {
        
        const title2 = "Hospital"
        const result = await models.Service.findAll({ where: { title2 }})
        const filtered = []
        for (const element of result) {
            filtered.push({
                title1: element.title1,
                title2: element.title2,
                dir: element.dir,
                hora: element.hora,
                location: element.location,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    app.get("/hotel", async (req, res) => {
        
        const title2 = "Hotel"
        const result = await models.Service.findAll({ where: { title2 }})
        const filtered = []
        for (const element of result) {
            filtered.push({
                title1: element.title1,
                title2: element.title2,
                dir: element.dir,
                hora: element.hora,
                location: element.location,
                id: element.id,
            })
        }
        return res.json(filtered)
    }) 

    app.get("/summer", async (req, res) => {
        
        const tipo= "summer"
        const result = await models.Event.findAll({ where: { tipo }})
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

    app.get("/spring", async (req, res) => {
        
        const tipo= "spring"
        const result = await models.Event.findAll({ where: { tipo }})
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

    app.get("/services", async (req, res) => {
        const result = await models.Service.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                title1: element.title1,
                title2: element.title2,
                dir: element.dir,
                hora: element.hora,
                location: element.location,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    app.get('/services/Hospital', async (req, res) => {
        const title2 = +req.params.title2
        const result = await models.Event.findOne({ where: { title2 }})
        return res.json(result)
    })

    app.get("/itineraries", async (req, res) => {
        const result = await models.Itinerary.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                title1: element.title1,
                title2: element.title2,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    app.get("/pointsOfInterest", async (req, res) => {
        const result = await models.PointsOfInterest.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                title: element.title,
                photo: element.photo,
                id: element.id,
            })
        }
        return res.json(filtered)
    })
}

runMainApi()

export default app
