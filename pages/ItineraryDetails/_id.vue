<template>
  <div class="container my-5" style="background-color: white;">
    <div class="col justify-content-around">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg">
        <itinerary-card-details class="col"
                :id=getId(allList,0)
                :title1=getTitle1(allList,0)
                :title2=getTitle2(allList,0)
              />
      </div>
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 justify-content-around rounded-3 border shadow-lg">
        <a class="col" href="">
          <a v-if="getId(allList,0)==1" href="https://goo.gl/maps/y9DF8QJwdMJDffm58">
            <img v-if="getId(allList,0)==1" src="@/img/day1.png"  style="max-width: 600px; max-height: 300px; padding: auto;"/>
          </a>
          <a v-if="getId(allList,0)==2" href="https://goo.gl/maps/PZ36fsRovmfJ94rP7">
            <img v-if="getId(allList,0)==2" src="@/img/day2.png" alt="" style="max-width: 600px; max-height: 300px; padding: auto;"/>
          </a>
          <a v-if="getId(allList,0)==3" href="https://goo.gl/maps/VZkMfDSNXRAj1WVf8">
            <img v-if="getId(allList,0)==3" src="@/img/day3.png" alt="" style="max-width: 600px; max-height: 300px; padding: auto;"/>
          </a>
          <a v-if="getId(allList,0)==4" href="https://goo.gl/maps/Y7mmi1sCcx4LS5iq8">
            <img v-if="getId(allList,0)==4" src="@/img/day4.png" alt="" style="max-width: 600px; max-height: 300px; padding: auto;"/>
          </a>
        </a>
        <div class="col">
          <h6 style="text-shadow: black 0.2em 0.2em 0.5em; padding: 20px 20px 20px 20px;">{{getDescription(allList,0)}}</h6> 
        </div>
      </div>
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3">
        <button type="button" class="btn btn-outline-secondary btn-block show_more-btn" onclick="history.back()">
          Back
        </button>
      </div>
    </div>
      <div class="row justify-content-center">
        <point-of-interest-small-card 
          v-for="(pointsOfInterest, pointsOfInterestIndex) of allList"
          :key="`pointsOfInterest-index-${pointsOfInterestIndex}`"
          :id="pointsOfInterest.id"
          :title="pointsOfInterest.title"
          :photo="pointsOfInterest.photo"
        />
      </div>
    </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import ItineraryCardDetails from '~/components/ItineraryCardDetails.vue'
import PointOfInterestSmallCard from '~/components/PointOfInterestSmallCard.vue'
export default {
  name: 'ItineraryDetails',
  components: {
    ItineraryCardDetails,
    PointOfInterestSmallCard
  },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itinerariesPOI/'+id)
    return {
      allList: data,
    }
  }, 
  methods: {
     getId(list, i){
      const id = list[i].id;
      console.log("id: "+id)
      return list[i].id;
    },
     getDescription(list, i){
      const id = list[i].description;
      console.log("desc: "+id)
      return list[i].description;
    },
    getTitle(list, i){
      const id = list[i].title;
      console.log("title: "+id)
      return list[i].title;
    },
    getTitle1(list, i){
      const id = list[i].title1;
      console.log("title1: "+id)
      return list[i].title1;
    },
    getTitle2(list, i){
      const id = list[i].title2;
      console.log("title2: "+id)
      return list[i].title2;
    },
    getPhoto(list, i){
      const id = list[i].photo;
      console.log("photo: "+id)
      return list[i].photo;
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
