<script setup>
function goToElement(elementId) {
    var element = document.getElementById(elementId);
    if(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error('Elemen dengan ID ' + elementId + ' tidak ditemukan.');
    }
}
</script>

<template>
    <div class="container-page">
        <div class="flex items-center justify-between gap-4">
            <!-- <div class="logo" /><span class="font-bold">Dino Baggio</span> -->
            <div />
            <div class="flex items-center gap-4 text-h6">
              <div class="cursor-pointer hover:underline" v-on:click="goToElement('experience')">Experience</div>
              <div class="cursor-pointer hover:underline" v-on:click="goToElement('skill')">Skill</div>
              <div class="cursor-pointer hover:underline" v-on:click="goToElement('contact')">Contact</div>
            </div>
        </div>

        <div class="text-h6 mt-24 pb-24">
            <div class="logo-ava mx-auto" />
            <p class="text-h3 font-bold text-center">Dino Baggio</p>
            <div class="2xl:w-2/3 xl:w-2/3 lg:w-2/3 mx-auto mt-16">
              <p class="mt-4 text-justify">I’m software engineer with 5 years experience. Mostly engaged in web development, and some of the fields pursued are in backend and frontend development.</p>
              <p class="mt-4"><b>Roles:</b> Software Engineer, Fullstack Developer, Backend Developer, Frontend Developer.</p>
              <p class="mt-1"><b>Soft skill:</b> Fast learner, Work faster.</p>
            </div>
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