<template>


    <!-- single Point Of Interest -->

          <!-- first item -->
            <div class="col-sm-6" style="padding: 10px;">
            <div><a>{{this.title}}</a></div>
              
              <div>
                <img :src="photo" class="card-img-top car-img" style="width: 640px; height: 405px;">
              </div>
            </div>
    
          <!--end of Point Of Interest -->
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