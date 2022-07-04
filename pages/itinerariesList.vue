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
  async asyncData({ $axios }) {
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
</style>