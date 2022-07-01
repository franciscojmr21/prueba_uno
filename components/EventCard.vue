<template>

    <!-- single Event -->
          <div class="col-10 mx-auto my-3 col-md-6 col-lg-4" style="max-width: 380px;">
            <div class="card event-card">
              <a :href="eventWeb" target="_blank" rel="noopener noreferrer">
              <img :src="photo" class="card-img-top car-img" alt="" style="max-height: 400px;">
              </a>
              <!-- card body -->
              <div class="card-body">
                <div class="event-info d-flex justify-content-between">
                  <!-- first flex child -->
                  <div class="event-text text-uppercase">
                    <h6 class="font-weight-bold">{{this.title}}</h6>
                    <h6>{{this.title2}}</h6> 
                  </div>
                  <!-- second flex child -->
                  <a :href="ticketWeb" target="_blank" rel="noopener noreferrer">

                  <h5 class="event-value align-self-center py-2 px-3">
                    <span class="event-price">{{this.prize}}</span>
                  </h5>
                  
                </a>
                </div>
              </div>
              <!-- end of card -->
              <div class="card-footer text-capitalize d-flex justify-content-between" >
                <p><span></span>{{date}}</p>
                <a :href="locationURL" target="_blank" rel="noopener noreferrer"><span></span>{{this.locationName}}<img src="https://cdn-icons-png.flaticon.com/128/2642/2642502.png" style="max-width: 20px; max-height: 20px;"></a>
              </div>
            </div>
          </div>
          <!--end of single Event -->
</template>

<script >

export default {
  name:"EventCard",
    props: {
        title: {
      type: String,
      required: true,
    }, 
        title2: {
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
        date: {
      type: String,
      required: true,
    },
        locationName: {
      type: String,
      required: true,
    },
        locationURL: {
      type: String,
      required: true,
    }
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

</style>