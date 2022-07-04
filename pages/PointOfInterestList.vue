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
          hid: "sev_special_color_6",
          name: "Sevilla Tourist Website PointOfInterest- Sevilla PointOfInterest",
          description: "Sevilla Points of Inn Page - This is the page where we talk about what are the most important points of interest in Sevilla. This is the best tourist sevilla website, with its events, points of interest, itineraries and services"
        }
      ]
    }
    
  },
  components: {
    PointOfInterestCard,
  },
  async asyncData({ $axios }) {
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
</style>