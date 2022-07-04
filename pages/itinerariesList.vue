<template>
    <section class="itineary_form py-5" id="itineraries" style="background: rgb(216, 214, 214);">
      <div class="row my-5">
        <div class="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 class="section-title--special mx-1">Itinerary</h1>
        </div>
          <div class="container py-5">
            <div class="row my-3">
              <itinerary-card 
                v-for="(itinerary, itineraryIndex) of itineraryList"
                :key="`itinerary-index-${itineraryIndex}`"
                :id="itinerary.id"
                :title1="itinerary.title1"
                :title2="itinerary.title2"
                style="padding: 20px 20px 20px 20px;"
              />
            </div>
          </div>
        </div>
    </section>
</template>

<script>
import ItineraryCard from '~/components/ItineraryCard.vue'
export default {
  name: 'ItineraryList',
  head () {
    return {
      title: this.name,
      meta: [
        {
          hid: "sev_special_color_5",
          name: "Sevilla Tourist Website Itineraries- Sevilla Itineraries",
          description: "Sevilla Itineraries Page - This is the page where we talk about what are itineraries to do in sevilla. This is the best tourist sevilla website, with its events, points of interest, itineraries and services"
        }
      ]
    }
    
  },
  components: {
    ItineraryCard,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/itineraries')
    return {
      itineraryList: data,
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
 /* itineary_form */
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