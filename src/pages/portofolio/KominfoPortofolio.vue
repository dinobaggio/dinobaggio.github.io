<script setup>
function goToTop() {
    window.scrollTo({ top: 0 });
}

goToTop()
</script>

<template>
  <div class="container-page">
    <router-link to="/" class="cursor-pointer mt-2 hover:underline text-h6"><< Back</router-link>
    <div class="my-8 text-center">
      <div class="bg-white p-2 rounded w-fit mx-auto">
        <img src="/kominfo-logo.webp" width="200px" />
      </div>
      <div class="text-h3">Kominfo Portofolio</div>
    </div>

    <div>
      <div class="mb-4">
        <div class="bg-white p-2 rounded w-fit">
          <img src="/nusalink-logo.png" width="120px" />
        </div>
        <div class="text-h5">Nusalink</div>
      </div>
      <p>Nusalink is a booking application specifcally for booking villas and hotels, where the target is foreigners who want to fnd a villa or hotel in Indonesia. Work includes adding features and maintaining applications.</p>
      <p class="mt-2"><b>Tech stack:</b> PHP, Laravel, JavaScript, NodeJS, MySql</p>
    </div>

    <div class="mt-4">
      <div class="mb-4">
        <img src="/agc-logo.png" width="120px" />
        <div class="text-h5">Astra Green Company Online Assessment (AGC)</div>
      </div>
      <p>Astra Green Company online assessment is an application to assess the performance of each subsidiary owned by Astra International, whereas the previous assessment still used Excel and then digitized into a web base, which can be accessed online. Work includes adding features and application maintenance.</p>
      <p class="mt-2"><b>Tech stack:</b> Javascript, NodeJS, ReactJS, MySQL, Sequelize</p>
    </div>

    
  </div>
</template>

<style scoped>
</style>
