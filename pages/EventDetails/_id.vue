<template>
  <div class="container my-5" style="background-color: white;">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg">
        <event-card 
                :id="id"
                :title="title"
                :title2="title2"
                :photo="photo"
                :prize="prize"
                :locationName="locationName"
                :locationURL="locationURL"
                :date="date"
                :eventWeb="eventWeb"
                :ticketWeb="ticketWeb"
          />
          <point-of-interest-card v-if="pointsOfInterest!=null"
            :id="pointsOfInterest.id"
            :title="pointsOfInterest.title"
            :photo="pointsOfInterest.photo"
          />
          <button
            type="button"
            class="btn btn-outline-secondary btn-block show_more-btn"
            onclick="history.back()"
          >
            Back
          </button>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import EventCard from '~/components/EventCardDetails.vue'
import PointOfInterestCard from '~/components/PointOfInterestCard.vue'
export default {
  name: 'EventDetails',
  components: {
    EventCard,
    PointOfInterestCard
  },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/events/' + id)
    return {
      title: data.title,
      title2: data.title2,
      photo: data.photo,
      eventWeb: data.eventWeb,
      ticketWeb: data.ticketWeb,
      prize: data.prize,
      date: data.date,
      locationName: data.locationName,
      locationURL: data.locationURL,
      pointsOfInterest: data.pointsOfInterest
    }
  },
  head(){
    return {
      title: this.title
    }
  },
  methods: {
    backToList() {
      this.$router.push('/EventList')
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
