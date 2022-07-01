<template>
  <!DOCTYPE html>
  <html>
    <head>

    </head>
    <body>
      <section class="itinearies py-2 d-flex align-items-center" id="itinearies">
    <!-- video container -->
 <!-- <div class="video-container">
      <video class="video-item" autoplay loop muted>
        <source src="assets/videoBcg.mp4" type="video/mp4">Your browser does not support video tag
      </video>
    </div> -->
    <!-- end of video container -->
    <!-- video overlay -->
    <div class="video-overlay"></div>
    <!-- end of video overlay -->
    <!-- itineary content -->
    <div class="container py-5">
       <!-- section title -->
        <div class="row mb-5">
          <div class="col d-flex flex-wrap text-uppercase justify-content-center">
            <!-- <h1 class="font-weight-bold align-self-center mx-1">most important</h1> -->
            <!-- <a href="Events.html#setas"> -->
            <h1 class="section-title--special mx-1">itineraries</h1>
          <!-- </a> -->
          </div>
        </div>
      <div class="row my-3">
        <!-- col -->
         <itinerary-card 
                v-for="(itinerary, itineraryIndex) of itineraryList"
                :key="`itinerary-index-${itineraryIndex}`"
                :id="itinerary.id"
                :title1="itinerary.title1"
                :title2="itinerary.title2"
              />
        <!-- end col -->
        <!-- col -->
        <!-- <Itinerary :title1="it_title1" :title2="it_title2"></Itinerary> -->
        <!-- end col -->
        <!-- col -->
        <!-- <Itinerary :title1="it_title1" :title2="it_title2"></Itinerary> -->
        <!-- end col -->
        <!-- end col -->
        <!-- col -->
        <!-- <Itinerary :title1="it_title1" :title2="it_title2"></Itinerary> -->
        <!-- end col -->
      </div>
    </div>
  </section>
    </body>
    
  </html>
</template>

<script>
import ItineraryCard from '~/components/ItineraryCard.vue'
export default {
  name: 'ItineraryList',
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
.section-title--special{
  background: var(--transparentOrange);
  color: var(--mainWhite);
  padding: 0.5rem 2rem;
  clip-path: polygon(10% 0, 100% 0, 90% 100%,0 100%);
}
</style>