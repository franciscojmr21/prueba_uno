<template>
  <a class="services" :href="location" target="_blank" rel="noopener noreferrer">
    <div class="services-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap text-black" >
        <h5 class="font-weight-bold mx-1">{{title1}}</h5>
        <h5 class="mx-1">{{title2}}</h5>
        <h5 class="mx-1">{{dir}}</h5>
        <h5 class="mx-1">{{hora}}</h5>
    </div>
  </a>
</template>


<script >
export default {
  name:"ServiceCard",
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
    dir: {
      type: String,
      required: true,
    },
    hora: {
      type: String,
      required: true,
    },
    location: {
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

.services{
  background: var(--mainGrey);
}
.services-item{
  background: var(--mainWhite);
  border-radius: 0.5rem;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.services-item:hover{
  opacity: 1;
  transform: scale(1.05);
}

</style>