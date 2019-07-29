<template>
  <div class="container mt-3">
    <h3 class="text-primary text-capitalize mb-3">refrence</h3>
    <div class="ref" >
      <div class="d-flex flex-wrap justify-content-between p-2">
        <div v-for="(item, index) in refr" :key="index">
          <p class="h4">{{item.Name}}</p>
          <p class="text-muted h5">{{item.Career}} </p>
          <ul class="list-unstyled bg-white">
            <li>
              <b>T.</b>{{item.Tel}}
            </li>
            <li>
              <b>E.</b> {{item.Email}}
            </li>
          </ul>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ['refr']
};
</script>

<style>
</style>
