<template>
  <header id="header" class="jquery-ripples">
      <div class="container">
        <div class="row height-90 align-items-center justify-content-center">
          <div class="col">
            <div class="banner text-center">
              <h1 class="display-1 text-capitalize underline w-5000 mx-auto">
                <strong class="title_sevilla">SEVILLA </strong> <small class="primary-color"><br>HAS A SPECIAL COLOR</small>
              </h1>
            </div>
          </div>
        </div>
      </div>
    <canvas width="700" height="627" style="position: absolute; inset: 0px; z-index: -1;"></canvas>
    <section class="event py-5" id="events">
      <div class="container">
        <div class="row mb-5">
          <div class="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 class="section-title--special mx-1">events</h1>
          </div>
        </div>
        <div class="row">
          <event-card-list 
              :id=getId(allList,0)
              :title=getTitle(allList,0)
              :title2=getTitle2(allList,0)
              :photo=getPhoto(allList,0)
              :prize=getPrize(allList,0)
              :locationName=getLocationName(allList,0)
              :locationURL=getLocationURL(allList,0)
              :date=getDate(allList,0)
              :eventWeb=getEventWeb(allList,0)
              :ticketWeb=getTicketWeb(allList,0)
            />
          <event-card-list 
              :id=getId(allList,1)
              :title=getTitle(allList,1)
              :title2=getTitle2(allList,1)
              :photo=getPhoto(allList,1)
              :prize=getPrize(allList,1)
              :locationName=getLocationName(allList,1)
              :locationURL=getLocationURL(allList,1)
              :date=getDate(allList,1)
              :eventWeb=getEventWeb(allList,1)
              :ticketWeb=getTicketWeb(allList,1)
            />
          <event-card-list 
              :id=getId(allList,2)
              :title=getTitle(allList,2)
              :title2=getTitle2(allList,2)
              :photo=getPhoto(allList,2)
              :prize=getPrize(allList,2)
              :locationName=getLocationName(allList,2)
              :locationURL=getLocationURL(allList,2)
              :date=getDate(allList,2)
              :eventWeb=getEventWeb(allList,2)
              :ticketWeb=getTicketWeb(allList,2)
            />
        </div>
      </div>
      <div class="container">
        <div class="abs-center">
          <nuxt-link :to="`/EventList/`">
            <button type="submit" class="btn btn-outline-secondary btn-block show_more-btn">SHOW MORE</button>
          </nuxt-link>
        </div>
      </div>
    </section>

    <section class="section question py-5">
      <div class="section question py-5" id="question">
        <div class="container">
          <div class="row">
            <a href="https://www.google.com/search?q=most+popular+restaurants+seville&rlz=1C1CHBF_esES949ES949&sxsrf=ALiCzsZ47aWVjnpHmYCGAtti1cmnaZ7Ufw%3A1656854233471&ei=2ZbBYsCTHKuoxc8P7vOSuAU&oq=Most+Popular+Restaurants+Sev&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCCEQoAEyBQghEKABMgUIIRCgATIICCEQHhAWEB0yCAghEB4QFhAdOgcIABBHELADOgUIABDLAToICAAQyQMQywE6BggAEB4QFjoJCAAQHhDJAxAWOgcIIRAKEKABSgUIPBIBMkoECEEYAEoECEYYAFDbAVjSE2CUIWgCcAF4AIABggGIAecDkgEDMi4zmAEAoAEByAEIwAEB&sclient=gws-wiz" target="_blank" rel="noopener noreferrer" class="question-icon mr-3">
              <div class="col-10 mx-auto my-2 col-md-6 d-flex justify-content-between question-grey p-4">
                <img src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png" style="max-width: 50px; max-height: 50px;"/>
                <div class="question-text w-75">
                  <h4 class="question-title text-capitalize font-weight-bold">
                        Most Popular Restaurants
                  </h4>
                </div>
              </div>
            </a>
            <a href="https://www.google.com/search?q=Cheapest+Restaurants+sevilla&amp;rlz=1C1CHBF_esES949ES949&amp;oq=Cheapest+Restaurants+&amp;aqs=chrome.0.69i59j69i57j0i457i512j0i22i30l6j0i10i22i30.1911j0j7&amp;sourceid=chrome&amp;ie=UTF-8" target="_blank" rel="noopener noreferrer" class="question-icon mr-3">
              <div class="col-10 mx-auto my-2 col-md-6 d-flex justify-content-between question-yellow p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25228.png" style="max-width: 50px; max-height: 50px;"/>
                <div class="question-text w-75">
                  <h4 class="question-title text-capitalize font-weight-bold">
                    Cheapest Restaurants
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="services py-5" id="service_types">
      <div class="container">
        <div class="row mb-5">
          <div class="col d-flex flex-wrap text-uppercase justify-content-center">
              <h1 class="section-title--special mx-1">Services</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-10 mx-auto col-lg-6 services-info my-3">
            <service-card
              :id=getId(allList,3)
              :title1=getTitle1(allList,3)
              :title2=getTitle2(allList,3)
              :dir=getDir(allList,3)
              :hora=getHora(allList,3)
              :location=getLocation(allList,3)
              />
            <service-card
              :id=getId(allList,4)
              :title1=getTitle1(allList,4)
              :title2=getTitle2(allList,4)
              :dir=getDir(allList,4)
              :hora=getHora(allList,4)
              :location=getLocation(allList,4)
              />
            <service-card
              :id=getId(allList,5)
              :title1=getTitle1(allList,5)
              :title2=getTitle2(allList,5)
              :dir=getDir(allList,5)
              :hora=getHora(allList,5)
              :location=getLocation(allList,5)
              />
            <service-card
              :id=getId(allList,6)
              :title1=getTitle1(allList,6)
              :title2=getTitle2(allList,6)
              :dir=getDir(allList,6)
              :hora=getHora(allList,6)
              :location=getLocation(allList,6)
              />
            <service-card
              :id=getId(allList,7)
              :title1=getTitle1(allList,7)
              :title2=getTitle2(allList,7)
              :dir=getDir(allList,7)
              :hora=getHora(allList,7)
              :location=getLocation(allList,7)
              />
            </div>
            <div class="col-10 mx-auto col-lg-6 services-img align-self-center my-3">
            <nuxt-link :to="`/ServiceList/`" class="img-container">
              <img src="https://www.diariodesevilla.es/2021/02/25/sociedad/Torre-Oro-monumentos-emblematicos-Sevilla_1550555021_134722316_1200x675.jpg" alt="" class="img-fluid services-photo">
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="abs-center">
          <nuxt-link :to="`/ServiceList/`">
            <button type="submit" class="btn btn-outline-secondary btn-block show_more-btn">SHOW MORE</button>
          </nuxt-link>
        </div>
      </div>
    </section>


    <section class="itineary_form py-5" id="itineraries" style="  background: linear-gradient(rgba(241, 99, 64, 0.7), rgba(241, 99, 64, 0.7)), url(https://urbansevilla.es/wp-content/uploads/2019/06/la-giralda-sevilla-airpano.jpg)center/cover fixed no-repeat;">
      <div class="row my-5">
        <div class="col d-flex flex-wrap text-uppercase justify-content-center">
          <h1 class="section-title--special mx-1 border shadow-lg">Itinerary</h1>
        </div>
        <section class="itinearies py-2 d-flex align-items-center" id="itinearies">
          <div class="container py-5">
            <div class="row my-3">
              <itinerary-card
                :id=getId(allList,8)
                :title1=getTitle1(allList,8)
                :title2=getTitle2(allList,8)
                />
              <itinerary-card
                :id=getId(allList,9)
                :title1=getTitle1(allList,9)
                :title2=getTitle2(allList,9)
                />
              <itinerary-card
                :id=getId(allList,10)
                :title1=getTitle1(allList,10)
                :title2=getTitle2(allList,10)
                />
              <itinerary-card
                :id=getId(allList,11)
                :title1=getTitle1(allList,11)
                :title2=getTitle2(allList,11)
                />
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="services py-5" id="points_of_interest">
      <div class="points">
        <div class="row mb-5">
          <div class="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 class="section-title--special mx-1">points of interest</h1>
          </div>
        </div>
        <div class="row" style="padding: 30px 30px 30px 30px;">
          <point-of-interest-card
            :id=getId(allList,12)
            :title=getTitle(allList,12)
            :photo=getPhoto(allList,12)
            />
          <div class="col-sm-6 d-flex flex-column justify-content-between">
            <div class="row">
              <point-of-interest-small-card
                :id=getId(allList,13)
                :title=getTitle(allList,13)
                :photo=getPhoto(allList,13)
                />
              <point-of-interest-small-card
                :id=getId(allList,14)
                :title=getTitle(allList,14)
                :photo=getPhoto(allList,14)
                />
              <point-of-interest-small-card
                :id=getId(allList,15)
                :title=getTitle(allList,15)
                :photo=getPhoto(allList,15)
                />
              <point-of-interest-small-card
                :id=getId(allList,16)
                :title=getTitle(allList,16)
                :photo=getPhoto(allList,16)
                />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="abs-center">
          <nuxt-link :to="`/PointOfInterestList/`">
            <button type="submit" class="btn btn-outline-secondary btn-block show_more-btn">SHOW MORE</button>
          </nuxt-link>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
