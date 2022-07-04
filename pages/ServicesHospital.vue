<template>
  <section class="service py-5" id="services">
    <div class="container" style="padding-bottom: 100px;">
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
  name: 'HospitalServiceList',
  head () {
    return {
      title: this.name,
      meta: [
        {
          hid: "sev_special_color_8",
          name: "Sevilla Tourist Website HospitalService- Sevilla Services Sevilla Hospitals",
          description: "Sevilla Hospitals Page - This is the page where we talk about what are the hospitals in sevilla. This is the best tourist sevilla website, with its events, points of interest, itineraries and services"
        }
      ]
    }
    
  },
  components: {
    ServiceCard,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/hospital')
    return {
      serviceList: data,
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