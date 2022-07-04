<template>
  <nav class="navbar navbar-expand-lg sticky-top" >
    <a  href="/" class="navbar-brand">
      <img src="https://i.pinimg.com/236x/54/af/2b/54af2b7d1c96a9a659630d5e133b5009.jpg" style="max-width: 70px; max-height: 70px;" alt="logo">
    </a>
    <button class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="navbarToggler" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon  navbar-light"></span>
    </button>
    <div class="navbar-collapse collapse" id="myNav">
      <ul class="navbar-nav mx-auto">
        <li><nuxt-link :to="`/`" class="nav-link text-capitalize">HOME</nuxt-link></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            EVENTS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><nuxt-link :to="`/EventSummer`" class="dropdown-item">Summer Events</nuxt-link></li>
            <li><nuxt-link :to="`/EventSpring`" class="dropdown-item" >Spring Events</nuxt-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><nuxt-link :to="`/EventList`" class="dropdown-item">All Events</nuxt-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SERVICE TYPES
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><nuxt-link :to="`/ServicesHospital`" class="dropdown-item">Hospital</nuxt-link></li>
            <li><nuxt-link :to="`/ServicesHotel`" class="dropdown-item" >Hotel</nuxt-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><nuxt-link :to="`/ServiceList`" class="dropdown-item">All Services</nuxt-link></li>
          </ul>
        </li>
        <li 
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item">
          <nuxt-link :to="navItem.path" class="nav-link text-capitalize">
            {{navItem.name}}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'POINTS OF INTEREST',
          path: '/PointOfInterestList',
        },
        {
          name: 'ITINERARIES',
          path: '/itinerariesList',
        },
        {
          name: 'ABOUT US',
          path: '/about',
        },
        {
          name: 'CONTACT US',
          path: '#contact_us',
        },
      ],
    }
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

.navbar-icon{
  font-size: 2rem;
  color: var(--mainBlack);
}

.navbar-background {
  padding: 5px 5px;
}

.navbar-brand {
  font-size: 30px;
}

.nav-link {
  color: #9c9c9c;
  text-decoration: solid;
  transition: all 1s ease;
  font-size: 18px;
}

.nav-icon{
  font-size: 1.5rem;
  color: var(--mainOrange);
  text-decoration: none!important;
  transition-property: color;
  transition-duration: 2s;
  transition-timing-function: linear;
}
.nav-icon:hover{
  color: var(--mainBlack);
}

.navbar{
  background: var(--mainWhite);
  padding: 5px 20px;
  transition: all 1s ease;
}
.navbar-toggler{
  outline-color: var(--mainOrange)!important;
}
.nav-link{
  color: var(--mainBlack);
  text-transform: capitalize;
}
.nav-link:hover{
  color: var(--mainOrange);
}
</style>