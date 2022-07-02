

export default async (models) => {
    const eventList = [
        {
            title: "Puro Latino",
            title2: "Festival",
            photo: "https://purolatino.es/sevilla/wp-content/themes/yootheme/cache/f31ed0ea-9a0a-4aed-8cec-c51e2aa12c9e-71c7821e.jpeg",
            prize: "79,00€",
            locationName: "Estadio Olímpico de La Cartuja",
            locationURL: "https://goo.gl/maps/vHTorSTkSrrDK4wBA",
            date: "01/07/22 - 02/07/22",
            eventWeb: "https://purolatino.es/sevilla/",
            ticketWeb: "https://purolatino.es/sevilla/entradas/"
        },
        {
            title: "Semana Santa",
            title2: "2022",
            photo: "https://www.semana-santa.org/wp-content/uploads/2022/02/cartel-semana-santa-sevilla-2022.jpg",
            prize: "FREE",
            locationName: "Sevilla Centre",
            locationURL: "https://goo.gl/maps/htgB2xMuTrbaVJqc8",
            date: "10/04/22 - 16/04/22",
            eventWeb: "https://www.sevilla.org/fiestas-de-la-ciudad/semana-santa/",
            ticketWeb: ""
        },
        {
            title: "Feria de Sevilla",
            title2: "2022",
            photo: "https://pbs.twimg.com/media/FMW7730XMAAqnd_.jpg:large",
            prize: "FREE",
            locationName: "Between Los Remedios and Tablada",
            locationURL: "https://goo.gl/maps/HyeFmoidtzKBtyEV8",
            date: "01/05/22 - 07/05/22",
            eventWeb: "https://www.sevilla.org/fiestas-de-la-ciudad/feria-de-sevilla",
            ticketWeb: ""
        },
        {
            title: "Setas de Sevilla",
            title2: "Experiencia inmersiva",
            photo: "https://edo-entradas-pro-files.s3.amazonaws.com/image_uploads/attachments/000/000/169/noche.jpg",
            prize: "15,00 €",
            locationName: "Setas de Sevilla",
            locationURL: "https://goo.gl/maps/JfSqWCprwmrmWP2v9",
            date: "30/05/22 - 30/06/22",
            eventWeb: "https://checkoutentradas4.elcorteingles.es/public/janto/main.php?Nivel%3DmenuCalendario%26idEvento%3DFEELINGNOCHE",
            ticketWeb: "https://www.elcorteingles.es/entradas/cultura/entradas-experiencia-inmersiva-noche-sevilla-FEELINGNOCHEFEELINGNOCHESETASSEV/?performance_url=entradas-experiencia-inmersiva-noche-sevilla-FEELINGNOCHEFEELINGNOCHESETASSEV/"
        },
        {
            title: "Malú Concert",
            title2: "Mil Batallas Tour",
            photo: "https://edo-entradas-pro-files.s3.amazonaws.com/image_uploads/attachments/000/003/197/400x504-MALU-ECI-ALB.jpg",
            prize: "25,00 €",
            locationName: "Auditorio Municipal Rocío Jurado",
            locationURL: "https://goo.gl/maps/JkMihQgyWdccRhSg6",
            date: "04/06/22 - 04/06/22",
            eventWeb: "https://www.entradas.com/event/malu-mil-batallas-auditorio-rocio-jurado-antigua-cartuja-14620138/",
            ticketWeb: "https://www.entradas.com/event/malu-mil-batallas-auditorio-rocio-jurado-antigua-cartuja-14620138/"
        },
        {
            title: "Seville Aquarium",
            title2: "Seville",
            photo: "https://d2cyzdatssrhg7.cloudfront.net/export/sites/default/ets/.content/products/img/00-00088eR.jpg?__locale=es",
            prize: "17,00 €",
            locationName: "Seville Aquarium",
            locationURL: "https://goo.gl/maps/fwrBqqU8QGnedspK9",
            date: "31/05/22 - 31/12/22",
            eventWeb: "https://www.acuariosevilla.es/",
            ticketWeb: "https://entradas.acuariosevilla.es/TicketOffice/Index.aspx"
        },
        {
            title: "Game of Thrones Tour",
            title2: "Alcázar of Seville",
            photo: "https://www.turismosevilla.org/sites/default/files/styles/grande_800x600_/public/2021-03/Juego%20de%20tronos2.png?h=d1cb525d&itok=AAM_qwTN",
            prize: "40,00 €",
            locationName: "Alcázar of Seville",
            locationURL: "https://g.page/realalcazarsevilla?share",
            date: "10/04/22 - 31/12/22",
            eventWeb: "https://lasuperagenda.com/eventos/sevilla/exposiciones/tour-de-juego-de-tronos-por-el-alcazar-de-sevilla/",
            ticketWeb: "https://www.civitatis.com/es/sevilla/tour-juego-tronos-alcazar?aid=8738"
        },
        {
            title: "Cruise on Guadalquivir",
            title2: "Sevilla",
            photo: "https://cdn.getyourguide.com/img/tour/5a89de6d61ee0.jpeg/99.jpg",
            prize: "15,00 €",
            locationName: "Guadalquivir",
            locationURL: "https://goo.gl/maps/28tP3a4uerzvyJf16",
            date: "01/05/22 - 31/12/22",
            eventWeb: "https://cutt.ly/IKNDjId",
            ticketWeb: "https://cutt.ly/IKNDjId"
        },
        {
            title: "Flamenco",
            title2: "Sevilla",
            photo: "https://cdn.atrapalo.com/common/photo/event/4/8/7/4799/1322912/si_372_0.jpg",
            prize: "25,20 €",
            locationName: "Tablao Flamenco Sevilla",
            locationURL: "https://g.page/tablaoalvarezquintero?share",
            date: "30/05/22 - 31/12/22",
            eventWeb: "https://www.tablaosevilla.es/",
            ticketWeb: "https://www.tablaosevilla.es/"
        },
        {
            title: "Legends of Triana Tour",
            title2: "Sevilla",
            photo: "https://offloadmedia.feverup.com/sevillasecreta.co/wp-content/uploads/2017/05/02050355/shutterstock_1225992802-1-1024x597.jpg",
            prize: "10,00 €",
            locationName: "Puente de Triana",
            locationURL: "https://goo.gl/maps/jgPwfT5Avf5gNczg9",
            date: "01/07/22 - 31/12/22",
            eventWeb: "https://naturanda.com/tour-leyendas-de-triana/",
            ticketWeb: "https://naturanda.com/tour-leyendas-de-triana/"
        },
    ]
    await models.Event.bulkCreate(eventList)

    const serviceList = [ 
        {
            title1: "Virgen Macarena",
            title2: "Hospital",
           
        },
        {
            title1: "Virgen del Rocio University",
            title2: "Hospital",
        },
        {
            title1: "Maria Eugennia Cruz Roja Sevilla",
            title2: "Hospital",
        },
        {
            title1: "Reyes CB",
            title2: "Pharmacy",
        },
        {
            title1: "San Pablo 24H",
            title2: "Pharmacy",
        },
        {
            title1: "María Auxiliadora",
            title2: "Pharmacy",
        },
        {
            title1: "Spanish",
            title2: "Bank",
        },
        {
            title1: "Eurostars Tower",
            title2: "Hotel",
        },
        {
            title1: "Duquesa",
            title2: "Hotel",
        },


    ]
    await models.Service.bulkCreate(serviceList)


    const itineraryList = [ 
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
        {
            title1: "Day",
            title2: "4",
        },
    ]
    await models.Itinerary.bulkCreate(itineraryList)

    const pointsOfInterestList = [
        {
            title: "Giralda",
            photo: "http://www.welikecrm.it/wp-content/uploads/2020/10/la-giralda-siviglia.jpg",
        },
        {
            title: "Catedral",
            photo: "https://www.turismosevilla.org/sites/default/files/styles/grande_800x600_/public/2022-01/617-%286%29-SEVILLA-Catedral.JPG?h=895baa79&itok=LpK7HS_V",
           
        },
        {
            title: "Torre del Oro",
            photo: "https://aws-tiqets-cdn.imgix.net/images/content/b0ffce651184411e8c8b9e05ad1e6d13.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=6cd4f59b89002b9d0b2dbd254c2a2272",
            
        },
        {
            title: "Real Alcazar",
            photo: "https://aws-tiqets-cdn.imgix.net/images/content/b0ffce651184411e8c8b9e05ad1e6d13.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=6cd4f59b89002b9d0b2dbd254c2a2272",
            
        },
        {
            title: "Plaza de España",
            photo: "https://blog.only-apartments.es/wp-content/uploads/2015/08/plaza-espa%C3%B1a-sevilla.jpg",
            
        },
        {
            title: "Barrio de Sanra Cruz",
            photo: "https://media.traveler.es/photos/61376e8ad7c7024f9175eb3b/16:9/w_1968,h_1107,c_limit/136286.jpg",
        },
        {
            title: "Iglesia del Salvador",
            photo: "2wCEAAkGBxQUExYTFBQXFxYYGh4ZGRkZGiAeIBkaHB4gHBkfHR8aHikhHB8nIR8bIzIiJiosMC8vGyA1OjUtOSkuMCwBCgoKDg0OHBAQHDQnIScuMC4uLjcuLi4uLi4wLjAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv",
        },
        {
            title: "Basilica de la Macarena",
            photo: "https://aws-tiqets-cdn.imgix.net/images/content/b0ffce651184411e8c8b9e05ad1e6d13.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=6cd4f59b89002b9d0b2dbd254c2a2272",
            
        },
        {
            title: "Casa de Pilatos",
            photo: "2wCEAAoHCBQVFBgVFRQZGBgYGh0bGRsbGyEdGhoaIRkaGhodGxocIS0kGx0qHx0bJTcmKi8xNDQ0HSQ6PzozPi0zNDEBCwsLEA8QHxISHzwqJCo1Mzw1Mzw2MzMzMzMzMzUzMzMzMzUzNTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM",
        },
        {
            title: "Setas de Sevilla",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHo_WQC-dlz32LHavKi9cZJwwhzeBi-XJn0g&usqp=CAU",
        },
        {
            title: "Real Maestranza",
            photo: "https://www.dronestagr.am/wp-content/uploads/2017/06/WC9B8368ok-2.jpg",
        },
        {
            title: "Plaza América",
            photo: "https://lasevillamuseistica.files.wordpress.com/2013/03/plaza-de-america-sevilla-2003-a223454313.jpg",
        },
        {
            title: "Archivo General de Indias",
            photo: "https://offloadmedia.feverup.com/sevillasecreta.co/wp-content/uploads/2015/11/19140934/shutterstock_541372600-1.jpg",
        },
        {
            title: "Plaza América",
            photo: "https://aws-tiqets-cdn.imgix.net/images/content/b0ffce651184411e8c8b9e05ad1e6d13.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=6cd4f59b89002b9d0b2dbd254c2a2272",
            
        },
        {
            title: "Real fabrica de tabacos",
            photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d0/59/86/cancellata-d-ingresso.jpg?w=1200&h=1200&s=1"           
        },
        {
            title: "Puente de Triana",
            photo: "https://www.visitasevilla.es/sites/default/files/place/img_header/puentetriana.jpg",
            
        },
        {
            title: "Plaza Nueva",
            photo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Sevilla_Plaza_Nueva_San_Fernando_18-03-2011_17-46-44.jpg",
            
        },
        {
            title: "Alameda de Hércules",
            photo: "https://offloadmedia.feverup.com/sevillasecreta.co/wp-content/uploads/2015/12/19141235/shutterstock_1019972278-1.jpg",
            
        },
        {
            title: "Palacio de San Telmo",
            photo: "https://www.visitasevilla.es/sites/default/files/place/img_header/palacio_san_telmo.jpg",
            
        },
        {
            title: "Puente del Alamillo",
            photo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Puente_del_Alamillo_en_Sevilla.jpg",
            
        },
        {
            title: "Torre Sevilla",
            photo: "https://www.cctorresevilla.com/wp-content/uploads/sites/10/2021/10/AperturaSlider.jpg",
            
        },
        
    ]

    await models.PointsOfInterest.bulkCreate(pointsOfInterestList)

}