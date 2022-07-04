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
          <!-- section title -->
          <div class="row mb-5">
            <div class="col d-flex flex-wrap text-uppercase justify-content-center">
              <!-- <h1 class="font-weight-bold align-self-center mx-1">most important</h1> -->
              <!-- <a href="Events.html#setas"> -->
              <h1 class="section-title--special mx-1">events</h1>
            <!-- </a> -->
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
              <!-- single question first-->
              <a href="https://www.google.com/search?q=most+popular+restaurants+seville&rlz=1C1CHBF_esES949ES949&sxsrf=ALiCzsZ47aWVjnpHmYCGAtti1cmnaZ7Ufw%3A1656854233471&ei=2ZbBYsCTHKuoxc8P7vOSuAU&oq=Most+Popular+Restaurants+Sev&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCCEQoAEyBQghEKABMgUIIRCgATIICCEQHhAWEB0yCAghEB4QFhAdOgcIABBHELADOgUIABDLAToICAAQyQMQywE6BggAEB4QFjoJCAAQHhDJAxAWOgcIIRAKEKABSgUIPBIBMkoECEEYAEoECEYYAFDbAVjSE2CUIWgCcAF4AIABggGIAecDkgEDMi4zmAEAoAEByAEIwAEB&sclient=gws-wiz" target="_blank" rel="noopener noreferrer" class="question-icon mr-3">
                <div class="col-10 mx-auto my-2 col-md-6 d-flex justify-content-between question-grey p-4">
                  <!-- first flexbox child -->
                    <img src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png" style="max-width: 50px; max-height: 50px;"/>
                  <!-- second flexbox child -->
                  <div class="question-text w-75">
                    <h4 class="question-title text-capitalize font-weight-bold">
                          Most Popular Restaurants
                    </h4>
                  </div>
                </div>
              </a>
              <!-- single question second-->
              <a href="https://www.google.com/search?q=Cheapest+Restaurants+sevilla&amp;rlz=1C1CHBF_esES949ES949&amp;oq=Cheapest+Restaurants+&amp;aqs=chrome.0.69i59j69i57j0i457i512j0i22i30l6j0i10i22i30.1911j0j7&amp;sourceid=chrome&amp;ie=UTF-8" target="_blank" rel="noopener noreferrer" class="question-icon mr-3">
                <div class="col-10 mx-auto my-2 col-md-6 d-flex justify-content-between question-yellow p-4">
                  <!-- first flexbox child -->
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25228.png" style="max-width: 50px; max-height: 50px;"/>
                  <!-- second flexbox child -->
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
          <!-- section title -->
          <div class="row mb-5">
            <div class="col d-flex flex-wrap text-uppercase justify-content-center">
                <h1 class="section-title--special mx-1">Services</h1>
            </div>
          </div>
          <!-- end of section title -->

          <div class="row">
            <div class="col-10 mx-auto col-lg-6 services-info my-3">
              <service-card
                    :id=getId(allList,3)
                    :title1=getTitle1(allList,3)
                    :title2=getTitle2(allList,3)
                    />
              <service-card
                    :id=getId(allList,4)
                    :title1=getTitle1(allList,4)
                    :title2=getTitle2(allList,4)
                    />
              <service-card
                    :id=getId(allList,5)
                    :title1=getTitle1(allList,5)
                    :title2=getTitle2(allList,5)
                    />
              <service-card
                    :id=getId(allList,6)
                    :title1=getTitle1(allList,6)
                    :title2=getTitle2(allList,6)
                    />
              <service-card
                    :id=getId(allList,7)
                    :title1=getTitle1(allList,7)
                    :title2=getTitle2(allList,7)
                    />

            </div>
          <!-- services img -->
          <div class="col-10 mx-auto col-lg-6 services-img align-self-center my-3">
            <!-- img container -->
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

    <section class="itineary_form py-5" id="itineraries">
      <div class="container" id="itineraries">
        <!-- section title -->
        <div class="row my-5">
          <div class="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 class="section-title--special mx-1">Itinerary</h1>
          </div>
        </div>
        <!-- end of section title -->
      </div>
      <section class="itinearies py-2 d-flex align-items-center" id="itinearies">
        <div class="video-overlay">
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
        </div>
      </section>  
      <!-- end of itinearies section -->
    </section>

    <section class="services py-5" id="points_of_interest">
      <div class="points">
        <!-- section title -->
        <div class="row mb-5">
          <div class="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 class="section-title--special mx-1">points of interest</h1>
          </div>
        </div>
        <!-- end of section title -->
        <div class="row" style="padding: 30px 30px 30px 30px;">
          <point-of-interest-card
                :id=getId(allList,12)
                :title=getTitle(allList,12)
                :photo=getPhoto(allList,12)
                />
          <!-- end of first column -->
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
          <!-- end of second column -->
        </div>
        <!-- end of row -->
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
          hid: "hola",
          name: "hola",
          description: "hola"
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
      const id = list[i].id;
      console.log("id: "+id)
      return list[i].id;
    },
    getTitle1(list, i){
      const id = list[i].title1;
      console.log("title1: "+id)
      return list[i].title1;
    },
    getTitle2(list, i){
      const id = list[i].title2;
      console.log("title2: "+id)
      return list[i].title2;
    },
    getTitle(list, i){
      const id = list[i].title;
      console.log("title: "+id)
      return list[i].title;
    },
    getPrize(list, i){
      const id = list[i].prize;
      console.log("prize: "+id)
      return list[i].prize;
    },
    getDate(list, i){
      const id = list[i].date;
      console.log("date: "+id)
      return list[i].date;
    },
    getPhoto(list, i){
      const id = list[i].photo;
      console.log("photo: "+id)
      return list[i].photo;
    },
    getLocationName(list, i){
      const id = list[i].locationName;
      console.log("locationname: "+id)
      return list[i].locationName;
    },
    getLocationURL(list, i){
      const id = list[i].locationURL;
      console.log("locationURL: "+id)
      return list[i].locationURL;
    },
    getEventWeb(list, i){
      return list[i].eventWeb;
    },
    getTicketWeb(list, i){
      return list[i].ticketWeb;
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
body{
  background: url(https://velvetescape.com/wp-content/uploads/2014/12/IMG_6024-1-1280x920.jpg)center/cover fixed no-repeat;
  font-family: 'Roboto', sans-serif;
  color: var(--mainBlack);
}

html {
  height: 100%;
}

/*TITLE*/

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

.height-90 {
  min-height: calc(100vh - 94px);
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

.main-btn {
  color: #D3325F;
  font-size: 2rem;
  border: 2px solid #D3325F;
  transition: all 1s ease-in-out;

}

.main-btn:hover {
  color: #242424;
  border: 2px solid #C9C1AC;
  background: #C9C1AC;

}

.sushi-btn {
  animation: fromRight;
  animation-duration: 4s;
  animation-delay: 2s;
  opacity: 0;
  animation-fill-mode: forwards;

}


@keyframes fromRight {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  50% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}



.header-link {
  display: inline-block;
  position: absolute;
  bottom: 5%;
  left: 50%;
  background: #C9C1AC;
  border: 3px solid #C9C1AC;
  border-radius: 10px;
  transition: all 2s ease;
  animation: fromBottom;
  animation-duration: 4s;
  animation-iteration-count: infinite
}

.header-link:hover {

  color: #242424;
}

@keyframes fromBottom {
  0% {
    transform: translateY(-10px);

  }
  50% {
    transform: translateY(10px)
  }

  100% {
    transform: translateY(-10px);

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
.video- {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
}
.video-item{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(241, 99, 64, 0.7), rgba(241, 99, 64, 0.7)), url(https://urbansevilla.es/wp-content/uploads/2019/06/la-giralda-sevilla-airpano.jpg)center/cover fixed no-repeat;
  z-index: -2;
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
.itineary_form-icon{
  font-size: 1.5rem;
  color: var(--mainYellow);
  cursor: pointer;
  transition: 0.5s all ease-in-out;
}
.itineary_form-icon:hover{
  color: var(--mainBlue);
}
.img-container{
  background: var(--mainBlue);
  position: relative;
  overflow: hidden;
}
.itineary_form-photo{
  transition: all 1s ease-in-out;
}
.img-container:hover .itineary_form-photo{
 transform: scale(1.3);
 opacity: 0.5;
}
.itineary_form-link{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  transform: translate(-50%,-50%);
  color: var(--mainBlack);
  opacity: 0;
  transition:all 1s ease-in-out;
}
.itineary_form-link:hover{
  color: var(--mainWhite);
}

.img-container:hover .itineary_form-link{
  opacity: 1;
}

</style>