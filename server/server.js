const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body
app.use(express.json())
app.use(cors())

// Our fake database 
const eventList = [ 
    {
        title: "Puro Latino1",
        title2: "Festival",
        photo: "https://purolatino.es/sevilla/wp-content/themes/yootheme/cache/f31ed0ea-9a0a-4aed-8cec-c51e2aa12c9e-71c7821e.jpeg",
        prize: "79€",
        locationName: "Estadio Olímpico de La Cartuja",
        locationURL: "https://goo.gl/maps/vHTorSTkSrrDK4wBA",
        date: "01/07/22 - 02/07/22",
        eventWeb: "https://purolatino.es/sevilla/",
        ticketWeb: "https://purolatino.es/sevilla/entradas/"
    },
    {
        title: "Puro Latino2",
        title2: "Festival",
        photo: "https://purolatino.es/sevilla/wp-content/themes/yootheme/cache/f31ed0ea-9a0a-4aed-8cec-c51e2aa12c9e-71c7821e.jpeg",
        prize: "79€",
        locationName: "Estadio Olímpico de La Cartuja",
        locationURL: "https://goo.gl/maps/vHTorSTkSrrDK4wBA",
        date: "01/07/22 - 02/07/22",
        eventWeb: "https://purolatino.es/sevilla/",
        ticketWeb: "https://purolatino.es/sevilla/entradas/"
    },
    {
        title: "Puro Latino3",
        title2: "Festival",
        photo: "https://purolatino.es/sevilla/wp-content/themes/yootheme/cache/f31ed0ea-9a0a-4aed-8cec-c51e2aa12c9e-71c7821e.jpeg",
        prize: "79€",
        locationName: "Estadio Olímpico de La Cartuja",
        locationURL: "https://goo.gl/maps/vHTorSTkSrrDK4wBA",
        date: "01/07/22 - 02/07/22",
        eventWeb: "https://purolatino.es/sevilla/",
        ticketWeb: "https://purolatino.es/sevilla/entradas/"
    },
]


// HTTP GET api that returns one of the events in our fake database
app.get('/api/events/:id', (req, res) => {
    const id = +req.params.id
    const result = eventList.find(event => event.id === id)
    return res.json(result)
})

// HTTP GET api that returns all the events in our fake database
app.get("/api/events", (req, res) => {
    const result= eventList.map(event => {
        return {
            id:event.id,
            title: event.title,
            title2: event.title2,
            photo: event.photo,
            prize: event.prize,
            locationName: event.locationName,
            locationURL: event.locationURL,
            date: event.date,
            eventWeb: event.eventWeb,
            ticketWeb: event.ticketWeb,
        }
    })
    return res.json(result)
})

// HTTP POST api that will push (and therefore create) a new element in 
// our fake database 
app.post("/api/events", (req, res) => {
    const { body } = req
    eventList.push(body)
    return res.sendStatus(200)
})



app.listen(3010, () => {
    console.log("Server running on port 3010")
})

