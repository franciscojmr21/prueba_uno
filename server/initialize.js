

export default async (models) => {

    

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

    const allItineraryList = await models.Itinerary.bulkCreate(itineraryList)

    const pointsOfInterestList = [
        {
            title: "Giralda",
            photo: "http://www.welikecrm.it/wp-content/uploads/2020/10/la-giralda-siviglia.jpg",
            itineraryId: allItineraryList[0].id
        },
        {
            title: "Catedral",
            photo: "https://www.turismosevilla.org/sites/default/files/styles/grande_800x600_/public/2022-01/617-%286%29-SEVILLA-Catedral.JPG?h=895baa79&itok=LpK7HS_V",
            itineraryId: allItineraryList[0].id
        },
        {
            title: "Torre del Oro",
            photo: "https://aws-tiqets-cdn.imgix.net/images/content/b0ffce651184411e8c8b9e05ad1e6d13.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=6cd4f59b89002b9d0b2dbd254c2a2272",
            itineraryId: allItineraryList[0].id
        },
        {
            title: "Real Alcazar",
            photo: "https://www.dosde.com/discover/wp-content/uploads/2017/02/patio-de-doncellas-alcazar-de-sevilla-dosde-publishing.jpg",
            itineraryId: allItineraryList[0].id
        },
        {
            title: "Plaza de España",
            photo: "https://blog.only-apartments.es/wp-content/uploads/2015/08/plaza-espa%C3%B1a-sevilla.jpg",
            itineraryId: allItineraryList[1].id
        },
        {
            title: "Barrio de Sanra Cruz",
            photo: "https://media.traveler.es/photos/61376e8ad7c7024f9175eb3b/16:9/w_1968,h_1107,c_limit/136286.jpg",
            itineraryId: allItineraryList[0].id
        },
        {
            title: "Iglesia del Salvador",
            photo: "https://multimedia.andalucia.org/content_images/main_image_43745.jpeg",
            itineraryId: allItineraryList[2].id
        },
        {
            title: "Basilica de la Macarena",
            photo: "https://www.viaggioinandalusia.it/wp-content/uploads/2018/03/27025571140_4338e92a5e_k.jpg",
            itineraryId: allItineraryList[3].id
            
        },
        {
            title: "Casa de Pilatos",
            photo: "https://www.weekendpremium.it/wp/wp-content/uploads/2018/01/casa-pilatos-sevilla-800x445.jpg",
        },
        {
            title: "Setas de Sevilla",
            photo: "https://www.visitasevilla.es/sites/default/files/place/img_header/setas.jpg",
            itineraryId: allItineraryList[2].id
        },
        {
            title: "Real Maestranza",
            photo: "https://www.dronestagr.am/wp-content/uploads/2017/06/WC9B8368ok-2.jpg",
            itineraryId: allItineraryList[2].id
        },
        {
            title: "Plaza América",
            photo: "https://lasevillamuseistica.files.wordpress.com/2013/03/plaza-de-america-sevilla-2003-a223454313.jpg",
            itineraryId: allItineraryList[1].id
        },
        {
            title: "Archivo General de Indias",
            photo: "https://offloadmedia.feverup.com/sevillasecreta.co/wp-content/uploads/2015/11/19140934/shutterstock_541372600-1.jpg",
            itineraryId: allItineraryList[2].id
        },
        {
            title: "Parque María Luisa",
            photo: "https://www.labelleseville.com/wp-content/uploads/que-ver-en-sevilla-maria-luisa-sevilla.webp",
            itineraryId: allItineraryList[1].id
            
        },
        {
            title: "Real fabrica de tabacos",
            photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d0/59/86/cancellata-d-ingresso.jpg?w=1200&h=1200&s=1",
            itineraryId: allItineraryList[1].id           
        },
        {
            title: "Puente de Triana",
            photo: "https://www.visitasevilla.es/sites/default/files/place/img_header/puentetriana.jpg",
            itineraryId: allItineraryList[0].id
            
        },
        {
            title: "Plaza Nueva",
            photo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Sevilla_Plaza_Nueva_San_Fernando_18-03-2011_17-46-44.jpg",
            itineraryId: allItineraryList[2].id
            
        },
        {
            title: "Alameda de Hércules",
            photo: "https://offloadmedia.feverup.com/sevillasecreta.co/wp-content/uploads/2015/12/19141235/shutterstock_1019972278-1.jpg",
            itineraryId: allItineraryList[3].id
            
        },
        {
            title: "Palacio de San Telmo",
            photo: "https://www.visitasevilla.es/sites/default/files/place/img_header/palacio_san_telmo.jpg",
            itineraryId: allItineraryList[1].id
            
        },
        {
            title: "Puente del Alamillo",
            photo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Puente_del_Alamillo_en_Sevilla.jpg",
            itineraryId: allItineraryList[3].id
        },
        {
            title: "Torre Sevilla",
            photo: "https://www.cctorresevilla.com/wp-content/uploads/sites/10/2021/10/AperturaSlider.jpg",
            
        },
        
        {
            title: "Centro Histórico",
            photo: "https://sevillando.b-cdn.net/wp-content/uploads/sites/16/2022/03/Casco-Antiguo-sevilla.jpg",
            
        },
        {
            title: "Auditorio Rocio Jurado",
            photo: "http://www.manologarciaycia.com/wp-content/uploads/2016/05/mg_gus.jpg?x87507",
            itineraryId: allItineraryList[3].id
            
        },
        {
            title: "Estadio Olímpico La Cartuja",
            photo: "https://static4.abc.es/media/deportes/2018/12/06/cartuja-k4LI--1248x698@abc.jpg",
            itineraryId: allItineraryList[3].id
            
        },
        {
            title: "El Ferial",
            photo: "https://phantom-marca.unidadeditorial.es/342a76c45b7b417c2899186881ebd60c/resize/1320/f/jpg/assets/multimedia/imagenes/2022/04/26/16509864385400.jpg",
            
        },
        {
            title: "Acuario de Sevilla",
            photo: "https://thumbnail.pa-community.com/d3/77/71b034a81456f9cfc771889ec09a/62c11b2a03bb0948aacbcacf52e50bbd.jpg",
            itineraryId: allItineraryList[1].id
        },
        
    ]

    const allPointsOfInterestList = await models.PointsOfInterest.bulkCreate(pointsOfInterestList)

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
            ticketWeb: "https://purolatino.es/sevilla/entradas/",
            tipo: "summer",
            pointsOfInterestId: allPointsOfInterestList[23].id
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
            ticketWeb: "",
            tipo: "spring",
            pointsOfInterestId: allPointsOfInterestList[21].id
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
            ticketWeb: "",
            tipo: "spring",
            pointsOfInterestId: allPointsOfInterestList[24].id
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
            ticketWeb: "https://www.elcorteingles.es/entradas/cultura/entradas-experiencia-inmersiva-noche-sevilla-FEELINGNOCHEFEELINGNOCHESETASSEV/?performance_url=entradas-experiencia-inmersiva-noche-sevilla-FEELINGNOCHEFEELINGNOCHESETASSEV/",
            tipo: "",
            pointsOfInterestId: allPointsOfInterestList[9].id
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
            ticketWeb: "https://www.entradas.com/event/malu-mil-batallas-auditorio-rocio-jurado-antigua-cartuja-14620138/",
            tipo: "summer",
            pointsOfInterestId: allPointsOfInterestList[22].id
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
            ticketWeb: "https://entradas.acuariosevilla.es/TicketOffice/Index.aspx",
            tipo: "",
            pointsOfInterestId: allPointsOfInterestList[25].id
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
            ticketWeb: "https://www.civitatis.com/es/sevilla/tour-juego-tronos-alcazar?aid=8738",
            tipo: "",
            pointsOfInterestId: allPointsOfInterestList[3].id
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
            ticketWeb: "https://cutt.ly/IKNDjId",
            tipo: "",
            pointsOfInterestId: allPointsOfInterestList[15].id
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
            ticketWeb: "https://www.tablaosevilla.es/",
            tipo: ""
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
            ticketWeb: "https://naturanda.com/tour-leyendas-de-triana/",
            tipo: "",
            pointsOfInterestId: allPointsOfInterestList[15].id
        },
    ]
    await models.Event.bulkCreate(eventList)

    const serviceList = [ 
        {
            title1: "Virgen Macarena",
            title2: "Hospital",
            dir: "Calle Pintores 2",
            hora:"8:00 - 21:00"
           
        },
        {
            title1: "Virgen del Rocio University",
            title2: "Hospital",
            dir: "Calle Antonio Machado 2",
            hora:"8:00 - 21:30"
        },
        {
            title1: "Maria Eugennia Cruz Roja Sevilla",
            title2: "Hospital",
            dir: "Calle Antonio Lucas 3",
            hora:"8:00 - 22:00"
        },
        {
            title1: "Reyes CB",
            title2: "Pharmacy",
            dir: "Calle Luis Montoto 4",
            hora:"8:00 - 21:15"
        },
        {
            title1: "San Pablo 24H",
            title2: "Pharmacy",
            dir: "Calle Miguel 3",
            hora:"8:00 - 19:00"
        },
        {
            title1: "María Auxiliadora",
            title2: "Pharmacy",
            dir: "Calle Josan 7",
            hora:"10:00 - 21:00"
        },
        {
            title1: "Spanish",
            title2: "Bank",
            dir: "Calle Francisco Muñoz 4",
            hora:"8:00 - 11:00"
        },
        {
            title1: "Eurostars Tower",
            title2: "Hotel",
            dir: "Calle Vacie 45",
            hora:"8:00 - 21:40"
        },
        {
            title1: "Duquesa",
            title2: "Hotel",
            dir: "Calle Casillas 14",
            hora:"8:00 - 23:00"
        },


    ]
    await models.Service.bulkCreate(serviceList)



}