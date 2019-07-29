<template>
  <div class="container mt-3">
    <h3 class="text-primary text-capitalize">education</h3>
    
    <div class="d-flex flex-row flex-wrap p-2">
      <div v-for="(i, index) in education" :key="index" class="col-md-6">
        <h4 class="text-capitalize">{{index}}</h4>
        <p>{{i}}</p>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {education: Object},
};
</script>

<style>
</style>
