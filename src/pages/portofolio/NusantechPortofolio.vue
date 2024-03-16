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
        <img src="/nusantech-logo.webp" width="200px" />
      </div>
      <div class="text-h3">Nusantech Portofolio</div>
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

    <div class="mt-4">
      <div class="mb-4">
        <div class="bg-white p-2 rounded w-fit">
          <img src="/sibaru-logo.svg" width="120px" />
        </div>
        <div class="text-h5">SIBARU PUPR</div>
      </div>
      <p>Sistem Informasi Bantuan Perumahan (SIBARU) functions as the main portal for housing assistance management at the Direktorat Jenderal Perumahan, all aid proposals housing addressed to KEMENPUPR must input to the SIBARU application. </p>
      <p class="mt-2">In addition, SIBARU applications are interrelated and must be integrated with several proposed data management applications in the technical directorate at environtment of Direktorat Jenderal Perumahan such as SIRUSUN (owned by Direktorat Rumah Khusus), e-RLTH (owned by Direktorat Rumah Swadaya), and PSUN Online verification application belong to Direktorat Rumah Umum dan Komersial).</p>
      <p class="mt-2"><b>Tech stack:</b> JavaScript, NodeJS, ReactJS, NextJS, Redis, Minio, Sequelize, PostgreSql</p>
    </div>

    <div class="mt-4">
      <div class="mb-4">
        <img src="/pln-logo.png" width="120px" />
        <div class="text-h5">PLN Library Web Redesign</div>
      </div>
      <p>Just customize the template in the PLN library application, where the previous template design was old, made more modern.</p>
      <p class="mt-2"><b>Tech stack:</b> PHP, Senayan Library Management System (SLiMS)</p>
    </div>

    <div class="mt-4">
      <div class="mb-4">
        <img src="/indramayu-logo.jpg" width="120px" />
        <div class="text-h5">Indramayu Absence</div>
      </div>
      <p>Indramayu Attendance is a web based application where the application is for viewing employee attendance data in Indramayu district, and also for recapitulating attendance reports and salary deductions for Indramayu employees based on attendance.</p>
      <p class="mt-2"><b>Tech stack:</b> PHP, Laravel, PostgreSQL</p>
    </div>

    <div class="mt-4">
      <div class="mb-4">
        <img src="/indramayu-logo.jpg" width="120px" />
        <div class="text-h5">Indramayu Employment System (SIMPEG)</div>
      </div>
      <p>SIMPEG Indramayu is a web based application for employee management in Indramayu district.</p>
      <p class="mt-2"><b>Tech stack:</b> PHP, Laravel, PostgreSQL</p>
    </div>

    <div class="mt-4">
      <div class="mb-4">
        <div class="bg-white p-2 rounded w-fit">
          <img src="/loak-logo.webp" width="120px" />
        </div>
        <div class="text-h5">LOAK</div>
      </div>
      <p>The loak application is an application that connects people who have barang bekas, with people who need barang bekas, both individuals and used pengepul.</p>
      <p class="mt-2"><b>Tech stack:</b> JavaScript, NodeJS, ReactJS, MongoDB</p>
    </div>
  </div>
</template>

<style scoped>
</style>
