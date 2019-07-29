<template>
  <div class="container mt-3">
    <h3 class="text-primary text-capitalize mb-4">exprience</h3>
    <div class="ex-item" v-for="(it, index) in xp" :key="index">
      <div class="d-flex flex-wrap justify-content-between p-2">
        <h4>{{index}}</h4>
        <p class>{{it['Start Date']}} <b> - </b>{{it['End Date']}}</p>
      </div>
      <p class="lead">
        {{it.Description}}
      </p>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: { xp: Object }
};
</script>

<style>
</style>
