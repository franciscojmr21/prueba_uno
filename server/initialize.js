

export default async (models) => {
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
    await models.Event.bulkCreate(eventList)

    const serviceList = [ 
        {
            title1: "Day",
            title2: "1",
           
        },
        {
            title1: "Day",
            title2: "2",
        },
        {
            title1: "Day",
            title2: "3",
        },
    ]
    await models.Service.bulkCreate(serviceList)

}