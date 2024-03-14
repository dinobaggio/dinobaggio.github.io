<script setup></script>

<template>
    <div class="container-page">
        <div class="flex items-center gap-4">
            <!-- <div class="logo" /><span class="font-bold">Dino Baggio</span> -->
        </div>

        <div class="mt-8 flex items-center gap-4">
            <div class="text-h6 text-justify" style="width: 900px;">
                <div class="logo-ava mx-auto" />
                <p class="text-h3 font-bold text-center">Dino Baggio</p>
                <p class="text-h5 font-bold text-center mt-4">Software Engineer</p>
                <p>I’m software engineer with 5 years experience. Mostly engaged in web development, and some of the fields pursued are in backend and frontend development.</p>
                <p class="text-small mt-4">Roles: Software Engineer, Fullstack Developer, Backend Developer, Frontend Developer</p>
            </div>
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
.logo-ava {
  @apply rounded-full;
  width: 100px;
  height: 100px;
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