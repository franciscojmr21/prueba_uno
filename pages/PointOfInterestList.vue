<template>
    <body>
      <section class="pointsOfInterest py-5" id="pointsOfInterest" style="background-color: rgb(216, 214, 214);">
        <div class="container">
          <div class="row mb-5">
            <div class="col d-flex flex-wrap text-uppercase justify-content-center">
              <h1 class="section-title--special mx-1">&nbsp;points Of Interest</h1>
            </div>
          </div>
          <div class="row">
              <point-of-interest-card 
                v-for="(pointsOfInterest, pointsOfInterestIndex) of pointsOfInterestList"
                :key="`pointsOfInterest-index-${pointsOfInterestIndex}`"
                :id="pointsOfInterest.id"
                :title="pointsOfInterest.title"
                :photo="pointsOfInterest.photo"
              />
          </div>
        </div>
      </section>
    </body>
</template>

<script>
import PointOfInterestCard from '~/components/PointOfInterestCard.vue'
export default {
  name: 'PointOfInterestList',
  head () {
    return {
      title: this.name,
      meta: [
        {
          hid: "sev_special_color",
          name: "Sevilla has a special color",
          description: "This is the best Sevilla toruist website "
        }
      ]
    }
    
  },
  components: {
    PointOfInterestCard,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/pointsOfInterest')
    return {
      pointsOfInterestList: data,
    }
  },
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
.section-title--special{
  background: var(--transparentOrange);
  color: var(--mainWhite);
  padding: 0.5rem 2rem;
  clip-path: polygon(10% 0, 100% 0, 90% 100%,0 100%);
}

/* Services */
.services{
  background: var(--mainGrey);
}
.services-item{
  background: var(--mainWhite);
  border-radius: 0.5rem;
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.services-item:hover{
  opacity: 1;
  transform: scale(1.05);
}
.services-icon{
  font-size: 1.5rem;
  color: var(--mainYellow);
  cursor: pointer;
  transition: 0.5s all ease-in-out;
}
.services-icon:hover{
  color: var(--mainBlue);
}
.img-container{
  background: var(--mainBlue);
  position: relative;
  overflow: hidden;
}
.services-photo{
  transition: all 1s ease-in-out;
}
.img-container:hover .services-photo{
 transform: scale(1.3);
 opacity: 0.5;
}
.services-link{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  transform: translate(-50%,-50%);
  color: var(--mainBlack);
  opacity: 0;
  transition:all 1s ease-in-out;
}
.services-link:hover{
  color: var(--mainWhite);
}

.img-container:hover .services-link{
  opacity: 1;
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
/* .video-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(241, 99, 64, 0.7), rgba(241, 99, 64, 0.7)), url(../img/la\ giralda\ fondo.jpg)center/cover fixed no-repeat;
  z-index: -2;
} */
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

div#evento1{
width: 348px;
height: 386px;
}

/* div#pointOfInterest1{
width: 348px;
height: 386px;
} */

.col2 {
    border:2px solid green;
    width:49%;
    float:left;
    height:100%;
    margin-right:2%;    
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar-background {
  padding: 5px 5px;
}

/* question */
.question{
  /* background: url('./assets/comida.jpeg')center/cover fixed no-repeat; */
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
</style>