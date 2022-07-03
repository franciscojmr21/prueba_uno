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
           <a href="ServiceList.vue">Cathedral</a>
           <!-- meter imagen -->
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
