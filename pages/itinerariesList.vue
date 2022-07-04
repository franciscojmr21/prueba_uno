<template>
  <!DOCTYPE html>
  <html>
    <head>

    </head>
    <body>
      <section class="itineary_form py-5" id="itineraries" style="background: rgb(216, 214, 214);">
      <div class="container">
        <!-- section title -->
          <div class="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 class="section-title--special mx-1">Itinerary</h1>
          </div>
        <!-- end of section title -->
      </div>
      <section class="itinearies py-2 d-flex align-items-center" id="itinearies">
        <div class="video-overlay">
          <div class="container py-5">
            <div class="row my-3">
          <!-- col -->
          <itinerary-card 
                  v-for="(itinerary, itineraryIndex) of itineraryList"
                  :key="`itinerary-index-${itineraryIndex}`"
                  :id="itinerary.id"
                  :title1="itinerary.title1"
                  :title2="itinerary.title2"
                />
          </div>
          </div>
        </div>
      </section>  
      <!-- end of itinearies section -->
    </section>
    </body>
    
  </html>
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
          hid: "hola",
          name: "hola",
          description: "hola"
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
.section-title--special{
  background: var(--transparentOrange);
  color: var(--mainWhite);
  padding: 0.5rem 2rem;
  clip-path: polygon(10% 0, 100% 0, 90% 100%,0 100%);
}
</style>