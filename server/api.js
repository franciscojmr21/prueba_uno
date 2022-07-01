const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

// Development
const database = new Sequelize("postgres://postgres:postgres@localhost:5432/sevilla")

// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })



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
    const Service = database.define("service", {
        title1: DataTypes.STRING, 
        title2: DataTypes.STRING, 
    })
    const Itinerary = database.define("itinerary", {
        title1: DataTypes.STRING, 
        title2: DataTypes.STRING, 
    })
    const PointsOfInterest = database.define("pointsOfInterest", {
        title: DataTypes.STRING, 
        photo: DataTypes.STRING, 
    })

    await database.sync({ force: true })
    return {
        Event,
        Service,
        Itinerary,
        PointsOfInterest
    }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

const pageContentObject = {
    index: {
        title: "Homepage",
        image: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
    },
    about: {
        title: "About",
        image: "https://fs.i3lab.group/hypermedia/images/about.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
    },
}


async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    app.get('/page-info/:topic', (req, res) => {
        const { topic } = req.params
        const result = pageContentObject[topic]
        return res.json(result)
    })

    app.get('/cats/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Cat.findOne({ where: { id }, include: [{model: models.Location}] })
        return res.json(result)
    })

    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id }})
        return res.json(result)
    })

    // HTTP GET api that returns all the cats in our actual database
    app.get("/cats", async (req, res) => {
        const result = await models.Cat.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                breed: element.breed,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    // HTTP POST api, that will push (and therefore create) a new element in
    // our actual database
    app.post("/cats", async (req, res) => {
        const { body } = req
        await models.Cat.create(body);
        return res.sendStatus(200)
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

    app.get("/services", async (req, res) => {
        const result = await models.Service.findAll()
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

    // HTTP POST api, that will push (and therefore create) a new element in
    // our actual database
    app.post("/events", async (req, res) => {
        const { body } = req
        await models.Event.create(body);
        return res.sendStatus(200)
    })

    app.post("/services", async (req, res) => {
        const { body } = req
        await models.Service.create(body);
        return res.sendStatus(200)
    })

    app.post("/itineraries", async (req, res) => {
        const { body } = req
        await models.Itinerary.create(body);
        return res.sendStatus(200)
    })

}

runMainApi()


export default app
