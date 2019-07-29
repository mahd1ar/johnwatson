<template>
  <tr>
    <td>{{info}} : </td>
    <td class="td2">{{val}}</td>
  </tr>
</template>

<script>
module.exports = {
    props: ['info','val']
};
</script>

<style>
.td2 {
  display: block;
  margin-left: 3rem;
  margin-bottom: 0.4rem;
}
</style>
