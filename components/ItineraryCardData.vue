<template>


    <!-- single Point Of Interest -->

          <!-- first item -->
 <!-- col -->
        <nuxt-link :to="`/ItineraryDetails/${id}`" class="col-8 mx-auto col-lg-6 col-md-4 my-3 text-black">
          <div class="itineary py-5 pl-4">
            <div class="img-container" style="padding: 20px 20px 20px 20px;">
              <h2 class="text-capitalize itineary-title">{{title1}}&nbsp;&nbsp;{{title2}}</h2>
            </div>
          </div>
        </nuxt-link>
        <!-- end col -->
</template>


<script >

export default {
    name:"ItineraryCardData",
    props: {
       id: {
      type: Number,
      required: true,
    }, 
       title1: {
      type: String,
      required: true,
    }, 
        title2: {
      type: String,
      required: true,
    },
  },
        methods:{
            imgPost(){
                return this.photo;
            },
            url(url){
              return url;
            }
        }
}
</script>


<style >
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
   /* Itineary section */

.itinearies{
  position: relative;
  min-height: 85vh;
  max-width: 95vw;
  margin: 0 auto;
  clip-path: polygon(0 10%,100% 0,100% 90%, 0 100%);
  
}
.video- {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
}
.video-item{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* .video-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(241, 99, 64, 0.7), rgba(241, 99, 64, 0.7)), url(../img/la\ giralda\ fondo.jpg)center/cover fixed no-repeat;
  z-index: -2;
} */
.itineary{
  background: var(--mainWhite);
  color: var(--mainBlack);
  transition: all 0.5s ease-in-out;
}
.itineary:hover{
  background: var(--mainBlack);
  color: var(--mainWhite);
  padding-left: 2.2rem!important
}
.itineary-icon{
  font-size: 4rem;
  color: var(--mainYellow);
}

</style>