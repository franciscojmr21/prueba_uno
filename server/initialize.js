export default async (models) => {
    const catList = [
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
    ]
    await models.Cat.bulkCreate(catList)
}