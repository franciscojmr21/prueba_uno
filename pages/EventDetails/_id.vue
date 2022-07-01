<template>
  <div class="container my-5" style="background-color: white;">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg">
        <event-card 
                :id="id"
                :title="title"
                :title2="title2"
                :photo="photo"
                :prize="prize"
                :locationName="locationName"
                :locationURL="locationURL"
                :date="date"
                :eventWeb="eventWeb"
                :ticketWeb="ticketWeb"
          />
          
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        ¡Esto cada vez pinta mejor! Y es que Puro Latino Sevilla Fest anuncia hoy una ampliación de fechas, incluyendo el jueves 30 de junio dentro de su suculenta propuesta. Día en el que podremos disfrutar, dentro de la programación de la cita hispalense, de la actuación de la estrella internacional Ozuna. Además, ya puedes adquirir tus entradas por jornadas para tan esperada cita, que va camino del sold out, toda vez que ya se han vendido más del 80% de todas las modalidades de abonos del festival ¡hazte ya con el tuyo y no te quedes fuera!

Te esperamos desde el jueves 30 de junio y hasta el sábado 2 de julio en el Estadio La Cartuja de Sevilla para vibrar juntos al son de nombres tan irresistibles como Jhay Cortez, Myke Towers, Justin Quiles, Ñengo Flow, El Alfa, Eladio Carrión, Juan Magán, RVFV, Tokischa, Omar Montes, Bizarrap, Blessd, Ptazeta, Lérica, Beny Jr, Sech, Nio García, Morad ¡y más sorpresas que quedan aún por anunciar! ¿Qué nos dices? Te vienes?
      </div>
          <button
            type="button"
            class="btn btn-outline-secondary btn-block show_more-btn"
            @click="backToList"
          >
            Back to list
          </button>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import EventCard from '~/components/EventCardDetails.vue'
export default {
  name: 'DetailsPage',
  components: {
    EventCard,
  },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/events/' + id)
    return {
      title: data.title,
      title2: data.title2,
      photo: data.photo,
      eventWeb: data.eventWeb,
      ticketWeb: data.ticketWeb,
      prize: data.prize,
      date: data.date,
      locationName: data.locationName,
      locationURL: data.locationURL
    }
  },
  head(){
    return {
      title: this.title
    }
  },
  mounted(){
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToList() {
      this.$router.push('/EventList')
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
