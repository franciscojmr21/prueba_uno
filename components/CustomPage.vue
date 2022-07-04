<template>
  <div class="container mt-5">
    <div class="jumbotron">
      <h1 class="display-4">{{ title }}</h1>
      <hr class="my-4" />
      <p class="lead">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.page {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
p {
  text-align: left;
}
</style>

<script>
export default {
  name: 'CustomPage',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
