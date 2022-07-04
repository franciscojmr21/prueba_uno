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



  name: 'EventList',
  head () {
    return {
      title: this.name,
      meta: [
        {
          hid: "sev_special_color_1",
          name: "Sevilla Tourist Website Events- Sevilla Events",
          description: "Sevilla Events Page - This is the page where we talk about all the events happening in Sevilla, also you can search for sevilla summer events and sevilla spring events. This is the best tourist sevilla website, with its events, points of interest, itineraries and services"
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
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
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