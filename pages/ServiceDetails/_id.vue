<template>
  <div class="container my-5" style="background-color: white;">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg">
        <service-card-details 
                v-for="(service, serviceIndex) of serviceList"
                :key="`service-index-${serviceIndex}`"
                :id="service.id"
                :title1="service.title1"
                :title2="service.title2"
              />
          <button
            type="button"
            class="btn btn-outline-secondary btn-block show_more-btn"
            @click="backToList"
          >
            Back to list
          </button>
    </div>
  </div>
</template>

<script>
import ServiceCardDetails from '~/components/ServiceCardDetails.vue'
export default {
  name: 'ServiceDetails',
  components: {
    ServiceCardDetails,
  },
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/services/1')
    return {
      serviceList: data,
    }
  },
  head(){
    return {
      title: this.title
    }
  },
//   mounted(){
//     const date = new Date()
//     // Example on hwo to use mixinx
//     console.log(this.formatMyDate(date.toLocaleDateString()))
//   },
  methods: {
    backToList() {
      this.$router.push('/ServiceList')
    },
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

.show_more-btn{
  text-transorm: uppercase;
  color: var(--mainWhite);
  border-color: var(--mainBlack);
  background-color: var(--transparentOrange);
  text-shadow: black 0.2em 0.2em 0.5em;
}
.show_more-btn:hover{
  background: var(--mainBlack);
  color: var(--mainWhite);
}


</style>
