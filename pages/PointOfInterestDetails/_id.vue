<template>
<div class="container my-5" style="background-color: white;">

    <div style="position: center;">
        <point-of-interest-card-details
                :id="id"
                :title="title"
                :photo="photo"
                :description="description"/>
                
    </div>
    
          <itinerary-card
            :id="itinerary.id"
            :title1="itinerary.title1"
            :title2="itinerary.title2"
          />
    <div style="padding: 20px 20px 20px 20px;">
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
import ItineraryCard from '~/components/ItineraryCard.vue'
import PointOfInterestCardDetails from '~/components/PointOfInterestCardDetails.vue'
export default {
  name: 'PointOfInterestDetails',
  components: {
    PointOfInterestCardDetails,
    ItineraryCard
  },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pointsOfInterest/' + id)
    return {
      title: data.title,
      photo: data.photo,
      itinerary: data.itinerary,
      description: data.description
    }
  },
  methods: {
    backToList() {
      this.$router.push('/PointOfInterestList')
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
