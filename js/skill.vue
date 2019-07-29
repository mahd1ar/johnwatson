<template>
  <div class="skill-comp">
    <p class="text-uppercase">{{skill}}</p>
    <div class="progress" style="height: 5px;">
      <div
        class="progress-bar bg-dark"
        role="progressbar"
        :style="{width: pers + '%'}"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["skill", "pers"]
};
</script>

<style>
.an {
  background-color: lightcoral;
}
</style>
