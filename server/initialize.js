

export default async (models) => {

    

    const itineraryList = [ 
        {
            title1: "Day",
            title2: "1",
            description: "The route starts by the biggest gothic cathedral in the world, and after this, we will visit the most important tower of the city, the Giralda. We can enjoy an incredible Sevilla skyline in we go upstairs. Afeter this, the nenxt point is the Real Alcazar, one onn the most fantastic and beautiful parts of the city. The next place to visit in this first day is the Santa Cruz neighbourhood, and ancient jew neighbourhood and the most famous in the city. Then we will to go to the Torre del Oro, and walking ext to the river we will finish this first day route at Triana's bridge",
        },
        {
            title1: "Day",
            title2: "2",
            description: "On the second day, we will start by the Aquarium, next to the river, and then we will go the center again to see America Square. After this, let's go to the most important park of Seville, Maria Luisa Park. In there we will see the beautiful Plaza de España. The last place in this second day, will be the sede of the Univerity of Sevilla, the historial Real Fábrica de Tabacos",
        },
        {
            title1: "Day",
            title2: "3",
            description: "the most central and busy streets of the city. The tour starts from one of the northern areas of the historical center visiting one of the most contemporary buildings of the city with a very unique architectural style. After that we will visit one of the most conical squares where one of the most important churches of the city is located. Near this square there is a very busy square where the town hall is located. After that we will visit the Archivo de Indias, one of the most emblematic buildings of the city. To finish the tour we will visit the great Maestranza on the river bank so you can enjoy the sunset in it.",

        },
        {
            title1: "Day",
            title2: "4",
            description: "The last day in the city will be a visit to some areas further away from the center where we will pass by some important buildings for musical and sporting events such as the Rocío Jurado Auditorium or the Olympic Stadium of La Cartuja. You will also see one of the most famous bridges of the city made by the great Spanish architect Santiago Calatrava. Finally there will be a visit to a very emblematic city that is located in the old walled city and ending in the Plaza de Hercules which is one of the most atmospheric of the city and where you can spend the night in the bars.",
        },
    ]

    const allItineraryList = await models.Itinerary.bulkCreate(itineraryList)

    const pointsOfInterestList = [
        {
            title: "Giralda",
            photo: "http://www.welikecrm.it/wp-content/uploads/2020/10/la-giralda-siviglia.jpg",
            description: "The Giralda is the bell tower of the Cathedral. In its day it was the tallest tower in the world with its 97.5 m height, as well as being one of the most famous images of the city and all of Andalusia.",
            itineraryId: allItineraryList[0].id
        },
        {
            title: "Catedral",
            photo: "https://www.turismosevilla.org/sites/default/files/styles/grande_800x600_/public/2022-01/617-%286%29-SEVILLA-Catedral.JPG?h=895baa79&itok=LpK7HS_V",
            description: "It is one of the most important monuments of Spanish architecture and the third largest in extension in the Christian world. It preserves the Patio de las Abluciones, the Puerta del Perdón and the Giralda from its Almohad period. Seville Cathedral has a hall floor plan.",
            itineraryId: allItineraryList[0].id
        },
        {
            title: "Torre del Oro",
            photo: "https://aws-tiqets-cdn.imgix.net/images/content/b0ffce651184411e8c8b9e05ad1e6d13.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=6cd4f59b89002b9d0b2dbd254c2a2272",
            description: "The Torre del Oro, measures 15.20 meters in diameter and 36.75 meters high. It consists of three bodies of mortar, the lower one being dodecagonal. The first Almohad body forms three floors that are divided by means of semicircular arches into alternating square and triangular sections, covered by groin vaults.",
            itineraryId: allItineraryList[0].id
        },
        {
            title: "Real Alcazar",
            photo: "https://www.dosde.com/discover/wp-content/uploads/2017/02/patio-de-doncellas-alcazar-de-sevilla-dosde-publishing.jpg",
            description: "The Alcázar of Seville was built as a fortress to protect the Muslim authorities, and is currently the oldest royal palace in use in Europe. Its extensive history is reflected in the variety of its architecture, where the Baroque is mixed with the Renaissance, Romantic, Gothic or Mudejar.",
            itineraryId: allItineraryList[0].id
        },
        {
            title: "Plaza de España",
            photo: "https://blog.only-apartments.es/wp-content/uploads/2015/08/plaza-espa%C3%B1a-sevilla.jpg",
            description: "La plaza tiene grandes dimensiones (170 metros de diámetro) y forma semi-elíptica, que simboliza el abrazo de España a sus antiguos territorios americanos, y mira hacia el río Guadalquivir, como recorrido a seguir hacia América.",
            itineraryId: allItineraryList[1].id
        },
        {
            title: "Barrio de Sanra Cruz",
            photo: "https://media.traveler.es/photos/61376e8ad7c7024f9175eb3b/16:9/w_1968,h_1107,c_limit/136286.jpg",
            description: "Santa Cruz is one of the most special and authentic neighborhoods in Seville. Full of charm, color and flavor, it is an ideal area to get lost in its narrow streets and meet some of the main points of interest in the city.",
            itineraryId: allItineraryList[0].id
        },
        {
            title: "Iglesia del Salvador",
            photo: "https://multimedia.andalucia.org/content_images/main_image_43745.jpeg",
            description: "The Church of El Salvador, in a baroque style and rectangular floor plan, is structured in three naves of the same height and by several chapels in the upper part. The supports are quadrangular pillars with endorsed columns supporting high-rise vaults. The dome is drum shaped with an octagonal plan.",
            itineraryId: allItineraryList[2].id
        },
        {
            title: "Basilica de la Macarena",
            photo: "https://www.viaggioinandalusia.it/wp-content/uploads/2018/03/27025571140_4338e92a5e_k.jpg",
            description: "The Basilica of María Santísima de la Esperanza Macarena, also popularly known as the Basilica de la Macarena, is a Catholic temple located at number 1 Calle Bécquer, in the San Gil neighborhood belonging to the Casco Antiguo district of the city of Seville (Spain).",
            itineraryId: allItineraryList[3].id
            
        },
        {
            title: "Casa de Pilatos",
            photo: "https://www.weekendpremium.it/wp/wp-content/uploads/2018/01/casa-pilatos-sevilla-800x445.jpg",
            description: "The Casa de Pilatos is a palace located in the Spanish city of Seville, in Andalusia, belonging to the House of Medinaceli. It is one of the most emblematic buildings of Andalusian civil architecture of the 16th century and presents a combination of the Italian Renaissance styles and the Spanish Mudejar, the result of the different interventions that took place, from the last third of the 15th century to the 17th century.",
        },
        {
            title: "Setas de Sevilla",
            photo: "https://www.visitasevilla.es/sites/default/files/place/img_header/setas.jpg",
            description: "With a size of 150 meters long, 70 wide and 26 high, the Mushrooms of Seville stand as one of the largest monuments in the old town. Built as we have mentioned basically with wood, more than 7,500 wooden elements linked together with steel structures were needed.",
            itineraryId: allItineraryList[2].id
        },
        {
            title: "Real Maestranza",
            photo: "https://www.dronestagr.am/wp-content/uploads/2017/06/WC9B8368ok-2.jpg",
            description: "The Real Maestranza bullring in Seville was built on the so-called Monte del Baratillo and both inside and outside it forms an irregular polygon with 30 unequal sides, the result of work that lasted 120 years. Its architecture is late-baroque style, typical of the second half of the eighteenth century.",
            itineraryId: allItineraryList[2].id
        },
        {
            title: "Plaza América",
            photo: "https://lasevillamuseistica.files.wordpress.com/2013/03/plaza-de-america-sevilla-2003-a223454313.jpg",
            description: "The Plaza de América is a landscaped space in the Spanish city of Seville located inside the Parque de María Luisa. It is flanked by the Museum of Popular Arts and Customs (neo-Mudejar style) to the north, the Archaeological Museum (neo-Renaissance style) to the south, and the Royal Pavilion (neo-Gothic style) to the east.",
            itineraryId: allItineraryList[1].id
        },
        {
            title: "Archivo General de Indias",
            photo: "https://offloadmedia.feverup.com/sevillasecreta.co/wp-content/uploads/2015/11/19140934/shutterstock_541372600-1.jpg",
            description: "General Archive of the Indies. Historical-cultural institution fundamentally in charge of the custody of the funds produced by the institutions created by the Spanish Administration for the government and administration of the Spanish overseas territories (namely: Council of the Indies, Secretaries of Dispatch, Casa de la Contratación, and Consulates of Seville and Cadiz), as well as the preservation of other holdings of smaller institutions and even of individuals related to the Spanish colonies in America and Asia.",
            itineraryId: allItineraryList[2].id
        },
        {
            title: "Parque María Luisa",
            photo: "https://www.labelleseville.com/wp-content/uploads/que-ver-en-sevilla-maria-luisa-sevilla.webp",
            description: "El parque de María Luisa es el primer parque urbano de Sevilla (Andalucía, España) y uno de sus pulmones verdes. En 1983 fue declarado Bien de Interés Cultural en la categoría de Jardín Histórico.3​ Se inauguró el 18 de abril de 1914 como parque urbano Infanta María Luisa Fernanda.",
            itineraryId: allItineraryList[1].id
            
        },
        {
            title: "Real fabrica de tabacos",
            photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d0/59/86/cancellata-d-ingresso.jpg?w=1200&h=1200&s=1",
            description: "The Royal Tobacco Factory of Seville (Andalusia, Spain) was the headquarters of the first tobacco factory established in Europe. It is the most important industrial building in Spain from the 18th century.1",
            itineraryId: allItineraryList[1].id           
        },
        {
            title: "Puente de Triana",
            photo: "https://www.visitasevilla.es/sites/default/files/place/img_header/puentetriana.jpg",
            description: "Its location coincided with that of the current Isabel II Bridge, El Castillo, on the Triana side and at the height of the wall gate, on the city side; Only in 1845, when construction work began on the current bridge, was its location moved to the area in front of the Real Maestranza bullring.",
            itineraryId: allItineraryList[0].id
            
        },
        {
            title: "Plaza Nueva",
            photo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Sevilla_Plaza_Nueva_San_Fernando_18-03-2011_17-46-44.jpg",
            description: "The Plaza Nueva is located in the Arenal neighborhood of the city of Seville, Andalusia, Spain. In it you will find the main entrance of the Seville City Hall.",
            itineraryId: allItineraryList[2].id
            
        },
        {
            title: "Alameda de Hércules",
            photo: "https://offloadmedia.feverup.com/sevillasecreta.co/wp-content/uploads/2015/12/19141235/shutterstock_1019972278-1.jpg",
            description: "La Alameda, un barrio presidido por la amplia plaza Alameda de Hércules, es muy popular entre los estudiantes y la gente creativa por su intensa vida nocturna. En sus bares de tapas se ofrecen platos de moda como ceviche y sushi.",
            itineraryId: allItineraryList[3].id
            
        },
        {
            title: "Palacio de San Telmo",
            photo: "https://www.visitasevilla.es/sites/default/files/place/img_header/palacio_san_telmo.jpg",
            description: "The Palacio de San Telmo is the seat of the Presidency of the Junta de Andalucía. It is a baroque building located in Seville and built between the 17th and 18th centuries to be the headquarters of a sailors' college.",
            itineraryId: allItineraryList[1].id
            
        },
        {
            title: "Puente del Alamillo",
            photo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Puente_del_Alamillo_en_Sevilla.jpg",
            description: "The Alamillo Bridge is a cable-stayed bridge with a counterweight pylon that crosses the Guadalquivir River as it passes through Seville. It was designed by Santiago Calatrava and completed in 1992.",
            itineraryId: allItineraryList[3].id
        },
        {
            title: "Torre Sevilla",
            photo: "https://www.cctorresevilla.com/wp-content/uploads/sites/10/2021/10/AperturaSlider.jpg",
            description: "The Torre Sevilla is the first skyscraper in the Spanish city of Seville. It has at its base a shopping center with two buildings and a central road. Next to the tower is the CaixaForum.",
            
        },
        
        {
            title: "Centro Histórico",
            photo: "https://sevillando.b-cdn.net/wp-content/uploads/sites/16/2022/03/Casco-Antiguo-sevilla.jpg",
            description: "The Casco Antiguo district is the historic center of Seville and is home to medieval and Renaissance buildings, such as Seville Cathedral (Gothic in style) and the Real Alcázar (which dates back to Muslim times and was converted into a Christian palace).",
            
        },
        {
            title: "Auditorio Rocio Jurado",
            photo: "http://www.manologarciaycia.com/wp-content/uploads/2016/05/mg_gus.jpg?x87507",
            description: "The Rocío Jurado Municipal Auditorium is located on the Isla de la Cartuja, Seville, Andalusia, Spain. It was built at the same time that the area was being urbanized for the 1992 Universal Exhibition.",
            itineraryId: allItineraryList[3].id
            
        },
        {
            title: "Estadio Olímpico La Cartuja",
            photo: "https://static4.abc.es/media/deportes/2018/12/06/cartuja-k4LI--1248x698@abc.jpg",
            description: "The La Cartuja Stadium is a sports venue in the city of Seville, Spain, located on the island of La Cartuja, shared with the adjoining municipality of Santiponce. It was inaugurated on May 5, 1999 and its capacity is 57,619 spectators. being the second largest stadium in Andalusia and the fifth in Spain.",
            itineraryId: allItineraryList[3].id
            
        },
        {
            title: "El Ferial",
            photo: "https://phantom-marca.unidadeditorial.es/342a76c45b7b417c2899186881ebd60c/resize/1320/f/jpg/assets/multimedia/imagenes/2022/04/26/16509864385400.jpg",
            description: "The Seville Fair, also called the April Fair, is held one or two weeks after Easter and begins on Saturday at midnight with the popular lighting test, with thousands of light bulbs and lanterns lighting up its façade. that turn it into an ember of light, and after endless days of contentment, luxury and lordship, horsemen, Amazons, horseback rides and dazzling carriages, it officially ends the following Saturday at twelve o'clock at night with a fireworks display at the bank of the Guadalquivir River.",
            
        },
        {
            title: "Acuario de Sevilla",
            photo: "https://thumbnail.pa-community.com/d3/77/71b034a81456f9cfc771889ec09a/62c11b2a03bb0948aacbcacf52e50bbd.jpg",
            description: "The Seville Aquarium is one of the European aquariums with the greatest biological diversity. Among its more than 400 species, sharks, jellyfish and turtles stand out. Its oceanarium of more than 9 meters deep will leave you speechless.",
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
            tipo: "",
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
            dir: " / dir: Calle Pintores 2 / ",
            hora:"time: 8:00 - 21:00"
           
        },
        {
            title1: "Virgen del Rocio University",
            title2: "Hospital",
            dir: " / dir: Calle Antonio Machado 2 / ",
            hora:"time: 8:00 - 21:30"
        },
        {
            title1: "Maria Eugennia Cruz Roja Sevilla",
            title2: "Hospital",
            dir: " / dir: Calle Antonio Lucas 3 / ",
            hora:"time: 8:00 - 22:00"
        },
        {
            title1: "Reyes CB",
            title2: "Pharmacy",
            dir: " / dir: Calle Luis Montoto 4 / ",
            hora:"time: 8:00 - 21:15"
        },
        {
            title1: "San Pablo 24H",
            title2: "Pharmacy",
            dir: " / dir: Calle Miguel 3 / ",
            hora:"time: 8:00 - 19:00"
        },
        {
            title1: "María Auxiliadora",
            title2: "Pharmacy",
            dir: " / dir: Calle Josan 7 / ",
            hora:"time: 10:00 - 21:00"
        },
        {
            title1: "Spanish",
            title2: "Bank",
            dir: " / dir: Calle Francisco Muñoz 4 / ",
            hora:"time: 8:00 - 11:00"
        },
        {
            title1: "Eurostars Tower",
            title2: "Hotel",
            dir: " / dir: Calle Vacie 45 / ",
            hora:"time: 8:00 - 21:40"
        },
        {
            title1: "Duquesa",
            title2: "Hotel",
            dir: " / dir: Calle Casillas 14 / ",
            hora:"time: 8:00 - 23:00"
        },


    ]
    await models.Service.bulkCreate(serviceList)



}