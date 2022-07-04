<template>
  <!DOCTYPE html>
  <html>
    <body>
      <section class="service py-5" id="services">
        <div class="container" >
          <!-- section title -->
          <div class="row mb-5">
            <div class="col d-flex flex-wrap text-uppercase justify-content-center">
              <!-- <h1 class="font-weight-bold align-self-center mx-1">most important</h1> -->
              <!-- <a href="Events.html#setas"> -->
              <h1 class="section-title--special mx-1">services</h1>
            <!-- </a> -->
            </div>
          </div>
          <div class="row">
            <!-- dividir en tipos de servicio -->
              <service-card 
                v-for="(service, serviceIndex) of serviceList"
                :key="`service-index-${serviceIndex}`"
                :id="service.id"
                :title1="service.title1"
                :title2="service.title2"
                :dir = "service.dir"
                :hora = "service.hora"
              />
           
          </div>
        </div>
      </section>
    </body>
    
  </html>
</template>

<script>
import ServiceCard from '~/components/ServiceCard.vue'
export default {
  name: 'ServiceList',
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
    ServiceCard,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/services')
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