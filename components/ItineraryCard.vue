<template>
  <nuxt-link :to="`/ItineraryDetails/${id}`" class="col-8 mx-auto col-lg-6 col-md-4 my-3 text-black">
    <div class="itineary py-5 pl-4">
      <div class="img-container" style="padding: 20px 20px 20px 20px;">
        <h2 class="text-capitalize itineary-title">{{title1}}&nbsp;&nbsp;{{title2}}</h2>
      </div>
    </div>
  </nuxt-link>
</template>

<script >

export default {
    name:"ItineraryCard",
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

.itineary{
  background: var(--mainBlack);
  color: var(--mainWhite);
  transition: all 0.5s ease-in-out;
}
</style>