import ServiceCard from '~/components/ServiceCard.vue'
import EventCardList from '~/components/EventCardList.vue'
import ItineraryCard from '~/components/ItineraryCard.vue'
import PointOfInterestCard from '~/components/PointOfInterestCard.vue'
import PointOfInterestSmallCard from '~/components/PointOfInterestSmallCard.vue'

export default {
  name: 'IndexPage',
  components: {
    ServiceCard,
    EventCardList,
    ItineraryCard,
    PointOfInterestCard,
    PointOfInterestSmallCard
  },
  head () {
    return {
      title: this.name,
      meta: [
        {
          name: "sev_special_color_4",
          hid: "Sevilla Tourist Website Index- Sevilla IndexEvents",
          content: "With a happy and passionate spirit, Seville is a city that stands out not only for its great artistic and architectural importance, but also for having a pulsating history that is still felt at every step through the heart of its old town. Seville is a charming city that moves to the rhythm of flamenco, and as the song says, Seville has a special color. The city is located in the south of the Iberian Peninsula, it is the capital of Andalusia and one of the most populated cities in Spain behind Madrid, Barcelona and Valencia.The capital of Seville extends in a strategic enclave on the banks of the Guadalquivir, a river responsible for its great historical importance due to the fact that it turned the city into a prosperous commercial port that would unite it with the Americas. The Andalusian capital has excellent monuments such as the Torre del Oro, or the Giralda. This webpage has benn written by travelers and for travelers, we offer useful information to travel to Seville and make the most of time and money. With our help you will be able to know the essential monuments of the city, what are the typical dishes and the best areas to sleep, or our Top 10 in Seville. The information and practical data have been collected in July 2022. Written by travelers and for travelers, we offer useful information to travel to Seville and make the most of time and money. With our help you will be able to know the essential monuments of the city, what are the typical dishes and the best areas to sleep, or our Top 10 in Seville."
        }
      ]
    }
    
  },
  async asyncData({ $axios }) {
    const {data} = await $axios.get('/api/allHomePage')
    return {
      allList: data, 
    }
  },
  methods:{
    getId(list, i){
      return list[i].id;
    },
    getTitle1(list, i){
      return list[i].title1;
    },
    getTitle2(list, i){
      return list[i].title2;
    },
    getTitle(list, i){
      return list[i].title;
    },
    getPrize(list, i){
      return list[i].prize;
    },
    getDate(list, i){
      return list[i].date;
    },
    getPhoto(list, i){
      return list[i].photo;
    },
    getLocationName(list, i){
      return list[i].locationName;
    },
    getLocationURL(list, i){
      return list[i].locationURL;
    },
    getEventWeb(list, i){
      return list[i].eventWeb;
    },
    getTicketWeb(list, i){
      return list[i].ticketWeb;
    },
    getLocation(list, i){
      return list[i].location;
    },
    getHora(list, i){
      return list[i].hora;
    },
    getDir(list, i){
      return list[i].dir;
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

:root{
  --mainOrange:rgba(241, 99, 64, 0.7);
  --transparentOrange:rgba(241, 99, 64, 0.7);
  --mainWhite:#FFFFFF;
  --mainGrey:#9c9c9c;
  --mainBlack:#000000;
  --mainGrey:rgb(216, 214, 214);
  --mainYellow:#e3b505;
}
.abs-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
html {
  height: 100%;
}
body{
  background: url(https://velvetescape.com/wp-content/uploads/2014/12/IMG_6024-1-1280x920.jpg)center/cover fixed no-repeat;
  font-family: 'Roboto', sans-serif;
  color: var(--mainBlack);
}
.section-title--special{
  background: var(--transparentOrange);
  color: var(--mainWhite);
  padding: 0.5rem 2rem;
  clip-path: polygon(10% 0, 100% 0, 90% 100%,0 100%);
}
#header {
  min-height: calc(100vh - 94px);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://velvetescape.com/wp-content/uploads/2014/12/IMG_6024-1-1280x920.jpg../img/background.jpg)center/cover fixed no-repeat;
  position: relative;
}

.primary-color {
  color: var(--mainGrey);
}


.title_sevilla {
  color: var(--mainOrange);
}
.banner h1 {
  border-top: 6px dotted #C9C1AC;
  border-bottom: 6px dotted #C9C1AC;
  animation: fromLeft;
  animation-duration: 3s;
  animation-delay: 1s;
  opacity: 0;
  animation-fill-mode: forwards;

}
.height-90 {
  min-height: calc(100vh - 94px);
}

@keyframes fromLeft {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* question */
.question{
  background: url("https://elviajerofeliz.com/wp-content/uploads/2019/11/Comida-t%C3%ADpica-de-India-_-10-Platos-Imprescindibles.jpg")center/cover fixed no-repeat;
}
.question-grey{
  background: rgba(79,109,122,0.75);
}
.question-yellow{
  background: rgba(227,181,5,0.75);
}
.question-icon{
  font-size: 4rem;
  color: var(--mainBlue);
  transition: all 0.5s ease-in-out;
}
.question-icon:hover{
transform: translateY(-10%);
color: var(--mainBlue);
}
.question-info{
  color:var(--mainWhite);
}

/* Itineary section */

.itinearies{
  position: relative;
  min-height: 85vh;
  max-width: 95vw;
  margin: 0 auto;
  clip-path: polygon(0 10%,100% 0,100% 90%, 0 100%);
  
}
.itineary{
  background: var(--mainBlack);
  color: var(--mainWhite);
  transition: all 0.5s ease-in-out;
}
.itineary:hover{
  background: var(--mainWhite);
  color: var(--mainBlack);
  padding-left: 2.2rem!important
}
.itineary-icon{
  font-size: 4rem;
  color: var(--mainYellow);
}

/* itineary_form */
.itineary_form{
  background: var(--mainWhite);
}
.itineary_form-item{
  background: var(--mainWhite);
  border-radius: 0.5rem;
  opacity: 0.5;
  cursor: pointer;
  transition: all 1s ease-in-out;
}
.itineary_form-item:hover{
  opacity: 1;
  transform: scale(1.05);
}
.img-container{
  background: var(--mainBlue);
  position: relative;
  overflow: hidden;
}

</style>