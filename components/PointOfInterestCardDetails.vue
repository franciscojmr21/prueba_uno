<template>
<div style="padding: 10px;">
    <div >
      <div class="col d-flex flex-wrap text-uppercase justify-content-center" style="padding: 20px 0px 0px 0px;">
        <h1 class="section-title--special mx-1" >{{this.title}}</h1>
      </div>
    </div>
    <div class="row">
      <div class="elementos d-flex flex-column justify-content-center text-center" style="padding: 20px 20px 20px 20px;">
        <img :src="photo" class="card-img-center car-img" style="width: 640px; height: 405px; align-self: center;  padding: 20px 20px 20px 20px;">
        <h6 style="text-shadow: black 0.2em 0.2em 0.5em; max-width: 640px; align-self: center; padding: 20px 20px 20px 20px;">{{description}}</h6>
      </div>
    </div>
  </div>
</template>


<script >

export default {
  name:"PointOfInterestCardDetails",
    props: {
      id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }, 
    photo: {
      type: String,
      required: true,
    },  
    description: {
      type: String,
      required: true,
    },
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

</style>