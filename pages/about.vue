<!-- <template>


  <custom-page :title="title" :image="image" :description="description" />


</template> -->

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
            <h1 class="section-title--special mx-1">About Us</h1>
          </div>
        <!-- end of section title -->
      </div>
      <section class="itinearies py-2 d-flex align-items-center" id="itinearies">
        <div class="video-overlay">
          <div class="container py-5">
           <custom-page :title="title" :description="description" /> 
           <p class="text-white" style="text-shadow: black 0.2em 0.2em 0.5em;">
            <br>
With a happy and passionate spirit, Seville is a city that stands out not only for its great artistic and architectural importance, but also for having a pulsating history that is still felt at every step through the heart of its old town. Seville is a charming city that moves to the rhythm of flamenco, and as the song says, Seville has a special color. The city is located in the south of the Iberian Peninsula, it is the capital of Andalusia and one of the most populated cities in Spain behind Madrid, Barcelona and Valencia.The capital of Seville extends in a strategic enclave on the banks of the Guadalquivir, a river responsible for its great historical importance due to the fact that it turned the city into a prosperous commercial port that would unite it with "the Americas". The Andalusian capital has excellent monuments such as the <a  href="/PointOfInterestDetails/3" style="color:white"><b>Torre del Oro</b></a>, or the <a href="/PointOfInterestDetails/1" style="color:white"><b>Giralda</b></a>, but sometimes you just need to get lost in the streets of the <a href="/PointOfInterestDetails/16" style="color:white"><b>Triana</b></a> or <a href="/PointOfInterestDetails/6" style="color:white"><b>Santa Cruz neighbourhods</b></a>, or enjoy a quiet walk through the beautiful <a href="/PointOfInterestDetails/14" style="color:white"><b>Parque Maria Luisa</b></a>, to connect with the traditions of the city and get infected with the Andalusian energy. This webpage has benn written by travelers and for travelers, we offer useful information to travel to Seville and make the most of time and money. With our help you will be able to know the essential monuments of the city, what are the typical dishes and the best areas to sleep, or our Top 10 in Seville. The information and practical data have been collected in July 2022. Written by travelers and for travelers, we offer useful information to travel to Seville and make the most of time and money. With our help you will be able to know the essential monuments of the city, what are the typical dishes and the best areas to sleep, or our Top 10 in Seville.

The information and practical data have been collected in July 2021. If you find any errors or see something that we should change, contact us.
           </p>
          </div>
        </div>
      </section>  
      <!-- end of itinearies section -->
    </section>
    </body>
    
  </html>
</template>

<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  


  name: 'AboutPage',
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
     CustomPage,
  },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/about')
    const title = data.title
    // const image = data.image
    const description = data.description
    return {
      title,
      description,
      // image,
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
