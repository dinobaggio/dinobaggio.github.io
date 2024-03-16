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
        <img src="/badr-logo.png" width="200px" />
      </div>
      <div class="text-h3">Badr Portofolio</div>
    </div>
    
    <div>
      <div class="mb-4">
        <img src="/undp-logo.webp" width="120px" />
        <div class="text-h5">SMILE Indonesia</div>
      </div>
      <p>SMILE is an electronic immunization logistics monitoring system which is an application innovation to support the Ministry of Health of the Republic of Indonesia for real‐time supply chain and cold chain management. Application development and operations are supported by UNDP Indonesia.</p>
      <p class="mt-2">The work includes creating several backend features, there is also the creation of backend features including summary reports and Covid 19 reports, and also creating fontends for several landing pages and dashboard report pages.</p>
      <p class="mt-2"><b>Tech stack:</b> JavaScript, NodeJS, ReactJS, NextJS, RabbitMQ, Redis, ClickHouse, Minio, Sequelize.</p>
    </div>
    <div class="mt-4">
      <div class="mb-4">
        <div class="bg-white p-2 rounded w-fit">
          <img src="/djppr-logo.png" width="120px" />
        </div>
        <div class="text-h5">KPBU 4.0 DJPPR</div>
      </div>
      <p>Government and Business Entity Cooperation (KPBU) is cooperation between the government and business entities in terms of providing infrastructure for the public interest by referring to specifcations that have previously been determined by the Minister/Head of Institution/Head of Region/BUMN/BUMD which partly or wholly uses resources. Business Entity by paying attention to the distribution of risks between the parties.</p>
      <p class="mt-2"><b>Tech stack:</b> JavaScript, NodeJS, ReactJS, NextJS, Redis, Minio, Sequelize, PostgreSql</p>
    </div>
    <div class="mt-4">
      <div class="mb-4">
        <img src="/siap-logo.webp" width="120px" />
        <div class="text-h5">Sistem Inovatif Aplikasi Penilaian (SIAP)</div>
      </div>
      <p>Practical solution to reduce the high‐cost of creating exams questions all over Indonesia. Work includes rewrite engineering to the Golang programming language on the backend</p>
      <p class="mt-2"><b>Tech stack:</b> Golang, Gin, Gorm, MySQL</p>
    </div>
    <div class="mt-4">
      <div class="mb-4">
        <img src="/indigo-logo.webp" width="120px" />
        <div class="text-h5">Indigo Website Rebranding & Deployment</div>
      </div>
      <p>Through the establishment of creativity, incubation, acceleration, and follow‐up funding programs for digital entrepreneurs in Indonesia, Indigo Program by Telkom Indonesia aims to promote the expansion of the digital creative industry. They revamped the Website (Indigo.id) to improve both, the appearance and user‐experience, while exploring the various data and information presented within.</p>
      <p class="mt-2"><b>Tech stack:</b> Golang, Gin, Gorm, MySQL</p>
    </div>
    <div class="mt-4">
      <div class="mb-4">
        <img src="/hni-logo.webp" width="120px" />
        <div class="text-h5">HNI POS Web</div>
      </div>
      <p>Develop the frontend appearance with the new design.</p>
      <p class="mt-2"><b>Tech stack:</b> ReactJS, NextJS, JavaScript</p>
    </div>
    <div class="mt-4">
      <div class="mb-4">
        <img src="/auctive-logo.jpg" width="120px" />
        <div class="text-h5">Auctive</div>
      </div>
      <p>Auctive is an auction system created online. The work includes creating an item auction system such as e‐commerce and the auction system itself, including creation of the backend and frontend.</p>
      <p class="mt-2"><b>Tech stack:</b> JavaScript, NodeJS, ReactJS, NextJS, MySql, Sequelize</p>
    </div>
    <div class="mt-4">
      <div class="mb-4">
        <img src="/flip-logo.webp" width="120px" />
        <div class="text-h5">Flip - Digital Product</div>
      </div>
      <p>Flip.id as a fund transfer service provider wants to develop a digital product feature like buy electricity token, PDAM, etc. They also want to migrate their digital product services feature into microservice architecture. Therefore, this Digital Product Feature was created to expand their services and increase transactions that will do by user.</p>
      <p class="mt-2"><b>Tech stack:</b> PHP Yii</p>
    </div>
  </div>
</template>

<style scoped>
</style>
