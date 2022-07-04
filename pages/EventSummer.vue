<template>
  <!DOCTYPE html>
  <html>
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
                :date="event.date"
                :photo="event.photo"
                :prize="event.prize"
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
import EventCard from '~/components/EventCardList.vue'
export default {
  name: 'SummerEventList',
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
    EventCard,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/summer')
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