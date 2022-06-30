<template>
  <!DOCTYPE html>
  <html>
    
    <MainNavbar></MainNavbar>
    <head>

    </head>
    <body>
      <section class="event py-5" id="events">
        <div class="container">
          <!-- section title -->
          <div class="row mb-5">
            <div class="col d-flex flex-wrap text-uppercase justify-content-center">
              <!-- <h1 class="font-weight-bold align-self-center mx-1">most important</h1> -->
              <!-- <a href="Events.html#setas"> -->
              <h1 class="section-title--special mx-1">events</h1>
            <!-- </a> -->
            </div>
          </div>
          <div class="row">
              <event-card 
                v-for="(event, eventIndex) of eventList"
                :key="`event-index-${eventIndex}`"
                :id="event.id"
                :title="event.title"
                :title2="event.title2"
                :photo="event.photo"
                :prize="event.prize"
                :locationName="event.locationName"
                :locationURL="event.locationURL"
                :date="event.date"
                :eventWeb="event.eventWeb"
                :ticketWeb="event.ticketWeb"
              />
          </div>
        </div>
      </section>
    </body>
    
  </html>
</template>

<script>
import MainNavbar from '../components/MainNavbar.vue'
import EventCard from '../components/EventCard.vue'
export default {
  name: 'IndexPage',
  components:{
    MainNavbar,
    EventCard,
  },
  data() {
    return {}
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/events')
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
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
