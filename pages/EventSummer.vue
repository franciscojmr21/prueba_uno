<template>
  <section class="event py-5" id="events">
    <div class="container">
      <div class="row mb-5">
        <div class="col d-flex flex-wrap text-uppercase justify-content-center">
          <h1 class="section-title--special mx-1">events</h1>
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
           hid: "sev_special_color_3",
          name: "Sevilla Tourist Website SummerEvents- Sevilla SummerEvents",
          description: "Sevilla Summer Events Page - This is the page where we talk about what are the sevilla summer events. This is the best tourist sevilla website, with its events, points of interest, itineraries and services"
        }
      ]
    }
  },
  components: {
    EventCard,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/summer')
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

.event{
  background: var(--mainGrey);
}

.section-title--special{
  background: var(--transparentOrange);
  color: var(--mainWhite);
  padding: 0.5rem 2rem;
  clip-path: polygon(10% 0, 100% 0, 90% 100%,0 100%);
}
</style>