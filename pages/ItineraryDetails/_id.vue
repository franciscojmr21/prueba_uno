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
        <a class="col">
          <div class="img-container">
            <a v-if="getId(allList,0)==1" href="https://goo.gl/maps/y9DF8QJwdMJDffm58">
              <img v-if="getId(allList,0)==1" src="@/img/day1.png"  style="max-width: 600px; max-height: 300px; padding: auto;" class="img-fluid services-photo"/>
              <a class="services-link">
                <img style="max-width: 400px; max-height: 200px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png"/>
              </a>
            </a>
            <a v-if="getId(allList,0)==2" href="https://goo.gl/maps/PZ36fsRovmfJ94rP7">
              <img v-if="getId(allList,0)==2" src="@/img/day2.png" alt="" style="max-width: 600px; max-height: 300px; padding: auto;" class="img-fluid services-photo"/>
              <a class="services-link">
                <img style="max-width: 400px; max-height: 200px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png"/>
              </a>
            </a>
            <a v-if="getId(allList,0)==3" href="https://goo.gl/maps/VZkMfDSNXRAj1WVf8">
              <img v-if="getId(allList,0)==3" src="@/img/day3.png" alt="" style="max-width: 600px; max-height: 300px; padding: auto;" class="img-fluid services-photo"/>
              <a class="services-link">
                <img style="max-width: 400px; max-height: 200px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png"/>
              </a>
            </a>
            <a v-if="getId(allList,0)==4" href="https://goo.gl/maps/Y7mmi1sCcx4LS5iq8">
              <img v-if="getId(allList,0)==4" src="@/img/day4.png" alt="" style="max-width: 600px; max-height: 300px; padding: auto;" class="img-fluid services-photo"/>
              <a class="services-link">
                <img style="max-width: 400px; max-height: 200px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png"/>
              </a>
            </a>
          </div>
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
      return list[i].id;
    },
     getDescription(list, i){
      return list[i].description;
    },
    getTitle(list, i){
      return list[i].title;
    },
    getTitle1(list, i){
      return list[i].title1;
    },
    getTitle2(list, i){
      return list[i].title2;
    },
    getPhoto(list, i){
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

.pointOfInterest-item{
  background: var(--mainYellow);
  position: relative;
  cursor: pointer;
}
.pointOfInterest-img{
  transition: all 1s ease-in-out;
}
.pointOfInterest-item:hover .pointOfInterest-img{
opacity: 0.5;
}

.pointOfInterest-item:hover .centrado{
  visibility: visible;
  }
.pointOfInterest-item::after{
  content: "";
  position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 outline: 0.5rem solid var(--mainWhite);
 outline-offset: -2rem;
 transition: all 1s ease-in-out;
 transform: scale(0);
}
.pointOfInterest-item:hover:after{
  transform: scale(1);
}

.centrado{
  color: white;
  text-shadow: black 0.2em 0.2em 0.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}

img_text{
  visibility: hidden;
}


/* Services */
.services{
  background: var(--mainGrey);
}
.services-item{
  background: var(--mainWhite);
  border-radius: 0.5rem;
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.services-item:hover{
  opacity: 1;
  transform: scale(1.05);
}
.img-container{
  background: var(--mainBlue);
  position: relative;
  overflow: hidden;
}
.services-link{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  transform: translate(-50%,-50%);
  color: var(--mainBlack);
  opacity: 0;
  transition:all 1s ease-in-out;
}
.services-link:hover{
  color: var(--mainWhite);
}

.img-container:hover .services-link{
  opacity: 1;
}

</style>
