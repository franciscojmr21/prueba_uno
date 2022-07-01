<template>
  <div class="main-page">
    <the-header />
    <nuxt />
    <contact-footer/>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import ContactFooter from '~/components/ContactFooter.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    ContactFooter,
  },
}
</script>