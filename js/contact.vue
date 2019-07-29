<template>
  <div>
  <ul v-if="tel" class="list-inline ml-2 mt-3">
    <i class="fas fa-phone-alt list-inline-item"></i>
    <p class="list-inline-item text-muted">{{tel}}</p>
  </ul>
  <ul v-if="email" class="list-inline ml-2 mt-0">
    <i class="fas fa-envelope-open list-inline-item"></i>
    <p class="list-inline-item text-muted">{{email}}</p>
  </ul>
  <ul v-if="website" class="list-inline ml-2 mt-0">
    <i class="fas fa-globe list-inline-item"></i>
    <p class="list-inline-item text-muted">{{website}}</p>
  </ul>
  <ul v-if="address" class="list-inline ml-2 mt-0">
    <i class="fas fa-map-marker-alt list-inline-item"></i>
    <p class="list-inline-item text-muted">{{address}}</p>
  </ul>
  </div>
</template>

<script>
module.exports = {
  props: ['tel','email','website','address'],
  data: function() {
    return {
      who: false
    };
  }
};
</script>

<style >

</style>