<template>
  <section class="service py-5" id="services">
    <div class="container" style="padding-bottom: 150px;">
      <div class="row mb-5">
        <div class="col d-flex flex-wrap text-uppercase justify-content-center">
          <h1 class="section-title--special mx-1">services</h1>
        </div>
      </div>
      <div class="row">
        <service-card 
          v-for="(service, serviceIndex) of serviceList"
          :key="`service-index-${serviceIndex}`"
          :id="service.id"
          :title1="service.title1"
          :title2="service.title2"
          :dir = "service.dir"
          :hora = "service.hora"
          :location = "service.location"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from '~/components/ServiceCard.vue'
export default {
  name: 'HotelsServiceList',
  head () {
    return {
      title: this.name,
      meta: [
        {
          hid: "sev_special_color_9",
          name: "Sevilla Tourist Website HotelsService- Sevilla Services Sevilla Hotels",
          description: "Sevilla Hotels Page - This is the page where we talk about what are the hotels in sevilla. This is the best tourist sevilla website, with its events, points of interest, itineraries and services"
        }
      ]
    }
    
  },
  components: {
    ServiceCard,
  },
async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/hotel')
    return {
      serviceList: data,
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