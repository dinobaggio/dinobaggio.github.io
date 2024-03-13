<script setup>
</script>

<template>
  <div class="container-page">
    <div class="flex items-center gap-4">
      <div class="logo"></div> <span>Dino Baggio</span>
    </div>

    <div class="mt-8 flex items-center gap-4">
      <p class="text-h5" style="width: 900px;">I’m software engineer with 5 years experience. Mostly engaged in web development, some of the fields pursued are in backend and frontend development.</p>
      <div class="comp-vektor" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  @apply rounded-full;
  width: 50px;
  height: 50px;
  background-image: url('/avadino.jpg');
  background-size: cover;
  background-position: center;
}
.comp-vektor {
  width: 1000px;
  height: 600px;
  background-image: url('/comp.svg');
  background-size: cover;
  background-position: center;
}
</style>
