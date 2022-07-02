<template>

  <div class="services-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
            <h5 class="font-weight-bold mx-1">{{title1}}</h5>
            <h5 class="mx-1">{{title2}}</h5>
          </div>

</template>


<script >
export default {
  name:"ServiceCardDetails",
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
  methods: {
    goToDetails() {
      this.$router.push(`/ServiceDetails/${this.id}`)
    },
  },
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
.services-icon{
  font-size: 1.5rem;
  color: var(--mainYellow);
  cursor: pointer;
  transition: 0.5s all ease-in-out;
}
.services-icon:hover{
  color: var(--mainBlue);
}
.img-container{
  background: var(--mainBlue);
  position: relative;
  overflow: hidden;
}
.services-photo{
  transition: all 1s ease-in-out;
}
.img-container:hover .services-photo{
 transform: scale(1.3);
 opacity: 0.5;
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

/*TEX OF POINT OF INTEREST*/

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

</style>