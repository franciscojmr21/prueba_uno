<template>
  <div  class="col-10 mx-auto my-3 col-md-6 col-lg-4" style="max-width: 380px;">
    <div class="card event-card" >
      <a :href="eventWeb" target="_blank" rel="noopener noreferrer">
        <img :src="photo" class="card-img-top car-img" alt="" style="height: 400px;">
      </a>
      <div class="card-body">
        <div class="event-info d-flex justify-content-between">
          <div class="event-text text-uppercase">
            <h6 class="font-weight-bold">{{title}}</h6>
            <i style="color: grey;"><span></span>{{date}}</i> 
          </div>
          <a :href="ticketWeb" target="_blank" rel="noopener noreferrer">
            <h5 class="event-value align-self-center py-2 px-3">
              <span class="event-price">{{prize}}</span>
            </h5>
          </a>
        </div>
      </div>
      <div class="card-footer text-capitalize d-flex justify-content-center" >
        <nuxt-link :to="`/EventDetails/${id}`">
          <div class="btn btn-primary btn-orange">See Details</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script >

export default {
  name:"EventCardList",
    props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    eventWeb: {
      type: String,
      required: true,
    },
    ticketWeb: {
      type: String,
      required: true,
    }, 
    prize: {
      type: String,
      required: true,
    }, 
  },
  methods: {
    goToDetails() {
      this.$router.push(`/EventDetails/${this.id}`)
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
/* Events */
.event{
  background: var(--mainGrey);
}
.event-card{
  border-radius: 0!important;
}
.event-img{
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.event-value{
  background: var(--mainOrange);
  color: var(--mainWhite);
  clip-path: polygon(15% 0,85% 0,100% 100%,0 100%);
  transition: all 1s linear;
}
.event-value:hover{
  clip-path: polygon(0% 0,100% 0,100% 100%,0 100%);
}  
.btn{
  text-transorm: uppercase;
  color: var(--mainWhite);
  border-color: var(--mainBlack);
  background-color: var(--transparentOrange);
  text-shadow: black 0.2em 0.2em 0.5em;
}
.btn:hover{
  background: var(--mainBlack);
  color: var(--mainWhite);
}

</style>